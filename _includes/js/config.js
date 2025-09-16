const NATIONAL_CHECKLIST = 'de8934f4-a136-481c-a87a-b0b202b80a31';
const COUNTRY = 'ZA'; // South Africa

var siteConfig = {
  "version": 3,
  defaultChecklistKey: '7ddf754f-d193-4cc9-b351-99906754a03b',
  availableChecklistKeys: [NATIONAL_CHECKLIST, '7ddf754f-d193-4cc9-b351-99906754a03b'],
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
