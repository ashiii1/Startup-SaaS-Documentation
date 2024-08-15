/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Home",
  "tagline": "A SaaS documentation for all startups.",
  "url": "https://www.google.com",
  "baseUrl": "/",
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Startup",
  "projectName": "docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "D:\\d\\my-nextjs-app\\sidebars.js"
        },
        "blog": false,
        "theme": {
          "customCss": "D:\\d\\my-nextjs-app\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "bn"
    ],
    "localeConfigs": {
      "en": {
        "htmlLang": "en-GB",
        "direction": "ltr"
      },
      "bn": {
        "htmlLang": "bn",
        "direction": "ltr"
      }
    },
    "path": "i18n"
  },
  "themeConfig": {
    "navbar": {
      "title": "ASHI",
      "logo": {
        "alt": " Logo",
        "src": "https://static.vecteezy.com/system/resources/previews/000/606/168/original/vector-letter-a-logo-design-concept-template.jpg",
        "className": "logo"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Guides",
          "className": "beta-badge-nav "
        },
        {
          "href": "https://www.google.com",
          "label": "Startup Blog",
          "position": "left",
          "className": "nav-item-blog"
        },
        {
          "href": "https://www.google.com",
          "label": "Startup Site",
          "position": "left",
          "className": "nav-item-startupsite"
        },
        {
          "href": "https://www.google.com",
          "label": "GitHub",
          "position": "right",
          "classNAme": "github"
        },
        {
          "type": "localeDropdown",
          "position": "left",
          "className": "droppy",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Guides",
              "to": "/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://www.google.com"
            },
            {
              "label": "Twitter",
              "href": "https://www.google.com"
            },
            {
              "label": "LinkedIn",
              "href": "https://www.google.com"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "href": "https://www.google.com"
            },
            {
              "label": "GitHub",
              "href": "https://www.google.com"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2024 ASHI. Documentation For Startup/SaaS"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "dark",
      "respectPrefersColorScheme": true,
      "disableSwitch": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "scripts": [
    {
      "src": "https://analytics.reactplay.io/script.js",
      "async": true,
      "data-website-id": "b385383c-0fb2-437f-84a8-2a98daf05fde"
    }
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};