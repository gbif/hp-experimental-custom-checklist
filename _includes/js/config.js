const NATIONAL_CHECKLIST = '668282c7-8d71-4c2b-b9ba-f9ab705c88d5';
const COUNTRY = 'ZA'; // South Africa

var siteConfig = {
  "version": 3,
  defaultChecklistKey: NATIONAL_CHECKLIST,
  availableChecklistKeys: [NATIONAL_CHECKLIST, 'd7dddbf4-2cf0-4f39-9b2a-bb099caae36c'],
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "equals",
      "key": "publishingCountry",
      "value": COUNTRY
    },
    "excludedFilters": [
      "publishingCountry"
    ]
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "or",
      "predicates": [
        {
          "type": "in",
          "key": "countriesOfResearcher",
          "values": [
            COUNTRY
          ]
        },
        {
          "type": "in",
          "key": "countriesOfCoverage",
          "values": [
            COUNTRY
          ]
        }
      ]
    },
    "highlightedFilters": [
      "q",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
};
