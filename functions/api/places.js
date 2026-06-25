/**
 * Cloudflare Pages Function: /api/places
 * Proxy for Google Places API (New) with mock fallback.
 */

const GOOGLE_PLACES_BASE = 'https://places.googleapis.com/v1';

const MOCK_DB = {
  'radcliffe camera': {
    id: 'mock-radcliffe',
    displayName: { text: 'Radcliffe Camera', languageCode: 'en' },
    formattedAddress: 'Radcliffe Sq, Oxford OX1 3BG, UK',
    rating: 4.8,
    userRatingCount: 12034,
    priceLevel: 'PRICE_LEVEL_FREE',
    websiteUri: 'https://www.bodleian.ox.ac.uk/whatson/visitor/radcliffe-camera',
    regularOpeningHours: { openNow: false, weekdayDescriptions: ['Mon–Sun: Exterior always open'] },
    editorialSummary: { text: 'Iconic circular library building in the heart of Oxford.', languageCode: 'en' },
    photos: [
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford',
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford'
    ],
    reviews: [
      { authorAttribution: { displayName: 'Visitor A' }, rating: 5, text: { text: 'The most photographed building in Oxford, absolutely stunning.' } },
      { authorAttribution: { displayName: 'Visitor B' }, rating: 5, text: { text: 'Best viewed from the square or from a nearby rooftop cafe.' } }
    ]
  },
  'christ church': {
    id: 'mock-christ-church',
    displayName: { text: 'Christ Church', languageCode: 'en' },
    formattedAddress: 'St Aldate\', Oxford OX1 1DP, UK',
    rating: 4.7,
    userRatingCount: 18543,
    priceLevel: 'PRICE_LEVEL_MODERATE',
    websiteUri: 'https://www.chch.ox.ac.uk',
    regularOpeningHours: { openNow: true, weekdayDescriptions: ['Mon–Sat: 10:00–17:00', 'Sun: 14:00–17:00'] },
    editorialSummary: { text: 'Famous Oxford college and Harry Potter dining hall inspiration.', languageCode: 'en' },
    photos: [
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford',
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford'
    ],
    reviews: [
      { authorAttribution: { displayName: 'HP Fan' }, rating: 5, text: { text: 'The Great Hall is magical, just like in the movies.' } },
      { authorAttribution: { displayName: 'History Buff' }, rating: 4, text: { text: 'Beautiful meadows and impressive architecture.' } }
    ]
  },
  'blenheim palace': {
    id: 'mock-blenheim',
    displayName: { text: 'Blenheim Palace', languageCode: 'en' },
    formattedAddress: 'Woodstock OX20 1PP, UK',
    rating: 4.7,
    userRatingCount: 15678,
    priceLevel: 'PRICE_LEVEL_EXPENSIVE',
    websiteUri: 'https://www.blenheimpalace.com',
    regularOpeningHours: { openNow: false, weekdayDescriptions: ['Daily: 10:30–17:00'] },
    editorialSummary: { text: 'Birthplace of Winston Churchill and UNESCO World Heritage palace.', languageCode: 'en' },
    photos: [
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford',
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford'
    ],
    reviews: [
      { authorAttribution: { displayName: 'Churchill Fan' }, rating: 5, text: { text: 'The gardens alone are worth the trip.' } },
      { authorAttribution: { displayName: 'Family Traveller' }, rating: 5, text: { text: 'A perfect day out from Oxford, highly recommended.' } }
    ]
  },
  'ashmolean museum': {
    id: 'mock-ashmolean',
    displayName: { text: 'Ashmolean Museum', languageCode: 'en' },
    formattedAddress: 'Beaumont St, Oxford OX1 2PH, UK',
    rating: 4.7,
    userRatingCount: 9876,
    priceLevel: 'PRICE_LEVEL_FREE',
    websiteUri: 'https://www.ashmolean.org',
    regularOpeningHours: { openNow: true, weekdayDescriptions: ['Tue–Sun: 10:00–17:00', 'Mon: Closed'] },
    editorialSummary: { text: 'Britain\'s oldest public museum with world-class art and archaeology.', languageCode: 'en' },
    photos: [
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford'
    ],
    reviews: [
      { authorAttribution: { displayName: 'Art Lover' }, rating: 5, text: { text: 'Free entry and incredible collections.' } }
    ]
  },
  'covered market': {
    id: 'mock-covered-market',
    displayName: { text: 'Covered Market', languageCode: 'en' },
    formattedAddress: 'Market St, Oxford OX1 3DZ, UK',
    rating: 4.5,
    userRatingCount: 5432,
    priceLevel: 'PRICE_LEVEL_MODERATE',
    websiteUri: 'https://www.oxford-coveredmarket.co.uk',
    regularOpeningHours: { openNow: true, weekdayDescriptions: ['Mon–Sat: 08:00–17:30', 'Sun: 10:00–16:00'] },
    editorialSummary: { text: 'Historic indoor market with indie food stalls and shops.', languageCode: 'en' },
    photos: [
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford'
    ],
    reviews: [
      { authorAttribution: { displayName: 'Foodie' }, rating: 4, text: { text: 'Great selection of street food and local treats.' } }
    ]
  },
  'magdalen bridge boathouse': {
    id: 'mock-magdalen',
    displayName: { text: 'Magdalen Bridge Boathouse', languageCode: 'en' },
    formattedAddress: 'High St, Oxford OX1 4AU, UK',
    rating: 4.6,
    userRatingCount: 3210,
    priceLevel: 'PRICE_LEVEL_MODERATE',
    websiteUri: 'https://www.magdalenbridgeboathouse.co.uk',
    regularOpeningHours: { openNow: true, weekdayDescriptions: ['Daily: 09:30–dusk'] },
    editorialSummary: { text: 'Rent punts and rowing boats on the River Cherwell.', languageCode: 'en' },
    photos: [
      'https://placehold.co/600x400/2EC4B6/FFFFFF?text=Oxford'
    ],
    reviews: [
      { authorAttribution: { displayName: 'Punting Fan' }, rating: 5, text: { text: 'A must-do Oxford experience, beautiful river views.' } }
    ]
  }
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Cache-Control': 'public, max-age=300'
    }
  });
}

