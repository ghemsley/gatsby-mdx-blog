/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Blog",
    description: "A blog by Graham Hemsley",
    author: "Graham Hemsley",
    siteUrl: "https://www.grahamhemsley.com",
  },
  plugins: [
    `gatsby-plugin-remove-fingerprints`,
    "gatsby-plugin-remove-generator",
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    // `gatsby-plugin-preact`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-valine`,
      options: {
        appId: `m0YcwrXOFF2OephUckqNJxyp-MdYXbMMI`,
        appKey: `P3chb180mUIwnVr7d86WIuAC`,
        avatar: `monsterid`,
        lang: "en",
        enableQQ: false,
        requiredFields: ["nick"],
        visitor: true,
        placeholder: "Leave a comment",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video-lite",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
              tracedSVG: {
                color: "#153259",
                turnPolicy: "TURNPOLICY_MAJORITY",
              },
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                "bmp",
                "tif",
                "tiff",
                "webp",
              ],
            },
          },
          // {
          //   resolve: `gatsby-remark-table-of-contents`,
          //   options: {
          //     tight: true,
          //     ordered: false,
          //   },
          // },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: "»",
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              /*languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],*/
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "user",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          "gatsby-remark-a11y-emoji",
          "gatsby-remark-external-links",
          "gatsby-remark-unwrap-images",
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video-lite",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: true,
              withWebp: true,
              tracedSVG: {
                color: "#153259",
                turnPolicy: "TURNPOLICY_MAJORITY",
              },
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `files`,
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                "bmp",
                "tif",
                "tiff",
                "webp",
              ],
            },
          },
          // {
          //   resolve: `gatsby-remark-table-of-contents`,
          //   options: {
          //     tight: true,
          //     ordered: false,
          //   },
          // },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: "»",
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below.
              /*languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],*/
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: "user",
                host: "localhost",
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
          "gatsby-remark-a11y-emoji",
          "gatsby-remark-external-links",
          "gatsby-remark-unwrap-images",
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed-mdx`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMdx } }) => {
    //           return allMdx.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
    //               custom_elements: [{ "content:encoded": edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMdx(
    //               filter: { frontmatter: { slug: { regex: "/^/posts//i" } } }
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   html
    //                   frontmatter {
    //                     title
    //                     date
    //                     slug
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss/feed.xml",
    //         title: "Blog RSS feed",
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         match: undefined,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-source-google-photos",
      options: {
        albumsTitles: ["Random"],
        photosMaxWidth: 1920,
        photosMaxHeight: 1280,
        photosCrop: false,
        //
        // For a better stack trace and more information
        // Useful when you open a issue to report a bug
        debug: true,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // url: API URL to use. Defaults to  https://api.github.com/graphql
        //url: someUrl,

        // token: required by the GitHub API
        token: process.env.GITHUB_TOKEN,

        // variables: defaults to variables needed for a search query
        variables: {},

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          query {
            user(login: "ghemsley") {
              login
              name
              bio
              location
              avatarUrl
              followers {
                totalCount
              }
              repositories {
                totalCount
              }
              pinnedItems(first: 6) {
                totalCount
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      url
                      createdAt
                      pushedAt
                      forkCount
                      languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
                        nodes {
                          name
                          color
                        }
                      }
                      refs(last: 1, orderBy: {field: TAG_COMMIT_DATE, direction: DESC}, refPrefix: "refs/") {
                        edges {
                          node {
                            target {
                              ... on Commit {
                                messageHeadline
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      },
    },
    {
      resolve: "gatsby-plugin-next-seo",
      options: {
        language: "en",
        dangerouslySetAllPagesToNoIndex: false,
        dangerouslySetAllPagesToNoFollow: false,
        title: "Blog",
        description: "A blog by Graham Hemsley",
        openGraph: {
          type: "website",
          title: "Blog",
          locale: "en_US",
          site_name: "Blog",
          url: "https://www.grahamhemsley.com/",
          description: "A blog by Graham Hemsley",
          images: [
            {
              url: "https://www.grahamhemsley.com/preview.jpg",
              width: 1280,
              height: 720,
              alt: "Preview of a blog by Graham Hemsley",
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/", "/photos", "/projects", { regex: "^/posts/" }],
        excludePaths: [],
        height: 4,
        prependToBody: true,
        color: `#04B372`,
        footerHeight: 0,
      },
    },
    {
      resolve: "gatsby-plugin-minify-html",
      options: {
        debug: false, // debug optional, default false
        config: {
          // Enabled default by this plugin
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          // Disabled default by html-minifier-terser
          sortAttributes: true,
          useShortDoctype: true,
        },
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: false, // you can disable scripts sha256 hashes
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src":
            "'self' 'unsafe-inline' 'unsafe-eval' *.grahamhemsley.com grahamhemsley.com us.avoscloud.com api.ip.sb cdn.jsdelivr.net *.cloudfront.net *.googlevideo.com www.youtube.com www.google.com",
          "style-src":
            "'self' 'unsafe-inline' *.grahamhemsley.com grahamhemsley.com *.cloudfront.net *.googlevideo.com",
          "img-src":
            "'self' 'unsafe-inline' data: *.grahamhemsley.com grahamhemsley.com i.ytimg.com *.cloudfront.net img.t.sinajs.cn *.ggpht.com *.githubusercontent.com gravatar.loli.net",
          "font-src":
            "'self' 'unsafe-inline' *.grahamhemsley.com grahamhemsley.com *.cloudfront.net fonts.gstatic.com",
          "connect-src":
            "'self' us.avoscloud.com *.grahamhemsley.com grahamhemsley.com *.googlevideo.com www.youtube.com",
          "frame-src":
            "'self' *.grahamhemsley.com grahamhemsley.com www.youtube.com",
          "object-src": "'none'",
          // you can add your directives or override defaults
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-sri",
    //   options: {
    //     hash: "sha256", // 'sha256', 'sha384' or 'sha512' ('sha512' = default)
    //     // crossorigin: false // Optional
    //   },
    // },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        // headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          "X-Frame-Options: SAMEORIGIN",
          "X-Content-Type-Options: nosniff",
          "Referrer-Policy: strict-origin-when-cross-origin",
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          "Permissions-Policy: geolocation=() midi=() notifications=() microphone=() camera=() magnetometer=() gyroscope=() vibrate=() payment=() accelerometer=() ambient-light-sensor=() battery=() display-capture=()",
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}
