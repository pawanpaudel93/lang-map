/*!
 * lang-map <https://github.com/jonschlinkert/lang-map>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

"use strict";

var map = require("./");
var assert = require("assert");

function containEqual(a, b) {
  var len = a.length;
  while (len--) if (!~b.indexOf(a[len])) return false;
  return true;
}

function contains(array, item) {
  if (Array.isArray(item)) {
    return item.every((arrItem) => array.includes(arrItem));
  }
  return array.includes(item);
}

describe("lang-map", function () {
  it("should return the full list of languages.", function () {
    var languages = map().languages;
    assert.equal(typeof languages, "object");
  });

  it("should return the extensions matching the given language.", function () {
    assert(
      containEqual(["asciidoc", "adoc", "asc"], map.extensions("asciidoc"))
    );
    assert(
      containEqual(
        [
          "py",
          "cgi",
          "fcgi",
          "gyp",
          "gypi",
          "lmi",
          "py3",
          "pyde",
          "pyi",
          "pyp",
          "pyt",
          "pyw",
          "rpy",
          "smk",
          "spec",
          "tac",
          "wsgi",
          "xpy",
        ],
        map.extensions("python")
      )
    );
    assert(
      containEqual(
        [
          "md",
          "markdown",
          "mdown",
          "mdwn",
          "mdx",
          "mkd",
          "mkdn",
          "mkdown",
          "ronn",
          "scd",
          "workbook",
        ],
        map.extensions("markdown")
      )
    );
  });

  it("should return the language matching the given extension.", function () {
    assert(contains(map.languages(".md"), ["markdown"]));
    assert(contains(map.languages("markdown"), ["markdown"]));
    assert(contains(map.languages("md"), ["markdown"]));
    assert(contains(map.languages("mkd"), ["markdown"]));
    assert(contains(map.languages("py"), ["python"]));
    assert(contains(map.languages("js"), ["javascript"]));
    assert(contains(map.languages("hbs"), ["handlebars"]));
    assert(contains(map.languages(".js"), ["javascript"]));
  });
});