function errorResponse(message, status = 500) {
  return jsonResponse({ ok: false, error: message }, status);
}

function findMock(query) {
  if (!query) return null;
  const q = query.toLowerCase().trim();
  for (const key of Object.keys(MOCK_DB)) {
    if (q.includes(key) || key.includes(q)) return MOCK_DB[key];
  }
  return null;
}

async function fetchPhotoUrl(photoName, apiKey) {
  try {
    const url = `${GOOGLE_PLACES_BASE}/${photoName}/media?maxHeightPx=600&key=${apiKey}`;
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) return null;
    return res.url;
  } catch (e) {
    return null;
  }
}

async function searchGooglePlaces(query, lang, apiKey) {
  const textSearchUrl = `${GOOGLE_PLACES_BASE}/places:searchText`;
  const textSearchFields =
    'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.priceLevel,places.websiteUri,places.regularOpeningHours,places.editorialSummary,places.photos,places.types';

  const searchRes = await fetch(textSearchUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': textSearchFields
    },
    body: JSON.stringify({
      textQuery: query,
      languageCode: lang === 'zh' ? 'zh-CN' : 'en',
      maxResultCount: 1
    })
  });

  if (!searchRes.ok) {
    const err = await searchRes.text();
    throw new Error(`Google Places search failed: ${searchRes.status} ${err}`);
  }

  const searchData = await searchRes.json();
  const place = (searchData.places || [])[0];
  if (!place) return null;

  // Fetch reviews via place details
  try {
    const detailFields = 'reviews';
    const detailRes = await fetch(`${GOOGLE_PLACES_BASE}/${place.id}?languageCode=${lang === 'zh' ? 'zh-CN' : 'en'}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': detailFields
      }
    });
    if (detailRes.ok) {
      const detailData = await detailRes.json();
      place.reviews = detailData.reviews || [];
    }
  } catch (e) {
    place.reviews = [];
  }

  // Convert photo resource names to direct image URLs
  if (place.photos && place.photos.length) {
    const urls = [];
    for (const photo of place.photos.slice(0, 5)) {
      const url = await fetchPhotoUrl(photo.name, apiKey);
      if (url) urls.push(url);
    }
    place.photos = urls;
  }

  return place;
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  const lang = url.searchParams.get('lang') || 'zh';

  if (!query || query.trim().length === 0) {
    return errorResponse('Missing query parameter', 400);
  }

  // Mock mode fallback for local testing / when no key is configured
  if (env.MOCK_MODE === 'true' || !env.GOOGLE_PLACES_API_KEY) {
    const mock = findMock(query);
    if (mock) {
      return jsonResponse({ ok: true, source: 'mock', place: mock });
    }
    return jsonResponse({ ok: true, source: 'mock', place: null, message: 'No mock data for this query' });
  }

  try {
    const place = await searchGooglePlaces(query, lang, env.GOOGLE_PLACES_API_KEY);
    if (!place) {
      return jsonResponse({ ok: true, source: 'google', place: null, message: 'No results found' });
    }
    return jsonResponse({ ok: true, source: 'google', place });
  } catch (err) {
    console.error(err);
    return errorResponse(err.message || 'Internal server error');
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
