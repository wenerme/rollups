(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ConsoleFeed = factory(global.React));
}(this, (function (React) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
		  path: basedir,
		  exports: {},
		  require: function (path, base) {
	      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
	    }
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	/*

	Based off glamor's StyleSheet, thanks Sunil ❤️

	high performance StyleSheet for css-in-js systems

	- uses multiple style tags behind the scenes for millions of rules
	- uses `insertRule` for appending in production for *much* faster performance

	// usage

	import { StyleSheet } from '@emotion/sheet'

	let styleSheet = new StyleSheet({ key: '', container: document.head })

	styleSheet.insert('#box { border: 1px solid red; }')
	- appends a css rule into the stylesheet

	styleSheet.flush()
	- empties the stylesheet of all its contents

	*/
	// $FlowFixMe
	function sheetForTag(tag) {
	  if (tag.sheet) {
	    // $FlowFixMe
	    return tag.sheet;
	  } // this weirdness brought to you by firefox

	  /* istanbul ignore next */


	  for (var i = 0; i < document.styleSheets.length; i++) {
	    if (document.styleSheets[i].ownerNode === tag) {
	      // $FlowFixMe
	      return document.styleSheets[i];
	    }
	  }
	}

	function createStyleElement(options) {
	  var tag = document.createElement('style');
	  tag.setAttribute('data-emotion', options.key);

	  if (options.nonce !== undefined) {
	    tag.setAttribute('nonce', options.nonce);
	  }

	  tag.appendChild(document.createTextNode(''));
	  return tag;
	}

	var StyleSheet =
	/*#__PURE__*/
	function () {
	  function StyleSheet(options) {
	    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
	    this.tags = [];
	    this.ctr = 0;
	    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

	    this.key = options.key;
	    this.container = options.container;
	    this.before = null;
	  }

	  var _proto = StyleSheet.prototype;

	  _proto.insert = function insert(rule) {
	    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
	    // it's 1 in dev because we insert source maps that map a single rule to a location
	    // and you can only have one source map per style tag
	    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
	      var _tag = createStyleElement(this);

	      var before;

	      if (this.tags.length === 0) {
	        before = this.before;
	      } else {
	        before = this.tags[this.tags.length - 1].nextSibling;
	      }

	      this.container.insertBefore(_tag, before);
	      this.tags.push(_tag);
	    }

	    var tag = this.tags[this.tags.length - 1];

	    if (this.isSpeedy) {
	      var sheet = sheetForTag(tag);

	      try {
	        // this is a really hot path
	        // we check the second character first because having "i"
	        // as the second character will happen less often than
	        // having "@" as the first character
	        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
	        // the big drawback is that the css won't be editable in devtools

	        sheet.insertRule(rule, // we need to insert @import rules before anything else
	        // otherwise there will be an error
	        // technically this means that the @import rules will
	        // _usually_(not always since there could be multiple style tags)
	        // be the first ones in prod and generally later in dev
	        // this shouldn't really matter in the real world though
	        // @import is generally only used for font faces from google fonts and etc.
	        // so while this could be technically correct then it would be slower and larger
	        // for a tiny bit of correctness that won't matter in the real world
	        isImportRule ? 0 : sheet.cssRules.length);
	      } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
	        }
	      }
	    } else {
	      tag.appendChild(document.createTextNode(rule));
	    }

	    this.ctr++;
	  };

	  _proto.flush = function flush() {
	    // $FlowFixMe
	    this.tags.forEach(function (tag) {
	      return tag.parentNode.removeChild(tag);
	    });
	    this.tags = [];
	    this.ctr = 0;
	  };

	  return StyleSheet;
	}();

	function stylis_min (W) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
	      g = e.charCodeAt(l);
	      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

	      if (0 === b + n + v + m) {
	        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;

	            default:
	              f += e.charAt(l);
	          }

	          g = 59;
	        }

	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;

	            for (t = ++l; l < B;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;

	                case 125:
	                  k--;
	                  break;

	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < J; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }

	                              break;

	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }

	                          }
	                        }

	                        l = u;
	                      }

	                  }

	                  break;

	                case 91:
	                  g++;

	                case 40:
	                  g++;

	                case 34:
	                case 39:
	                  for (; l++ < J && e.charCodeAt(l) !== g;) {
	                  }

	              }

	              if (0 === k) break;
	              l++;
	            }

	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);

	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;

	                  default:
	                    r = O;
	                }

	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(da, ea);

	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;

	                  case 107:
	                    f = f.replace(fa, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;

	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;

	              default:
	                k = M(c, X(c, f, I), k, h, a + 1);
	            }

	            F += k;
	            k = I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;

	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;

	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }

	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }

	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
	          z = 1;
	          D++;
	          break;

	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            z++;
	            break;
	          }

	        default:
	          z++;
	          y = e.charAt(l);

	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;

	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;

	            case 0:
	              y = '\\0';
	              break;

	            case 12:
	              y = '\\f';
	              break;

	            case 11:
	              y = '\\v';
	              break;

	            case 38:
	              0 === n + b + m && (r = I = 1, y = '\f' + y);
	              break;

	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

	                case 8:
	                  111 === K && (E = K);
	              }
	              break;

	            case 58:
	              0 === n + b + m && (u = l);
	              break;

	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;

	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;

	            case 91:
	              0 === n + b + v && m++;
	              break;

	            case 93:
	              0 === n + b + v && m--;
	              break;

	            case 41:
	              0 === n + b + m && v--;
	              break;

	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * K) {
	                  case 533:
	                    break;

	                  default:
	                    q = 1;
	                }
	                v++;
	              }

	              break;

	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;

	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;

	                    case 220:
	                      t = l, b = 42;
	                  }

	                  break;

	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }

	          0 === b && (f += y);
	      }

	      K = x;
	      x = g;
	      l++;
	    }

	    t = p.length;

	    if (0 < t) {
	      r = c;
	      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';

	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);

	        switch (E) {
	          case 111:
	            p = p.replace(ha, ':-moz-$1') + p;
	            break;

	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }

	        E = 0;
	      }
	    }

	    return G + p + F;
	  }

	  function X(d, c, e) {
	    var h = c.trim().split(ia);
	    c = h;
	    var a = h.length,
	        m = d.length;

	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;

	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = Z(d, c[b], e).trim();
	        }

	        break;

	      default:
	        var v = b = 0;

	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = Z(d[n] + ' ', h[b], e).trim();
	          }
	        }

	    }

	    return c;
	  }

	  function Z(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));

	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());

	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());

	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }

	    return d + c;
	  }

	  function P(d, c, e, h) {
	    var a = d + ';',
	        m = 2 * c + 3 * e + 4 * h;

	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }

	    if (0 === w || 2 === w && !L(a, 1)) return a;

	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;

	      case 969:
	      case 942:
	        return '-webkit-' + a + a;

	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;

	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
	        break;

	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;

	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;

	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

	      case 1005:
	        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;

	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;

	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;

	          case 220:
	            b = a.replace(G, 'lr');
	            break;

	          default:
	            return a;
	        }

	        return '-webkit-' + a + '-ms-' + b + a;

	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;

	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;

	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;

	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }

	        return a + ';';

	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
	        }
	        break;

	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

	      case 931:
	      case 953:
	        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;

	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
	    }

	    return a;
	  }

	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	        h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
	  }

	  function ea(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
	  }

	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < A; ++g) {
	      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;

	        default:
	          x = w;
	      }
	    }

	    if (x !== c) return x;
	  }

	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        A = S.length = 0;
	        break;

	      default:
	        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
	          T(d[c]);
	        } else Y = !!d | 0;
	    }

	    return T;
	  }

	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }

	  function B(d, c) {
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];

	    if (0 < A) {
	      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }

	    var a = M(O, e, c, 0, 0);
	    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    z = D = 1;
	    return a;
	  }

	  var ca = /^\0+/g,
	      N = /[\0\r\f]/g,
	      aa = /: */g,
	      ka = /zoo|gra/,
	      ma = /([,: ])(transform)/g,
	      ia = /,\r+?/g,
	      F = /([\t\r\n ])*\f?&/g,
	      fa = /@(k\w+)\s*(\S*)\s*/,
	      Q = /::(place)/g,
	      ha = /:(read-only)/g,
	      G = /[svh]\w+-[tblr]{2}/,
	      da = /\(\s*(.*)\s*\)/g,
	      oa = /([\s\S]*?);/g,
	      ba = /-self|flex-/g,
	      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	      la = /stretch|:\s*\w+\-(?:conte|avail)/,
	      ja = /([^-])(image-set\()/,
	      z = 1,
	      D = 1,
	      E = 0,
	      w = 1,
	      O = [],
	      S = [],
	      A = 0,
	      R = null,
	      Y = 0,
	      V = '';
	  B.use = T;
	  B.set = U;
	  void 0 !== W && U(W);
	  return B;
	}

	var weakMemoize = function weakMemoize(func) {
	  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
	  var cache = new WeakMap();
	  return function (arg) {
	    if (cache.has(arg)) {
	      // $FlowFixMe
	      return cache.get(arg);
	    }

	    var ret = func(arg);
	    cache.set(arg, ret);
	    return ret;
	  };
	};

	// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
	// inlined to avoid umd wrapper and peerDep warnings/installing stylis
	// since we use stylis after closure compiler
	var delimiter = '/*|*/';
	var needle = delimiter + '}';

	function toSheet(block) {
	  if (block) {
	    Sheet.current.insert(block + '}');
	  }
	}

	var Sheet = {
	  current: null
	};
	var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
	  switch (context) {
	    // property
	    case 1:
	      {
	        switch (content.charCodeAt(0)) {
	          case 64:
	            {
	              // @import
	              Sheet.current.insert(content + ';');
	              return '';
	            }
	          // charcode for l

	          case 108:
	            {
	              // charcode for b
	              // this ignores label
	              if (content.charCodeAt(2) === 98) {
	                return '';
	              }
	            }
	        }

	        break;
	      }
	    // selector

	    case 2:
	      {
	        if (ns === 0) return content + delimiter;
	        break;
	      }
	    // at-rule

	    case 3:
	      {
	        switch (ns) {
	          // @font-face, @page
	          case 102:
	          case 112:
	            {
	              Sheet.current.insert(selectors[0] + content);
	              return '';
	            }

	          default:
	            {
	              return content + (at === 0 ? delimiter : '');
	            }
	        }
	      }

	    case -2:
	      {
	        content.split(needle).forEach(toSheet);
	      }
	  }
	};

	var createCache = function createCache(options) {
	  if (options === undefined) options = {};
	  var key = options.key || 'css';
	  var stylisOptions;

	  if (options.prefix !== undefined) {
	    stylisOptions = {
	      prefix: options.prefix
	    };
	  }

	  var stylis = new stylis_min(stylisOptions);

	  if (process.env.NODE_ENV !== 'production') {
	    // $FlowFixMe
	    if (/[^a-z-]/.test(key)) {
	      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
	    }
	  }

	  var inserted = {}; // $FlowFixMe

	  var container;

	  {
	    container = options.container || document.head;
	    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
	    Array.prototype.forEach.call(nodes, function (node) {
	      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

	      attrib.split(' ').forEach(function (id) {
	        inserted[id] = true;
	      });

	      if (node.parentNode !== container) {
	        container.appendChild(node);
	      }
	    });
	  }

	  var _insert;

	  {
	    stylis.use(options.stylisPlugins)(ruleSheet);

	    _insert = function insert(selector, serialized, sheet, shouldCache) {
	      var name = serialized.name;
	      Sheet.current = sheet;

	      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
	        var map = serialized.map;
	        Sheet.current = {
	          insert: function insert(rule) {
	            sheet.insert(rule + map);
	          }
	        };
	      }

	      stylis(selector, serialized.styles);

	      if (shouldCache) {
	        cache.inserted[name] = true;
	      }
	    };
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
	    var commentStart = /\/\*/g;
	    var commentEnd = /\*\//g;
	    stylis.use(function (context, content) {
	      switch (context) {
	        case -1:
	          {
	            while (commentStart.test(content)) {
	              commentEnd.lastIndex = commentStart.lastIndex;

	              if (commentEnd.test(content)) {
	                commentStart.lastIndex = commentEnd.lastIndex;
	                continue;
	              }

	              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
	            }

	            commentStart.lastIndex = 0;
	            break;
	          }
	      }
	    });
	    stylis.use(function (context, content, selectors) {
	      switch (context) {
	        case -1:
	          {
	            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
	            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

	            if (unsafePseudoClasses && cache.compat !== true) {
	              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
	                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
	                var ignore = ignoreRegExp.test(content);

	                if (unsafePseudoClass && !ignore) {
	                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
	                }
	              });
	            }

	            break;
	          }
	      }
	    });
	  }

	  var cache = {
	    key: key,
	    sheet: new StyleSheet({
	      key: key,
	      container: container,
	      nonce: options.nonce,
	      speedy: options.speedy
	    }),
	    nonce: options.nonce,
	    inserted: inserted,
	    registered: {},
	    insert: _insert
	  };
	  return cache;
	};

	var isBrowser = "object" !== 'undefined';
	function getRegisteredStyles(registered, registeredStyles, classNames) {
	  var rawClassName = '';
	  classNames.split(' ').forEach(function (className) {
	    if (registered[className] !== undefined) {
	      registeredStyles.push(registered[className]);
	    } else {
	      rawClassName += className + " ";
	    }
	  });
	  return rawClassName;
	}
	var insertStyles = function insertStyles(cache, serialized, isStringTag) {
	  var className = cache.key + "-" + serialized.name;

	  if ( // we only need to add the styles to the registered cache if the
	  // class name could be used further down
	  // the tree but if it's a string tag, we know it won't
	  // so we don't have to add it to registered cache.
	  // this improves memory usage since we can avoid storing the whole style string
	  (isStringTag === false || // we need to always store it if we're in compat mode and
	  // in node since emotion-server relies on whether a style is in
	  // the registered cache to know whether a style is global or not
	  // also, note that this check will be dead code eliminated in the browser
	  isBrowser === false ) && cache.registered[className] === undefined) {
	    cache.registered[className] = serialized.styles;
	  }

	  if (cache.inserted[serialized.name] === undefined) {
	    var current = serialized;

	    do {
	      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

	      current = current.next;
	    } while (current !== undefined);
	  }
	};

	/* eslint-disable */
	// Inspired by https://github.com/garycourt/murmurhash-js
	// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
	function murmur2(str) {
	  // 'm' and 'r' are mixing constants generated offline.
	  // They're not really 'magic', they just happen to work well.
	  // const m = 0x5bd1e995;
	  // const r = 24;
	  // Initialize the hash
	  var h = 0; // Mix 4 bytes at a time into the hash

	  var k,
	      i = 0,
	      len = str.length;

	  for (; len >= 4; ++i, len -= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	    k =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
	    k ^=
	    /* k >>> r: */
	    k >>> 24;
	    h =
	    /* Math.imul(k, m): */
	    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
	    /* Math.imul(h, m): */
	    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Handle the last few bytes of the input array


	  switch (len) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h =
	      /* Math.imul(h, m): */
	      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  } // Do a few final mixes of the hash to ensure the last few
	  // bytes are well-incorporated.


	  h ^= h >>> 13;
	  h =
	  /* Math.imul(h, m): */
	  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
	  return ((h ^ h >>> 15) >>> 0).toString(36);
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  // SVG-related properties
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	function memoize(fn) {
	  var cache = {};
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
	var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
	var hyphenateRegex = /[A-Z]|^ms/g;
	var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

	var isCustomProperty = function isCustomProperty(property) {
	  return property.charCodeAt(1) === 45;
	};

	var isProcessableValue = function isProcessableValue(value) {
	  return value != null && typeof value !== 'boolean';
	};

	var processStyleName = memoize(function (styleName) {
	  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
	});

	var processStyleValue = function processStyleValue(key, value) {
	  switch (key) {
	    case 'animation':
	    case 'animationName':
	      {
	        if (typeof value === 'string') {
	          return value.replace(animationRegex, function (match, p1, p2) {
	            cursor = {
	              name: p1,
	              styles: p2,
	              next: cursor
	            };
	            return p1;
	          });
	        }
	      }
	  }

	  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
	    return value + 'px';
	  }

	  return value;
	};

	if (process.env.NODE_ENV !== 'production') {
	  var contentValuePattern = /(attr|calc|counters?|url)\(/;
	  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
	  var oldProcessStyleValue = processStyleValue;
	  var msPattern = /^-ms-/;
	  var hyphenPattern = /-(.)/g;
	  var hyphenatedCache = {};

	  processStyleValue = function processStyleValue(key, value) {
	    if (key === 'content') {
	      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
	        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
	      }
	    }

	    var processed = oldProcessStyleValue(key, value);

	    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
	      hyphenatedCache[key] = true;
	      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
	        return _char.toUpperCase();
	      }) + "?");
	    }

	    return processed;
	  };
	}

	var shouldWarnAboutInterpolatingClassNameFromCss = true;

	function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
	  if (interpolation == null) {
	    return '';
	  }

	  if (interpolation.__emotion_styles !== undefined) {
	    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
	      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	    }

	    return interpolation;
	  }

	  switch (typeof interpolation) {
	    case 'boolean':
	      {
	        return '';
	      }

	    case 'object':
	      {
	        if (interpolation.anim === 1) {
	          cursor = {
	            name: interpolation.name,
	            styles: interpolation.styles,
	            next: cursor
	          };
	          return interpolation.name;
	        }

	        if (interpolation.styles !== undefined) {
	          var next = interpolation.next;

	          if (next !== undefined) {
	            // not the most efficient thing ever but this is a pretty rare case
	            // and there will be very few iterations of this generally
	            while (next !== undefined) {
	              cursor = {
	                name: next.name,
	                styles: next.styles,
	                next: cursor
	              };
	              next = next.next;
	            }
	          }

	          var styles = interpolation.styles + ";";

	          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
	            styles += interpolation.map;
	          }

	          return styles;
	        }

	        return createStringFromObject(mergedProps, registered, interpolation);
	      }

	    case 'function':
	      {
	        if (mergedProps !== undefined) {
	          var previousCursor = cursor;
	          var result = interpolation(mergedProps);
	          cursor = previousCursor;
	          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
	        } else if (process.env.NODE_ENV !== 'production') {
	          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
	        }

	        break;
	      }

	    case 'string':
	      if (process.env.NODE_ENV !== 'production') {
	        var matched = [];
	        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
	          var fakeVarName = "animation" + matched.length;
	          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
	          return "${" + fakeVarName + "}";
	        });

	        if (matched.length) {
	          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
	        }
	      }

	      break;
	  } // finalize string values (regular strings and functions interpolated into css calls)


	  if (registered == null) {
	    return interpolation;
	  }

	  var cached = registered[interpolation];

	  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
	    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
	    shouldWarnAboutInterpolatingClassNameFromCss = false;
	  }

	  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
	}

	function createStringFromObject(mergedProps, registered, obj) {
	  var string = '';

	  if (Array.isArray(obj)) {
	    for (var i = 0; i < obj.length; i++) {
	      string += handleInterpolation(mergedProps, registered, obj[i], false);
	    }
	  } else {
	    for (var _key in obj) {
	      var value = obj[_key];

	      if (typeof value !== 'object') {
	        if (registered != null && registered[value] !== undefined) {
	          string += _key + "{" + registered[value] + "}";
	        } else if (isProcessableValue(value)) {
	          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
	        }
	      } else {
	        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
	          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
	        }

	        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
	          for (var _i = 0; _i < value.length; _i++) {
	            if (isProcessableValue(value[_i])) {
	              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
	            }
	          }
	        } else {
	          var interpolated = handleInterpolation(mergedProps, registered, value, false);

	          switch (_key) {
	            case 'animation':
	            case 'animationName':
	              {
	                string += processStyleName(_key) + ":" + interpolated + ";";
	                break;
	              }

	            default:
	              {
	                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
	                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
	                }

	                string += _key + "{" + interpolated + "}";
	              }
	          }
	        }
	      }
	    }
	  }

	  return string;
	}

	var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
	var sourceMapPattern;

	if (process.env.NODE_ENV !== 'production') {
	  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
	} // this is the cursor for keyframes
	// keyframes are stored on the SerializedStyles object as a linked list


	var cursor;
	var serializeStyles = function serializeStyles(args, registered, mergedProps) {
	  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
	    return args[0];
	  }

	  var stringMode = true;
	  var styles = '';
	  cursor = undefined;
	  var strings = args[0];

	  if (strings == null || strings.raw === undefined) {
	    stringMode = false;
	    styles += handleInterpolation(mergedProps, registered, strings, false);
	  } else {
	    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
	      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
	    }

	    styles += strings[0];
	  } // we start at 1 since we've already handled the first arg


	  for (var i = 1; i < args.length; i++) {
	    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

	    if (stringMode) {
	      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
	        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
	      }

	      styles += strings[i];
	    }
	  }

	  var sourceMap;

	  if (process.env.NODE_ENV !== 'production') {
	    styles = styles.replace(sourceMapPattern, function (match) {
	      sourceMap = match;
	      return '';
	    });
	  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


	  labelPattern.lastIndex = 0;
	  var identifierName = '';
	  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

	  while ((match = labelPattern.exec(styles)) !== null) {
	    identifierName += '-' + // $FlowFixMe we know it's not null
	    match[1];
	  }

	  var name = murmur2(styles) + identifierName;

	  if (process.env.NODE_ENV !== 'production') {
	    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
	    return {
	      name: name,
	      styles: styles,
	      map: sourceMap,
	      next: cursor,
	      toString: function toString() {
	        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
	      }
	    };
	  }

	  return {
	    name: name,
	    styles: styles,
	    next: cursor
	  };
	};

	var EmotionCacheContext = React.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
	// because this module is primarily intended for the browser and node
	// but it's also required in react native and similar environments sometimes
	// and we could have a special build just for that
	// but this is much easier and the native packages
	// might use a different theme context in the future anyway
	typeof HTMLElement !== 'undefined' ? createCache() : null);
	var ThemeContext = React.createContext({});
	var CacheProvider = EmotionCacheContext.Provider;

	var withEmotionCache = function withEmotionCache(func) {
	  var render = function render(props, ref) {
	    return React.createElement(EmotionCacheContext.Consumer, null, function (cache) {
	      return func(props, cache, ref);
	    });
	  }; // $FlowFixMe


	  return React.forwardRef(render);
	};

	var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
	var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var render = function render(cache, props, theme, ref) {
	  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
	  // not passing the registered cache to serializeStyles because it would
	  // make certain babel optimisations not possible

	  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
	    cssProp = cache.registered[cssProp];
	  }

	  var type = props[typePropName];
	  var registeredStyles = [cssProp];
	  var className = '';

	  if (typeof props.className === 'string') {
	    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
	  } else if (props.className != null) {
	    className = props.className + " ";
	  }

	  var serialized = serializeStyles(registeredStyles);

	  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
	    var labelFromStack = props[labelPropName];

	    if (labelFromStack) {
	      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
	    }
	  }

	  var rules = insertStyles(cache, serialized, typeof type === 'string');
	  className += cache.key + "-" + serialized.name;
	  var newProps = {};

	  for (var key in props) {
	    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
	      newProps[key] = props[key];
	    }
	  }

	  newProps.ref = ref;
	  newProps.className = className;
	  var ele = React.createElement(type, newProps);

	  return ele;
	};

	var Emotion =
	/* #__PURE__ */
	withEmotionCache(function (props, cache, ref) {
	  // use Context.read for the theme when it's stable
	  if (typeof props.css === 'function') {
	    return React.createElement(ThemeContext.Consumer, null, function (theme) {
	      return render(cache, props, theme, ref);
	    });
	  }

	  return render(cache, props, null, ref);
	});

	if (process.env.NODE_ENV !== 'production') {
	  Emotion.displayName = 'EmotionCssPropInternal';
	} // $FlowFixMe

	var classnames = function classnames(args) {
	  var len = args.length;
	  var i = 0;
	  var cls = '';

	  for (; i < len; i++) {
	    var arg = args[i];
	    if (arg == null) continue;
	    var toAdd = void 0;

	    switch (typeof arg) {
	      case 'boolean':
	        break;

	      case 'object':
	        {
	          if (Array.isArray(arg)) {
	            toAdd = classnames(arg);
	          } else {
	            toAdd = '';

	            for (var k in arg) {
	              if (arg[k] && k) {
	                toAdd && (toAdd += ' ');
	                toAdd += k;
	              }
	            }
	          }

	          break;
	        }

	      default:
	        {
	          toAdd = arg;
	        }
	    }

	    if (toAdd) {
	      cls && (cls += ' ');
	      cls += toAdd;
	    }
	  }

	  return cls;
	};

	function merge(registered, css, className) {
	  var registeredStyles = [];
	  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

	  if (registeredStyles.length < 2) {
	    return className;
	  }

	  return rawClassName + css(registeredStyles);
	}

	var ClassNames = withEmotionCache(function (props, context) {
	  return React.createElement(ThemeContext.Consumer, null, function (theme) {
	    var hasRendered = false;

	    var css = function css() {
	      if (hasRendered && process.env.NODE_ENV !== 'production') {
	        throw new Error('css can only be used during render');
	      }

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var serialized = serializeStyles(args, context.registered);

	      {
	        insertStyles(context, serialized, false);
	      }

	      return context.key + "-" + serialized.name;
	    };

	    var cx = function cx() {
	      if (hasRendered && process.env.NODE_ENV !== 'production') {
	        throw new Error('cx can only be used during render');
	      }

	      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return merge(context.registered, css, classnames(args));
	    };

	    var content = {
	      css: css,
	      cx: cx,
	      theme: theme
	    };
	    var ele = props.children(content);
	    hasRendered = true;

	    return ele;
	  });
	});

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
	var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
	var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
	var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

	var reactIs_production_min = {
		AsyncMode: AsyncMode,
		ConcurrentMode: ConcurrentMode,
		ContextConsumer: ContextConsumer,
		ContextProvider: ContextProvider,
		Element: Element,
		ForwardRef: ForwardRef,
		Fragment: Fragment,
		Lazy: Lazy,
		Memo: Memo,
		Portal: Portal,
		Profiler: Profiler,
		StrictMode: StrictMode,
		Suspense: Suspense,
		isAsyncMode: isAsyncMode,
		isConcurrentMode: isConcurrentMode,
		isContextConsumer: isContextConsumer,
		isContextProvider: isContextProvider,
		isElement: isElement,
		isForwardRef: isForwardRef,
		isFragment: isFragment,
		isLazy: isLazy,
		isMemo: isMemo,
		isPortal: isPortal,
		isProfiler: isProfiler,
		isStrictMode: isStrictMode,
		isSuspense: isSuspense,
		isValidElementType: isValidElementType,
		typeOf: typeOf
	};

	var reactIs_development = createCommonjsModule(function (module, exports) {



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}
	});

	var reactIs = createCommonjsModule(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = reactIs_production_min;
	} else {
	  module.exports = reactIs_development;
	}
	});

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	function getStatics(component) {
	  // React v16.11 and below
	  if (reactIs.isMemo(component)) {
	    return MEMO_STATICS;
	  } // React v16.12 and above


	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}

	var defineProperty$1 = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    // don't hoist over string (html) components
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);

	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }

	    var keys = getOwnPropertyNames(sourceComponent);

	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }

	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);

	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];

	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

	        try {
	          // Avoid failures from read-only properties
	          defineProperty$1(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }

	  return targetComponent;
	}

	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	var getTheme = function getTheme(outerTheme, theme) {
	  if (typeof theme === 'function') {
	    var mergedTheme = theme(outerTheme);

	    if (process.env.NODE_ENV !== 'production' && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
	      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
	    }

	    return mergedTheme;
	  }

	  if (process.env.NODE_ENV !== 'production' && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
	    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
	  }

	  return _objectSpread({}, outerTheme, {}, theme);
	};

	var createCacheWithTheme = weakMemoize(function (outerTheme) {
	  return weakMemoize(function (theme) {
	    return getTheme(outerTheme, theme);
	  });
	});

	var ThemeProvider = function ThemeProvider(props) {
	  return React.createElement(ThemeContext.Consumer, null, function (theme) {
	    if (props.theme !== theme) {
	      theme = createCacheWithTheme(theme)(props.theme);
	    }

	    return React.createElement(ThemeContext.Provider, {
	      value: theme
	    }, props.children);
	  });
	};

	// should we change this to be forwardRef/withCSSContext style so it doesn't merge with props?
	function withTheme(Component) {
	  var componentName = Component.displayName || Component.name || 'Component';

	  var render = function render(props, ref) {
	    return React.createElement(ThemeContext.Consumer, null, function (theme) {
	      return React.createElement(Component, _extends_1({
	        theme: theme,
	        ref: ref
	      }, props));
	    });
	  }; // $FlowFixMe


	  var WithTheme = React.forwardRef(render);
	  WithTheme.displayName = "WithTheme(" + componentName + ")";
	  return hoistNonReactStatics_cjs(WithTheme, Component);
	}

	function useTheme() {
	  return React__default.useContext(ThemeContext);
	}

	var emotionTheming_browser_esm = /*#__PURE__*/Object.freeze({
		__proto__: null,
		ThemeProvider: ThemeProvider,
		useTheme: useTheme,
		withTheme: withTheme
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$1.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols$1) {
				symbols = getOwnPropertySymbols$1(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	var checkPropTypes_1 = checkPropTypes;

	var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning$1 = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning$1 = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret_1) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning$1(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!reactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning$1(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has$1(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning$1(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = objectAssign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes_1;
	  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = reactIs;

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = factoryWithThrowingShims();
	}
	});

	var isObject = function isObject(x) {
		return typeof x === "object" && x !== null;
	};

	var isWindow = function (obj) {

	  if (obj == null) {
	    return false;
	  }

	  var o = Object(obj);

	  return o === o.window;
	};

	function isNode (val) {
	  if (!isObject(val) || !isWindow(window) || typeof window.Node !== 'function') {
	    return false
	  }

	  return typeof val.nodeType === 'number' &&
	    typeof val.nodeName === 'string'
	}

	var isDom = isNode;

	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectSpread$1(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty$1(target, key, source[key]);
	    });
	  }

	  return target;
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};

	  var target = _objectWithoutPropertiesLoose(source, excluded);

	  var key, i;

	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }

	  return target;
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  }
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	function _iterableToArrayLimit(arr, i) {
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance");
	}

	var theme = {
	  BASE_FONT_FAMILY: 'Menlo, monospace',
	  BASE_FONT_SIZE: '11px',
	  BASE_LINE_HEIGHT: 1.2,
	  BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
	  BASE_COLOR: 'rgb(213, 213, 213)',
	  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
	  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
	  OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
	  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
	  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
	  OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
	  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
	  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
	  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
	  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
	  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
	  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
	  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
	  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
	  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
	  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
	  ARROW_COLOR: 'rgb(145, 145, 145)',
	  ARROW_MARGIN_RIGHT: 3,
	  ARROW_FONT_SIZE: 12,
	  ARROW_ANIMATION_DURATION: '0',
	  TREENODE_FONT_FAMILY: 'Menlo, monospace',
	  TREENODE_FONT_SIZE: '11px',
	  TREENODE_LINE_HEIGHT: 1.2,
	  TREENODE_PADDING_LEFT: 12,
	  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
	  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
	  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
	  TABLE_SORT_ICON_COLOR: 'black',
	  //'rgb(48, 57, 66)',
	  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
	  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
	};

	var theme$1 = {
	  BASE_FONT_FAMILY: 'Menlo, monospace',
	  BASE_FONT_SIZE: '11px',
	  BASE_LINE_HEIGHT: 1.2,
	  BASE_BACKGROUND_COLOR: 'white',
	  BASE_COLOR: 'black',
	  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
	  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
	  OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
	  OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
	  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
	  OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
	  OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
	  OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
	  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
	  HTML_TAG_COLOR: 'rgb(168, 148, 166)',
	  HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
	  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
	  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
	  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
	  HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
	  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
	  ARROW_COLOR: '#6e6e6e',
	  ARROW_MARGIN_RIGHT: 3,
	  ARROW_FONT_SIZE: 12,
	  ARROW_ANIMATION_DURATION: '0',
	  TREENODE_FONT_FAMILY: 'Menlo, monospace',
	  TREENODE_FONT_SIZE: '11px',
	  TREENODE_LINE_HEIGHT: 1.2,
	  TREENODE_PADDING_LEFT: 12,
	  TABLE_BORDER_COLOR: '#aaa',
	  TABLE_TH_BACKGROUND_COLOR: '#eee',
	  TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
	  TABLE_SORT_ICON_COLOR: '#6e6e6e',
	  TABLE_DATA_BACKGROUND_IMAGE: 'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
	  TABLE_DATA_BACKGROUND_SIZE: '128px 32px'
	};



	var themes = /*#__PURE__*/Object.freeze({
	chromeDark: theme,
	chromeLight: theme$1
	});

	var ExpandedPathsContext = React.createContext([{}, function () {}]);

	var unselectable = {
	  WebkitTouchCallout: 'none',
	  WebkitUserSelect: 'none',
	  KhtmlUserSelect: 'none',
	  MozUserSelect: 'none',
	  msUserSelect: 'none',
	  OUserSelect: 'none',
	  userSelect: 'none'
	};

	var base = (function (theme) {
	  return {
	    DOMNodePreview: {
	      htmlOpenTag: {
	        base: {
	          color: theme.HTML_TAG_COLOR
	        },
	        tagName: {
	          color: theme.HTML_TAGNAME_COLOR,
	          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
	        },
	        htmlAttributeName: {
	          color: theme.HTML_ATTRIBUTE_NAME_COLOR
	        },
	        htmlAttributeValue: {
	          color: theme.HTML_ATTRIBUTE_VALUE_COLOR
	        }
	      },
	      htmlCloseTag: {
	        base: {
	          color: theme.HTML_TAG_COLOR
	        },
	        offsetLeft: {
	          /* hack: offset placeholder */
	          marginLeft: -theme.TREENODE_PADDING_LEFT
	        },
	        tagName: {
	          color: theme.HTML_TAGNAME_COLOR,
	          textTransform: theme.HTML_TAGNAME_TEXT_TRANSFORM
	        }
	      },
	      htmlComment: {
	        color: theme.HTML_COMMENT_COLOR
	      },
	      htmlDoctype: {
	        color: theme.HTML_DOCTYPE_COLOR
	      }
	    },
	    ObjectPreview: {
	      objectDescription: {
	        fontStyle: 'italic'
	      },
	      preview: {
	        fontStyle: 'italic'
	      },
	      arrayMaxProperties: theme.OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES,
	      objectMaxProperties: theme.OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES
	    },
	    ObjectName: {
	      base: {
	        color: theme.OBJECT_NAME_COLOR
	      },
	      dimmed: {
	        opacity: 0.6
	      }
	    },
	    ObjectValue: {
	      objectValueNull: {
	        color: theme.OBJECT_VALUE_NULL_COLOR
	      },
	      objectValueUndefined: {
	        color: theme.OBJECT_VALUE_UNDEFINED_COLOR
	      },
	      objectValueRegExp: {
	        color: theme.OBJECT_VALUE_REGEXP_COLOR
	      },
	      objectValueString: {
	        color: theme.OBJECT_VALUE_STRING_COLOR
	      },
	      objectValueSymbol: {
	        color: theme.OBJECT_VALUE_SYMBOL_COLOR
	      },
	      objectValueNumber: {
	        color: theme.OBJECT_VALUE_NUMBER_COLOR
	      },
	      objectValueBoolean: {
	        color: theme.OBJECT_VALUE_BOOLEAN_COLOR
	      },
	      objectValueFunctionPrefix: {
	        color: theme.OBJECT_VALUE_FUNCTION_PREFIX_COLOR,
	        fontStyle: 'italic'
	      },
	      objectValueFunctionName: {
	        fontStyle: 'italic'
	      }
	    },
	    TreeView: {
	      treeViewOutline: {
	        padding: 0,
	        margin: 0,
	        listStyleType: 'none'
	      }
	    },
	    TreeNode: {
	      treeNodeBase: {
	        color: theme.BASE_COLOR,
	        backgroundColor: theme.BASE_BACKGROUND_COLOR,
	        lineHeight: theme.TREENODE_LINE_HEIGHT,
	        cursor: 'default',
	        boxSizing: 'border-box',
	        listStyle: 'none',
	        fontFamily: theme.TREENODE_FONT_FAMILY,
	        fontSize: theme.TREENODE_FONT_SIZE
	      },
	      treeNodePreviewContainer: {},
	      treeNodePlaceholder: _objectSpread$1({
	        whiteSpace: 'pre',
	        fontSize: theme.ARROW_FONT_SIZE,
	        marginRight: theme.ARROW_MARGIN_RIGHT
	      }, unselectable),
	      treeNodeArrow: {
	        base: _objectSpread$1({
	          color: theme.ARROW_COLOR,
	          display: 'inline-block',
	          // lineHeight: '14px',
	          fontSize: theme.ARROW_FONT_SIZE,
	          marginRight: theme.ARROW_MARGIN_RIGHT
	        }, parseFloat(theme.ARROW_ANIMATION_DURATION) > 0 ? {
	          transition: "transform ".concat(theme.ARROW_ANIMATION_DURATION, " ease 0s")
	        } : {}, unselectable),
	        expanded: {
	          WebkitTransform: 'rotateZ(90deg)',
	          MozTransform: 'rotateZ(90deg)',
	          transform: 'rotateZ(90deg)'
	        },
	        collapsed: {
	          WebkitTransform: 'rotateZ(0deg)',
	          MozTransform: 'rotateZ(0deg)',
	          transform: 'rotateZ(0deg)'
	        }
	      },
	      treeNodeChildNodesContainer: {
	        margin: 0,
	        // reset user-agent style
	        paddingLeft: theme.TREENODE_PADDING_LEFT
	      }
	    },
	    TableInspector: {
	      base: {
	        color: theme.BASE_COLOR,
	        position: 'relative',
	        border: "1px solid ".concat(theme.TABLE_BORDER_COLOR),
	        fontFamily: theme.BASE_FONT_FAMILY,
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%',
	        boxSizing: 'border-box',
	        cursor: 'default'
	      }
	    },
	    TableInspectorHeaderContainer: {
	      base: {
	        top: 0,
	        height: '17px',
	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      },
	      table: {
	        tableLayout: 'fixed',
	        borderSpacing: 0,
	        borderCollapse: 'separate',
	        height: '100%',
	        width: '100%',
	        margin: 0
	      }
	    },
	    TableInspectorDataContainer: {
	      tr: {
	        display: 'table-row'
	      },
	      td: {
	        boxSizing: 'border-box',
	        border: 'none',
	        // prevent overrides
	        height: '16px',
	        // /* 0.5 * table.background-size height */
	        verticalAlign: 'top',
	        padding: '1px 4px',
	        WebkitUserSelect: 'text',
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        lineHeight: '14px'
	      },
	      div: {
	        position: 'static',
	        top: '17px',
	        bottom: 0,
	        overflowY: 'overlay',
	        transform: 'translateZ(0)',
	        left: 0,
	        right: 0,
	        overflowX: 'hidden'
	      },
	      table: {
	        positon: 'static',
	        left: 0,
	        top: 0,
	        right: 0,
	        bottom: 0,
	        borderTop: '0 none transparent',
	        margin: 0,
	        // prevent user agent stylesheet overrides
	        backgroundImage: theme.TABLE_DATA_BACKGROUND_IMAGE,
	        backgroundSize: theme.TABLE_DATA_BACKGROUND_SIZE,
	        tableLayout: 'fixed',
	        // table
	        borderSpacing: 0,
	        borderCollapse: 'separate',
	        // height: '100%',
	        width: '100%',
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%'
	      }
	    },
	    TableInspectorTH: {
	      base: {
	        position: 'relative',
	        // anchor for sort icon container
	        height: 'auto',
	        textAlign: 'left',
	        backgroundColor: theme.TABLE_TH_BACKGROUND_COLOR,
	        borderBottom: "1px solid ".concat(theme.TABLE_BORDER_COLOR),
	        fontWeight: 'normal',
	        verticalAlign: 'middle',
	        padding: '0 4px',
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        lineHeight: '14px',
	        ':hover': {
	          backgroundColor: theme.TABLE_TH_HOVER_COLOR
	        }
	      },
	      div: {
	        whiteSpace: 'nowrap',
	        textOverflow: 'ellipsis',
	        overflow: 'hidden',
	        // prevent user agent stylesheet overrides
	        fontSize: theme.BASE_FONT_SIZE,
	        lineHeight: '120%'
	      }
	    },
	    TableInspectorLeftBorder: {
	      none: {
	        borderLeft: 'none'
	      },
	      solid: {
	        borderLeft: "1px solid ".concat(theme.TABLE_BORDER_COLOR)
	      }
	    },
	    TableInspectorSortIcon: _objectSpread$1({
	      display: 'block',
	      marginRight: 3,
	      // 4,
	      width: 8,
	      height: 7,
	      marginTop: -7,
	      color: theme.TABLE_SORT_ICON_COLOR,
	      fontSize: 12
	    }, unselectable)
	  };
	});

	var DEFAULT_THEME_NAME = 'chromeLight';
	var ThemeContext$1 = React.createContext(base(themes[DEFAULT_THEME_NAME]));
	/**
	 * Hook to get the component styles for the current theme.
	 * @param {string} baseStylesKey - Name of the component to be styled
	 */

	var useStyles = function useStyles(baseStylesKey) {
	  var themeStyles = React.useContext(ThemeContext$1);
	  return themeStyles[baseStylesKey];
	};
	/**
	 * HOC to create a component that accepts a "theme" prop and uses it to set
	 * the current theme. This is intended to be used by the top-level inspector
	 * components.
	 * @param {Object} WrappedComponent - React component to be wrapped
	 */

	var themeAcceptor = function themeAcceptor(WrappedComponent) {
	  var ThemeAcceptor = function ThemeAcceptor(_ref) {
	    var _ref$theme = _ref.theme,
	        theme = _ref$theme === void 0 ? DEFAULT_THEME_NAME : _ref$theme,
	        restProps = _objectWithoutProperties(_ref, ["theme"]);

	    var themeStyles = React.useMemo(function () {
	      switch (Object.prototype.toString.call(theme)) {
	        case '[object String]':
	          return base(themes[theme]);

	        case '[object Object]':
	          return base(theme);

	        default:
	          return base(themes[DEFAULT_THEME_NAME]);
	      }
	    }, [theme]);
	    return React__default.createElement(ThemeContext$1.Provider, {
	      value: themeStyles
	    }, React__default.createElement(WrappedComponent, restProps));
	  };

	  ThemeAcceptor.propTypes = {
	    theme: propTypes.oneOfType([propTypes.string, propTypes.object])
	  };
	  return ThemeAcceptor;
	};

	var Arrow = function Arrow(_ref) {
	  var expanded = _ref.expanded,
	      styles = _ref.styles;
	  return React__default.createElement("span", {
	    style: _objectSpread$1({}, styles.base, expanded ? styles.expanded : styles.collapsed)
	  }, "\u25B6");
	};

	var TreeNode = React.memo(function (props) {
	  props = _objectSpread$1({
	    expanded: true,
	    nodeRenderer: function nodeRenderer(_ref2) {
	      var name = _ref2.name;
	      return React__default.createElement("span", null, name);
	    },
	    onClick: function onClick() {},
	    shouldShowArrow: false,
	    shouldShowPlaceholder: true
	  }, props);
	  var _props = props,
	      expanded = _props.expanded,
	      onClick = _props.onClick,
	      children = _props.children,
	      nodeRenderer = _props.nodeRenderer,
	      title = _props.title,
	      shouldShowArrow = _props.shouldShowArrow,
	      shouldShowPlaceholder = _props.shouldShowPlaceholder;
	  var styles = useStyles('TreeNode');
	  var NodeRenderer = nodeRenderer;
	  return React__default.createElement("li", {
	    "aria-expanded": expanded,
	    role: "treeitem",
	    style: styles.treeNodeBase,
	    title: title
	  }, React__default.createElement("div", {
	    style: styles.treeNodePreviewContainer,
	    onClick: onClick
	  }, shouldShowArrow || React.Children.count(children) > 0 ? React__default.createElement(Arrow, {
	    expanded: expanded,
	    styles: styles.treeNodeArrow
	  }) : shouldShowPlaceholder && React__default.createElement("span", {
	    style: styles.treeNodePlaceholder
	  }, "\xA0"), React__default.createElement(NodeRenderer, props)), React__default.createElement("ol", {
	    role: "group",
	    style: styles.treeNodeChildNodesContainer
	  }, expanded ? children : undefined));
	});
	TreeNode.propTypes = {
	  name: propTypes.string,
	  data: propTypes.any,
	  expanded: propTypes.bool,
	  shouldShowArrow: propTypes.bool,
	  shouldShowPlaceholder: propTypes.bool,
	  nodeRenderer: propTypes.func,
	  onClick: propTypes.func
	};

	var DEFAULT_ROOT_PATH = '$';
	var WILDCARD = '*';
	function hasChildNodes(data, dataIterator) {
	  return !dataIterator(data).next().done;
	}
	var wildcardPathsFromLevel = function wildcardPathsFromLevel(level) {
	  // i is depth
	  return Array.from({
	    length: level
	  }, function (_, i) {
	    return [DEFAULT_ROOT_PATH].concat(Array.from({
	      length: i
	    }, function () {
	      return '*';
	    })).join('.');
	  });
	};
	var getExpandedPaths = function getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths) {
	  var wildcardPaths = [].concat(wildcardPathsFromLevel(expandLevel)).concat(expandPaths).filter(function (path) {
	    return typeof path === 'string';
	  }); // could be undefined

	  var expandedPaths = [];
	  wildcardPaths.forEach(function (wildcardPath) {
	    var keyPaths = wildcardPath.split('.');

	    var populatePaths = function populatePaths(curData, curPath, depth) {
	      if (depth === keyPaths.length) {
	        expandedPaths.push(curPath);
	        return;
	      }

	      var key = keyPaths[depth];

	      if (depth === 0) {
	        if (hasChildNodes(curData, dataIterator) && (key === DEFAULT_ROOT_PATH || key === WILDCARD)) {
	          populatePaths(curData, DEFAULT_ROOT_PATH, depth + 1);
	        }
	      } else {
	        if (key === WILDCARD) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;

	          try {
	            for (var _iterator = dataIterator(curData)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var _ref2 = _step.value;
	              var name = _ref2.name,
	                  _data = _ref2.data;

	              if (hasChildNodes(_data, dataIterator)) {
	                populatePaths(_data, "".concat(curPath, ".").concat(name), depth + 1);
	              }
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return != null) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } else {
	          var value = curData[key];

	          if (hasChildNodes(value, dataIterator)) {
	            populatePaths(value, "".concat(curPath, ".").concat(key), depth + 1);
	          }
	        }
	      }
	    };

	    populatePaths(data, '', 0);
	  });
	  return expandedPaths.reduce(function (obj, path) {
	    obj[path] = true;
	    return obj;
	  }, _objectSpread$1({}, prevExpandedPaths));
	};

	var ConnectedTreeNode = React.memo(function (props) {
	  var data = props.data,
	      dataIterator = props.dataIterator,
	      path = props.path,
	      depth = props.depth,
	      nodeRenderer = props.nodeRenderer;

	  var _useContext = React.useContext(ExpandedPathsContext),
	      _useContext2 = _slicedToArray(_useContext, 2),
	      expandedPaths = _useContext2[0],
	      setExpandedPaths = _useContext2[1];

	  var nodeHasChildNodes = hasChildNodes(data, dataIterator);
	  var expanded = !!expandedPaths[path];
	  var handleClick = React.useCallback(function () {
	    return nodeHasChildNodes && setExpandedPaths(function (prevExpandedPaths) {
	      return _objectSpread$1({}, prevExpandedPaths, _defineProperty$1({}, path, !expanded));
	    });
	  }, [nodeHasChildNodes, setExpandedPaths, path, expanded]);
	  return React__default.createElement(TreeNode, _extends({
	    expanded: expanded,
	    onClick: handleClick // show arrow anyway even if not expanded and not rendering children
	    ,
	    shouldShowArrow: nodeHasChildNodes // show placeholder only for non root nodes
	    ,
	    shouldShowPlaceholder: depth > 0 // Render a node from name and data (or possibly other props like isNonenumerable)
	    ,
	    nodeRenderer: nodeRenderer
	  }, props), // only render if the node is expanded
	  expanded ? _toConsumableArray(dataIterator(data)).map(function (_ref) {
	    var name = _ref.name,
	        data = _ref.data,
	        renderNodeProps = _objectWithoutProperties(_ref, ["name", "data"]);

	    return React__default.createElement(ConnectedTreeNode, _extends({
	      name: name,
	      data: data,
	      depth: depth + 1,
	      path: "".concat(path, ".").concat(name),
	      key: name,
	      dataIterator: dataIterator,
	      nodeRenderer: nodeRenderer
	    }, renderNodeProps));
	  }) : null);
	});
	ConnectedTreeNode.propTypes = {
	  name: propTypes.string,
	  data: propTypes.any,
	  dataIterator: propTypes.func,
	  depth: propTypes.number,
	  expanded: propTypes.bool,
	  nodeRenderer: propTypes.func
	};
	var TreeView = React.memo(function (_ref2) {
	  var name = _ref2.name,
	      data = _ref2.data,
	      dataIterator = _ref2.dataIterator,
	      nodeRenderer = _ref2.nodeRenderer,
	      expandPaths = _ref2.expandPaths,
	      expandLevel = _ref2.expandLevel;
	  var styles = useStyles('TreeView');
	  var stateAndSetter = React.useState({});

	  var _stateAndSetter = _slicedToArray(stateAndSetter, 2),
	      setExpandedPaths = _stateAndSetter[1];

	  React.useLayoutEffect(function () {
	    return setExpandedPaths(function (prevExpandedPaths) {
	      return getExpandedPaths(data, dataIterator, expandPaths, expandLevel, prevExpandedPaths);
	    });
	  }, [data, dataIterator, expandPaths, expandLevel]);
	  return React__default.createElement(ExpandedPathsContext.Provider, {
	    value: stateAndSetter
	  }, React__default.createElement("ol", {
	    role: "tree",
	    style: styles.treeViewOutline
	  }, React__default.createElement(ConnectedTreeNode, {
	    name: name,
	    data: data,
	    dataIterator: dataIterator,
	    depth: 0,
	    path: DEFAULT_ROOT_PATH,
	    nodeRenderer: nodeRenderer
	  })));
	});
	TreeView.propTypes = {
	  name: propTypes.string,
	  data: propTypes.any,
	  dataIterator: propTypes.func,
	  nodeRenderer: propTypes.func,
	  expandPaths: propTypes.oneOfType([propTypes.string, propTypes.array]),
	  expandLevel: propTypes.number
	};

	/**
	 * A view for object property names.
	 *
	 * If the property name is enumerable (in Object.keys(object)),
	 * the property name will be rendered normally.
	 *
	 * If the property name is not enumerable (`Object.prototype.propertyIsEnumerable()`),
	 * the property name will be dimmed to show the difference.
	 */

	var ObjectName = function ObjectName(_ref) {
	  var name = _ref.name,
	      _ref$dimmed = _ref.dimmed,
	      dimmed = _ref$dimmed === void 0 ? false : _ref$dimmed,
	      _ref$styles = _ref.styles,
	      styles = _ref$styles === void 0 ? {} : _ref$styles;
	  var themeStyles = useStyles('ObjectName');

	  var appliedStyles = _objectSpread$1({}, themeStyles.base, dimmed ? themeStyles['dimmed'] : {}, styles);

	  return React__default.createElement("span", {
	    style: appliedStyles
	  }, name);
	};

	ObjectName.propTypes = {
	  /** Property name */
	  name: propTypes.string,

	  /** Should property name be dimmed */
	  dimmed: propTypes.bool
	};

	/**
	 * A short description of the object values.
	 * Can be used to render tree node in ObjectInspector
	 * or render objects in TableInspector.
	 */

	var ObjectValue = function ObjectValue(_ref) {
	  var object = _ref.object,
	      styles = _ref.styles;
	  var themeStyles = useStyles('ObjectValue');

	  var mkStyle = function mkStyle(key) {
	    return _objectSpread$1({}, themeStyles[key], styles);
	  };

	  switch (_typeof(object)) {
	    case 'number':
	      return React__default.createElement("span", {
	        style: mkStyle('objectValueNumber')
	      }, String(object));

	    case 'string':
	      return React__default.createElement("span", {
	        style: mkStyle('objectValueString')
	      }, "\"", object, "\"");

	    case 'boolean':
	      return React__default.createElement("span", {
	        style: mkStyle('objectValueBoolean')
	      }, String(object));

	    case 'undefined':
	      return React__default.createElement("span", {
	        style: mkStyle('objectValueUndefined')
	      }, "undefined");

	    case 'object':
	      if (object === null) {
	        return React__default.createElement("span", {
	          style: mkStyle('objectValueNull')
	        }, "null");
	      }

	      if (object instanceof Date) {
	        return React__default.createElement("span", null, object.toString());
	      }

	      if (object instanceof RegExp) {
	        return React__default.createElement("span", {
	          style: mkStyle('objectValueRegExp')
	        }, object.toString());
	      }

	      if (Array.isArray(object)) {
	        return React__default.createElement("span", null, "Array(".concat(object.length, ")"));
	      }

	      if (!object.constructor) {
	        return React__default.createElement("span", null, "Object");
	      }

	      if (typeof object.constructor.isBuffer === 'function' && object.constructor.isBuffer(object)) {
	        return React__default.createElement("span", null, "Buffer[".concat(object.length, "]"));
	      }

	      return React__default.createElement("span", null, object.constructor.name);

	    case 'function':
	      return React__default.createElement("span", null, React__default.createElement("span", {
	        style: mkStyle('objectValueFunctionPrefix')
	      }, "\u0192\xA0"), React__default.createElement("span", {
	        style: mkStyle('objectValueFunctionName')
	      }, object.name, "()"));

	    case 'symbol':
	      return React__default.createElement("span", {
	        style: mkStyle('objectValueSymbol')
	      }, object.toString());

	    default:
	      return React__default.createElement("span", null);
	  }
	};

	ObjectValue.propTypes = {
	  // the object to describe
	  object: propTypes.any
	};

	var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
	var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;

	/* intersperse arr with separator */

	function intersperse(arr, sep) {
	  if (arr.length === 0) {
	    return [];
	  }

	  return arr.slice(1).reduce(function (xs, x) {
	    return xs.concat([sep, x]);
	  }, [arr[0]]);
	}
	/**
	 * A preview of the object
	 */


	var ObjectPreview = function ObjectPreview(_ref) {
	  var data = _ref.data;
	  var styles = useStyles('ObjectPreview');
	  var object = data;

	  if (_typeof(object) !== 'object' || object === null || object instanceof Date || object instanceof RegExp) {
	    return React__default.createElement(ObjectValue, {
	      object: object
	    });
	  }

	  if (Array.isArray(object)) {
	    var maxProperties = styles.arrayMaxProperties;
	    var previewArray = object.slice(0, maxProperties).map(function (element, index) {
	      return React__default.createElement(ObjectValue, {
	        key: index,
	        object: element
	      });
	    });

	    if (object.length > maxProperties) {
	      previewArray.push(React__default.createElement("span", {
	        key: "ellipsis"
	      }, "\u2026"));
	    }

	    var arrayLength = object.length;
	    return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
	      style: styles.objectDescription
	    }, arrayLength === 0 ? "" : "(".concat(arrayLength, ")\xA0")), React__default.createElement("span", {
	      style: styles.preview
	    }, "[", intersperse(previewArray, ', '), "]"));
	  } else {
	    var _maxProperties = styles.objectMaxProperties;
	    var propertyNodes = [];

	    for (var propertyName in object) {
	      var propertyValue = object[propertyName];

	      if (hasOwnProperty$2.call(object, propertyName)) {
	        var ellipsis = void 0;

	        if (propertyNodes.length === _maxProperties - 1 && Object.keys(object).length > _maxProperties) {
	          ellipsis = React__default.createElement("span", {
	            key: 'ellipsis'
	          }, "\u2026");
	        }

	        propertyNodes.push(React__default.createElement("span", {
	          key: propertyName
	        }, React__default.createElement(ObjectName, {
	          name: propertyName || "\"\""
	        }), ":\xA0", React__default.createElement(ObjectValue, {
	          object: propertyValue
	        }), ellipsis));
	        if (ellipsis) break;
	      }
	    }

	    var objectConstructorName = object.constructor ? object.constructor.name : 'Object';
	    return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", {
	      style: styles.objectDescription
	    }, objectConstructorName === 'Object' ? '' : "".concat(objectConstructorName, " ")), React__default.createElement("span", {
	      style: styles.preview
	    }, '{', intersperse(propertyNodes, ', '), '}'));
	  }
	};

	var ObjectRootLabel = function ObjectRootLabel(_ref) {
	  var name = _ref.name,
	      data = _ref.data;

	  if (typeof name === 'string') {
	    return React__default.createElement("span", null, React__default.createElement(ObjectName, {
	      name: name
	    }), React__default.createElement("span", null, ": "), React__default.createElement(ObjectPreview, {
	      data: data
	    }));
	  } else {
	    return React__default.createElement(ObjectPreview, {
	      data: data
	    });
	  }
	};

	/**
	 * if isNonenumerable is specified, render the name dimmed
	 */

	var ObjectLabel = function ObjectLabel(_ref) {
	  var name = _ref.name,
	      data = _ref.data,
	      _ref$isNonenumerable = _ref.isNonenumerable,
	      isNonenumerable = _ref$isNonenumerable === void 0 ? false : _ref$isNonenumerable;
	  var object = data;
	  return React__default.createElement("span", null, React__default.createElement(ObjectName, {
	    name: name,
	    dimmed: isNonenumerable
	  }), React__default.createElement("span", null, ": "), React__default.createElement(ObjectValue, {
	    object: object
	  }));
	};

	ObjectLabel.propTypes = {
	  /** Non enumerable object property will be dimmed */
	  isNonenumerable: propTypes.bool
	};

	var createIterator = function createIterator(showNonenumerable, sortObjectKeys) {
	  var objectIterator =
	  /*#__PURE__*/
	  regeneratorRuntime.mark(function objectIterator(data) {
	    var shouldIterate, dataIsArray, i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, _entry, k, v, keys, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, propertyName, propertyValue, _propertyValue;

	    return regeneratorRuntime.wrap(function objectIterator$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            shouldIterate = _typeof(data) === 'object' && data !== null || typeof data === 'function';

	            if (shouldIterate) {
	              _context.next = 3;
	              break;
	            }

	            return _context.abrupt("return");

	          case 3:
	            dataIsArray = Array.isArray(data); // iterable objects (except arrays)

	            if (!(!dataIsArray && data[Symbol.iterator])) {
	              _context.next = 41;
	              break;
	            }

	            i = 0;
	            _iteratorNormalCompletion = true;
	            _didIteratorError = false;
	            _iteratorError = undefined;
	            _context.prev = 9;
	            _iterator = data[Symbol.iterator]();

	          case 11:
	            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
	              _context.next = 25;
	              break;
	            }

	            entry = _step.value;

	            if (!(Array.isArray(entry) && entry.length === 2)) {
	              _context.next = 19;
	              break;
	            }

	            _entry = _slicedToArray(entry, 2), k = _entry[0], v = _entry[1];
	            _context.next = 17;
	            return {
	              name: k,
	              data: v
	            };

	          case 17:
	            _context.next = 21;
	            break;

	          case 19:
	            _context.next = 21;
	            return {
	              name: i.toString(),
	              data: entry
	            };

	          case 21:
	            i++;

	          case 22:
	            _iteratorNormalCompletion = true;
	            _context.next = 11;
	            break;

	          case 25:
	            _context.next = 31;
	            break;

	          case 27:
	            _context.prev = 27;
	            _context.t0 = _context["catch"](9);
	            _didIteratorError = true;
	            _iteratorError = _context.t0;

	          case 31:
	            _context.prev = 31;
	            _context.prev = 32;

	            if (!_iteratorNormalCompletion && _iterator.return != null) {
	              _iterator.return();
	            }

	          case 34:
	            _context.prev = 34;

	            if (!_didIteratorError) {
	              _context.next = 37;
	              break;
	            }

	            throw _iteratorError;

	          case 37:
	            return _context.finish(34);

	          case 38:
	            return _context.finish(31);

	          case 39:
	            _context.next = 82;
	            break;

	          case 41:
	            keys = Object.getOwnPropertyNames(data);

	            if (sortObjectKeys === true && !dataIsArray) {
	              // Array keys should not be sorted in alphabetical order
	              keys.sort();
	            } else if (typeof sortObjectKeys === 'function') {
	              keys.sort(sortObjectKeys);
	            }

	            _iteratorNormalCompletion2 = true;
	            _didIteratorError2 = false;
	            _iteratorError2 = undefined;
	            _context.prev = 46;
	            _iterator2 = keys[Symbol.iterator]();

	          case 48:
	            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
	              _context.next = 65;
	              break;
	            }

	            propertyName = _step2.value;

	            if (!propertyIsEnumerable.call(data, propertyName)) {
	              _context.next = 56;
	              break;
	            }

	            propertyValue = data[propertyName];
	            _context.next = 54;
	            return {
	              name: propertyName || "\"\"",
	              data: propertyValue
	            };

	          case 54:
	            _context.next = 62;
	            break;

	          case 56:
	            if (!showNonenumerable) {
	              _context.next = 62;
	              break;
	            }

	            // To work around the error (happens some time when propertyName === 'caller' || propertyName === 'arguments')
	            // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context
	            // http://stackoverflow.com/questions/31921189/caller-and-arguments-are-restricted-function-properties-and-cannot-be-access
	            _propertyValue = void 0;

	            try {
	              _propertyValue = data[propertyName];
	            } catch (e) {// console.warn(e)
	            }

	            if (!(_propertyValue !== undefined)) {
	              _context.next = 62;
	              break;
	            }

	            _context.next = 62;
	            return {
	              name: propertyName,
	              data: _propertyValue,
	              isNonenumerable: true
	            };

	          case 62:
	            _iteratorNormalCompletion2 = true;
	            _context.next = 48;
	            break;

	          case 65:
	            _context.next = 71;
	            break;

	          case 67:
	            _context.prev = 67;
	            _context.t1 = _context["catch"](46);
	            _didIteratorError2 = true;
	            _iteratorError2 = _context.t1;

	          case 71:
	            _context.prev = 71;
	            _context.prev = 72;

	            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
	              _iterator2.return();
	            }

	          case 74:
	            _context.prev = 74;

	            if (!_didIteratorError2) {
	              _context.next = 77;
	              break;
	            }

	            throw _iteratorError2;

	          case 77:
	            return _context.finish(74);

	          case 78:
	            return _context.finish(71);

	          case 79:
	            if (!(showNonenumerable && data !== Object.prototype
	            /* already added */
	            )) {
	              _context.next = 82;
	              break;
	            }

	            _context.next = 82;
	            return {
	              name: '__proto__',
	              data: Object.getPrototypeOf(data),
	              isNonenumerable: true
	            };

	          case 82:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, objectIterator, null, [[9, 27, 31, 39], [32,, 34, 38], [46, 67, 71, 79], [72,, 74, 78]]);
	  });
	  return objectIterator;
	};

	var defaultNodeRenderer = function defaultNodeRenderer(_ref) {
	  var depth = _ref.depth,
	      name = _ref.name,
	      data = _ref.data,
	      isNonenumerable = _ref.isNonenumerable;
	  return depth === 0 ? React__default.createElement(ObjectRootLabel, {
	    name: name,
	    data: data
	  }) : React__default.createElement(ObjectLabel, {
	    name: name,
	    data: data,
	    isNonenumerable: isNonenumerable
	  });
	};
	/**
	 * Tree-view for objects
	 */


	var ObjectInspector = function ObjectInspector(_ref2) {
	  var _ref2$showNonenumerab = _ref2.showNonenumerable,
	      showNonenumerable = _ref2$showNonenumerab === void 0 ? false : _ref2$showNonenumerab,
	      sortObjectKeys = _ref2.sortObjectKeys,
	      nodeRenderer = _ref2.nodeRenderer,
	      treeViewProps = _objectWithoutProperties(_ref2, ["showNonenumerable", "sortObjectKeys", "nodeRenderer"]);

	  var dataIterator = createIterator(showNonenumerable, sortObjectKeys);
	  var renderer = nodeRenderer ? nodeRenderer : defaultNodeRenderer;
	  return React__default.createElement(TreeView, _extends({
	    nodeRenderer: renderer,
	    dataIterator: dataIterator
	  }, treeViewProps));
	};

	ObjectInspector.propTypes = {
	  /** An integer specifying to which level the tree should be initially expanded. */
	  expandLevel: propTypes.number,

	  /** An array containing all the paths that should be expanded when the component is initialized, or a string of just one path */
	  expandPaths: propTypes.oneOfType([propTypes.string, propTypes.array]),
	  name: propTypes.string,

	  /** Not required prop because we also allow undefined value */
	  data: propTypes.any,

	  /** Show non-enumerable properties */
	  showNonenumerable: propTypes.bool,

	  /** Sort object keys with optional compare function. */
	  sortObjectKeys: propTypes.oneOfType([propTypes.bool, propTypes.func]),

	  /** Provide a custom nodeRenderer */
	  nodeRenderer: propTypes.func
	};
	var ObjectInspector$1 = themeAcceptor(ObjectInspector);

	/*
	 * Polyfill for running tests
	 * `includes` is an ES2016 feature
	 */
	if (!Array.prototype.includes) {
	  Array.prototype.includes = function (searchElement
	  /*, fromIndex*/
	  ) {
	    var O = Object(this);
	    var len = parseInt(O.length) || 0;

	    if (len === 0) {
	      return false;
	    }

	    var n = parseInt(arguments[1]) || 0;
	    var k;

	    if (n >= 0) {
	      k = n;
	    } else {
	      k = len + n;

	      if (k < 0) {
	        k = 0;
	      }
	    }

	    var currentElement;

	    while (k < len) {
	      currentElement = O[k];

	      if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
	        // NaN !== NaN
	        return true;
	      }

	      k++;
	    }

	    return false;
	  };
	}

	function getHeaders(data) {
	  if (_typeof(data) === 'object') {
	    var rowHeaders; // is an array

	    if (Array.isArray(data)) {
	      var nRows = data.length;
	      rowHeaders = _toConsumableArray(Array(nRows).keys());
	    } else if (data !== null) {
	      // is an object
	      // keys are row indexes
	      rowHeaders = Object.keys(data);
	    } // Time: O(nRows * nCols)


	    var colHeaders = rowHeaders.reduce(function (colHeaders, rowHeader) {
	      var row = data[rowHeader];

	      if (_typeof(row) === 'object' && row !== null) {
	        /* O(nCols) Could optimize `includes` here */
	        var cols = Object.keys(row);
	        cols.reduce(function (xs, x) {
	          if (!xs.includes(x)) {
	            /* xs is the colHeaders to be filled by searching the row's indexes */
	            xs.push(x);
	          }

	          return xs;
	        }, colHeaders);
	      }

	      return colHeaders;
	    }, []);
	    return {
	      rowHeaders: rowHeaders,
	      colHeaders: colHeaders
	    };
	  }

	  return undefined;
	}

	var DataContainer = function DataContainer(_ref) {
	  var rows = _ref.rows,
	      columns = _ref.columns,
	      rowsData = _ref.rowsData;
	  var styles = useStyles('TableInspectorDataContainer');
	  var borderStyles = useStyles('TableInspectorLeftBorder');
	  return React__default.createElement("div", {
	    style: styles.div
	  }, React__default.createElement("table", {
	    style: styles.table
	  }, React__default.createElement("colgroup", null), React__default.createElement("tbody", null, rows.map(function (row, i) {
	    return React__default.createElement("tr", {
	      key: row,
	      style: styles.tr
	    }, React__default.createElement("td", {
	      style: _objectSpread$1({}, styles.td, borderStyles.none)
	    }, row), columns.map(function (column) {
	      var rowData = rowsData[i]; // rowData could be
	      //  object -> index by key
	      //    array -> index by array index
	      //    null -> pass
	      //  boolean -> pass
	      //  string -> pass (hasOwnProperty returns true for [0..len-1])
	      //  number -> pass
	      //  function -> pass
	      //  symbol
	      //  undefined -> pass

	      if (_typeof(rowData) === 'object' && rowData !== null && hasOwnProperty$2.call(rowData, column)) {
	        return React__default.createElement("td", {
	          key: column,
	          style: _objectSpread$1({}, styles.td, borderStyles.solid)
	        }, React__default.createElement(ObjectValue, {
	          object: rowData[column]
	        }));
	      } else {
	        return React__default.createElement("td", {
	          key: column,
	          style: _objectSpread$1({}, styles.td, borderStyles.solid)
	        });
	      }
	    }));
	  }))));
	};

	var SortIconContainer = function SortIconContainer(props) {
	  return React__default.createElement("div", {
	    style: {
	      position: 'absolute',
	      top: 1,
	      right: 0,
	      bottom: 1,
	      display: 'flex',
	      alignItems: 'center'
	    }
	  }, props.children);
	};

	var SortIcon = function SortIcon(_ref) {
	  var sortAscending = _ref.sortAscending;
	  var styles = useStyles('TableInspectorSortIcon');
	  var glyph = sortAscending ? '▲' : '▼';
	  return React__default.createElement("div", {
	    style: styles
	  }, glyph);
	};

	var TH = function TH(_ref2) {
	  var _ref2$sortAscending = _ref2.sortAscending,
	      sortAscending = _ref2$sortAscending === void 0 ? false : _ref2$sortAscending,
	      _ref2$sorted = _ref2.sorted,
	      sorted = _ref2$sorted === void 0 ? false : _ref2$sorted,
	      _ref2$onClick = _ref2.onClick,
	      onClick = _ref2$onClick === void 0 ? undefined : _ref2$onClick,
	      _ref2$borderStyle = _ref2.borderStyle,
	      borderStyle = _ref2$borderStyle === void 0 ? {} : _ref2$borderStyle,
	      children = _ref2.children,
	      thProps = _objectWithoutProperties(_ref2, ["sortAscending", "sorted", "onClick", "borderStyle", "children"]);

	  var styles = useStyles('TableInspectorTH');

	  var _useState = React.useState(false),
	      _useState2 = _slicedToArray(_useState, 2),
	      hovered = _useState2[0],
	      setHovered = _useState2[1];

	  var handleMouseEnter = React.useCallback(function () {
	    return setHovered(true);
	  }, []);
	  var handleMouseLeave = React.useCallback(function () {
	    return setHovered(false);
	  }, []);
	  return React__default.createElement("th", _extends({}, thProps, {
	    style: _objectSpread$1({}, styles.base, borderStyle, hovered ? styles.base[':hover'] : {}),
	    onMouseEnter: handleMouseEnter,
	    onMouseLeave: handleMouseLeave,
	    onClick: onClick
	  }), React__default.createElement("div", {
	    style: styles.div
	  }, children), sorted && React__default.createElement(SortIconContainer, null, React__default.createElement(SortIcon, {
	    sortAscending: sortAscending
	  })));
	};

	var HeaderContainer = function HeaderContainer(_ref) {
	  var _ref$indexColumnText = _ref.indexColumnText,
	      indexColumnText = _ref$indexColumnText === void 0 ? '(index)' : _ref$indexColumnText,
	      _ref$columns = _ref.columns,
	      columns = _ref$columns === void 0 ? [] : _ref$columns,
	      sorted = _ref.sorted,
	      sortIndexColumn = _ref.sortIndexColumn,
	      sortColumn = _ref.sortColumn,
	      sortAscending = _ref.sortAscending,
	      onTHClick = _ref.onTHClick,
	      onIndexTHClick = _ref.onIndexTHClick;
	  var styles = useStyles('TableInspectorHeaderContainer');
	  var borderStyles = useStyles('TableInspectorLeftBorder');
	  return React__default.createElement("div", {
	    style: styles.base
	  }, React__default.createElement("table", {
	    style: styles.table
	  }, React__default.createElement("tbody", null, React__default.createElement("tr", null, React__default.createElement(TH, {
	    borderStyle: borderStyles.none,
	    sorted: sorted && sortIndexColumn,
	    sortAscending: sortAscending,
	    onClick: onIndexTHClick
	  }, indexColumnText), columns.map(function (column) {
	    return React__default.createElement(TH, {
	      borderStyle: borderStyles.solid,
	      key: column,
	      sorted: sorted && sortColumn === column,
	      sortAscending: sortAscending,
	      onClick: onTHClick.bind(null, column)
	    }, column);
	  })))));
	};

	var TableInspector = function TableInspector(_ref) {
	  var data = _ref.data,
	      columns = _ref.columns;
	  var styles = useStyles('TableInspector');

	  var _useState = React.useState({
	    // has user ever clicked the <th> tag to sort?
	    sorted: false,
	    // is index column sorted?
	    sortIndexColumn: false,
	    // which column is sorted?
	    sortColumn: undefined,
	    // is sorting ascending or descending?
	    sortAscending: false
	  }),
	      _useState2 = _slicedToArray(_useState, 2),
	      _useState2$ = _useState2[0],
	      sorted = _useState2$.sorted,
	      sortIndexColumn = _useState2$.sortIndexColumn,
	      sortColumn = _useState2$.sortColumn,
	      sortAscending = _useState2$.sortAscending,
	      setState = _useState2[1];

	  var handleIndexTHClick = React.useCallback(function () {
	    setState(function (_ref2) {
	      var sortIndexColumn = _ref2.sortIndexColumn,
	          sortAscending = _ref2.sortAscending;
	      return {
	        sorted: true,
	        sortIndexColumn: true,
	        sortColumn: undefined,
	        // when changed to a new column, default to asending
	        sortAscending: sortIndexColumn ? !sortAscending : true
	      };
	    });
	  }, []);
	  var handleTHClick = React.useCallback(function (col) {
	    setState(function (_ref3) {
	      var sortColumn = _ref3.sortColumn,
	          sortAscending = _ref3.sortAscending;
	      return {
	        sorted: true,
	        sortIndexColumn: false,
	        // update sort column
	        sortColumn: col,
	        // when changed to a new column, default to asending
	        sortAscending: col === sortColumn ? !sortAscending : true
	      };
	    });
	  }, []);

	  if (_typeof(data) !== 'object' || data === null) {
	    return React__default.createElement("div", null);
	  }

	  var _getHeaders = getHeaders(data),
	      rowHeaders = _getHeaders.rowHeaders,
	      colHeaders = _getHeaders.colHeaders; // columns to be displayed are specified
	  // NOTE: there's some space for optimization here


	  if (columns !== undefined) {
	    colHeaders = columns;
	  }

	  var rowsData = rowHeaders.map(function (rowHeader) {
	    return data[rowHeader];
	  });
	  var columnDataWithRowIndexes;
	  /* row indexes are [0..nRows-1] */
	  // TODO: refactor

	  if (sortColumn !== undefined) {
	    // the column to be sorted (rowsData, column) => [[columnData, rowIndex]]
	    columnDataWithRowIndexes = rowsData.map(function (rowData, index) {
	      // normalize rowData
	      if (_typeof(rowData) === 'object' && rowData !== null
	      /*&& rowData.hasOwnProperty(sortColumn)*/
	      ) {
	          var columnData = rowData[sortColumn];
	          return [columnData, index];
	        }

	      return [undefined, index];
	    });
	  } else {
	    if (sortIndexColumn) {
	      columnDataWithRowIndexes = rowHeaders.map(function (rowData, index) {
	        var columnData = rowHeaders[index];
	        return [columnData, index];
	      });
	    }
	  }

	  if (columnDataWithRowIndexes !== undefined) {
	    // apply a mapper before sorting (because we need to access inside a container)
	    var comparator = function comparator(mapper, ascending) {
	      return function (a, b) {
	        var v1 = mapper(a); // the datum

	        var v2 = mapper(b);

	        var type1 = _typeof(v1);

	        var type2 = _typeof(v2); // use '<' operator to compare same type of values or compare type precedence order #


	        var lt = function lt(v1, v2) {
	          if (v1 < v2) {
	            return -1;
	          } else if (v1 > v2) {
	            return 1;
	          } else {
	            return 0;
	          }
	        };

	        var result;

	        if (type1 === type2) {
	          result = lt(v1, v2);
	        } else {
	          // order of different types
	          var order = {
	            string: 0,
	            number: 1,
	            object: 2,
	            symbol: 3,
	            boolean: 4,
	            undefined: 5,
	            function: 6
	          };
	          result = lt(order[type1], order[type2]);
	        } // reverse result if descending


	        if (!ascending) result = -result;
	        return result;
	      };
	    };

	    var sortedRowIndexes = columnDataWithRowIndexes.sort(comparator(function (item) {
	      return item[0];
	    }, sortAscending)).map(function (item) {
	      return item[1];
	    }); // sorted row indexes

	    rowHeaders = sortedRowIndexes.map(function (i) {
	      return rowHeaders[i];
	    });
	    rowsData = sortedRowIndexes.map(function (i) {
	      return rowsData[i];
	    });
	  }

	  return React__default.createElement("div", {
	    style: styles.base
	  }, React__default.createElement(HeaderContainer, {
	    columns: colHeaders
	    /* for sorting */
	    ,
	    sorted: sorted,
	    sortIndexColumn: sortIndexColumn,
	    sortColumn: sortColumn,
	    sortAscending: sortAscending,
	    onTHClick: handleTHClick,
	    onIndexTHClick: handleIndexTHClick
	  }), React__default.createElement(DataContainer, {
	    rows: rowHeaders,
	    columns: colHeaders,
	    rowsData: rowsData
	  }));
	};

	TableInspector.propTypes = {
	  /**
	   * the Javascript object you would like to inspect, either an array or an object
	   */
	  data: propTypes.oneOfType([propTypes.array, propTypes.object]),

	  /**
	   * An array of the names of the columns you'd like to display in the table
	   */
	  columns: propTypes.array
	};
	var TableInspector$1 = themeAcceptor(TableInspector);

	var TEXT_NODE_MAX_INLINE_CHARS = 80;

	var shouldInline = function shouldInline(data) {
	  return data.childNodes.length === 0 || data.childNodes.length === 1 && data.childNodes[0].nodeType === Node.TEXT_NODE && data.textContent.length < TEXT_NODE_MAX_INLINE_CHARS;
	};

	var OpenTag = function OpenTag(_ref) {
	  var tagName = _ref.tagName,
	      attributes = _ref.attributes,
	      styles = _ref.styles;
	  return React__default.createElement("span", {
	    style: styles.base
	  }, '<', React__default.createElement("span", {
	    style: styles.tagName
	  }, tagName), function () {
	    if (attributes) {
	      var attributeNodes = [];

	      for (var i = 0; i < attributes.length; i++) {
	        var attribute = attributes[i];
	        attributeNodes.push(React__default.createElement("span", {
	          key: i
	        }, ' ', React__default.createElement("span", {
	          style: styles.htmlAttributeName
	        }, attribute.name), '="', React__default.createElement("span", {
	          style: styles.htmlAttributeValue
	        }, attribute.value), '"'));
	      }

	      return attributeNodes;
	    }
	  }(), '>');
	}; // isChildNode style={{ marginLeft: -12 /* hack: offset placeholder */ }}


	var CloseTag = function CloseTag(_ref2) {
	  var tagName = _ref2.tagName,
	      _ref2$isChildNode = _ref2.isChildNode,
	      isChildNode = _ref2$isChildNode === void 0 ? false : _ref2$isChildNode,
	      styles = _ref2.styles;
	  return React__default.createElement("span", {
	    style: _extends({}, styles.base, isChildNode && styles.offsetLeft)
	  }, '</', React__default.createElement("span", {
	    style: styles.tagName
	  }, tagName), '>');
	};

	var nameByNodeType = {
	  1: 'ELEMENT_NODE',
	  3: 'TEXT_NODE',
	  7: 'PROCESSING_INSTRUCTION_NODE',
	  8: 'COMMENT_NODE',
	  9: 'DOCUMENT_NODE',
	  10: 'DOCUMENT_TYPE_NODE',
	  // http://stackoverflow.com/questions/6088972/get-doctype-of-an-html-as-string-with-javascript
	  11: 'DOCUMENT_FRAGMENT_NODE'
	};

	var DOMNodePreview = function DOMNodePreview(_ref3) {
	  var isCloseTag = _ref3.isCloseTag,
	      data = _ref3.data,
	      expanded = _ref3.expanded;
	  var styles = useStyles('DOMNodePreview');

	  if (isCloseTag) {
	    return React__default.createElement(CloseTag, {
	      styles: styles.htmlCloseTag,
	      isChildNode: true,
	      tagName: data.tagName
	    });
	  }

	  switch (data.nodeType) {
	    case Node.ELEMENT_NODE:
	      return React__default.createElement("span", null, React__default.createElement(OpenTag, {
	        tagName: data.tagName,
	        attributes: data.attributes,
	        styles: styles.htmlOpenTag
	      }), shouldInline(data) ? data.textContent : !expanded && '…', !expanded && React__default.createElement(CloseTag, {
	        tagName: data.tagName,
	        styles: styles.htmlCloseTag
	      }));

	    case Node.TEXT_NODE:
	      return React__default.createElement("span", null, data.textContent);

	    case Node.CDATA_SECTION_NODE:
	      return React__default.createElement("span", null, '<![CDATA[' + data.textContent + ']]>');

	    case Node.COMMENT_NODE:
	      return React__default.createElement("span", {
	        style: styles.htmlComment
	      }, '<!--', data.textContent, '-->');

	    case Node.PROCESSING_INSTRUCTION_NODE:
	      return React__default.createElement("span", null, data.nodeName);

	    case Node.DOCUMENT_TYPE_NODE:
	      return React__default.createElement("span", {
	        style: styles.htmlDoctype
	      }, '<!DOCTYPE ', data.name, data.publicId ? " PUBLIC \"".concat(data.publicId, "\"") : '', !data.publicId && data.systemId ? ' SYSTEM' : '', data.systemId ? " \"".concat(data.systemId, "\"") : '', '>');

	    case Node.DOCUMENT_NODE:
	      return React__default.createElement("span", null, data.nodeName);

	    case Node.DOCUMENT_FRAGMENT_NODE:
	      return React__default.createElement("span", null, data.nodeName);

	    default:
	      return React__default.createElement("span", null, nameByNodeType[data.nodeType]);
	  }
	};

	DOMNodePreview.propTypes = {
	  /** If true, just render a close tag */
	  isCloseTag: propTypes.bool,

	  /**  */
	  name: propTypes.string,

	  /** The DOM Node */
	  data: propTypes.object.isRequired,

	  /** Whether the DOM node has been expanded. */
	  expanded: propTypes.bool.isRequired
	};

	var domIterator =
	/*#__PURE__*/
	regeneratorRuntime.mark(function domIterator(data) {
	  var textInlined, i, node;
	  return regeneratorRuntime.wrap(function domIterator$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          if (!(data && data.childNodes)) {
	            _context.next = 17;
	            break;
	          }

	          textInlined = shouldInline(data);

	          if (!textInlined) {
	            _context.next = 4;
	            break;
	          }

	          return _context.abrupt("return");

	        case 4:
	          i = 0;

	        case 5:
	          if (!(i < data.childNodes.length)) {
	            _context.next = 14;
	            break;
	          }

	          node = data.childNodes[i];

	          if (!(node.nodeType === Node.TEXT_NODE && node.textContent.trim().length === 0)) {
	            _context.next = 9;
	            break;
	          }

	          return _context.abrupt("continue", 11);

	        case 9:
	          _context.next = 11;
	          return {
	            name: "".concat(node.tagName, "[").concat(i, "]"),
	            data: node
	          };

	        case 11:
	          i++;
	          _context.next = 5;
	          break;

	        case 14:
	          if (!data.tagName) {
	            _context.next = 17;
	            break;
	          }

	          _context.next = 17;
	          return {
	            name: 'CLOSE_TAG',
	            data: {
	              tagName: data.tagName
	            },
	            isCloseTag: true
	          };

	        case 17:
	        case "end":
	          return _context.stop();
	      }
	    }
	  }, domIterator);
	});

	var DOMInspector = function DOMInspector(props) {
	  return React__default.createElement(TreeView, _extends({
	    nodeRenderer: DOMNodePreview,
	    dataIterator: domIterator
	  }, props));
	};

	DOMInspector.propTypes = {
	  // The DOM Node to inspect
	  data: propTypes.object.isRequired
	};
	var DOMInspector$1 = themeAcceptor(DOMInspector);

	var Inspector = function Inspector(_ref) {
	  var _ref$table = _ref.table,
	      table = _ref$table === void 0 ? false : _ref$table,
	      data = _ref.data,
	      rest = _objectWithoutProperties(_ref, ["table", "data"]);

	  if (table) {
	    return React__default.createElement(TableInspector$1, _extends({
	      data: data
	    }, rest));
	  }

	  if (isDom(data)) return React__default.createElement(DOMInspector$1, _extends({
	    data: data
	  }, rest));
	  return React__default.createElement(ObjectInspector$1, _extends({
	    data: data
	  }, rest));
	};

	Inspector.propTypes = {
	  data: propTypes.any,
	  name: propTypes.string,
	  table: propTypes.bool
	};

	var _default = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	exports.__esModule = true;

	var styles = function (props) {
	    return (__assign(__assign({}, ((props.variant || 'light') === 'light' ? Inspector.chromeLight : Inspector.chromeDark)), { 
	        /**
	         * General
	         */
	        PADDING: '3px 22px 2px 0', 
	        /**
	         * Default log styles
	         */
	        LOG_COLOR: 'rgba(255,255,255,0.9)', LOG_BACKGROUND: 'transparent', LOG_BORDER: 'rgba(255,255,255,0.03)', LOG_ICON_WIDTH: 10, LOG_ICON_HEIGHT: 18, LOG_ICON: 'none', LOG_AMOUNT_BACKGROUND: '#42597f', LOG_AMOUNT_COLOR: '#8d8f91', 
	        /**
	         * Log types
	         */
	        LOG_WARN_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACkSURBVChTbY7BCoJQFERn0Q/3BX1JuxQjsSCXiV8gtCgxhCIrKIRIqKDVzXl5w5cNHBjm6eGinXiAXu5inY2xYm/mbpIh+vcFhLA3sx0athNUhymEsP+10lAEEA17x8o/9wFuNGnYuVlWve0SQl7P0sBu3aq2R1Q/1JzSkYGd29eqNv2wjdnUuvNRciC/N+qe+7gidbA8zyHkOINsvA/sumcOkjcabcBmw2+mMgAAAABJRU5ErkJggg==)", LOG_WARN_BACKGROUND: '#332b00', LOG_WARN_COLOR: '#ffdc9e', LOG_WARN_BORDER: '#650', LOG_WARN_AMOUNT_BACKGROUND: '#ffbb17', LOG_WARN_AMOUNT_COLOR: '#8d8f91', LOG_ERROR_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADESURBVChTY4CB7ZI8tmfU5E6e01b+DMIgNkgMKg0BR9Vkux6YWPx/bemIgkFiIDmwogOaqrYPzazAEm8DwuGKYGyQHEgNw0VT05Mwib9v3v7/kJEHxiA2TDFIDcNNU4vPMFPACj58/P/v40cwGyYOUsNwy8IZRSFIEUgxskKQGoZrzp4ErQapYbgYHG371M4dLACTQGaD5EBqwD6/FpzQ9dTBE64IhkFiIDmwIhi4mlJqey8o4eR9r8jPIAxig8QgsgwMAFZz1YtGPXgjAAAAAElFTkSuQmCC)", LOG_ERROR_BACKGROUND: '#290000', LOG_ERROR_BORDER: '#5b0000', LOG_ERROR_COLOR: '#ff8080', LOG_ERROR_AMOUNT_BACKGROUND: '#dc2727', LOG_ERROR_AMOUNT_COLOR: '#8d8f91', LOG_DEBUG_ICON: "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 459 459'%3e%3cpath fill='%234D88FF' d='M433.5 127.5h-71.4a177.7 177.7 0 0 0-45.9-51L357 35.7 321.3 0l-56.1 56.1c-10.2-2.6-23-5.1-35.7-5.1s-25.5 2.5-35.7 5.1L137.7 0 102 35.7l40.8 40.8a177.7 177.7 0 0 0-45.9 51H25.5v51H79c-2.5 7.7-2.5 17.9-2.5 25.5v25.5h-51v51h51V306a88 88 0 0 0 2.5 25.5H25.5v51h71.4A152.2 152.2 0 0 0 229.5 459c56.1 0 107.1-30.6 132.6-76.5h71.4v-51H380c2.5-7.7 2.5-17.9 2.5-25.5v-25.5h51v-51h-51V204c0-7.7 0-17.9-2.5-25.5h53.5v-51zm-153 204h-102v-51h102v51zm0-102h-102v-51h102v51z'/%3e%3c/svg%3e\")", LOG_DEBUG_BACKGROUND: '', LOG_DEBUG_BORDER: '', LOG_DEBUG_COLOR: '#4D88FF', LOG_COMMAND_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABaSURBVChTY6AtmDx5cvnUqVP1oFzsoL+/XwCo8DEQv584caIVVBg7mDBhghxQ4Y2+vr6vU6ZM8YAKYwdA00SB+CxQ8S+g4jCoMCYgSiFRVpPkGaAiHMHDwAAA5Ko+F4/l6+MAAAAASUVORK5CYII=)", LOG_RESULT_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABpSURBVChTY6A92LNnj96uXbvKoVzsYMeOHVbbt29/D1T4eP/+/QJQYVSwe/duD6CCr0B8A8iWgwqjAqBk2NatW38B6bPbtm0TBYkBFbsA+c9ANFgRCBCtEASAAoSthgGiPAMD2IOHgQEA521bM7uG52wAAAAASUVORK5CYII=)", LOG_INFO_ICON: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADISURBVChTY4ABp/AztmZBZ07qe538rO114rOa8+GTskYHbKHSEOARd6nLIOTsf61gIA46U6kVePYQiK3uc/K/hPG+LrCi8IyrtkZh5yCKgk/80w46ba0RdGYGhH/2v6rXyf88qtttGVwSLp2ECQLxeiAu1wo6uwpJ7L+o2f6TDA6xZz8jCyqFnuHXCj4djywmZXHoM/EK0azGqhBsNYpngL6VCTnGqRF4xgKo+D5IDO4ZEEAKnjcQBafvqwWf/YoSPDCAP8AZGAC7mLM81zgOTQAAAABJRU5ErkJggg==)", 
	        /**
	         * Fonts
	         */
	        BASE_FONT_FAMILY: 'Consolas, Lucida Console, Courier New, monospace', BASE_FONT_SIZE: '12px', 
	        /**
	         * Other
	         */
	        ARROW_FONT_SIZE: 10, OBJECT_VALUE_STRING_COLOR: 'rgb(233,63,59)' }));
	};
	exports["default"] = styles;

	});

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

	var index = memoize(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  /* o */
	  && prop.charCodeAt(1) === 110
	  /* n */
	  && prop.charCodeAt(2) < 91;
	}
	/* Z+1 */
	);

	var testOmitPropsOnStringTag = index;

	var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
	  return key !== 'theme' && key !== 'innerRef';
	};

	var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
	  return typeof tag === 'string' && // 96 is one less than the char code
	  // for "a" so this is checking that
	  // it's a lowercase character
	  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
	var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";

	var createStyled = function createStyled(tag, options) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (tag === undefined) {
	      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
	    }
	  }

	  var identifierName;
	  var shouldForwardProp;
	  var targetClassName;

	  if (options !== undefined) {
	    identifierName = options.label;
	    targetClassName = options.target;
	    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
	      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
	      options.shouldForwardProp(propName);
	    } : options.shouldForwardProp;
	  }

	  var isReal = tag.__emotion_real === tag;
	  var baseTag = isReal && tag.__emotion_base || tag;

	  if (typeof shouldForwardProp !== 'function' && isReal) {
	    shouldForwardProp = tag.__emotion_forwardProp;
	  }

	  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
	  var shouldUseAs = !defaultShouldForwardProp('as');
	  return function () {
	    var args = arguments;
	    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

	    if (identifierName !== undefined) {
	      styles.push("label:" + identifierName + ";");
	    }

	    if (args[0] == null || args[0].raw === undefined) {
	      styles.push.apply(styles, args);
	    } else {
	      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
	        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
	      }

	      styles.push(args[0][0]);
	      var len = args.length;
	      var i = 1;

	      for (; i < len; i++) {
	        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
	          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
	        }

	        styles.push(args[i], args[0][i]);
	      }
	    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


	    var Styled = withEmotionCache(function (props, context, ref) {
	      return React.createElement(ThemeContext.Consumer, null, function (theme) {
	        var finalTag = shouldUseAs && props.as || baseTag;
	        var className = '';
	        var classInterpolations = [];
	        var mergedProps = props;

	        if (props.theme == null) {
	          mergedProps = {};

	          for (var key in props) {
	            mergedProps[key] = props[key];
	          }

	          mergedProps.theme = theme;
	        }

	        if (typeof props.className === 'string') {
	          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
	        } else if (props.className != null) {
	          className = props.className + " ";
	        }

	        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
	        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
	        className += context.key + "-" + serialized.name;

	        if (targetClassName !== undefined) {
	          className += " " + targetClassName;
	        }

	        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
	        var newProps = {};

	        for (var _key in props) {
	          if (shouldUseAs && _key === 'as') continue;

	          if ( // $FlowFixMe
	          finalShouldForwardProp(_key)) {
	            newProps[_key] = props[_key];
	          }
	        }

	        newProps.className = className;
	        newProps.ref = ref || props.innerRef;

	        if (process.env.NODE_ENV !== 'production' && props.innerRef) {
	          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
	        }

	        var ele = React.createElement(finalTag, newProps);

	        return ele;
	      });
	    });
	    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
	    Styled.defaultProps = tag.defaultProps;
	    Styled.__emotion_real = Styled;
	    Styled.__emotion_base = baseTag;
	    Styled.__emotion_styles = styles;
	    Styled.__emotion_forwardProp = shouldForwardProp;
	    Object.defineProperty(Styled, 'toString', {
	      value: function value() {
	        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
	          return 'NO_COMPONENT_SELECTOR';
	        } // $FlowFixMe: coerce undefined to string


	        return "." + targetClassName;
	      }
	    });

	    Styled.withComponent = function (nextTag, nextOptions) {
	      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread$2({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
	    };

	    return Styled;
	  };
	};

	var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

	var newStyled = createStyled.bind();
	tags.forEach(function (tagName) {
	  newStyled[tagName] = newStyled(tagName);
	});

	var theme$2 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	exports["default"] = newStyled["default"];

	});

	var elements = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	/**
	 * Return themed log-method style
	 * @param style The style
	 * @param type The method
	 */
	var Themed = function (style, method, styles) {
	    return styles["LOG_" + method.toUpperCase() + "_" + style.toUpperCase()] ||
	        styles["LOG_" + style.toUpperCase()];
	};
	/**
	 * console-feed
	 */
	exports.Root = theme$2["default"]('div')({
	    wordBreak: 'break-word',
	    width: '100%'
	});
	/**
	 * console-message
	 */
	exports.Message = theme$2["default"]('div')(function (_a) {
	    var _b = _a.theme, styles = _b.styles, method = _b.method;
	    return ({
	        position: 'relative',
	        display: 'flex',
	        color: Themed('color', method, styles),
	        backgroundColor: Themed('background', method, styles),
	        borderTop: "1px solid " + Themed('border', method, styles),
	        borderBottom: "1px solid " + Themed('border', method, styles),
	        marginTop: -1,
	        marginBottom: +/^warn|error$/.test(method),
	        paddingLeft: 10,
	        boxSizing: 'border-box',
	        '& *': {
	            verticalAlign: 'top',
	            boxSizing: 'border-box',
	            fontFamily: styles.BASE_FONT_FAMILY,
	            whiteSpace: 'pre-wrap',
	            fontSize: styles.BASE_FONT_SIZE
	        },
	        '& a': {
	            color: 'rgb(177, 177, 177)'
	        }
	    });
	});
	/**
	 * message-icon
	 */
	exports.Icon = theme$2["default"]('div')(function (_a) {
	    var _b = _a.theme, styles = _b.styles, method = _b.method;
	    return ({
	        width: styles.LOG_ICON_WIDTH,
	        height: styles.LOG_ICON_HEIGHT,
	        backgroundImage: Themed('icon', method, styles),
	        backgroundRepeat: 'no-repeat',
	        backgroundSize: styles.LOG_ICON_BACKGROUND_SIZE,
	        backgroundPosition: '50% 50%'
	    });
	});
	/**
	 * message-amount
	 */
	exports.AmountIcon = theme$2["default"]('div')(function (_a) {
	    var _b = _a.theme, styles = _b.styles, method = _b.method;
	    return ({
	        height: '16px',
	        margin: '1px 0',
	        whiteSpace: 'nowrap',
	        fontSize: '10px',
	        lineHeight: '17px',
	        padding: '0px 3px',
	        background: Themed('amount_background', method, styles),
	        color: Themed('amount_color', method, styles),
	        borderRadius: '8px',
	        minWidth: '18px',
	        textAlign: 'center'
	    });
	});
	/**
	 * console-content
	 */
	exports.Content = theme$2["default"]('div')(function (_a) {
	    var styles = _a.theme.styles;
	    return ({
	        clear: 'right',
	        position: 'relative',
	        padding: styles.PADDING,
	        marginLeft: 15,
	        minHeight: 18,
	        flex: 'auto',
	        width: 'calc(100% - 15px)'
	    });
	});

	});

	var elements$1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	/**
	 * Object root
	 */
	exports.Root = theme$2["default"]('div')({
	    display: 'inline-block',
	    wordBreak: 'break-all',
	    '&::after': {
	        content: "' '",
	        display: 'inline-block'
	    },
	    '& > li': {
	        backgroundColor: 'transparent !important',
	        display: 'inline-block'
	    },
	    '& ol:empty': {
	        paddingLeft: '0 !important'
	    }
	});
	/**
	 * Table
	 */
	exports.Table = theme$2["default"]('span')({
	    '& > li': {
	        display: 'inline-block',
	        marginTop: 5
	    }
	});
	/**
	 * HTML
	 */
	exports.HTML = theme$2["default"]('span')({
	    display: 'inline-block',
	    '& div:hover': {
	        backgroundColor: 'rgba(255, 220, 158, .05) !important',
	        borderRadius: '2px'
	    }
	});
	/**
	 * Object constructor
	 */
	exports.Constructor = theme$2["default"]('span')({
	    '& > span > span:nth-child(1)': {
	        opacity: 0.6
	    }
	});

	});

	var html5NamedCharRefs = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	var HTML5NamedCharRefs = {
	    // We don't need the complete named character reference because linkifyHtml
	    // does not modify the escape sequences. We do need &nbsp; so that
	    // whitespace is parsed properly. Other types of whitespace should already
	    // be accounted for
	    nbsp: "\xA0"
	};
	exports.default = HTML5NamedCharRefs;
	});

	var entityParser = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	function EntityParser(named) {
	  this.named = named;
	}

	var HEXCHARCODE = /^#[xX]([A-Fa-f0-9]+)$/;
	var CHARCODE = /^#([0-9]+)$/;
	var NAMED = /^([A-Za-z0-9]+)$/;

	EntityParser.prototype.parse = function (entity) {
	  if (!entity) {
	    return;
	  }
	  var matches = entity.match(HEXCHARCODE);
	  if (matches) {
	    return "&#x" + matches[1] + ";";
	  }
	  matches = entity.match(CHARCODE);
	  if (matches) {
	    return "&#" + matches[1] + ";";
	  }
	  matches = entity.match(NAMED);
	  if (matches) {
	    return this.named[matches[1]] || "&" + matches[1] + ";";
	  }
	};

	exports.default = EntityParser;
	});

	var utils = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.isSpace = isSpace;
	exports.isAlpha = isAlpha;
	exports.preprocessInput = preprocessInput;
	var WSP = /[\t\n\f ]/;
	var ALPHA = /[A-Za-z]/;
	var CRLF = /\r\n?/g;

	function isSpace(char) {
	  return WSP.test(char);
	}

	function isAlpha(char) {
	  return ALPHA.test(char);
	}

	function preprocessInput(input) {
	  return input.replace(CRLF, "\n");
	}
	});

	var eventedTokenizer = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	function EventedTokenizer(delegate, entityParser) {
	  this.delegate = delegate;
	  this.entityParser = entityParser;

	  this.state = null;
	  this.input = null;

	  this.index = -1;
	  this.line = -1;
	  this.column = -1;
	  this.tagLine = -1;
	  this.tagColumn = -1;

	  this.reset();
	}

	EventedTokenizer.prototype = {
	  reset: function reset() {
	    this.state = 'beforeData';
	    this.input = '';

	    this.index = 0;
	    this.line = 1;
	    this.column = 0;

	    this.tagLine = -1;
	    this.tagColumn = -1;

	    this.delegate.reset();
	  },

	  tokenize: function tokenize(input) {
	    this.reset();
	    this.tokenizePart(input);
	    this.tokenizeEOF();
	  },

	  tokenizePart: function tokenizePart(input) {
	    this.input += (0, utils.preprocessInput)(input);

	    while (this.index < this.input.length) {
	      this.states[this.state].call(this);
	    }
	  },

	  tokenizeEOF: function tokenizeEOF() {
	    this.flushData();
	  },

	  flushData: function flushData() {
	    if (this.state === 'data') {
	      this.delegate.finishData();
	      this.state = 'beforeData';
	    }
	  },

	  peek: function peek() {
	    return this.input.charAt(this.index);
	  },

	  consume: function consume() {
	    var char = this.peek();

	    this.index++;

	    if (char === "\n") {
	      this.line++;
	      this.column = 0;
	    } else {
	      this.column++;
	    }

	    return char;
	  },

	  consumeCharRef: function consumeCharRef() {
	    var endIndex = this.input.indexOf(';', this.index);
	    if (endIndex === -1) {
	      return;
	    }
	    var entity = this.input.slice(this.index, endIndex);
	    var chars = this.entityParser.parse(entity);
	    if (chars) {
	      var count = entity.length;
	      // consume the entity chars
	      while (count) {
	        this.consume();
	        count--;
	      }
	      // consume the `;`
	      this.consume();

	      return chars;
	    }
	  },

	  markTagStart: function markTagStart() {
	    // these properties to be removed in next major bump
	    this.tagLine = this.line;
	    this.tagColumn = this.column;

	    if (this.delegate.tagOpen) {
	      this.delegate.tagOpen();
	    }
	  },

	  states: {
	    beforeData: function beforeData() {
	      var char = this.peek();

	      if (char === "<") {
	        this.state = 'tagOpen';
	        this.markTagStart();
	        this.consume();
	      } else {
	        this.state = 'data';
	        this.delegate.beginData();
	      }
	    },

	    data: function data() {
	      var char = this.peek();

	      if (char === "<") {
	        this.delegate.finishData();
	        this.state = 'tagOpen';
	        this.markTagStart();
	        this.consume();
	      } else if (char === "&") {
	        this.consume();
	        this.delegate.appendToData(this.consumeCharRef() || "&");
	      } else {
	        this.consume();
	        this.delegate.appendToData(char);
	      }
	    },

	    tagOpen: function tagOpen() {
	      var char = this.consume();

	      if (char === "!") {
	        this.state = 'markupDeclaration';
	      } else if (char === "/") {
	        this.state = 'endTagOpen';
	      } else if ((0, utils.isAlpha)(char)) {
	        this.state = 'tagName';
	        this.delegate.beginStartTag();
	        this.delegate.appendToTagName(char.toLowerCase());
	      }
	    },

	    markupDeclaration: function markupDeclaration() {
	      var char = this.consume();

	      if (char === "-" && this.input.charAt(this.index) === "-") {
	        this.consume();
	        this.state = 'commentStart';
	        this.delegate.beginComment();
	      }
	    },

	    commentStart: function commentStart() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentStartDash';
	      } else if (char === ">") {
	        this.delegate.finishComment();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToCommentData(char);
	        this.state = 'comment';
	      }
	    },

	    commentStartDash: function commentStartDash() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentEnd';
	      } else if (char === ">") {
	        this.delegate.finishComment();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToCommentData("-");
	        this.state = 'comment';
	      }
	    },

	    comment: function comment() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentEndDash';
	      } else {
	        this.delegate.appendToCommentData(char);
	      }
	    },

	    commentEndDash: function commentEndDash() {
	      var char = this.consume();

	      if (char === "-") {
	        this.state = 'commentEnd';
	      } else {
	        this.delegate.appendToCommentData("-" + char);
	        this.state = 'comment';
	      }
	    },

	    commentEnd: function commentEnd() {
	      var char = this.consume();

	      if (char === ">") {
	        this.delegate.finishComment();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToCommentData("--" + char);
	        this.state = 'comment';
	      }
	    },

	    tagName: function tagName() {
	      var char = this.consume();

	      if ((0, utils.isSpace)(char)) {
	        this.state = 'beforeAttributeName';
	      } else if (char === "/") {
	        this.state = 'selfClosingStartTag';
	      } else if (char === ">") {
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.appendToTagName(char);
	      }
	    },

	    beforeAttributeName: function beforeAttributeName() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	        return;
	      } else if (char === "/") {
	        this.state = 'selfClosingStartTag';
	        this.consume();
	      } else if (char === ">") {
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'attributeName';
	        this.delegate.beginAttribute();
	        this.consume();
	        this.delegate.appendToAttributeName(char);
	      }
	    },

	    attributeName: function attributeName() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.state = 'afterAttributeName';
	        this.consume();
	      } else if (char === "/") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'selfClosingStartTag';
	      } else if (char === "=") {
	        this.state = 'beforeAttributeValue';
	        this.consume();
	      } else if (char === ">") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.consume();
	        this.delegate.appendToAttributeName(char);
	      }
	    },

	    afterAttributeName: function afterAttributeName() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	        return;
	      } else if (char === "/") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'selfClosingStartTag';
	      } else if (char === "=") {
	        this.consume();
	        this.state = 'beforeAttributeValue';
	      } else if (char === ">") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'attributeName';
	        this.delegate.beginAttribute();
	        this.delegate.appendToAttributeName(char);
	      }
	    },

	    beforeAttributeValue: function beforeAttributeValue() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	      } else if (char === '"') {
	        this.state = 'attributeValueDoubleQuoted';
	        this.delegate.beginAttributeValue(true);
	        this.consume();
	      } else if (char === "'") {
	        this.state = 'attributeValueSingleQuoted';
	        this.delegate.beginAttributeValue(true);
	        this.consume();
	      } else if (char === ">") {
	        this.delegate.beginAttributeValue(false);
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'attributeValueUnquoted';
	        this.delegate.beginAttributeValue(false);
	        this.consume();
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    attributeValueDoubleQuoted: function attributeValueDoubleQuoted() {
	      var char = this.consume();

	      if (char === '"') {
	        this.delegate.finishAttributeValue();
	        this.state = 'afterAttributeValueQuoted';
	      } else if (char === "&") {
	        this.delegate.appendToAttributeValue(this.consumeCharRef('"') || "&");
	      } else {
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    attributeValueSingleQuoted: function attributeValueSingleQuoted() {
	      var char = this.consume();

	      if (char === "'") {
	        this.delegate.finishAttributeValue();
	        this.state = 'afterAttributeValueQuoted';
	      } else if (char === "&") {
	        this.delegate.appendToAttributeValue(this.consumeCharRef("'") || "&");
	      } else {
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    attributeValueUnquoted: function attributeValueUnquoted() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.state = 'beforeAttributeName';
	      } else if (char === "&") {
	        this.consume();
	        this.delegate.appendToAttributeValue(this.consumeCharRef(">") || "&");
	      } else if (char === ">") {
	        this.delegate.finishAttributeValue();
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.consume();
	        this.delegate.appendToAttributeValue(char);
	      }
	    },

	    afterAttributeValueQuoted: function afterAttributeValueQuoted() {
	      var char = this.peek();

	      if ((0, utils.isSpace)(char)) {
	        this.consume();
	        this.state = 'beforeAttributeName';
	      } else if (char === "/") {
	        this.consume();
	        this.state = 'selfClosingStartTag';
	      } else if (char === ">") {
	        this.consume();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'beforeAttributeName';
	      }
	    },

	    selfClosingStartTag: function selfClosingStartTag() {
	      var char = this.peek();

	      if (char === ">") {
	        this.consume();
	        this.delegate.markTagAsSelfClosing();
	        this.delegate.finishTag();
	        this.state = 'beforeData';
	      } else {
	        this.state = 'beforeAttributeName';
	      }
	    },

	    endTagOpen: function endTagOpen() {
	      var char = this.consume();

	      if ((0, utils.isAlpha)(char)) {
	        this.state = 'tagName';
	        this.delegate.beginEndTag();
	        this.delegate.appendToTagName(char.toLowerCase());
	      }
	    }
	  }
	};

	exports.default = EventedTokenizer;
	});

	var tokenizer = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _eventedTokenizer2 = _interopRequireDefault(eventedTokenizer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Tokenizer(entityParser, options) {
	  this.token = null;
	  this.startLine = 1;
	  this.startColumn = 0;
	  this.options = options || {};
	  this.tokenizer = new _eventedTokenizer2.default(this, entityParser);
	}

	Tokenizer.prototype = {
	  tokenize: function tokenize(input) {
	    this.tokens = [];
	    this.tokenizer.tokenize(input);
	    return this.tokens;
	  },

	  tokenizePart: function tokenizePart(input) {
	    this.tokens = [];
	    this.tokenizer.tokenizePart(input);
	    return this.tokens;
	  },

	  tokenizeEOF: function tokenizeEOF() {
	    this.tokens = [];
	    this.tokenizer.tokenizeEOF();
	    return this.tokens[0];
	  },

	  reset: function reset() {
	    this.token = null;
	    this.startLine = 1;
	    this.startColumn = 0;
	  },

	  addLocInfo: function addLocInfo() {
	    if (this.options.loc) {
	      this.token.loc = {
	        start: {
	          line: this.startLine,
	          column: this.startColumn
	        },
	        end: {
	          line: this.tokenizer.line,
	          column: this.tokenizer.column
	        }
	      };
	    }
	    this.startLine = this.tokenizer.line;
	    this.startColumn = this.tokenizer.column;
	  },

	  // Data

	  beginData: function beginData() {
	    this.token = {
	      type: 'Chars',
	      chars: ''
	    };
	    this.tokens.push(this.token);
	  },

	  appendToData: function appendToData(char) {
	    this.token.chars += char;
	  },

	  finishData: function finishData() {
	    this.addLocInfo();
	  },

	  // Comment

	  beginComment: function beginComment() {
	    this.token = {
	      type: 'Comment',
	      chars: ''
	    };
	    this.tokens.push(this.token);
	  },

	  appendToCommentData: function appendToCommentData(char) {
	    this.token.chars += char;
	  },

	  finishComment: function finishComment() {
	    this.addLocInfo();
	  },

	  // Tags - basic

	  beginStartTag: function beginStartTag() {
	    this.token = {
	      type: 'StartTag',
	      tagName: '',
	      attributes: [],
	      selfClosing: false
	    };
	    this.tokens.push(this.token);
	  },

	  beginEndTag: function beginEndTag() {
	    this.token = {
	      type: 'EndTag',
	      tagName: ''
	    };
	    this.tokens.push(this.token);
	  },

	  finishTag: function finishTag() {
	    this.addLocInfo();
	  },

	  markTagAsSelfClosing: function markTagAsSelfClosing() {
	    this.token.selfClosing = true;
	  },

	  // Tags - name

	  appendToTagName: function appendToTagName(char) {
	    this.token.tagName += char;
	  },

	  // Tags - attributes

	  beginAttribute: function beginAttribute() {
	    this._currentAttribute = ["", "", null];
	    this.token.attributes.push(this._currentAttribute);
	  },

	  appendToAttributeName: function appendToAttributeName(char) {
	    this._currentAttribute[0] += char;
	  },

	  beginAttributeValue: function beginAttributeValue(isQuoted) {
	    this._currentAttribute[2] = isQuoted;
	  },

	  appendToAttributeValue: function appendToAttributeValue(char) {
	    this._currentAttribute[1] = this._currentAttribute[1] || "";
	    this._currentAttribute[1] += char;
	  },

	  finishAttributeValue: function finishAttributeValue() {}
	};

	exports.default = Tokenizer;
	});

	var tokenize_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = tokenize;



	var _tokenizer2 = _interopRequireDefault(tokenizer);



	var _entityParser2 = _interopRequireDefault(entityParser);



	var _html5NamedCharRefs2 = _interopRequireDefault(html5NamedCharRefs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function tokenize(input, options) {
	  var tokenizer = new _tokenizer2.default(new _entityParser2.default(_html5NamedCharRefs2.default), options);
	  return tokenizer.tokenize(input);
	}
	});

	var simpleHtmlTokenizer = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _html5NamedCharRefs2 = _interopRequireDefault(html5NamedCharRefs);



	var _entityParser2 = _interopRequireDefault(entityParser);



	var _eventedTokenizer2 = _interopRequireDefault(eventedTokenizer);



	var _tokenizer2 = _interopRequireDefault(tokenizer);



	var _tokenize2 = _interopRequireDefault(tokenize_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HTML5Tokenizer = {
		HTML5NamedCharRefs: _html5NamedCharRefs2.default,
		EntityParser: _entityParser2.default,
		EventedTokenizer: _eventedTokenizer2.default,
		Tokenizer: _tokenizer2.default,
		tokenize: _tokenize2.default
	};

	exports.default = HTML5Tokenizer;
	});

	var _class = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.inherits = inherits;
	function inherits(parent, child) {
		var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		var extended = Object.create(parent.prototype);
		for (var p in props) {
			extended[p] = props[p];
		}
		extended.constructor = child;
		child.prototype = extended;
		return child;
	}
	});

	var options = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var defaults = {
		defaultProtocol: 'http',
		events: null,
		format: noop,
		formatHref: noop,
		nl2br: false,
		tagName: 'a',
		target: typeToTarget,
		validate: true,
		ignoreTags: [],
		attributes: null,
		className: 'linkified' // Deprecated value - no default class will be provided in the future
	};

	exports.defaults = defaults;
	exports.Options = Options;
	exports.contains = contains;


	function Options(opts) {
		opts = opts || {};

		this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
		this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
		this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
		this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
		this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
		this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
		this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
		this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
		this.ignoreTags = [];

		// linkAttributes and linkClass is deprecated
		this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
		this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

		// Make all tags names upper case
		var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
		for (var i = 0; i < ignoredTags.length; i++) {
			this.ignoreTags.push(ignoredTags[i].toUpperCase());
		}
	}

	Options.prototype = {
		/**
	  * Given the token, return all options for how it should be displayed
	  */
		resolve: function resolve(token) {
			var href = token.toHref(this.defaultProtocol);
			return {
				formatted: this.get('format', token.toString(), token),
				formattedHref: this.get('formatHref', href, token),
				tagName: this.get('tagName', href, token),
				className: this.get('className', href, token),
				target: this.get('target', href, token),
				events: this.getObject('events', href, token),
				attributes: this.getObject('attributes', href, token)
			};
		},


		/**
	  * Returns true or false based on whether a token should be displayed as a
	  * link based on the user options. By default,
	  */
		check: function check(token) {
			return this.get('validate', token.toString(), token);
		},


		// Private methods

		/**
	  * Resolve an option's value based on the value of the option and the given
	  * params.
	  * @param {String} key Name of option to use
	  * @param operator will be passed to the target option if it's method
	  * @param {MultiToken} token The token from linkify.tokenize
	  */
		get: function get(key, operator, token) {
			var optionValue = void 0,
			    option = this[key];
			if (!option) {
				return option;
			}

			switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
				case 'function':
					return option(operator, token.type);
				case 'object':
					optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
					return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
			}

			return option;
		},
		getObject: function getObject(key, operator, token) {
			var option = this[key];
			return typeof option === 'function' ? option(operator, token.type) : option;
		}
	};

	/**
	 * Quick indexOf replacement for checking the ignoreTags option
	 */
	function contains(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return true;
			}
		}
		return false;
	}

	function noop(val) {
		return val;
	}

	function typeToTarget(href, type) {
		return type === 'url' ? '_blank' : null;
	}
	});

	var state = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.stateify = exports.TokenState = exports.CharacterState = undefined;



	function createStateClass() {
		return function (tClass) {
			this.j = [];
			this.T = tClass || null;
		};
	}

	/**
		A simple state machine that can emit token classes

		The `j` property in this class refers to state jumps. It's a
		multidimensional array where for each element:

		* index [0] is a symbol or class of symbols to transition to.
		* index [1] is a State instance which matches

		The type of symbol will depend on the target implementation for this class.
		In Linkify, we have a two-stage scanner. Each stage uses this state machine
		but with a slighly different (polymorphic) implementation.

		The `T` property refers to the token class.

		TODO: Can the `on` and `next` methods be combined?

		@class BaseState
	*/
	var BaseState = createStateClass();
	BaseState.prototype = {
		defaultTransition: false,

		/**
	 	@method constructor
	 	@param {Class} tClass Pass in the kind of token to emit if there are
	 		no jumps after this state and the state is accepting.
	 */

		/**
	 	On the given symbol(s), this machine should go to the given state
	 		@method on
	 	@param {Array|Mixed} symbol
	 	@param {BaseState} state Note that the type of this state should be the
	 		same as the current instance (i.e., don't pass in a different
	 		subclass)
	 */
		on: function on(symbol, state) {
			if (symbol instanceof Array) {
				for (var i = 0; i < symbol.length; i++) {
					this.j.push([symbol[i], state]);
				}
				return this;
			}
			this.j.push([symbol, state]);
			return this;
		},


		/**
	 	Given the next item, returns next state for that item
	 	@method next
	 	@param {Mixed} item Should be an instance of the symbols handled by
	 		this particular machine.
	 	@return {State} state Returns false if no jumps are available
	 */
		next: function next(item) {
			for (var i = 0; i < this.j.length; i++) {
				var jump = this.j[i];
				var symbol = jump[0]; // Next item to check for
				var state = jump[1]; // State to jump to if items match

				// compare item with symbol
				if (this.test(item, symbol)) {
					return state;
				}
			}

			// Nowhere left to jump!
			return this.defaultTransition;
		},


		/**
	 	Does this state accept?
	 	`true` only of `this.T` exists
	 		@method accepts
	 	@return {Boolean}
	 */
		accepts: function accepts() {
			return !!this.T;
		},


		/**
	 	Determine whether a given item "symbolizes" the symbol, where symbol is
	 	a class of items handled by this state machine.
	 		This method should be overriden in extended classes.
	 		@method test
	 	@param {Mixed} item Does this item match the given symbol?
	 	@param {Mixed} symbol
	 	@return {Boolean}
	 */
		test: function test(item, symbol) {
			return item === symbol;
		},


		/**
	 	Emit the token for this State (just return it in this case)
	 	If this emits a token, this instance is an accepting state
	 	@method emit
	 	@return {Class} T
	 */
		emit: function emit() {
			return this.T;
		}
	};

	/**
		State machine for string-based input

		@class CharacterState
		@extends BaseState
	*/
	var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
		/**
	 	Does the given character match the given character or regular
	 	expression?
	 		@method test
	 	@param {String} char
	 	@param {String|RegExp} charOrRegExp
	 	@return {Boolean}
	 */
		test: function test(character, charOrRegExp) {
			return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
		}
	});

	/**
		State machine for input in the form of TextTokens

		@class TokenState
		@extends BaseState
	*/
	var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

		/**
	  * Similar to `on`, but returns the state the results in the transition from
	  * the given item
	  * @method jump
	  * @param {Mixed} item
	  * @param {Token} [token]
	  * @return state
	  */
		jump: function jump(token) {
			var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var state = this.next(new token('')); // dummy temp token
			if (state === this.defaultTransition) {
				// Make a new state!
				state = new this.constructor(tClass);
				this.on(token, state);
			} else if (tClass) {
				state.T = tClass;
			}
			return state;
		},


		/**
	 	Is the given token an instance of the given token class?
	 		@method test
	 	@param {TextToken} token
	 	@param {Class} tokenClass
	 	@return {Boolean}
	 */
		test: function test(token, tokenClass) {
			return token instanceof tokenClass;
		}
	});

	/**
		Given a non-empty target string, generates states (if required) for each
		consecutive substring of characters in str starting from the beginning of
		the string. The final state will have a special value, as specified in
		options. All other "in between" substrings will have a default end state.

		This turns the state machine into a Trie-like data structure (rather than a
		intelligently-designed DFA).

		Note that I haven't really tried these with any strings other than
		DOMAIN.

		@param {String} str
		@param {CharacterState} start State to jump from the first character
		@param {Class} endToken Token class to emit when the given string has been
			matched and no more jumps exist.
		@param {Class} defaultToken "Filler token", or which token type to emit when
			we don't have a full match
		@return {Array} list of newly-created states
	*/
	function stateify(str, start, endToken, defaultToken) {
		var i = 0,
		    len = str.length,
		    state = start,
		    newStates = [],
		    nextState = void 0;

		// Find the next state without a jump to the next character
		while (i < len && (nextState = state.next(str[i]))) {
			state = nextState;
			i++;
		}

		if (i >= len) {
			return [];
		} // no new tokens were added

		while (i < len - 1) {
			nextState = new CharacterState(defaultToken);
			newStates.push(nextState);
			state.on(str[i], nextState);
			state = nextState;
			i++;
		}

		nextState = new CharacterState(endToken);
		newStates.push(nextState);
		state.on(str[len - 1], nextState);

		return newStates;
	}

	exports.CharacterState = CharacterState;
	exports.TokenState = TokenState;
	exports.stateify = stateify;
	});

	var createTokenClass_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	function createTokenClass() {
		return function (value) {
			if (value) {
				this.v = value;
			}
		};
	}

	exports.createTokenClass = createTokenClass;
	});

	var text = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;





	/******************************************************************************
		Text Tokens
		Tokens composed of strings
	******************************************************************************/

	/**
		Abstract class used for manufacturing text tokens.
		Pass in the value this token represents

		@class TextToken
		@abstract
	*/
	var TextToken = (0, createTokenClass_1.createTokenClass)();
	TextToken.prototype = {
		toString: function toString() {
			return this.v + '';
		}
	};

	function inheritsToken(value) {
		var props = value ? { v: value } : {};
		return (0, _class.inherits)(TextToken, (0, createTokenClass_1.createTokenClass)(), props);
	}

	/**
		A valid domain token
		@class DOMAIN
		@extends TextToken
	*/
	var DOMAIN = inheritsToken();

	/**
		@class AT
		@extends TextToken
	*/
	var AT = inheritsToken('@');

	/**
		Represents a single colon `:` character

		@class COLON
		@extends TextToken
	*/
	var COLON = inheritsToken(':');

	/**
		@class DOT
		@extends TextToken
	*/
	var DOT = inheritsToken('.');

	/**
		A character class that can surround the URL, but which the URL cannot begin
		or end with. Does not include certain English punctuation like parentheses.

		@class PUNCTUATION
		@extends TextToken
	*/
	var PUNCTUATION = inheritsToken();

	/**
		The word localhost (by itself)
		@class LOCALHOST
		@extends TextToken
	*/
	var LOCALHOST = inheritsToken();

	/**
		Newline token
		@class NL
		@extends TextToken
	*/
	var NL = inheritsToken('\n');

	/**
		@class NUM
		@extends TextToken
	*/
	var NUM = inheritsToken();

	/**
		@class PLUS
		@extends TextToken
	*/
	var PLUS = inheritsToken('+');

	/**
		@class POUND
		@extends TextToken
	*/
	var POUND = inheritsToken('#');

	/**
		Represents a web URL protocol. Supported types include

		* `http:`
		* `https:`
		* `ftp:`
		* `ftps:`

		@class PROTOCOL
		@extends TextToken
	*/
	var PROTOCOL = inheritsToken();

	/**
		Represents the start of the email URI protocol

		@class MAILTO
		@extends TextToken
	*/
	var MAILTO = inheritsToken('mailto:');

	/**
		@class QUERY
		@extends TextToken
	*/
	var QUERY = inheritsToken('?');

	/**
		@class SLASH
		@extends TextToken
	*/
	var SLASH = inheritsToken('/');

	/**
		@class UNDERSCORE
		@extends TextToken
	*/
	var UNDERSCORE = inheritsToken('_');

	/**
		One ore more non-whitespace symbol.
		@class SYM
		@extends TextToken
	*/
	var SYM = inheritsToken();

	/**
		@class TLD
		@extends TextToken
	*/
	var TLD = inheritsToken();

	/**
		Represents a string of consecutive whitespace characters

		@class WS
		@extends TextToken
	*/
	var WS = inheritsToken();

	/**
		Opening/closing bracket classes
	*/

	var OPENBRACE = inheritsToken('{');
	var OPENBRACKET = inheritsToken('[');
	var OPENANGLEBRACKET = inheritsToken('<');
	var OPENPAREN = inheritsToken('(');
	var CLOSEBRACE = inheritsToken('}');
	var CLOSEBRACKET = inheritsToken(']');
	var CLOSEANGLEBRACKET = inheritsToken('>');
	var CLOSEPAREN = inheritsToken(')');

	var AMPERSAND = inheritsToken('&');

	exports.Base = TextToken;
	exports.DOMAIN = DOMAIN;
	exports.AT = AT;
	exports.COLON = COLON;
	exports.DOT = DOT;
	exports.PUNCTUATION = PUNCTUATION;
	exports.LOCALHOST = LOCALHOST;
	exports.NL = NL;
	exports.NUM = NUM;
	exports.PLUS = PLUS;
	exports.POUND = POUND;
	exports.QUERY = QUERY;
	exports.PROTOCOL = PROTOCOL;
	exports.MAILTO = MAILTO;
	exports.SLASH = SLASH;
	exports.UNDERSCORE = UNDERSCORE;
	exports.SYM = SYM;
	exports.TLD = TLD;
	exports.WS = WS;
	exports.OPENBRACE = OPENBRACE;
	exports.OPENBRACKET = OPENBRACKET;
	exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
	exports.OPENPAREN = OPENPAREN;
	exports.CLOSEBRACE = CLOSEBRACE;
	exports.CLOSEBRACKET = CLOSEBRACKET;
	exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
	exports.CLOSEPAREN = CLOSEPAREN;
	exports.AMPERSAND = AMPERSAND;
	});

	var scanner = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.start = exports.run = exports.TOKENS = exports.State = undefined;





	var TOKENS = _interopRequireWildcard(text);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

	/**
		The scanner provides an interface that takes a string of text as input, and
		outputs an array of tokens instances that can be used for easy URL parsing.

		@module linkify
		@submodule scanner
		@main scanner
	*/

	var NUMBERS = '0123456789'.split('');
	var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
	var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

	var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
	var makeState = function makeState(tokenClass) {
		return new state.CharacterState(tokenClass);
	};

	// Frequently used states
	var S_START = makeState();
	var S_NUM = makeState(text.NUM);
	var S_DOMAIN = makeState(text.DOMAIN);
	var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
	var S_WS = makeState(text.WS);

	// States for special URL symbols
	S_START.on('@', makeState(text.AT)).on('.', makeState(text.DOT)).on('+', makeState(text.PLUS)).on('#', makeState(text.POUND)).on('?', makeState(text.QUERY)).on('/', makeState(text.SLASH)).on('_', makeState(text.UNDERSCORE)).on(':', makeState(text.COLON)).on('{', makeState(text.OPENBRACE)).on('[', makeState(text.OPENBRACKET)).on('<', makeState(text.OPENANGLEBRACKET)).on('(', makeState(text.OPENPAREN)).on('}', makeState(text.CLOSEBRACE)).on(']', makeState(text.CLOSEBRACKET)).on('>', makeState(text.CLOSEANGLEBRACKET)).on(')', makeState(text.CLOSEPAREN)).on('&', makeState(text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(text.PUNCTUATION));

	// Whitespace jumps
	// Tokens of only non-newline whitespace are arbitrarily long
	S_START.on('\n', makeState(text.NL)).on(WHITESPACE, S_WS);

	// If any whitespace except newline, more whitespace!
	S_WS.on(WHITESPACE, S_WS);

	// Generates states for top-level domains
	// Note that this is most accurate when tlds are in alphabetical order
	for (var i = 0; i < tlds.length; i++) {
		var newStates = (0, state.stateify)(tlds[i], S_START, text.TLD, text.DOMAIN);
		domainStates.push.apply(domainStates, newStates);
	}

	// Collect the states generated by different protocls
	var partialProtocolFileStates = (0, state.stateify)('file', S_START, text.DOMAIN, text.DOMAIN);
	var partialProtocolFtpStates = (0, state.stateify)('ftp', S_START, text.DOMAIN, text.DOMAIN);
	var partialProtocolHttpStates = (0, state.stateify)('http', S_START, text.DOMAIN, text.DOMAIN);
	var partialProtocolMailtoStates = (0, state.stateify)('mailto', S_START, text.DOMAIN, text.DOMAIN);

	// Add the states to the array of DOMAINeric states
	domainStates.push.apply(domainStates, partialProtocolFileStates);
	domainStates.push.apply(domainStates, partialProtocolFtpStates);
	domainStates.push.apply(domainStates, partialProtocolHttpStates);
	domainStates.push.apply(domainStates, partialProtocolMailtoStates);

	// Protocol states
	var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
	var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
	var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
	var S_MAILTO = partialProtocolMailtoStates.pop();
	var S_PROTOCOL_SECURE = makeState(text.DOMAIN);
	var S_FULL_PROTOCOL = makeState(text.PROTOCOL); // Full protocol ends with COLON
	var S_FULL_MAILTO = makeState(text.MAILTO); // Mailto ends with COLON

	// Secure protocols (end with 's')
	S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

	S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

	domainStates.push(S_PROTOCOL_SECURE);

	// Become protocol tokens after a COLON
	S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
	S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
	S_MAILTO.on(':', S_FULL_MAILTO);

	// Localhost
	var partialLocalhostStates = (0, state.stateify)('localhost', S_START, text.LOCALHOST, text.DOMAIN);
	domainStates.push.apply(domainStates, partialLocalhostStates);

	// Everything else
	// DOMAINs make more DOMAINs
	// Number and character transitions
	S_START.on(NUMBERS, S_NUM);
	S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

	S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

	// All the generated states should have a jump to DOMAIN
	for (var _i = 0; _i < domainStates.length; _i++) {
		domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
	}

	S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

	// Set default transition
	S_START.defaultTransition = makeState(text.SYM);

	/**
		Given a string, returns an array of TOKEN instances representing the
		composition of that string.

		@method run
		@param {String} str Input string to scan
		@return {Array} Array of TOKEN instances
	*/
	var run = function run(str) {

		// The state machine only looks at lowercase strings.
		// This selective `toLowerCase` is used because lowercasing the entire
		// string causes the length and character position to vary in some in some
		// non-English strings. This happens only on V8-based runtimes.
		var lowerStr = str.replace(/[A-Z]/g, function (c) {
			return c.toLowerCase();
		});
		var len = str.length;
		var tokens = []; // return value

		var cursor = 0;

		// Tokenize the string
		while (cursor < len) {
			var state = S_START;
			var nextState = null;
			var tokenLength = 0;
			var latestAccepting = null;
			var sinceAccepts = -1;

			while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
				state = nextState;

				// Keep track of the latest accepting state
				if (state.accepts()) {
					sinceAccepts = 0;
					latestAccepting = state;
				} else if (sinceAccepts >= 0) {
					sinceAccepts++;
				}

				tokenLength++;
				cursor++;
			}

			if (sinceAccepts < 0) {
				continue;
			} // Should never happen

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			tokenLength -= sinceAccepts;

			// Get the class for the new token
			var TOKEN = latestAccepting.emit(); // Current token class

			// No more jumps, just make a new token
			tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
		}

		return tokens;
	};

	var start = S_START;
	exports.State = state.CharacterState;
	exports.TOKENS = TOKENS;
	exports.run = run;
	exports.start = start;
	});

	var multi = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;







	/******************************************************************************
		Multi-Tokens
		Tokens composed of arrays of TextTokens
	******************************************************************************/

	// Is the given token a valid domain token?
	// Should nums be included here?
	function isDomainToken(token) {
		return token instanceof text.DOMAIN || token instanceof text.TLD;
	}

	/**
		Abstract class used for manufacturing tokens of text tokens. That is rather
		than the value for a token being a small string of text, it's value an array
		of text tokens.

		Used for grouping together URLs, emails, hashtags, and other potential
		creations.

		@class MultiToken
		@abstract
	*/
	var MultiToken = (0, createTokenClass_1.createTokenClass)();

	MultiToken.prototype = {
		/**
	 	String representing the type for this token
	 	@property type
	 	@default 'TOKEN'
	 */
		type: 'token',

		/**
	 	Is this multitoken a link?
	 	@property isLink
	 	@default false
	 */
		isLink: false,

		/**
	 	Return the string this token represents.
	 	@method toString
	 	@return {String}
	 */
		toString: function toString() {
			var result = [];
			for (var i = 0; i < this.v.length; i++) {
				result.push(this.v[i].toString());
			}
			return result.join('');
		},


		/**
	 	What should the value for this token be in the `href` HTML attribute?
	 	Returns the `.toString` value by default.
	 		@method toHref
	 	@return {String}
	 */
		toHref: function toHref() {
			return this.toString();
		},


		/**
	 	Returns a hash of relevant values for this token, which includes keys
	 	* type - Kind of token ('url', 'email', etc.)
	 	* value - Original text
	 	* href - The value that should be added to the anchor tag's href
	 		attribute
	 		@method toObject
	 	@param {String} [protocol] `'http'` by default
	 	@return {Object}
	 */
		toObject: function toObject() {
			var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

			return {
				type: this.type,
				value: this.toString(),
				href: this.toHref(protocol)
			};
		}
	};

	/**
		Represents an arbitrarily mailto email address with the prefix included
		@class MAILTO
		@extends MultiToken
	*/
	var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), {
		type: 'email',
		isLink: true
	});

	/**
		Represents a list of tokens making up a valid email address
		@class EMAIL
		@extends MultiToken
	*/
	var EMAIL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), {
		type: 'email',
		isLink: true,
		toHref: function toHref() {
			return 'mailto:' + this.toString();
		}
	});

	/**
		Represents some plain text
		@class TEXT
		@extends MultiToken
	*/
	var TEXT = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), { type: 'text' });

	/**
		Multi-linebreak token - represents a line break
		@class NL
		@extends MultiToken
	*/
	var NL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), { type: 'nl' });

	/**
		Represents a list of tokens making up a valid URL
		@class URL
		@extends MultiToken
	*/
	var URL = (0, _class.inherits)(MultiToken, (0, createTokenClass_1.createTokenClass)(), {
		type: 'url',
		isLink: true,

		/**
	 	Lowercases relevant parts of the domain and adds the protocol if
	 	required. Note that this will not escape unsafe HTML characters in the
	 	URL.
	 		@method href
	 	@param {String} protocol
	 	@return {String}
	 */
		toHref: function toHref() {
			var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

			var hasProtocol = false;
			var hasSlashSlash = false;
			var tokens = this.v;
			var result = [];
			var i = 0;

			// Make the first part of the domain lowercase
			// Lowercase protocol
			while (tokens[i] instanceof text.PROTOCOL) {
				hasProtocol = true;
				result.push(tokens[i].toString().toLowerCase());
				i++;
			}

			// Skip slash-slash
			while (tokens[i] instanceof text.SLASH) {
				hasSlashSlash = true;
				result.push(tokens[i].toString());
				i++;
			}

			// Lowercase all other characters in the domain
			while (isDomainToken(tokens[i])) {
				result.push(tokens[i].toString().toLowerCase());
				i++;
			}

			// Leave all other characters as they were written
			for (; i < tokens.length; i++) {
				result.push(tokens[i].toString());
			}

			result = result.join('');

			if (!(hasProtocol || hasSlashSlash)) {
				result = protocol + '://' + result;
			}

			return result;
		},
		hasProtocol: function hasProtocol() {
			return this.v[0] instanceof text.PROTOCOL;
		}
	});

	exports.Base = MultiToken;
	exports.MAILTOEMAIL = MAILTOEMAIL;
	exports.EMAIL = EMAIL;
	exports.NL = NL;
	exports.TEXT = TEXT;
	exports.URL = URL;
	});

	var parser = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.start = exports.run = exports.TOKENS = exports.State = undefined;





	var MULTI_TOKENS = _interopRequireWildcard(multi);



	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
		Not exactly parser, more like the second-stage scanner (although we can
		theoretically hotswap the code here with a real parser in the future... but
		for a little URL-finding utility abstract syntax trees may be a little
		overkill).

		URL format: http://en.wikipedia.org/wiki/URI_scheme
		Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
		reference)

		@module linkify
		@submodule parser
		@main parser
	*/

	var makeState = function makeState(tokenClass) {
		return new state.TokenState(tokenClass);
	};

	// The universal starting state.
	var S_START = makeState();

	// Intermediate states for URLs. Note that domains that begin with a protocol
	// are treated slighly differently from those that don't.
	var S_PROTOCOL = makeState(); // e.g., 'http:'
	var S_MAILTO = makeState(); // 'mailto:'
	var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
	var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
	var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
	var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
	var S_TLD = makeState(multi.URL); // (A) Simplest possible URL with no query string
	var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
	var S_TLD_PORT = makeState(multi.URL); // TLD followed by a port number
	var S_URL = makeState(multi.URL); // Long URL with optional port and maybe query string
	var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
	var S_URL_OPENBRACE = makeState(); // URL followed by {
	var S_URL_OPENBRACKET = makeState(); // URL followed by [
	var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
	var S_URL_OPENPAREN = makeState(); // URL followed by (
	var S_URL_OPENBRACE_Q = makeState(multi.URL); // URL followed by { and some symbols that the URL can end it
	var S_URL_OPENBRACKET_Q = makeState(multi.URL); // URL followed by [ and some symbols that the URL can end it
	var S_URL_OPENANGLEBRACKET_Q = makeState(multi.URL); // URL followed by < and some symbols that the URL can end it
	var S_URL_OPENPAREN_Q = makeState(multi.URL); // URL followed by ( and some symbols that the URL can end it
	var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
	var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
	var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
	var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
	var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
	var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
	var S_EMAIL = makeState(multi.EMAIL); // (C) Possible email address (could have more tlds)
	var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
	var S_EMAIL_PORT = makeState(multi.EMAIL); // (C) Email address with a port
	var S_MAILTO_EMAIL = makeState(multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
	var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
	var S_LOCALPART = makeState(); // Local part of the email address
	var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
	var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
	var S_NL = makeState(multi.NL); // single new line

	// Make path from start to protocol (with '//')
	S_START.on(text.NL, S_NL).on(text.PROTOCOL, S_PROTOCOL).on(text.MAILTO, S_MAILTO).on(text.SLASH, S_PROTOCOL_SLASH);

	S_PROTOCOL.on(text.SLASH, S_PROTOCOL_SLASH);
	S_PROTOCOL_SLASH.on(text.SLASH, S_PROTOCOL_SLASH_SLASH);

	// The very first potential domain name
	S_START.on(text.TLD, S_DOMAIN).on(text.DOMAIN, S_DOMAIN).on(text.LOCALHOST, S_TLD).on(text.NUM, S_DOMAIN);

	// Force URL for protocol followed by anything sane
	S_PROTOCOL_SLASH_SLASH.on(text.TLD, S_URL).on(text.DOMAIN, S_URL).on(text.NUM, S_URL).on(text.LOCALHOST, S_URL);

	// Account for dots and hyphens
	// hyphens are usually parts of domain names
	S_DOMAIN.on(text.DOT, S_DOMAIN_DOT);
	S_EMAIL_DOMAIN.on(text.DOT, S_EMAIL_DOMAIN_DOT);

	// Hyphen can jump back to a domain name

	// After the first domain and a dot, we can find either a URL or another domain
	S_DOMAIN_DOT.on(text.TLD, S_TLD).on(text.DOMAIN, S_DOMAIN).on(text.NUM, S_DOMAIN).on(text.LOCALHOST, S_DOMAIN);

	S_EMAIL_DOMAIN_DOT.on(text.TLD, S_EMAIL).on(text.DOMAIN, S_EMAIL_DOMAIN).on(text.NUM, S_EMAIL_DOMAIN).on(text.LOCALHOST, S_EMAIL_DOMAIN);

	// S_TLD accepts! But the URL could be longer, try to find a match greedily
	// The `run` function should be able to "rollback" to the accepting state
	S_TLD.on(text.DOT, S_DOMAIN_DOT);
	S_EMAIL.on(text.DOT, S_EMAIL_DOMAIN_DOT);

	// Become real URLs after `SLASH` or `COLON NUM SLASH`
	// Here PSS and non-PSS converge
	S_TLD.on(text.COLON, S_TLD_COLON).on(text.SLASH, S_URL);
	S_TLD_COLON.on(text.NUM, S_TLD_PORT);
	S_TLD_PORT.on(text.SLASH, S_URL);
	S_EMAIL.on(text.COLON, S_EMAIL_COLON);
	S_EMAIL_COLON.on(text.NUM, S_EMAIL_PORT);

	// Types of characters the URL can definitely end in
	var qsAccepting = [text.DOMAIN, text.AT, text.LOCALHOST, text.NUM, text.PLUS, text.POUND, text.PROTOCOL, text.SLASH, text.TLD, text.UNDERSCORE, text.SYM, text.AMPERSAND];

	// Types of tokens that can follow a URL and be part of the query string
	// but cannot be the very last characters
	// Characters that cannot appear in the URL at all should be excluded
	var qsNonAccepting = [text.COLON, text.DOT, text.QUERY, text.PUNCTUATION, text.CLOSEBRACE, text.CLOSEBRACKET, text.CLOSEANGLEBRACKET, text.CLOSEPAREN, text.OPENBRACE, text.OPENBRACKET, text.OPENANGLEBRACKET, text.OPENPAREN];

	// These states are responsible primarily for determining whether or not to
	// include the final round bracket.

	// URL, followed by an opening bracket
	S_URL.on(text.OPENBRACE, S_URL_OPENBRACE).on(text.OPENBRACKET, S_URL_OPENBRACKET).on(text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(text.OPENPAREN, S_URL_OPENPAREN);

	// URL with extra symbols at the end, followed by an opening bracket
	S_URL_NON_ACCEPTING.on(text.OPENBRACE, S_URL_OPENBRACE).on(text.OPENBRACKET, S_URL_OPENBRACKET).on(text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(text.OPENPAREN, S_URL_OPENPAREN);

	// Closing bracket component. This character WILL be included in the URL
	S_URL_OPENBRACE.on(text.CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET.on(text.CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET.on(text.CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN.on(text.CLOSEPAREN, S_URL);
	S_URL_OPENBRACE_Q.on(text.CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET_Q.on(text.CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET_Q.on(text.CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN_Q.on(text.CLOSEPAREN, S_URL);
	S_URL_OPENBRACE_SYMS.on(text.CLOSEBRACE, S_URL);
	S_URL_OPENBRACKET_SYMS.on(text.CLOSEBRACKET, S_URL);
	S_URL_OPENANGLEBRACKET_SYMS.on(text.CLOSEANGLEBRACKET, S_URL);
	S_URL_OPENPAREN_SYMS.on(text.CLOSEPAREN, S_URL);

	// URL that beings with an opening bracket, followed by a symbols.
	// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
	// has a single opening bracket for some reason).
	S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
	S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
	S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
	S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

	// URL that begins with an opening bracket, followed by some symbols
	S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

	S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
	S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
	S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
	S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
	S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
	S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
	S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
	S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

	// Account for the query string
	S_URL.on(qsAccepting, S_URL);
	S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

	S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
	S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

	// Email address-specific state definitions
	// Note: We are not allowing '/' in email addresses since this would interfere
	// with real URLs

	// For addresses with the mailto prefix
	// 'mailto:' followed by anything sane is a valid email
	S_MAILTO.on(text.TLD, S_MAILTO_EMAIL).on(text.DOMAIN, S_MAILTO_EMAIL).on(text.NUM, S_MAILTO_EMAIL).on(text.LOCALHOST, S_MAILTO_EMAIL);

	// Greedily get more potential valid email values
	S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
	S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

	// For addresses without the mailto prefix
	// Tokens allowed in the localpart of the email
	var localpartAccepting = [text.DOMAIN, text.NUM, text.PLUS, text.POUND, text.QUERY, text.UNDERSCORE, text.SYM, text.AMPERSAND, text.TLD];

	// Some of the tokens in `localpartAccepting` are already accounted for here and
	// will not be overwritten (don't worry)
	S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(text.AT, S_LOCALPART_AT);
	S_TLD.on(localpartAccepting, S_LOCALPART).on(text.AT, S_LOCALPART_AT);
	S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

	// Okay we're on a localpart. Now what?
	// TODO: IP addresses and what if the email starts with numbers?
	S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(text.AT, S_LOCALPART_AT) // close to an email address now
	.on(text.DOT, S_LOCALPART_DOT);
	S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
	S_LOCALPART_AT.on(text.TLD, S_EMAIL_DOMAIN).on(text.DOMAIN, S_EMAIL_DOMAIN).on(text.LOCALHOST, S_EMAIL);
	// States following `@` defined above

	var run = function run(tokens) {
		var len = tokens.length;
		var cursor = 0;
		var multis = [];
		var textTokens = [];

		while (cursor < len) {
			var state = S_START;
			var secondState = null;
			var nextState = null;
			var multiLength = 0;
			var latestAccepting = null;
			var sinceAccepts = -1;

			while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
				// Starting tokens with nowhere to jump to.
				// Consider these to be just plain text
				textTokens.push(tokens[cursor++]);
			}

			while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

				// Get the next state
				secondState = null;
				state = nextState;

				// Keep track of the latest accepting state
				if (state.accepts()) {
					sinceAccepts = 0;
					latestAccepting = state;
				} else if (sinceAccepts >= 0) {
					sinceAccepts++;
				}

				cursor++;
				multiLength++;
			}

			if (sinceAccepts < 0) {

				// No accepting state was found, part of a regular text token
				// Add all the tokens we looked at to the text tokens array
				for (var i = cursor - multiLength; i < cursor; i++) {
					textTokens.push(tokens[i]);
				}
			} else {

				// Accepting state!

				// First close off the textTokens (if available)
				if (textTokens.length > 0) {
					multis.push(new multi.TEXT(textTokens));
					textTokens = [];
				}

				// Roll back to the latest accepting state
				cursor -= sinceAccepts;
				multiLength -= sinceAccepts;

				// Create a new multitoken
				var MULTI = latestAccepting.emit();
				multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
			}
		}

		// Finally close off the textTokens (if available)
		if (textTokens.length > 0) {
			multis.push(new multi.TEXT(textTokens));
		}

		return multis;
	};

	exports.State = state.TokenState;
	exports.TOKENS = MULTI_TOKENS;
	exports.run = run;
	exports.start = S_START;
	});

	var linkify = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;





	var options$1 = _interopRequireWildcard(options);



	var scanner$1 = _interopRequireWildcard(scanner);



	var parser$1 = _interopRequireWildcard(parser);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	if (!Array.isArray) {
		Array.isArray = function (arg) {
			return Object.prototype.toString.call(arg) === '[object Array]';
		};
	}

	/**
		Converts a string into tokens that represent linkable and non-linkable bits
		@method tokenize
		@param {String} str
		@return {Array} tokens
	*/
	var tokenize = function tokenize(str) {
		return parser$1.run(scanner$1.run(str));
	};

	/**
		Returns a list of linkable items in the given string.
	*/
	var find = function find(str) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var tokens = tokenize(str);
		var filtered = [];

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];
			if (token.isLink && (!type || token.type === type)) {
				filtered.push(token.toObject());
			}
		}

		return filtered;
	};

	/**
		Is the given string valid linkable text of some sort
		Note that this does not trim the text for you.

		Optionally pass in a second `type` param, which is the type of link to test
		for.

		For example,

			test(str, 'email');

		Will return `true` if str is a valid email.
	*/
	var test = function test(str) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var tokens = tokenize(str);
		return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
	};

	// Scanner and parser provide states and tokens for the lexicographic stage
	// (will be used to add additional link types)
	exports.find = find;
	exports.inherits = _class.inherits;
	exports.options = options$1;
	exports.parser = parser$1;
	exports.scanner = scanner$1;
	exports.test = test;
	exports.tokenize = tokenize;
	});

	var linkifyHtml_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;
	exports.default = linkifyHtml;



	var _simpleHtmlTokenizer2 = _interopRequireDefault(simpleHtmlTokenizer);



	var linkify$1 = _interopRequireWildcard(linkify);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var options = linkify$1.options;
	var Options = options.Options;


	var StartTag = 'StartTag';
	var EndTag = 'EndTag';
	var Chars = 'Chars';
	var Comment = 'Comment';

	/**
		`tokens` and `token` in this section refer to tokens generated by the HTML
		parser.
	*/
	function linkifyHtml(str) {
		var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var tokens = _simpleHtmlTokenizer2.default.tokenize(str);
		var linkifiedTokens = [];
		var linkified = [];
		var i;

		opts = new Options(opts);

		// Linkify the tokens given by the parser
		for (i = 0; i < tokens.length; i++) {
			var token = tokens[i];

			if (token.type === StartTag) {
				linkifiedTokens.push(token);

				// Ignore all the contents of ignored tags
				var tagName = token.tagName.toUpperCase();
				var isIgnored = tagName === 'A' || options.contains(opts.ignoreTags, tagName);
				if (!isIgnored) {
					continue;
				}

				var preskipLen = linkifiedTokens.length;
				skipTagTokens(tagName, tokens, ++i, linkifiedTokens);
				i += linkifiedTokens.length - preskipLen - 1;
				continue;
			} else if (token.type !== Chars) {
				// Skip this token, it's not important
				linkifiedTokens.push(token);
				continue;
			}

			// Valid text token, linkify it!
			var linkifedChars = linkifyChars(token.chars, opts);
			linkifiedTokens.push.apply(linkifiedTokens, linkifedChars);
		}

		// Convert the tokens back into a string
		for (i = 0; i < linkifiedTokens.length; i++) {
			var _token = linkifiedTokens[i];
			switch (_token.type) {
				case StartTag:
					{
						var link = '<' + _token.tagName;
						if (_token.attributes.length > 0) {
							var attrs = attrsToStrings(_token.attributes);
							link += ' ' + attrs.join(' ');
						}
						link += '>';
						linkified.push(link);
						break;
					}
				case EndTag:
					linkified.push('</' + _token.tagName + '>');
					break;
				case Chars:
					linkified.push(escapeText(_token.chars));
					break;
				case Comment:
					linkified.push('<!--' + escapeText(_token.chars) + '-->');
					break;
			}
		}

		return linkified.join('');
	}

	/**
		`tokens` and `token` in this section referes to tokens returned by
		`linkify.tokenize`. `linkified` will contain HTML Parser-style tokens
	*/
	function linkifyChars(str, opts) {
		var tokens = linkify$1.tokenize(str);
		var result = [];

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];

			if (token.type === 'nl' && opts.nl2br) {
				result.push({
					type: StartTag,
					tagName: 'br',
					attributes: [],
					selfClosing: true
				});
				continue;
			} else if (!token.isLink || !opts.check(token)) {
				result.push({ type: Chars, chars: token.toString() });
				continue;
			}

			var _opts$resolve = opts.resolve(token),
			    formatted = _opts$resolve.formatted,
			    formattedHref = _opts$resolve.formattedHref,
			    tagName = _opts$resolve.tagName,
			    className = _opts$resolve.className,
			    target = _opts$resolve.target,
			    attributes = _opts$resolve.attributes;

			// Build up attributes


			var attributeArray = [['href', formattedHref]];

			if (className) {
				attributeArray.push(['class', className]);
			}

			if (target) {
				attributeArray.push(['target', target]);
			}

			for (var attr in attributes) {
				attributeArray.push([attr, attributes[attr]]);
			}

			// Add the required tokens
			result.push({
				type: StartTag,
				tagName: tagName,
				attributes: attributeArray,
				selfClosing: false
			});
			result.push({ type: Chars, chars: formatted });
			result.push({ type: EndTag, tagName: tagName });
		}

		return result;
	}

	/**
		Returns a list of tokens skipped until the closing tag of tagName.

		* `tagName` is the closing tag which will prompt us to stop skipping
		* `tokens` is the array of tokens generated by HTML5Tokenizer which
		* `i` is the index immediately after the opening tag to skip
		* `skippedTokens` is an array which skipped tokens are being pushed into

		Caveats

		* Assumes that i is the first token after the given opening tagName
		* The closing tag will be skipped, but nothing after it
		* Will track whether there is a nested tag of the same type
	*/
	function skipTagTokens(tagName, tokens, i, skippedTokens) {

		// number of tokens of this type on the [fictional] stack
		var stackCount = 1;

		while (i < tokens.length && stackCount > 0) {
			var token = tokens[i];

			if (token.type === StartTag && token.tagName.toUpperCase() === tagName) {
				// Nested tag of the same type, "add to stack"
				stackCount++;
			} else if (token.type === EndTag && token.tagName.toUpperCase() === tagName) {
				// Closing tag
				stackCount--;
			}

			skippedTokens.push(token);
			i++;
		}

		// Note that if stackCount > 0 here, the HTML is probably invalid
		return skippedTokens;
	}

	function escapeText(text) {
		// Not required, HTML tokenizer ensures this occurs properly
		return text;
	}

	function escapeAttr(attr) {
		return attr.replace(/"/g, '&quot;');
	}

	function attrsToStrings(attrs) {
		var attrStrs = [];
		for (var i = 0; i < attrs.length; i++) {
			var _attrs$i = attrs[i],
			    name = _attrs$i[0],
			    value = _attrs$i[1];

			attrStrs.push(name + '="' + escapeAttr(value) + '"');
		}
		return attrStrs;
	}
	});

	var html = linkifyHtml_1.default;

	var stringUtils = createCommonjsModule(function (module, exports) {
	// Taken from the source of chrome devtools:
	// https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/platform/utilities.js#L805-L1006
	exports.__esModule = true;
	// Copyright 2014 The Chromium Authors. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions are
	// met:
	//
	//    * Redistributions of source code must retain the above copyright
	// notice, this list of conditions and the following disclaimer.
	//    * Redistributions in binary form must reproduce the above
	// copyright notice, this list of conditions and the following disclaimer
	// in the documentation and/or other materials provided with the
	// distribution.
	//    * Neither the name of Google Inc. nor the names of its
	// contributors may be used to endorse or promote products derived from
	// this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
	// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
	// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
	// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
	// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	var String;
	(function (String) {
	    /**
	     * @param {string} string
	     * @param {number} index
	     * @return {boolean}
	     */
	    function isDigitAt(string, index) {
	        var c = string.charCodeAt(index);
	        return 48 <= c && c <= 57;
	    }
	    /**
	     * @param {string} format
	     * @param {!Object.<string, function(string, ...):*>} formatters
	     * @return {!Array.<!Object>}
	     */
	    function tokenizeFormatString(format, formatters) {
	        var tokens = [];
	        var substitutionIndex = 0;
	        function addStringToken(str) {
	            if (tokens.length && tokens[tokens.length - 1].type === 'string')
	                tokens[tokens.length - 1].value += str;
	            else
	                tokens.push({ type: 'string', value: str });
	        }
	        function addSpecifierToken(specifier, precision, substitutionIndex) {
	            tokens.push({
	                type: 'specifier',
	                specifier: specifier,
	                precision: precision,
	                substitutionIndex: substitutionIndex
	            });
	        }
	        var index = 0;
	        for (var precentIndex = format.indexOf('%', index); precentIndex !== -1; precentIndex = format.indexOf('%', index)) {
	            if (format.length === index)
	                // unescaped % sign at the end of the format string.
	                break;
	            addStringToken(format.substring(index, precentIndex));
	            index = precentIndex + 1;
	            if (format[index] === '%') {
	                // %% escape sequence.
	                addStringToken('%');
	                ++index;
	                continue;
	            }
	            if (isDigitAt(format, index)) {
	                // The first character is a number, it might be a substitution index.
	                var number = parseInt(format.substring(index), 10);
	                while (isDigitAt(format, index))
	                    ++index;
	                // If the number is greater than zero and ends with a "$",
	                // then this is a substitution index.
	                if (number > 0 && format[index] === '$') {
	                    substitutionIndex = number - 1;
	                    ++index;
	                }
	            }
	            var precision = -1;
	            if (format[index] === '.') {
	                // This is a precision specifier. If no digit follows the ".",
	                // then the precision should be zero.
	                ++index;
	                precision = parseInt(format.substring(index), 10);
	                if (isNaN(precision))
	                    precision = 0;
	                while (isDigitAt(format, index))
	                    ++index;
	            }
	            if (!(format[index] in formatters)) {
	                addStringToken(format.substring(precentIndex, index + 1));
	                ++index;
	                continue;
	            }
	            addSpecifierToken(format[index], precision, substitutionIndex);
	            ++substitutionIndex;
	            ++index;
	        }
	        addStringToken(format.substring(index));
	        return tokens;
	    }
	    /**
	     * @param {string} format
	     * @param {?ArrayLike} substitutions
	     * @param {!Object.<string, function(string, ...):Q>} formatters
	     * @param {!T} initialValue
	     * @param {function(T, Q): T|undefined} append
	     * @param {!Array.<!Object>=} tokenizedFormat
	     * @return {!{formattedResult: T, unusedSubstitutions: ?ArrayLike}};
	     * @template T, Q
	     */
	    function format(format, substitutions, formatters, initialValue, append, tokenizedFormat) {
	        if (!format || !substitutions || !substitutions.length)
	            return {
	                formattedResult: append(initialValue, format),
	                unusedSubstitutions: substitutions
	            };
	        function prettyFunctionName() {
	            return ('String.format("' +
	                format +
	                '", "' +
	                Array.prototype.join.call(substitutions, '", "') +
	                '")');
	        }
	        function warn(msg) {
	            console.warn(prettyFunctionName() + ': ' + msg);
	        }
	        function error(msg) {
	            console.error(prettyFunctionName() + ': ' + msg);
	        }
	        var result = initialValue;
	        var tokens = tokenizedFormat || tokenizeFormatString(format, formatters);
	        var usedSubstitutionIndexes = {};
	        for (var i = 0; i < tokens.length; ++i) {
	            var token = tokens[i];
	            if (token.type === 'string') {
	                result = append(result, token.value);
	                continue;
	            }
	            if (token.type !== 'specifier') {
	                error('Unknown token type "' + token.type + '" found.');
	                continue;
	            }
	            if (token.substitutionIndex >= substitutions.length) {
	                // If there are not enough substitutions for the current substitutionIndex
	                // just output the format specifier literally and move on.
	                error('not enough substitution arguments. Had ' +
	                    substitutions.length +
	                    ' but needed ' +
	                    (token.substitutionIndex + 1) +
	                    ', so substitution was skipped.');
	                result = append(result, '%' + (token.precision > -1 ? token.precision : '') + token.specifier);
	                continue;
	            }
	            usedSubstitutionIndexes[token.substitutionIndex] = true;
	            if (!(token.specifier in formatters)) {
	                // Encountered an unsupported format character, treat as a string.
	                warn('unsupported format character \u201C' +
	                    token.specifier +
	                    '\u201D. Treating as a string.');
	                result = append(result, substitutions[token.substitutionIndex]);
	                continue;
	            }
	            result = append(result, formatters[token.specifier](substitutions[token.substitutionIndex], token));
	        }
	        var unusedSubstitutions = [];
	        for (var i = 0; i < substitutions.length; ++i) {
	            if (i in usedSubstitutionIndexes)
	                continue;
	            unusedSubstitutions.push(substitutions[i]);
	        }
	        return { formattedResult: result, unusedSubstitutions: unusedSubstitutions };
	    }
	    String.format = format;
	})(String = exports.String || (exports.String = {}));

	});

	var formatMessage = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	function createAppend(s) {
	    var container = document.createDocumentFragment();
	    container.appendChild(document.createTextNode(s));
	    return container;
	}
	/**
	 * @param {string} format
	 * @param {!Array.<!SDK.RemoteObject>} parameters
	 * @param {!Element} formattedResult
	 */
	function formatWithSubstitutionString(format, parameters, formattedResult) {
	    var formatters = {};
	    function stringFormatter(obj) {
	        if (typeof obj !== 'string') {
	            return '';
	        }
	        return String(obj);
	    }
	    function floatFormatter(obj) {
	        if (typeof obj !== 'number')
	            return 'NaN';
	        return obj;
	    }
	    function integerFormatter(obj) {
	        if (typeof obj !== 'number')
	            return 'NaN';
	        return Math.floor(obj);
	    }
	    var currentStyle = null;
	    function styleFormatter(obj) {
	        currentStyle = {};
	        var buffer = document.createElement('span');
	        buffer.setAttribute('style', obj);
	        for (var i = 0; i < buffer.style.length; i++) {
	            var property = buffer.style[i];
	            if (isWhitelistedProperty(property))
	                currentStyle[property] = buffer.style[property];
	        }
	    }
	    function isWhitelistedProperty(property) {
	        var prefixes = [
	            'background',
	            'border',
	            'color',
	            'font',
	            'line',
	            'margin',
	            'padding',
	            'text',
	            '-webkit-background',
	            '-webkit-border',
	            '-webkit-font',
	            '-webkit-margin',
	            '-webkit-padding',
	            '-webkit-text'
	        ];
	        for (var i = 0; i < prefixes.length; i++) {
	            if (property.startsWith(prefixes[i]))
	                return true;
	        }
	        return false;
	    }
	    formatters.s = stringFormatter;
	    formatters.f = floatFormatter;
	    // Firebug allows both %i and %d for formatting integers.
	    formatters.i = integerFormatter;
	    formatters.d = integerFormatter;
	    // Firebug uses %c for styling the message.
	    formatters.c = styleFormatter;
	    function append(a, b) {
	        if (b instanceof Node) {
	            a.appendChild(b);
	        }
	        else if (typeof b !== 'undefined') {
	            var toAppend = createAppend(String(b));
	            if (currentStyle) {
	                var wrapper = document.createElement('span');
	                wrapper.appendChild(toAppend);
	                applyCurrentStyle(wrapper);
	                for (var i = 0; i < wrapper.children.length; ++i)
	                    applyCurrentStyle(wrapper.children[i]);
	                toAppend = wrapper;
	            }
	            a.appendChild(toAppend);
	        }
	        return a;
	    }
	    /**
	     * @param {!Element} element
	     */
	    function applyCurrentStyle(element) {
	        for (var key in currentStyle)
	            element.style[key] = currentStyle[key];
	    }
	    // String.format does treat formattedResult like a Builder, result is an object.
	    return stringUtils.String.format(format, parameters, formatters, formattedResult, append);
	}
	exports["default"] = formatWithSubstitutionString;

	});

	var devtoolsParser = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;


	/**
	 * Formats a console log message using the Devtools parser and returns HTML
	 * @param args The arguments passed to the console method
	 */
	function formatMessage$1(args) {
	    var formattedResult = document.createElement('span');
	    formatMessage["default"](args[0], args.slice(1), formattedResult);
	    return html(formattedResult.outerHTML.replace(/(?:\r\n|\r|\n)/g, '<br />'));
	}
	exports["default"] = formatMessage$1;

	});

	var Formatted_1 = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	exports.__esModule = true;



	var Formatted = /** @class */ (function (_super) {
	    __extends(Formatted, _super);
	    function Formatted() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Formatted.prototype.render = function () {
	        return (React__default.createElement(elements$1.Root, { "data-type": "formatted", dangerouslySetInnerHTML: {
	                __html: devtoolsParser["default"](this.props.data || [])
	            } }));
	    };
	    return Formatted;
	}(React__default.PureComponent));
	exports["default"] = Formatted;

	});

	var linkifyReact = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _react2 = _interopRequireDefault(React__default);



	var linkify$1 = _interopRequireWildcard(linkify);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var options = linkify$1.options;
	var Options = options.Options;

	// Given a string, converts to an array of valid React components
	// (which may include strings)

	function stringToElements(str, opts) {

		var tokens = linkify$1.tokenize(str);
		var elements = [];
		var linkId = 0;

		for (var i = 0; i < tokens.length; i++) {
			var token = tokens[i];

			if (token.type === 'nl' && opts.nl2br) {
				elements.push(_react2.default.createElement('br', { key: 'linkified-' + ++linkId }));
				continue;
			} else if (!token.isLink || !opts.check(token)) {
				// Regular text
				elements.push(token.toString());
				continue;
			}

			var _opts$resolve = opts.resolve(token),
			    formatted = _opts$resolve.formatted,
			    formattedHref = _opts$resolve.formattedHref,
			    tagName = _opts$resolve.tagName,
			    className = _opts$resolve.className,
			    target = _opts$resolve.target,
			    attributes = _opts$resolve.attributes;

			var props = {
				key: 'linkified-' + ++linkId,
				href: formattedHref
			};

			if (className) {
				props.className = className;
			}

			if (target) {
				props.target = target;
			}

			// Build up additional attributes
			// Support for events via attributes hash
			if (attributes) {
				for (var attr in attributes) {
					props[attr] = attributes[attr];
				}
			}

			elements.push(_react2.default.createElement(tagName, props, formatted));
		}

		return elements;
	}

	// Recursively linkify the contents of the given React Element instance
	function linkifyReactElement(element, opts) {
		var elementId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		if (_react2.default.Children.count(element.props.children) === 0) {
			// No need to clone if the element had no children
			return element;
		}

		var children = [];

		_react2.default.Children.forEach(element.props.children, function (child) {
			if (typeof child === 'string') {
				// ensure that we always generate unique element IDs for keys
				elementId = elementId + 1;
				children.push.apply(children, stringToElements(child, opts));
			} else if (_react2.default.isValidElement(child)) {
				if (typeof child.type === 'string' && options.contains(opts.ignoreTags, child.type.toUpperCase())) {
					// Don't linkify this element
					children.push(child);
				} else {
					children.push(linkifyReactElement(child, opts, ++elementId));
				}
			} else {
				// Unknown element type, just push
				children.push(child);
			}
		});

		// Set a default unique key, copy over remaining props
		var newProps = { key: 'linkified-element-' + elementId };
		for (var prop in element.props) {
			newProps[prop] = element.props[prop];
		}

		return _react2.default.cloneElement(element, newProps, children);
	}

	var Linkify = function (_React$Component) {
		_inherits(Linkify, _React$Component);

		function Linkify() {
			_classCallCheck(this, Linkify);

			return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
		}

		Linkify.prototype.render = function render() {
			// Copy over all non-linkify-specific props
			var newProps = { key: 'linkified-element-0' };
			for (var prop in this.props) {
				if (prop !== 'options' && prop !== 'tagName') {
					newProps[prop] = this.props[prop];
				}
			}

			var opts = new Options(this.props.options);
			var tagName = this.props.tagName || 'span';
			var element = _react2.default.createElement(tagName, newProps);

			return linkifyReactElement(element, opts, 0);
		};

		return Linkify;
	}(_react2.default.Component);

	exports.default = Linkify;
	});

	var react = linkifyReact.default;

	var reactInspector = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	exports.__esModule = true;




	var CustomObjectLabel = function (_a) {
	    var name = _a.name, data = _a.data, _b = _a.isNonenumerable, isNonenumerable = _b === void 0 ? false : _b;
	    return (React__default.createElement("span", null,
	        typeof name === 'string' ? (React__default.createElement(Inspector.ObjectName, { name: name, dimmed: isNonenumerable })) : (React__default.createElement(Inspector.ObjectPreview, { data: name })),
	        React__default.createElement("span", null, ": "),
	        React__default.createElement(Inspector.ObjectValue, { object: data })));
	};
	var CustomInspector = /** @class */ (function (_super) {
	    __extends(CustomInspector, _super);
	    function CustomInspector() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    CustomInspector.prototype.render = function () {
	        var _a = this.props, data = _a.data, theme = _a.theme;
	        var styles = theme.styles, method = theme.method;
	        var dom = data instanceof HTMLElement;
	        var table = method === 'table';
	        return (React__default.createElement(elements$1.Root, { "data-type": table ? 'table' : dom ? 'html' : 'object' }, table ? (React__default.createElement(elements$1.Table, null,
	            React__default.createElement(Inspector.Inspector, __assign({}, this.props, { theme: styles, table: true })),
	            React__default.createElement(Inspector.Inspector, __assign({}, this.props, { theme: styles })))) : dom ? (React__default.createElement(elements$1.HTML, null,
	            React__default.createElement(Inspector.DOMInspector, __assign({}, this.props, { theme: styles })))) : (React__default.createElement(Inspector.Inspector, __assign({}, this.props, { theme: styles, nodeRenderer: this.nodeRenderer.bind(this) })))));
	    };
	    CustomInspector.prototype.getCustomNode = function (data) {
	        var styles = this.props.theme.styles;
	        var constructor = data && data.constructor ? data.constructor.name : null;
	        if (constructor === 'Function')
	            return (React__default.createElement("span", { style: { fontStyle: 'italic' } },
	                React__default.createElement(Inspector.ObjectPreview, { data: data }), " {",
	                React__default.createElement("span", { style: { color: 'rgb(181, 181, 181)' } }, data.body), "}"));
	        if (constructor === 'Promise')
	            return (React__default.createElement("span", { style: { fontStyle: 'italic' } },
	                "Promise ", "{",
	                React__default.createElement("span", { style: { opacity: 0.6 } }, "<pending>"), "}"));
	        if (data instanceof HTMLElement)
	            return (React__default.createElement(elements$1.HTML, null,
	                React__default.createElement(Inspector.DOMInspector, { data: data, theme: styles })));
	        return null;
	    };
	    CustomInspector.prototype.nodeRenderer = function (props) {
	        var depth = props.depth, name = props.name, data = props.data, isNonenumerable = props.isNonenumerable;
	        // Root
	        if (depth === 0) {
	            var customNode_1 = this.getCustomNode(data);
	            return customNode_1 || React__default.createElement(Inspector.ObjectRootLabel, { name: name, data: data });
	        }
	        if (name === 'constructor')
	            return (React__default.createElement(elements$1.Constructor, null,
	                React__default.createElement(Inspector.ObjectLabel, { name: "<constructor>", data: data.name, isNonenumerable: isNonenumerable })));
	        var customNode = this.getCustomNode(data);
	        return customNode ? (React__default.createElement(elements$1.Root, null,
	            React__default.createElement(Inspector.ObjectName, { name: name }),
	            React__default.createElement("span", null, ": "),
	            customNode)) : (React__default.createElement(CustomObjectLabel, { name: name, data: data, isNonenumerable: isNonenumerable }));
	    };
	    return CustomInspector;
	}(React__default.PureComponent));
	exports["default"] = emotionTheming_browser_esm.withTheme(CustomInspector);

	});

	var _Object = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	exports.__esModule = true;





	var ObjectTree = /** @class */ (function (_super) {
	    __extends(ObjectTree, _super);
	    function ObjectTree() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ObjectTree.prototype.render = function () {
	        var _a = this.props, theme = _a.theme, quoted = _a.quoted, log = _a.log;
	        return log.data.map(function (message, i) {
	            if (typeof message === 'string') {
	                var string = !quoted && message.length ? (message + " ") : (React__default.createElement("span", null,
	                    React__default.createElement("span", null, "\""),
	                    React__default.createElement("span", { style: {
	                            color: theme.styles.OBJECT_VALUE_STRING_COLOR
	                        } }, message),
	                    React__default.createElement("span", null, "\" ")));
	                return (React__default.createElement(elements$1.Root, { "data-type": "string", key: i },
	                    React__default.createElement(react, null, string)));
	            }
	            return React__default.createElement(reactInspector["default"], { data: message, key: i });
	        });
	    };
	    return ObjectTree;
	}(React__default.PureComponent));
	exports["default"] = emotionTheming_browser_esm.withTheme(ObjectTree);

	});

	var _Error = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	exports.__esModule = true;


	function splitMessage(message) {
	    var breakIndex = message.indexOf('\n');
	    // consider that there can be line without a break
	    if (breakIndex === -1) {
	        return message;
	    }
	    return message.substr(0, breakIndex);
	}
	var ErrorPanel = /** @class */ (function (_super) {
	    __extends(ErrorPanel, _super);
	    function ErrorPanel() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ErrorPanel.prototype.render = function () {
	        var log = this.props.log;
	        /* This checks for error logTypes and shortens the message in the console by wrapping
	        it a <details /> tag and putting the first line in a <summary /> tag and the other lines
	        follow after that. This creates a nice collapsible error message */
	        var otherErrorLines;
	        var msgLine = log.data.join(' ');
	        var firstLine = splitMessage(msgLine);
	        var msgArray = msgLine.split('\n');
	        if (msgArray.length > 1) {
	            otherErrorLines = msgArray.slice(1);
	        }
	        if (!otherErrorLines) {
	            return React__default.createElement(react, null, log.data.join(' '));
	        }
	        return (React__default.createElement("details", null,
	            React__default.createElement("summary", { style: { outline: 'none', cursor: 'pointer' } }, firstLine),
	            React__default.createElement(react, null, otherErrorLines.join('\n\r'))));
	    };
	    return ErrorPanel;
	}(React__default.PureComponent));
	exports["default"] = ErrorPanel;

	});

	var Message = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	exports.__esModule = true;






	var ConsoleMessage = /** @class */ (function (_super) {
	    __extends(ConsoleMessage, _super);
	    function ConsoleMessage() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.theme = function (theme) { return (__assign(__assign({}, theme), { method: _this.props.log.method })); };
	        return _this;
	    }
	    ConsoleMessage.prototype.render = function () {
	        var log = this.props.log;
	        return (React__default.createElement(emotionTheming_browser_esm.ThemeProvider, { theme: this.theme },
	            React__default.createElement(elements.Message, { "data-method": log.method },
	                log.amount > 1 ? React__default.createElement(elements.AmountIcon, null, log.amount) : React__default.createElement(elements.Icon, null),
	                React__default.createElement(elements.Content, null, this.getNode()))));
	    };
	    ConsoleMessage.prototype.getNode = function () {
	        var log = this.props.log;
	        // Error handling
	        var error = this.typeCheck(log);
	        if (error)
	            return error;
	        // Chrome formatting
	        if (log.data.length > 0 &&
	            typeof log.data[0] === 'string' &&
	            log.data[0].indexOf('%') > -1) {
	            return React__default.createElement(Formatted_1["default"], { data: log.data });
	        }
	        // Error panel
	        if (log.data.every(function (message) { return typeof message === 'string'; }) &&
	            log.method === 'error') {
	            return React__default.createElement(_Error["default"], { log: log });
	        }
	        // Normal inspector
	        var quoted = typeof log.data[0] !== 'string';
	        return React__default.createElement(_Object["default"], { log: log, quoted: quoted });
	    };
	    ConsoleMessage.prototype.typeCheck = function (log) {
	        if (!log) {
	            return (React__default.createElement(Formatted_1["default"], { data: [
	                    "%c[console-feed] %cFailed to parse message! %clog was typeof " + typeof log + ", but it should've been a log object",
	                    'color: red',
	                    'color: orange',
	                    'color: cyan'
	                ] }));
	        }
	        else if (!(log.data instanceof Array)) {
	            return (React__default.createElement(Formatted_1["default"], { data: [
	                    '%c[console-feed] %cFailed to parse message! %clog.data was not an array!',
	                    'color: red',
	                    'color: orange',
	                    'color: cyan'
	                ] }));
	        }
	        return false;
	    };
	    return ConsoleMessage;
	}(React__default.PureComponent));
	exports["default"] = ConsoleMessage;

	});

	var Component = createCommonjsModule(function (module, exports) {
	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	exports.__esModule = true;





	// https://stackoverflow.com/a/48254637/4089357
	var customStringify = function (v) {
	    var cache = new Set();
	    return JSON.stringify(v, function (key, value) {
	        if (typeof value === 'object' && value !== null) {
	            if (cache.has(value)) {
	                // Circular reference found, discard key
	                return;
	            }
	            // Store value in our set
	            cache.add(value);
	        }
	        return value;
	    });
	};
	var Console = /** @class */ (function (_super) {
	    __extends(Console, _super);
	    function Console() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.theme = function () { return ({
	            variant: _this.props.variant || 'light',
	            styles: __assign(__assign({}, _default["default"](_this.props)), _this.props.styles)
	        }); };
	        return _this;
	    }
	    Console.prototype.render = function () {
	        var _a = this.props, _b = _a.filter, filter = _b === void 0 ? [] : _b, _c = _a.logs, logs = _c === void 0 ? [] : _c, searchKeywords = _a.searchKeywords, logFilter = _a.logFilter;
	        var regex = new RegExp(searchKeywords);
	        var filterFun = logFilter
	            ? logFilter
	            : function (log) { return regex.test(customStringify(log)); };
	        // @ts-ignore
	        logs = logs.filter(filterFun);
	        // @ts-ignore
	        logs = logs.reduce(function (acc, log) {
	            var prevLog = acc[acc.length - 1];
	            if (prevLog &&
	                prevLog.amount &&
	                prevLog.method === log.method &&
	                prevLog.data.every(function (value, i) { return log.data[i] === value; })) {
	                prevLog.amount += 1;
	                return acc;
	            }
	            acc.push(__assign(__assign({}, log), { amount: 1 }));
	            return acc;
	        }, []);
	        return (React__default.createElement(emotionTheming_browser_esm.ThemeProvider, { theme: this.theme },
	            React__default.createElement(elements.Root, null, logs.map(function (log, i) {
	                // If the filter is defined and doesn't include the method
	                var filtered = filter.length !== 0 &&
	                    log.method &&
	                    filter.indexOf(log.method) === -1;
	                return filtered ? null : (React__default.createElement(Message["default"], { log: log, key: log.method + "-" + i }));
	            }))));
	    };
	    return Console;
	}(React__default.PureComponent));
	exports["default"] = Console;

	});

	var Methods = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	var methods = [
	    'log',
	    'debug',
	    'info',
	    'warn',
	    'error',
	    'table',
	    'clear',
	    'time',
	    'timeEnd',
	    'count',
	    'assert'
	];
	exports["default"] = methods;

	});

	var GUID = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	function guidGenerator() {
	    var S4 = function () {
	        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	    };
	    return (S4() +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        S4() +
	        '-' +
	        Date.now());
	}
	exports["default"] = guidGenerator;

	});

	var state$1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	function update(newState) {
	    exports.state = newState;
	}
	exports.update = update;

	});

	var reducer = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	exports.__esModule = true;
	exports.initialState = {
	    timings: {},
	    count: {}
	};
	exports["default"] = (function (state, action) {
	    var _a, _b, _c;
	    if (state === void 0) { state = exports.initialState; }
	    switch (action.type) {
	        case 'COUNT': {
	            var times = state.count[action.name] || 0;
	            return __assign(__assign({}, state), { count: __assign(__assign({}, state.count), (_a = {}, _a[action.name] = times + 1, _a)) });
	        }
	        case 'TIME_START': {
	            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_b = {}, _b[action.name] = {
	                    start: performance.now() || +new Date()
	                }, _b)) });
	        }
	        case 'TIME_END': {
	            var timing = state.timings[action.name];
	            var end = performance.now() || +new Date();
	            var start = timing.start;
	            var time = end - start;
	            return __assign(__assign({}, state), { timings: __assign(__assign({}, state.timings), (_c = {}, _c[action.name] = __assign(__assign({}, timing), { end: end,
	                    time: time }), _c)) });
	        }
	        default: {
	            return state;
	        }
	    }
	});

	});

	var dispatch_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;


	function dispatch(action) {
	    state$1.update(reducer["default"](state$1.state, action));
	}
	exports["default"] = dispatch;

	});

	var actions = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	function count(name) {
	    return {
	        type: 'COUNT',
	        name: name
	    };
	}
	exports.count = count;
	function timeStart(name) {
	    return {
	        type: 'TIME_START',
	        name: name
	    };
	}
	exports.timeStart = timeStart;
	function timeEnd(name) {
	    return {
	        type: 'TIME_END',
	        name: name
	    };
	}
	exports.timeEnd = timeEnd;

	});

	var timing = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;



	function start(label) {
	    dispatch_1["default"](actions.timeStart(label));
	}
	exports.start = start;
	function stop(label) {
	    var timing = state$1.state.timings[label];
	    if (timing && !timing.end) {
	        dispatch_1["default"](actions.timeEnd(label));
	        var time = state$1.state.timings[label].time;
	        return {
	            method: 'log',
	            data: [label + ": " + time + "ms"]
	        };
	    }
	    return {
	        method: 'warn',
	        data: ["Timer '" + label + "' does not exist"]
	    };
	}
	exports.stop = stop;

	});

	var count = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;



	function increment(label) {
	    dispatch_1["default"](actions.count(label));
	    var times = state$1.state.count[label];
	    return {
	        method: 'log',
	        data: [label + ": " + times]
	    };
	}
	exports.increment = increment;

	});

	var assert = createCommonjsModule(function (module, exports) {
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	exports.__esModule = true;
	function test(expression) {
	    var messages = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        messages[_i - 1] = arguments[_i];
	    }
	    if (expression)
	        return false;
	    // Default message
	    if (messages.length === 0)
	        messages.push('console.assert');
	    return {
	        method: 'error',
	        data: __spreadArrays(["Assertion failed:"], messages)
	    };
	}
	exports.test = test;

	});

	var parse = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	};
	exports.__esModule = true;




	/**
	 * Parses a console log and converts it to a special Log object
	 * @argument method The console method to parse
	 * @argument data The arguments passed to the console method
	 */
	function Parse(method, data, staticID) {
	    // Create an ID
	    var id = staticID || GUID["default"]();
	    // Parse the methods
	    switch (method) {
	        case 'clear': {
	            return {
	                method: method,
	                id: id
	            };
	        }
	        case 'count': {
	            var label = typeof data[0] === 'string' ? data[0] : 'default';
	            if (!label)
	                return false;
	            return __assign(__assign({}, count.increment(label)), { id: id });
	        }
	        case 'time':
	        case 'timeEnd': {
	            var label = typeof data[0] === 'string' ? data[0] : 'default';
	            if (!label)
	                return false;
	            if (method === 'time') {
	                timing.start(label);
	                return false;
	            }
	            return __assign(__assign({}, timing.stop(label)), { id: id });
	        }
	        case 'assert': {
	            var valid = data.length !== 0;
	            if (valid) {
	                var assertion = assert.test.apply(assert, __spreadArrays([data[0]], data.slice(1)));
	                if (assertion) {
	                    return __assign(__assign({}, assertion), { id: id });
	                }
	            }
	            return false;
	        }
	        case 'error': {
	            var errors = data.map(function (error) {
	                try {
	                    return error.stack || error;
	                }
	                catch (e) {
	                    return error;
	                }
	            });
	            return {
	                method: method,
	                id: id,
	                data: errors
	            };
	        }
	        default: {
	            return {
	                method: method,
	                id: id,
	                data: data
	            };
	        }
	    }
	}
	exports["default"] = Parse;

	});

	var arithmetic = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	var Arithmetic;
	(function (Arithmetic) {
	    Arithmetic[Arithmetic["infinity"] = 0] = "infinity";
	    Arithmetic[Arithmetic["minusInfinity"] = 1] = "minusInfinity";
	    Arithmetic[Arithmetic["minusZero"] = 2] = "minusZero";
	})(Arithmetic || (Arithmetic = {}));
	function isMinusZero(value) {
	    return 1 / value === -Infinity;
	}
	exports["default"] = {
	    type: 'Arithmetic',
	    shouldTransform: function (type, value) {
	        return (type === 'number' &&
	            (value === Infinity || value === -Infinity || isMinusZero(value)));
	    },
	    toSerializable: function (value) {
	        return value === Infinity
	            ? Arithmetic.infinity
	            : value === -Infinity
	                ? Arithmetic.minusInfinity
	                : Arithmetic.minusZero;
	    },
	    fromSerializable: function (data) {
	        if (data === Arithmetic.infinity)
	            return Infinity;
	        if (data === Arithmetic.minusInfinity)
	            return -Infinity;
	        if (data === Arithmetic.minusZero)
	            return -0;
	        return data;
	    }
	};

	});

	var _Function = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	/**
	 * Serialize a function into JSON
	 */
	exports["default"] = {
	    type: 'Function',
	    shouldTransform: function (type, obj) {
	        return typeof obj === 'function';
	    },
	    toSerializable: function (func) {
	        var body = '';
	        try {
	            body = func
	                .toString()
	                .substring(body.indexOf('{') + 1, body.lastIndexOf('}'));
	        }
	        catch (e) { }
	        return {
	            name: func.name,
	            body: body,
	            proto: Object.getPrototypeOf(func).constructor.name
	        };
	    },
	    fromSerializable: function (data) {
	        try {
	            var tempFunc = function () { };
	            if (typeof data.name === 'string') {
	                Object.defineProperty(tempFunc, 'name', {
	                    value: data.name,
	                    writable: false
	                });
	            }
	            if (typeof data.body === 'string') {
	                Object.defineProperty(tempFunc, 'body', {
	                    value: data.body,
	                    writable: false
	                });
	            }
	            if (typeof data.proto === 'string') {
	                // @ts-ignore
	                tempFunc.constructor = {
	                    name: data.proto
	                };
	            }
	            return tempFunc;
	        }
	        catch (e) {
	            return data;
	        }
	    }
	};

	});

	var HTML = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	// Sandbox HTML elements
	var sandbox = document.implementation.createHTMLDocument('sandbox');
	function objectifyAttributes(element) {
	    var data = {};
	    for (var _i = 0, _a = element.attributes; _i < _a.length; _i++) {
	        var attribute = _a[_i];
	        data[attribute.name] = attribute.value;
	    }
	    return data;
	}
	/**
	 * Serialize a HTML element into JSON
	 */
	exports["default"] = {
	    type: 'HTMLElement',
	    shouldTransform: function (type, obj) {
	        return (obj &&
	            obj.children &&
	            typeof obj.innerHTML === 'string' &&
	            typeof obj.tagName === 'string');
	    },
	    toSerializable: function (element) {
	        return {
	            tagName: element.tagName.toLowerCase(),
	            attributes: objectifyAttributes(element),
	            innerHTML: element.innerHTML
	        };
	    },
	    fromSerializable: function (data) {
	        try {
	            var element = sandbox.createElement(data.tagName);
	            element.innerHTML = data.innerHTML;
	            for (var _i = 0, _a = Object.keys(data.attributes); _i < _a.length; _i++) {
	                var attribute = _a[_i];
	                try {
	                    element.setAttribute(attribute, data.attributes[attribute]);
	                }
	                catch (e) { }
	            }
	            return element;
	        }
	        catch (e) {
	            return data;
	        }
	    }
	};

	});

	var _Map = createCommonjsModule(function (module, exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	exports.__esModule = true;
	/**
	 * Serialize a Map into JSON
	 */
	exports["default"] = {
	    type: 'Map',
	    shouldTransform: function (type, obj) {
	        return obj && obj.constructor && obj.constructor.name === 'Map';
	    },
	    toSerializable: function (map) {
	        var body = {};
	        map.forEach(function (value, key) {
	            var k = typeof key == 'object' ? JSON.stringify(key) : key;
	            body[k] = value;
	        });
	        return {
	            name: 'Map',
	            body: body,
	            proto: Object.getPrototypeOf(map).constructor.name
	        };
	    },
	    fromSerializable: function (data) {
	        var body = data.body;
	        var obj = __assign({}, body);
	        if (typeof data.proto === 'string') {
	            // @ts-ignore
	            obj.constructor = {
	                name: data.proto
	            };
	        }
	        return obj;
	    }
	};

	});

	var replicator = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	// Const
	var TRANSFORMED_TYPE_KEY = '@t';
	var CIRCULAR_REF_KEY = '@r';
	var KEY_REQUIRE_ESCAPING_RE = /^#*@(t|r)$/;
	var GLOBAL = (function getGlobal() {
	    // NOTE: see http://www.ecma-international.org/ecma-262/6.0/index.html#sec-performeval step 10
	    var savedEval = eval;
	    return savedEval('this');
	})();
	var ARRAY_BUFFER_SUPPORTED = typeof ArrayBuffer === 'function';
	var MAP_SUPPORTED = typeof Map === 'function';
	var SET_SUPPORTED = typeof Set === 'function';
	var TYPED_ARRAY_CTORS = [
	    'Int8Array',
	    'Uint8Array',
	    'Uint8ClampedArray',
	    'Int16Array',
	    'Uint16Array',
	    'Int32Array',
	    'Uint32Array',
	    'Float32Array',
	    'Float64Array'
	];
	// Saved proto functions
	var arrSlice = Array.prototype.slice;
	// Default serializer
	var JSONSerializer = {
	    serialize: function (val) {
	        return JSON.stringify(val);
	    },
	    deserialize: function (val) {
	        return JSON.parse(val);
	    }
	};
	// EncodingTransformer
	var EncodingTransformer = /** @class */ (function () {
	    function EncodingTransformer(val, transforms) {
	        this.references = val;
	        this.transforms = transforms;
	        this.circularCandidates = [];
	        this.circularCandidatesDescrs = [];
	        this.circularRefCount = 0;
	    }
	    EncodingTransformer._createRefMark = function (idx) {
	        var obj = Object.create(null);
	        obj[CIRCULAR_REF_KEY] = idx;
	        return obj;
	    };
	    EncodingTransformer.prototype._createCircularCandidate = function (val, parent, key) {
	        this.circularCandidates.push(val);
	        this.circularCandidatesDescrs.push({ parent: parent, key: key, refIdx: -1 });
	    };
	    EncodingTransformer.prototype._applyTransform = function (val, parent, key, transform) {
	        var result = Object.create(null);
	        var serializableVal = transform.toSerializable(val);
	        if (typeof serializableVal === 'object')
	            this._createCircularCandidate(val, parent, key);
	        result[TRANSFORMED_TYPE_KEY] = transform.type;
	        result.data = this._handleValue(serializableVal, parent, key);
	        return result;
	    };
	    EncodingTransformer.prototype._handleArray = function (arr) {
	        var result = [];
	        for (var i = 0; i < arr.length; i++)
	            result[i] = this._handleValue(arr[i], result, i);
	        return result;
	    };
	    EncodingTransformer.prototype._handlePlainObject = function (obj) {
	        var result = Object.create(null);
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                var resultKey = KEY_REQUIRE_ESCAPING_RE.test(key) ? "#" + key : key;
	                result[resultKey] = this._handleValue(obj[key], result, resultKey);
	            }
	        }
	        var name = obj.__proto__.constructor.name;
	        if (name !== 'Object') {
	            result.constructor = { name: name };
	        }
	        return result;
	    };
	    EncodingTransformer.prototype._handleObject = function (obj, parent, key) {
	        this._createCircularCandidate(obj, parent, key);
	        return Array.isArray(obj)
	            ? this._handleArray(obj)
	            : this._handlePlainObject(obj);
	    };
	    EncodingTransformer.prototype._ensureCircularReference = function (obj) {
	        var circularCandidateIdx = this.circularCandidates.indexOf(obj);
	        if (circularCandidateIdx > -1) {
	            var descr = this.circularCandidatesDescrs[circularCandidateIdx];
	            if (descr.refIdx === -1)
	                descr.refIdx = descr.parent ? ++this.circularRefCount : 0;
	            return EncodingTransformer._createRefMark(descr.refIdx);
	        }
	        return null;
	    };
	    EncodingTransformer.prototype._handleValue = function (val, parent, key) {
	        var type = typeof val;
	        var isObject = type === 'object' && val !== null;
	        try {
	            if (isObject) {
	                var refMark = this._ensureCircularReference(val);
	                if (refMark)
	                    return refMark;
	            }
	            for (var _i = 0, _a = this.transforms; _i < _a.length; _i++) {
	                var transform = _a[_i];
	                if (transform.shouldTransform(type, val))
	                    return this._applyTransform(val, parent, key, transform);
	            }
	            if (isObject)
	                return this._handleObject(val, parent, key);
	            return val;
	        }
	        catch (e) {
	            return null;
	        }
	    };
	    EncodingTransformer.prototype.transform = function () {
	        var references = [this._handleValue(this.references, null, null)];
	        for (var _i = 0, _a = this.circularCandidatesDescrs; _i < _a.length; _i++) {
	            var descr = _a[_i];
	            if (descr.refIdx > 0) {
	                references[descr.refIdx] = descr.parent[descr.key];
	                descr.parent[descr.key] = EncodingTransformer._createRefMark(descr.refIdx);
	            }
	        }
	        return references;
	    };
	    return EncodingTransformer;
	}());
	// DecodingTransform
	var DecodingTransformer = /** @class */ (function () {
	    function DecodingTransformer(references, transformsMap) {
	        this.activeTransformsStack = [];
	        this.visitedRefs = Object.create(null);
	        this.references = references;
	        this.transformMap = transformsMap;
	    }
	    DecodingTransformer.prototype._handlePlainObject = function (obj) {
	        var unescaped = Object.create(null);
	        if ('constructor' in obj) {
	            if (!obj.constructor || typeof obj.constructor.name !== 'string') {
	                obj.constructor = {
	                    name: 'Object'
	                };
	            }
	        }
	        for (var key in obj) {
	            if (obj.hasOwnProperty(key)) {
	                this._handleValue(obj[key], obj, key);
	                if (KEY_REQUIRE_ESCAPING_RE.test(key)) {
	                    // NOTE: use intermediate object to avoid unescaped and escaped keys interference
	                    // E.g. unescaped "##@t" will be "#@t" which can overwrite escaped "#@t".
	                    unescaped[key.substring(1)] = obj[key];
	                    delete obj[key];
	                }
	            }
	        }
	        for (var unsecapedKey in unescaped)
	            obj[unsecapedKey] = unescaped[unsecapedKey];
	    };
	    DecodingTransformer.prototype._handleTransformedObject = function (obj, parent, key) {
	        var transformType = obj[TRANSFORMED_TYPE_KEY];
	        var transform = this.transformMap[transformType];
	        if (!transform)
	            throw new Error("Can't find transform for \"" + transformType + "\" type.");
	        this.activeTransformsStack.push(obj);
	        this._handleValue(obj.data, obj, 'data');
	        this.activeTransformsStack.pop();
	        parent[key] = transform.fromSerializable(obj.data);
	    };
	    DecodingTransformer.prototype._handleCircularSelfRefDuringTransform = function (refIdx, parent, key) {
	        // NOTE: we've hit a hard case: object reference itself during transformation.
	        // We can't dereference it since we don't have resulting object yet. And we'll
	        // not be able to restore reference lately because we will need to traverse
	        // transformed object again and reference might be unreachable or new object contain
	        // new circular references. As a workaround we create getter, so once transformation
	        // complete, dereferenced property will point to correct transformed object.
	        var references = this.references;
	        Object.defineProperty(parent, key, {
	            // @ts-ignore
	            val: void 0,
	            configurable: true,
	            enumerable: true,
	            get: function () {
	                if (this.val === void 0)
	                    this.val = references[refIdx];
	                return this.val;
	            },
	            set: function (value) {
	                this.val = value;
	            }
	        });
	    };
	    DecodingTransformer.prototype._handleCircularRef = function (refIdx, parent, key) {
	        if (this.activeTransformsStack.includes(this.references[refIdx]))
	            this._handleCircularSelfRefDuringTransform(refIdx, parent, key);
	        else {
	            if (!this.visitedRefs[refIdx]) {
	                this.visitedRefs[refIdx] = true;
	                this._handleValue(this.references[refIdx], this.references, refIdx);
	            }
	            parent[key] = this.references[refIdx];
	        }
	    };
	    DecodingTransformer.prototype._handleValue = function (val, parent, key) {
	        if (typeof val !== 'object' || val === null)
	            return;
	        var refIdx = val[CIRCULAR_REF_KEY];
	        if (refIdx !== void 0)
	            this._handleCircularRef(refIdx, parent, key);
	        else if (val[TRANSFORMED_TYPE_KEY])
	            this._handleTransformedObject(val, parent, key);
	        else if (Array.isArray(val)) {
	            for (var i = 0; i < val.length; i++)
	                this._handleValue(val[i], val, i);
	        }
	        else
	            this._handlePlainObject(val);
	    };
	    DecodingTransformer.prototype.transform = function () {
	        this.visitedRefs[0] = true;
	        this._handleValue(this.references[0], this.references, 0);
	        return this.references[0];
	    };
	    return DecodingTransformer;
	}());
	// Transforms
	var builtInTransforms = [
	    {
	        type: '[[NaN]]',
	        shouldTransform: function (type, val) {
	            return type === 'number' && isNaN(val);
	        },
	        toSerializable: function () {
	            return '';
	        },
	        fromSerializable: function () {
	            return NaN;
	        }
	    },
	    {
	        type: '[[undefined]]',
	        shouldTransform: function (type) {
	            return type === 'undefined';
	        },
	        toSerializable: function () {
	            return '';
	        },
	        fromSerializable: function () {
	            return void 0;
	        }
	    },
	    {
	        type: '[[Date]]',
	        shouldTransform: function (type, val) {
	            return val instanceof Date;
	        },
	        toSerializable: function (date) {
	            return date.getTime();
	        },
	        fromSerializable: function (val) {
	            var date = new Date();
	            date.setTime(val);
	            return date;
	        }
	    },
	    {
	        type: '[[RegExp]]',
	        shouldTransform: function (type, val) {
	            return val instanceof RegExp;
	        },
	        toSerializable: function (re) {
	            var result = {
	                src: re.source,
	                flags: ''
	            };
	            if (re.global)
	                result.flags += 'g';
	            if (re.ignoreCase)
	                result.flags += 'i';
	            if (re.multiline)
	                result.flags += 'm';
	            return result;
	        },
	        fromSerializable: function (val) {
	            return new RegExp(val.src, val.flags);
	        }
	    },
	    {
	        type: '[[Error]]',
	        shouldTransform: function (type, val) {
	            return val instanceof Error;
	        },
	        toSerializable: function (err) {
	            return {
	                name: err.name,
	                message: err.message,
	                stack: err.stack
	            };
	        },
	        fromSerializable: function (val) {
	            var Ctor = GLOBAL[val.name] || Error;
	            var err = new Ctor(val.message);
	            err.stack = val.stack;
	            return err;
	        }
	    },
	    {
	        type: '[[ArrayBuffer]]',
	        shouldTransform: function (type, val) {
	            return ARRAY_BUFFER_SUPPORTED && val instanceof ArrayBuffer;
	        },
	        toSerializable: function (buffer) {
	            var view = new Int8Array(buffer);
	            return arrSlice.call(view);
	        },
	        fromSerializable: function (val) {
	            if (ARRAY_BUFFER_SUPPORTED) {
	                var buffer = new ArrayBuffer(val.length);
	                var view = new Int8Array(buffer);
	                view.set(val);
	                return buffer;
	            }
	            return val;
	        }
	    },
	    {
	        type: '[[TypedArray]]',
	        shouldTransform: function (type, val) {
	            for (var _i = 0, TYPED_ARRAY_CTORS_1 = TYPED_ARRAY_CTORS; _i < TYPED_ARRAY_CTORS_1.length; _i++) {
	                var ctorName = TYPED_ARRAY_CTORS_1[_i];
	                if (typeof GLOBAL[ctorName] === 'function' &&
	                    val instanceof GLOBAL[ctorName])
	                    return true;
	            }
	            return false;
	        },
	        toSerializable: function (arr) {
	            return {
	                ctorName: arr.constructor.name,
	                arr: arrSlice.call(arr)
	            };
	        },
	        fromSerializable: function (val) {
	            return typeof GLOBAL[val.ctorName] === 'function'
	                ? new GLOBAL[val.ctorName](val.arr)
	                : val.arr;
	        }
	    },
	    {
	        type: '[[Map]]',
	        shouldTransform: function (type, val) {
	            return MAP_SUPPORTED && val instanceof Map;
	        },
	        toSerializable: function (map) {
	            var flattenedKVArr = [];
	            map.forEach(function (val, key) {
	                flattenedKVArr.push(key);
	                flattenedKVArr.push(val);
	            });
	            return flattenedKVArr;
	        },
	        fromSerializable: function (val) {
	            if (MAP_SUPPORTED) {
	                // NOTE: new Map(iterable) is not supported by all browsers
	                var map = new Map();
	                for (var i = 0; i < val.length; i += 2)
	                    map.set(val[i], val[i + 1]);
	                return map;
	            }
	            var kvArr = [];
	            // @ts-ignore
	            for (var j = 0; j < val.length; j += 2)
	                kvArr.push([val[i], val[i + 1]]);
	            return kvArr;
	        }
	    },
	    {
	        type: '[[Set]]',
	        shouldTransform: function (type, val) {
	            return SET_SUPPORTED && val instanceof Set;
	        },
	        toSerializable: function (set) {
	            var arr = [];
	            set.forEach(function (val) {
	                arr.push(val);
	            });
	            return arr;
	        },
	        fromSerializable: function (val) {
	            if (SET_SUPPORTED) {
	                // NOTE: new Set(iterable) is not supported by all browsers
	                var set = new Set();
	                for (var i = 0; i < val.length; i++)
	                    set.add(val[i]);
	                return set;
	            }
	            return val;
	        }
	    }
	];
	// Replicator
	var Replicator = /** @class */ (function () {
	    function Replicator(serializer) {
	        this.transforms = [];
	        this.transformsMap = Object.create(null);
	        this.serializer = serializer || JSONSerializer;
	        this.addTransforms(builtInTransforms);
	    }
	    Replicator.prototype.addTransforms = function (transforms) {
	        transforms = Array.isArray(transforms) ? transforms : [transforms];
	        for (var _i = 0, transforms_1 = transforms; _i < transforms_1.length; _i++) {
	            var transform = transforms_1[_i];
	            if (this.transformsMap[transform.type])
	                throw new Error("Transform with type \"" + transform.type + "\" was already added.");
	            this.transforms.push(transform);
	            this.transformsMap[transform.type] = transform;
	        }
	        return this;
	    };
	    Replicator.prototype.removeTransforms = function (transforms) {
	        transforms = Array.isArray(transforms) ? transforms : [transforms];
	        for (var _i = 0, transforms_2 = transforms; _i < transforms_2.length; _i++) {
	            var transform = transforms_2[_i];
	            var idx = this.transforms.indexOf(transform);
	            if (idx > -1)
	                this.transforms.splice(idx, 1);
	            delete this.transformsMap[transform.type];
	        }
	        return this;
	    };
	    Replicator.prototype.encode = function (val) {
	        var transformer = new EncodingTransformer(val, this.transforms);
	        var references = transformer.transform();
	        return this.serializer.serialize(references);
	    };
	    Replicator.prototype.decode = function (val) {
	        var references = this.serializer.deserialize(val);
	        var transformer = new DecodingTransformer(references, this.transformsMap);
	        return transformer.transform();
	    };
	    return Replicator;
	}());
	exports["default"] = Replicator;

	});

	var Transform = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;





	var transforms = [HTML["default"], _Function["default"], arithmetic["default"], _Map["default"]];
	var replicator$1 = new replicator["default"]();
	replicator$1.addTransforms(transforms);
	function Encode(data) {
	    return JSON.parse(replicator$1.encode(data));
	}
	exports.Encode = Encode;
	function Decode(data) {
	    return replicator$1.decode(JSON.stringify(data));
	}
	exports.Decode = Decode;

	});

	var Hook_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;



	// import Construct from './construct'
	/**
	 * Hook a console constructor and forward messages to a callback
	 * @argument console The Console constructor to Hook
	 * @argument callback The callback to be called once a message is logged
	 */
	function Hook(console, callback, encode) {
	    if (encode === void 0) { encode = true; }
	    var TargetConsole = console;
	    var Storage = {
	        pointers: {},
	        src: {
	            npm: 'https://npmjs.com/package/console-feed',
	            github: 'https://github.com/samdenty99/console-feed'
	        }
	    };
	    var _loop_1 = function (method) {
	        var NativeMethod = TargetConsole[method];
	        // Override
	        TargetConsole[method] = function () {
	            // Pass back to native method
	            NativeMethod.apply(this, arguments);
	            // Parse arguments and send to transport
	            var args = [].slice.call(arguments);
	            // setTimeout to prevent lag
	            setTimeout(function () {
	                var parsed = parse["default"](method, args);
	                if (parsed) {
	                    var encoded = parsed;
	                    if (encode) {
	                        encoded = Transform.Encode(parsed);
	                    }
	                    callback(encoded, parsed);
	                }
	            });
	        };
	        // Store native methods
	        Storage.pointers[method] = NativeMethod;
	    };
	    // Override console methods
	    for (var _i = 0, Methods_2 = Methods["default"]; _i < Methods_2.length; _i++) {
	        var method = Methods_2[_i];
	        _loop_1(method);
	    }
	    TargetConsole.feed = Storage;
	    return TargetConsole;
	}
	exports["default"] = Hook;

	});

	var Unhook_1 = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;
	/**
	 * Unhook a console constructor and restore back the Native methods
	 * @argument console The Console constructor to Hook
	 */
	function Unhook(console) {
	    if (console.feed) {
	        for (var _i = 0, _a = Object.keys(console.feed.pointers); _i < _a.length; _i++) {
	            var method = _a[_i];
	            console[method] = console.feed.pointers[method];
	        }
	        return delete console.feed;
	    }
	    else {
	        return false;
	    }
	}
	exports["default"] = Unhook;

	});

	var lib = createCommonjsModule(function (module, exports) {
	exports.__esModule = true;

	exports.Console = Component["default"];

	exports.Hook = Hook_1["default"];

	exports.Unhook = Unhook_1["default"];

	exports.Decode = Transform.Decode;
	var Transform_2 = Transform;
	exports.Encode = Transform_2.Encode;

	});

	return lib;

})));
//# sourceMappingURL=console-feed.umd.js.map
