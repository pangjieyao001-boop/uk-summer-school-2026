#!/usr/bin/env python3
"""
Local development server for uk-summer-school-2026.
Serves static files and mimics /api/places using mock data or real Google Places API.
Usage: python3 dev-server.py
"""

import json
import os
import socketserver
import urllib.error
import urllib.request
from http.server import SimpleHTTPRequestHandler
from urllib.parse import parse_qs, urlparse

PORT = int(os.environ.get("PORT", "8787"))
GOOGLE_KEY = os.environ.get("GOOGLE_PLACES_API_KEY", "")
MOCK_MODE = os.environ.get("MOCK_MODE", "true").lower() == "true" or not GOOGLE_KEY

MOCK_DB = {
    "radcliffe camera": {
        "id": "mock-radcliffe",
        "displayName": {"text": "Radcliffe Camera", "languageCode": "en"},
        "formattedAddress": "Radcliffe Sq, Oxford OX1 3BG, UK",
        "rating": 4.8,
        "userRatingCount": 12034,
        "priceLevel": "PRICE_LEVEL_FREE",
        "websiteUri": "https://www.bodleian.ox.ac.uk/whatson/visitor/radcliffe-camera",
        "regularOpeningHours": {"openNow": False, "weekdayDescriptions": ["Mon–Sun: Exterior always open"]},
        "editorialSummary": {"text": "Iconic circular library building in the heart of Oxford.", "languageCode": "en"},
        "photos": [
            "https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford",
            "https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford"
        ],
        "reviews": [
            {"authorAttribution": {"displayName": "Visitor A"}, "rating": 5, "text": {"text": "The most photographed building in Oxford, absolutely stunning."}},
            {"authorAttribution": {"displayName": "Visitor B"}, "rating": 5, "text": {"text": "Best viewed from the square or from a nearby rooftop cafe."}}
        ]
    },
    "christ church": {
        "id": "mock-christ-church",
        "displayName": {"text": "Christ Church", "languageCode": "en"},
        "formattedAddress": "St Aldate', Oxford OX1 1DP, UK",
        "rating": 4.7,
        "userRatingCount": 18543,
        "priceLevel": "PRICE_LEVEL_MODERATE",
        "websiteUri": "https://www.chch.ox.ac.uk",
        "regularOpeningHours": {"openNow": True, "weekdayDescriptions": ["Mon–Sat: 10:00–17:00", "Sun: 14:00–17:00"]},
        "editorialSummary": {"text": "Famous Oxford college and Harry Potter dining hall inspiration.", "languageCode": "en"},
        "photos": [
            "https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford",
            "https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford"
        ],
        "reviews": [
            {"authorAttribution": {"displayName": "HP Fan"}, "rating": 5, "text": {"text": "The Great Hall is magical, just like in the movies."}},
            {"authorAttribution": {"displayName": "History Buff"}, "rating": 4, "text": {"text": "Beautiful meadows and impressive architecture."}}
        ]
    },
    "blenheim palace": {
        "id": "mock-blenheim",
        "displayName": {"text": "Blenheim Palace", "languageCode": "en"},
        "formattedAddress": "Woodstock OX20 1PP, UK",
        "rating": 4.7,
        "userRatingCount": 15678,
        "priceLevel": "PRICE_LEVEL_EXPENSIVE",
        "websiteUri": "https://www.blenheimpalace.com",
        "regularOpeningHours": {"openNow": False, "weekdayDescriptions": ["Daily: 10:30–17:00"]},
        "editorialSummary": {"text": "Birthplace of Winston Churchill and UNESCO World Heritage palace.", "languageCode": "en"},
        "photos": [
            "https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford",
            "https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford"
        ],
        "reviews": [
            {"authorAttribution": {"displayName": "Churchill Fan"}, "rating": 5, "text": {"text": "The gardens alone are worth the trip."}},
            {"authorAttribution": {"displayName": "Family Traveller"}, "rating": 5, "text": {"text": "A perfect day out from Oxford, highly recommended."}}
        ]
    },
    "ashmolean museum": {
        "id": "mock-ashmolean",
        "displayName": {"text": "Ashmolean Museum", "languageCode": "en"},
        "formattedAddress": "Beaumont St, Oxford OX1 2PH, UK",
        "rating": 4.7,
        "userRatingCount": 9876,
        "priceLevel": "PRICE_LEVEL_FREE",
        "websiteUri": "https://www.ashmolean.org",
        "regularOpeningHours": {"openNow": True, "weekdayDescriptions": ["Tue–Sun: 10:00–17:00", "Mon: Closed"]},
        "editorialSummary": {"text": "Britain's oldest public museum with world-class art and archaeology.", "languageCode": "en"},
        "photos": ["https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford"],
        "reviews": [
            {"authorAttribution": {"displayName": "Art Lover"}, "rating": 5, "text": {"text": "Free entry and incredible collections."}}
        ]
    },
    "covered market": {
        "id": "mock-covered-market",
        "displayName": {"text": "Covered Market", "languageCode": "en"},
        "formattedAddress": "Market St, Oxford OX1 3DZ, UK",
        "rating": 4.5,
        "userRatingCount": 5432,
        "priceLevel": "PRICE_LEVEL_MODERATE",
        "websiteUri": "https://www.oxford-coveredmarket.co.uk",
        "regularOpeningHours": {"openNow": True, "weekdayDescriptions": ["Mon–Sat: 08:00–17:30", "Sun: 10:00–16:00"]},
        "editorialSummary": {"text": "Historic indoor market with indie food stalls and shops.", "languageCode": "en"},
        "photos": ["https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford"],
        "reviews": [
            {"authorAttribution": {"displayName": "Foodie"}, "rating": 4, "text": {"text": "Great selection of street food and local treats."}}
        ]
    },
    "magdalen bridge boathouse": {
        "id": "mock-magdalen",
        "displayName": {"text": "Magdalen Bridge Boathouse", "languageCode": "en"},
        "formattedAddress": "High St, Oxford OX1 4AU, UK",
        "rating": 4.6,
        "userRatingCount": 3210,
        "priceLevel": "PRICE_LEVEL_MODERATE",
        "websiteUri": "https://www.magdalenbridgeboathouse.co.uk",
        "regularOpeningHours": {"openNow": True, "weekdayDescriptions": ["Daily: 09:30–dusk"]},
        "editorialSummary": {"text": "Rent punts and rowing boats on the River Cherwell.", "languageCode": "en"},
        "photos": ["https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford"],
        "reviews": [
            {"authorAttribution": {"displayName": "Punting Fan"}, "rating": 5, "text": {"text": "A must-do Oxford experience, beautiful river views."}}
        ]
    }
}


