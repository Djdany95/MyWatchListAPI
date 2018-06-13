define({ "api": [
  {
    "type": "post",
    "url": "/getFeedback/",
    "title": "GetFeedback",
    "name": "GetFeedback",
    "group": "Feedback",
    "description": "<p>Fetch all feedback DB</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "masterKey",
            "description": "<p>Keyword to fetch all feedback DB.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get feedback\",\n  data: feedback{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Access-Denied:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get feedback\",\n  error: \"ACCESS DENIED\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/feedback.doc.js",
    "groupTitle": "Feedback"
  },
  {
    "type": "post",
    "url": "/sendfeedback/",
    "title": "SendFeedback",
    "name": "SendFeedback",
    "group": "Feedback",
    "description": "<p>Send to DB user email and message from Web Feedback Form by Users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Message from Web Feedback Form by User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"send feedback\",\n  data: \"feedbackOK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"send feedback\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/feedback.doc.js",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Hello",
    "name": "Hello",
    "group": "Root",
    "description": "<p>Says hello</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Say hello.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>Just a message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  msg: 'Welcome to MyWatchListAPI',\n  error: 'There is nothing here in /'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/root.doc.js",
    "groupTitle": "Root"
  },
  {
    "type": "get",
    "url": "/countSeries/:username",
    "title": "CountSeries",
    "name": "CountSeries",
    "group": "SeriesList",
    "description": "<p>Get series' count from user requested</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>User requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get user\",\n  data: countSeries{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get user\",\n  error: \"User 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get user\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/seriesList.doc.js",
    "groupTitle": "SeriesList"
  },
  {
    "type": "delete",
    "url": "/series/:id",
    "title": "DropSeries",
    "name": "DropSeries",
    "group": "SeriesList",
    "description": "<p>Delete series from user seriesList</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Series imdbID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete series\",\n  data: \"seriesDropped\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete series\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/seriesList.doc.js",
    "groupTitle": "SeriesList"
  },
  {
    "type": "get",
    "url": "/series/:username",
    "title": "GetSeriesList",
    "name": "GetSeriesList",
    "group": "SeriesList",
    "description": "<p>Get list for requested User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get seriesList\",\n  data: seriesList{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get seriesList\",\n  error: \"Series 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get seriesList\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/seriesList.doc.js",
    "groupTitle": "SeriesList"
  },
  {
    "type": "post",
    "url": "/series/",
    "title": "NewSeries",
    "name": "NewSeries",
    "group": "SeriesList",
    "description": "<p>Add new series to user seriesList</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Series imdbID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Series name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>If watching series.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>Series actual season.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "epA",
            "description": "<p>Series actual episode.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"save series\",\n  data: \"newSeries\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Email-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"save series\",\n  error: \"Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/seriesList.doc.js",
    "groupTitle": "SeriesList"
  },
  {
    "type": "put",
    "url": "/series/:id",
    "title": "UpdateSeries",
    "name": "UpdateSeries",
    "group": "SeriesList",
    "description": "<p>Change series params</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Series imdbID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Series name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>If watching series.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "temp",
            "description": "<p>Series actual season.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "epA",
            "description": "<p>Series actual episode.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"update series\",\n  data: \"seriesUpdated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"update series\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/seriesList.doc.js",
    "groupTitle": "SeriesList"
  },
  {
    "type": "put",
    "url": "/changeimage/",
    "title": "ChangeImage",
    "name": "ChangeImage",
    "group": "User",
    "description": "<p>Sets new image to user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>User new imageURL.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"change image\",\n  data: \"imageChanged\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"change image\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/changepass/",
    "title": "ChangePass",
    "name": "ChangePass",
    "group": "User",
    "description": "<p>Sets new pass to user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPass",
            "description": "<p>User new pass (Hashed).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"change pass\",\n  data: \"passChanged\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"change pass\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/confirmemail/:uniqid",
    "title": "ConfirmEmail",
    "name": "ConfirmEmail",
    "group": "User",
    "description": "<p>Confirm user register based in the uniqid</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uniqid",
            "description": "<p>User uniqid calculated when registered.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"confirm email\",\n  data: \"userConfirmed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"confirm email\",\n  error: \"User 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"confirm email\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/",
    "title": "DeleteUser",
    "name": "DeleteUser",
    "group": "User",
    "description": "<p>Delete user account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"delete user\",\n  data: \"userDeleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"delete user\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:username/:email",
    "title": "FindUser",
    "name": "FindUser",
    "group": "User",
    "description": "<p>Request if user already exists</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Username-Exists:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get user\",\n  data: \"username\"\n}",
          "type": "json"
        },
        {
          "title": "Email-Exists:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get user\",\n  data: \"email\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get user\",\n  error: \"User 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get user\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "Login",
    "name": "Login",
    "group": "User",
    "description": "<p>Authenticate user from DB and updates lastLogin field</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get user\",\n  data: user{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get user\",\n  error: \"User 404\"\n}",
          "type": "json"
        },
        {
          "title": "User Not Confirmed:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  accion: \"get user\",\n  error: \"User not confirmed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get user\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/masterUsers/",
    "title": "MasterUsers",
    "name": "MasterUsers",
    "group": "User",
    "description": "<p>Fetch all DB</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "masterKey",
            "description": "<p>Keyword to fetch all DB.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"geet users\",\n  data: users{data}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Access-Denied:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get users\",\n  error: \"ACCESS DENIED\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register/",
    "title": "Register",
    "name": "Register",
    "group": "User",
    "description": "<p>Register a user, send an email if all is OK</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pass",
            "description": "<p>User pass (Hashed).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Data requested.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "email",
            "description": "<p>Response from sent email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"save user\",\n  data: \"userRegistered\",\n  email: info.response (from .sendMail)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Not Found\n{\n  accion: \"save user\",\n  error: \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "Email-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"save user\",\n  error: error (from .sendMail)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/remember/:email",
    "title": "RememberAuth",
    "name": "RememberAuth",
    "group": "User",
    "description": "<p>Send an email with username and new pass random generated</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email to send new credentials.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "email",
            "description": "<p>Data requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"remember credentials\",\n  email: info.response (from .sendMail)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found:",
          "content": "HTTP/1.1 500 Not Found\n{\n  accion: \"remember credentials\",\n  error: \"Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "Email-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"remember credentials\",\n  error: error (from .sendMail)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/shareduser/:username",
    "title": "SharedUser",
    "name": "SharedUser",
    "group": "User",
    "description": "<p>Get name and image from user passed to show in sharedList</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>User requested.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  accion: \"get user\",\n  data: user{name, image}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "accion",
            "description": "<p>Action made.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>Error caught.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "User Not Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  accion: \"get user\",\n  error: \"User 404\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Server Error\n{\n  accion: \"get user\",\n  error: \"Server Error 500\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "documentation/user.doc.js",
    "groupTitle": "User"
  }
] });