def find_mock(query):
    q = query.lower().strip()
    for key, place in MOCK_DB.items():
        if q in key or key in q:
            return place
    return None


def json_response(data, status=200):
    body = json.dumps(data, ensure_ascii=False).encode("utf-8")
    headers = [
        ("Content-Type", "application/json; charset=utf-8"),
        ("Access-Control-Allow-Origin", "*"),
        ("Access-Control-Allow-Methods", "GET, OPTIONS"),
        ("Cache-Control", "public, max-age=300"),
        ("Content-Length", str(len(body)))
    ]
    return status, headers, body


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f"[{self.command}] {self.path}")

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/places":
            self.handle_api(parsed)
            return
        # Serve static files from current directory
        return SimpleHTTPRequestHandler.do_GET(self)

    def handle_api(self, parsed):
        params = parse_qs(parsed.query)
        query = (params.get("query") or [""])[0].strip()
        lang = (params.get("lang") or ["zh"])[0]

        if not query:
            status, headers, body = json_response({"ok": False, "error": "Missing query parameter"}, 400)
            self.send_response(status)
            for k, v in headers:
                self.send_header(k, v)
            self.end_headers()
            self.wfile.write(body)
            return

        if MOCK_MODE:
            place = find_mock(query)
            if place:
                data = {"ok": True, "source": "mock", "place": place}
            else:
                data = {"ok": True, "source": "mock", "place": None, "message": "No mock data for this query"}
            status, headers, body = json_response(data)
            self.send_response(status)
            for k, v in headers:
                self.send_header(k, v)
            self.end_headers()
            self.wfile.write(body)
            return

        # Real Google Places API fallback (Python implementation mirrors JS function)
        try:
            place = self.search_google_places(query, lang)
            if place:
                data = {"ok": True, "source": "google", "place": place}
            else:
                data = {"ok": True, "source": "google", "place": None, "message": "No results found"}
            status, headers, body = json_response(data)
        except Exception as e:
            print(e)
            status, headers, body = json_response({"ok": False, "error": str(e)}, 500)

        self.send_response(status)
        for k, v in headers:
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def search_google_places(self, query, lang):
        language = "zh-CN" if lang == "zh" else "en"
        text_search_url = "https://places.googleapis.com/v1/places:searchText"
        fields = "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.priceLevel,places.websiteUri,places.regularOpeningHours,places.editorialSummary,places.photos,places.types"

        req = urllib.request.Request(
            text_search_url,
            data=json.dumps({"textQuery": query, "languageCode": language, "maxResultCount": 1}).encode("utf-8"),
            headers={
                "Content-Type": "application/json",
                "X-Goog-Api-Key": GOOGLE_KEY,
                "X-Goog-FieldMask": fields
            },
            method="POST"
        )
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        places = data.get("places", [])
        if not places:
            return None
        place = places[0]

        # reviews
        try:
            detail_url = f"https://places.googleapis.com/v1/{place['id']}?languageCode={language}"
            detail_req = urllib.request.Request(
                detail_url,
                headers={"X-Goog-Api-Key": GOOGLE_KEY, "X-Goog-FieldMask": "reviews"}
            )
            with urllib.request.urlopen(detail_req) as resp:
                detail = json.loads(resp.read().decode("utf-8"))
                place["reviews"] = detail.get("reviews", [])
        except Exception:
            place["reviews"] = []

        # photos
        if place.get("photos"):
            urls = []
            for photo in place["photos"][:5]:
                url = self.fetch_photo_url(photo["name"])
                if url:
                    urls.append(url)
            place["photos"] = urls

        return place

    def fetch_photo_url(self, photo_name):
        url = f"https://places.googleapis.com/v1/{photo_name}/media?maxHeightPx=600&key={GOOGLE_KEY}"
        req = urllib.request.Request(url, method="GET")
        try:
            with urllib.request.urlopen(req) as resp:
                return resp.geturl()
        except urllib.error.HTTPError as e:
            print(f"Photo fetch error: {e.code} {e.reason}")
            return None


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


if __name__ == "__main__":
    mode = "MOCK" if MOCK_MODE else "GOOGLE_API"
    print(f"Starting dev server on http://localhost:{PORT} [{mode} mode]")
    print(f"Static root: {os.path.abspath('.')}")
    print("Press Ctrl+C to stop")
    try:
        with ReusableTCPServer(("", PORT), Handler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
    except OSError as e:
        print(f"\nFailed to start server: {e}")
        print(f"Hint: port {PORT} may already be in use. Try: kill $(lsof -ti:{PORT})")
