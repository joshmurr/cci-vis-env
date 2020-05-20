"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, n) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) module.exports = n();else if ("function" == typeof define && define.amd) define([], n);else {
    var r = n();

    for (var u in r) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : t)[u] = r[u];
    }
  }
}(window, function () {
  return function (t) {
    var n = {};

    function r(u) {
      if (n[u]) return n[u].exports;
      var a = n[u] = {
        i: u,
        l: !1,
        exports: {}
      };
      return t[u].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
    }

    return r.m = t, r.c = n, r.d = function (t, n, u) {
      r.o(t, n) || Object.defineProperty(t, n, {
        enumerable: !0,
        get: u
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (t, n) {
      if (1 & n && (t = r(t)), 8 & n) return t;
      if (4 & n && "object" == _typeof(t) && t && t.__esModule) return t;
      var u = Object.create(null);
      if (r.r(u), Object.defineProperty(u, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t) for (var a in t) {
        r.d(u, a, function (n) {
          return t[n];
        }.bind(null, a));
      }
      return u;
    }, r.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return r.d(n, "a", n), n;
    }, r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }, r.p = "", r(r.s = 7);
  }({
    7: function _(t, n, r) {
      "use strict";

      r.r(n);
      var u = {};
      r.r(u), r.d(u, "create", function () {
        return c;
      }), r.d(u, "clone", function () {
        return f;
      }), r.d(u, "copy", function () {
        return h;
      }), r.d(u, "fromValues", function () {
        return M;
      }), r.d(u, "set", function () {
        return s;
      }), r.d(u, "identity", function () {
        return d;
      }), r.d(u, "transpose", function () {
        return l;
      }), r.d(u, "invert", function () {
        return b;
      }), r.d(u, "adjoint", function () {
        return v;
      }), r.d(u, "determinant", function () {
        return m;
      }), r.d(u, "multiply", function () {
        return p;
      }), r.d(u, "translate", function () {
        return y;
      }), r.d(u, "scale", function () {
        return x;
      }), r.d(u, "rotate", function () {
        return g;
      }), r.d(u, "rotateX", function () {
        return q;
      }), r.d(u, "rotateY", function () {
        return w;
      }), r.d(u, "rotateZ", function () {
        return j;
      }), r.d(u, "fromTranslation", function () {
        return A;
      }), r.d(u, "fromScaling", function () {
        return P;
      }), r.d(u, "fromRotation", function () {
        return S;
      }), r.d(u, "fromXRotation", function () {
        return O;
      }), r.d(u, "fromYRotation", function () {
        return R;
      }), r.d(u, "fromZRotation", function () {
        return T;
      }), r.d(u, "fromRotationTranslation", function () {
        return D;
      }), r.d(u, "fromQuat2", function () {
        return F;
      }), r.d(u, "getTranslation", function () {
        return I;
      }), r.d(u, "getScaling", function () {
        return _;
      }), r.d(u, "getRotation", function () {
        return E;
      }), r.d(u, "fromRotationTranslationScale", function () {
        return z;
      }), r.d(u, "fromRotationTranslationScaleOrigin", function () {
        return Q;
      }), r.d(u, "fromQuat", function () {
        return V;
      }), r.d(u, "frustum", function () {
        return X;
      }), r.d(u, "perspective", function () {
        return Y;
      }), r.d(u, "perspectiveFromFieldOfView", function () {
        return Z;
      }), r.d(u, "ortho", function () {
        return L;
      }), r.d(u, "lookAt", function () {
        return k;
      }), r.d(u, "targetTo", function () {
        return B;
      }), r.d(u, "str", function () {
        return C;
      }), r.d(u, "frob", function () {
        return G;
      }), r.d(u, "add", function () {
        return H;
      }), r.d(u, "subtract", function () {
        return J;
      }), r.d(u, "multiplyScalar", function () {
        return K;
      }), r.d(u, "multiplyScalarAndAdd", function () {
        return N;
      }), r.d(u, "exactEquals", function () {
        return U;
      }), r.d(u, "equals", function () {
        return W;
      }), r.d(u, "mul", function () {
        return $;
      }), r.d(u, "sub", function () {
        return tt;
      });
      var a = {};
      r.r(a), r.d(a, "create", function () {
        return nt;
      }), r.d(a, "clone", function () {
        return rt;
      }), r.d(a, "length", function () {
        return ut;
      }), r.d(a, "fromValues", function () {
        return at;
      }), r.d(a, "copy", function () {
        return et;
      }), r.d(a, "set", function () {
        return ot;
      }), r.d(a, "add", function () {
        return it;
      }), r.d(a, "subtract", function () {
        return ct;
      }), r.d(a, "multiply", function () {
        return ft;
      }), r.d(a, "divide", function () {
        return ht;
      }), r.d(a, "ceil", function () {
        return Mt;
      }), r.d(a, "floor", function () {
        return st;
      }), r.d(a, "min", function () {
        return dt;
      }), r.d(a, "max", function () {
        return lt;
      }), r.d(a, "round", function () {
        return bt;
      }), r.d(a, "scale", function () {
        return vt;
      }), r.d(a, "scaleAndAdd", function () {
        return mt;
      }), r.d(a, "distance", function () {
        return pt;
      }), r.d(a, "squaredDistance", function () {
        return yt;
      }), r.d(a, "squaredLength", function () {
        return xt;
      }), r.d(a, "negate", function () {
        return gt;
      }), r.d(a, "inverse", function () {
        return qt;
      }), r.d(a, "normalize", function () {
        return wt;
      }), r.d(a, "dot", function () {
        return jt;
      }), r.d(a, "cross", function () {
        return At;
      }), r.d(a, "lerp", function () {
        return Pt;
      }), r.d(a, "hermite", function () {
        return St;
      }), r.d(a, "bezier", function () {
        return Ot;
      }), r.d(a, "random", function () {
        return Rt;
      }), r.d(a, "transformMat4", function () {
        return Tt;
      }), r.d(a, "transformMat3", function () {
        return Dt;
      }), r.d(a, "transformQuat", function () {
        return Ft;
      }), r.d(a, "rotateX", function () {
        return It;
      }), r.d(a, "rotateY", function () {
        return _t;
      }), r.d(a, "rotateZ", function () {
        return Et;
      }), r.d(a, "angle", function () {
        return zt;
      }), r.d(a, "zero", function () {
        return Qt;
      }), r.d(a, "str", function () {
        return Vt;
      }), r.d(a, "exactEquals", function () {
        return Xt;
      }), r.d(a, "equals", function () {
        return Yt;
      }), r.d(a, "sub", function () {
        return Lt;
      }), r.d(a, "mul", function () {
        return kt;
      }), r.d(a, "div", function () {
        return Bt;
      }), r.d(a, "dist", function () {
        return Ct;
      }), r.d(a, "sqrDist", function () {
        return Gt;
      }), r.d(a, "len", function () {
        return Ht;
      }), r.d(a, "sqrLen", function () {
        return Jt;
      }), r.d(a, "forEach", function () {
        return Kt;
      });
      var e = 1e-6,
          o = "undefined" != typeof Float32Array ? Float32Array : Array,
          i = Math.random;
      Math.PI;

      function c() {
        var t = new o(16);
        return o != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t;
      }

      function f(t) {
        var n = new o(16);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n;
      }

      function h(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
      }

      function M(t, n, r, u, a, e, i, c, f, h, M, s, d, l, b, v) {
        var m = new o(16);
        return m[0] = t, m[1] = n, m[2] = r, m[3] = u, m[4] = a, m[5] = e, m[6] = i, m[7] = c, m[8] = f, m[9] = h, m[10] = M, m[11] = s, m[12] = d, m[13] = l, m[14] = b, m[15] = v, m;
      }

      function s(t, n, r, u, a, e, o, i, c, f, h, M, s, d, l, b, v) {
        return t[0] = n, t[1] = r, t[2] = u, t[3] = a, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t[8] = f, t[9] = h, t[10] = M, t[11] = s, t[12] = d, t[13] = l, t[14] = b, t[15] = v, t;
      }

      function d(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }

      function l(t, n) {
        if (t === n) {
          var r = n[1],
              u = n[2],
              a = n[3],
              e = n[6],
              o = n[7],
              i = n[11];
          t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = u, t[9] = e, t[11] = n[14], t[12] = a, t[13] = o, t[14] = i;
        } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];

        return t;
      }

      function b(t, n) {
        var r = n[0],
            u = n[1],
            a = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = n[6],
            f = n[7],
            h = n[8],
            M = n[9],
            s = n[10],
            d = n[11],
            l = n[12],
            b = n[13],
            v = n[14],
            m = n[15],
            p = r * i - u * o,
            y = r * c - a * o,
            x = r * f - e * o,
            g = u * c - a * i,
            q = u * f - e * i,
            w = a * f - e * c,
            j = h * b - M * l,
            A = h * v - s * l,
            P = h * m - d * l,
            S = M * v - s * b,
            O = M * m - d * b,
            R = s * m - d * v,
            T = p * R - y * O + x * S + g * P - q * A + w * j;
        return T ? (T = 1 / T, t[0] = (i * R - c * O + f * S) * T, t[1] = (a * O - u * R - e * S) * T, t[2] = (b * w - v * q + m * g) * T, t[3] = (s * q - M * w - d * g) * T, t[4] = (c * P - o * R - f * A) * T, t[5] = (r * R - a * P + e * A) * T, t[6] = (v * x - l * w - m * y) * T, t[7] = (h * w - s * x + d * y) * T, t[8] = (o * O - i * P + f * j) * T, t[9] = (u * P - r * O - e * j) * T, t[10] = (l * q - b * x + m * p) * T, t[11] = (M * x - h * q - d * p) * T, t[12] = (i * A - o * S - c * j) * T, t[13] = (r * S - u * A + a * j) * T, t[14] = (b * y - l * g - v * p) * T, t[15] = (h * g - M * y + s * p) * T, t) : null;
      }

      function v(t, n) {
        var r = n[0],
            u = n[1],
            a = n[2],
            e = n[3],
            o = n[4],
            i = n[5],
            c = n[6],
            f = n[7],
            h = n[8],
            M = n[9],
            s = n[10],
            d = n[11],
            l = n[12],
            b = n[13],
            v = n[14],
            m = n[15];
        return t[0] = i * (s * m - d * v) - M * (c * m - f * v) + b * (c * d - f * s), t[1] = -(u * (s * m - d * v) - M * (a * m - e * v) + b * (a * d - e * s)), t[2] = u * (c * m - f * v) - i * (a * m - e * v) + b * (a * f - e * c), t[3] = -(u * (c * d - f * s) - i * (a * d - e * s) + M * (a * f - e * c)), t[4] = -(o * (s * m - d * v) - h * (c * m - f * v) + l * (c * d - f * s)), t[5] = r * (s * m - d * v) - h * (a * m - e * v) + l * (a * d - e * s), t[6] = -(r * (c * m - f * v) - o * (a * m - e * v) + l * (a * f - e * c)), t[7] = r * (c * d - f * s) - o * (a * d - e * s) + h * (a * f - e * c), t[8] = o * (M * m - d * b) - h * (i * m - f * b) + l * (i * d - f * M), t[9] = -(r * (M * m - d * b) - h * (u * m - e * b) + l * (u * d - e * M)), t[10] = r * (i * m - f * b) - o * (u * m - e * b) + l * (u * f - e * i), t[11] = -(r * (i * d - f * M) - o * (u * d - e * M) + h * (u * f - e * i)), t[12] = -(o * (M * v - s * b) - h * (i * v - c * b) + l * (i * s - c * M)), t[13] = r * (M * v - s * b) - h * (u * v - a * b) + l * (u * s - a * M), t[14] = -(r * (i * v - c * b) - o * (u * v - a * b) + l * (u * c - a * i)), t[15] = r * (i * s - c * M) - o * (u * s - a * M) + h * (u * c - a * i), t;
      }

      function m(t) {
        var n = t[0],
            r = t[1],
            u = t[2],
            a = t[3],
            e = t[4],
            o = t[5],
            i = t[6],
            c = t[7],
            f = t[8],
            h = t[9],
            M = t[10],
            s = t[11],
            d = t[12],
            l = t[13],
            b = t[14],
            v = t[15];
        return (n * o - r * e) * (M * v - s * b) - (n * i - u * e) * (h * v - s * l) + (n * c - a * e) * (h * b - M * l) + (r * i - u * o) * (f * v - s * d) - (r * c - a * o) * (f * b - M * d) + (u * c - a * i) * (f * l - h * d);
      }

      function p(t, n, r) {
        var u = n[0],
            a = n[1],
            e = n[2],
            o = n[3],
            i = n[4],
            c = n[5],
            f = n[6],
            h = n[7],
            M = n[8],
            s = n[9],
            d = n[10],
            l = n[11],
            b = n[12],
            v = n[13],
            m = n[14],
            p = n[15],
            y = r[0],
            x = r[1],
            g = r[2],
            q = r[3];
        return t[0] = y * u + x * i + g * M + q * b, t[1] = y * a + x * c + g * s + q * v, t[2] = y * e + x * f + g * d + q * m, t[3] = y * o + x * h + g * l + q * p, y = r[4], x = r[5], g = r[6], q = r[7], t[4] = y * u + x * i + g * M + q * b, t[5] = y * a + x * c + g * s + q * v, t[6] = y * e + x * f + g * d + q * m, t[7] = y * o + x * h + g * l + q * p, y = r[8], x = r[9], g = r[10], q = r[11], t[8] = y * u + x * i + g * M + q * b, t[9] = y * a + x * c + g * s + q * v, t[10] = y * e + x * f + g * d + q * m, t[11] = y * o + x * h + g * l + q * p, y = r[12], x = r[13], g = r[14], q = r[15], t[12] = y * u + x * i + g * M + q * b, t[13] = y * a + x * c + g * s + q * v, t[14] = y * e + x * f + g * d + q * m, t[15] = y * o + x * h + g * l + q * p, t;
      }

      function y(t, n, r) {
        var u,
            a,
            e,
            o,
            i,
            c,
            f,
            h,
            M,
            s,
            d,
            l,
            b = r[0],
            v = r[1],
            m = r[2];
        return n === t ? (t[12] = n[0] * b + n[4] * v + n[8] * m + n[12], t[13] = n[1] * b + n[5] * v + n[9] * m + n[13], t[14] = n[2] * b + n[6] * v + n[10] * m + n[14], t[15] = n[3] * b + n[7] * v + n[11] * m + n[15]) : (u = n[0], a = n[1], e = n[2], o = n[3], i = n[4], c = n[5], f = n[6], h = n[7], M = n[8], s = n[9], d = n[10], l = n[11], t[0] = u, t[1] = a, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = f, t[7] = h, t[8] = M, t[9] = s, t[10] = d, t[11] = l, t[12] = u * b + i * v + M * m + n[12], t[13] = a * b + c * v + s * m + n[13], t[14] = e * b + f * v + d * m + n[14], t[15] = o * b + h * v + l * m + n[15]), t;
      }

      function x(t, n, r) {
        var u = r[0],
            a = r[1],
            e = r[2];
        return t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u, t[3] = n[3] * u, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * e, t[9] = n[9] * e, t[10] = n[10] * e, t[11] = n[11] * e, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
      }

      function g(t, n, r, u) {
        var a,
            o,
            i,
            c,
            f,
            h,
            M,
            s,
            d,
            l,
            b,
            v,
            m,
            p,
            y,
            x,
            g,
            q,
            w,
            j,
            A,
            P,
            S,
            O,
            R = u[0],
            T = u[1],
            D = u[2],
            F = Math.hypot(R, T, D);
        return F < e ? null : (R *= F = 1 / F, T *= F, D *= F, a = Math.sin(r), i = 1 - (o = Math.cos(r)), c = n[0], f = n[1], h = n[2], M = n[3], s = n[4], d = n[5], l = n[6], b = n[7], v = n[8], m = n[9], p = n[10], y = n[11], x = R * R * i + o, g = T * R * i + D * a, q = D * R * i - T * a, w = R * T * i - D * a, j = T * T * i + o, A = D * T * i + R * a, P = R * D * i + T * a, S = T * D * i - R * a, O = D * D * i + o, t[0] = c * x + s * g + v * q, t[1] = f * x + d * g + m * q, t[2] = h * x + l * g + p * q, t[3] = M * x + b * g + y * q, t[4] = c * w + s * j + v * A, t[5] = f * w + d * j + m * A, t[6] = h * w + l * j + p * A, t[7] = M * w + b * j + y * A, t[8] = c * P + s * S + v * O, t[9] = f * P + d * S + m * O, t[10] = h * P + l * S + p * O, t[11] = M * P + b * S + y * O, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t);
      }

      function q(t, n, r) {
        var u = Math.sin(r),
            a = Math.cos(r),
            e = n[4],
            o = n[5],
            i = n[6],
            c = n[7],
            f = n[8],
            h = n[9],
            M = n[10],
            s = n[11];
        return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = e * a + f * u, t[5] = o * a + h * u, t[6] = i * a + M * u, t[7] = c * a + s * u, t[8] = f * a - e * u, t[9] = h * a - o * u, t[10] = M * a - i * u, t[11] = s * a - c * u, t;
      }

      function w(t, n, r) {
        var u = Math.sin(r),
            a = Math.cos(r),
            e = n[0],
            o = n[1],
            i = n[2],
            c = n[3],
            f = n[8],
            h = n[9],
            M = n[10],
            s = n[11];
        return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * a - f * u, t[1] = o * a - h * u, t[2] = i * a - M * u, t[3] = c * a - s * u, t[8] = e * u + f * a, t[9] = o * u + h * a, t[10] = i * u + M * a, t[11] = c * u + s * a, t;
      }

      function j(t, n, r) {
        var u = Math.sin(r),
            a = Math.cos(r),
            e = n[0],
            o = n[1],
            i = n[2],
            c = n[3],
            f = n[4],
            h = n[5],
            M = n[6],
            s = n[7];
        return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * a + f * u, t[1] = o * a + h * u, t[2] = i * a + M * u, t[3] = c * a + s * u, t[4] = f * a - e * u, t[5] = h * a - o * u, t[6] = M * a - i * u, t[7] = s * a - c * u, t;
      }

      function A(t, n) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
      }

      function P(t, n) {
        return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }

      function S(t, n, r) {
        var u,
            a,
            o,
            i = r[0],
            c = r[1],
            f = r[2],
            h = Math.hypot(i, c, f);
        return h < e ? null : (i *= h = 1 / h, c *= h, f *= h, u = Math.sin(n), o = 1 - (a = Math.cos(n)), t[0] = i * i * o + a, t[1] = c * i * o + f * u, t[2] = f * i * o - c * u, t[3] = 0, t[4] = i * c * o - f * u, t[5] = c * c * o + a, t[6] = f * c * o + i * u, t[7] = 0, t[8] = i * f * o + c * u, t[9] = c * f * o - i * u, t[10] = f * f * o + a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
      }

      function O(t, n) {
        var r = Math.sin(n),
            u = Math.cos(n);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = u, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }

      function R(t, n) {
        var r = Math.sin(n),
            u = Math.cos(n);
        return t[0] = u, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = u, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }

      function T(t, n) {
        var r = Math.sin(n),
            u = Math.cos(n);
        return t[0] = u, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }

      function D(t, n, r) {
        var u = n[0],
            a = n[1],
            e = n[2],
            o = n[3],
            i = u + u,
            c = a + a,
            f = e + e,
            h = u * i,
            M = u * c,
            s = u * f,
            d = a * c,
            l = a * f,
            b = e * f,
            v = o * i,
            m = o * c,
            p = o * f;
        return t[0] = 1 - (d + b), t[1] = M + p, t[2] = s - m, t[3] = 0, t[4] = M - p, t[5] = 1 - (h + b), t[6] = l + v, t[7] = 0, t[8] = s + m, t[9] = l - v, t[10] = 1 - (h + d), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
      }

      function F(t, n) {
        var r = new o(3),
            u = -n[0],
            a = -n[1],
            e = -n[2],
            i = n[3],
            c = n[4],
            f = n[5],
            h = n[6],
            M = n[7],
            s = u * u + a * a + e * e + i * i;
        return s > 0 ? (r[0] = 2 * (c * i + M * u + f * e - h * a) / s, r[1] = 2 * (f * i + M * a + h * u - c * e) / s, r[2] = 2 * (h * i + M * e + c * a - f * u) / s) : (r[0] = 2 * (c * i + M * u + f * e - h * a), r[1] = 2 * (f * i + M * a + h * u - c * e), r[2] = 2 * (h * i + M * e + c * a - f * u)), D(t, n, r), t;
      }

      function I(t, n) {
        return t[0] = n[12], t[1] = n[13], t[2] = n[14], t;
      }

      function _(t, n) {
        var r = n[0],
            u = n[1],
            a = n[2],
            e = n[4],
            o = n[5],
            i = n[6],
            c = n[8],
            f = n[9],
            h = n[10];
        return t[0] = Math.hypot(r, u, a), t[1] = Math.hypot(e, o, i), t[2] = Math.hypot(c, f, h), t;
      }

      function E(t, n) {
        var r = new o(3);

        _(r, n);

        var u = 1 / r[0],
            a = 1 / r[1],
            e = 1 / r[2],
            i = n[0] * u,
            c = n[1] * a,
            f = n[2] * e,
            h = n[4] * u,
            M = n[5] * a,
            s = n[6] * e,
            d = n[8] * u,
            l = n[9] * a,
            b = n[10] * e,
            v = i + M + b,
            m = 0;
        return v > 0 ? (m = 2 * Math.sqrt(v + 1), t[3] = .25 * m, t[0] = (s - l) / m, t[1] = (d - f) / m, t[2] = (c - h) / m) : i > M && i > b ? (m = 2 * Math.sqrt(1 + i - M - b), t[3] = (s - l) / m, t[0] = .25 * m, t[1] = (c + h) / m, t[2] = (d + f) / m) : M > b ? (m = 2 * Math.sqrt(1 + M - i - b), t[3] = (d - f) / m, t[0] = (c + h) / m, t[1] = .25 * m, t[2] = (s + l) / m) : (m = 2 * Math.sqrt(1 + b - i - M), t[3] = (c - h) / m, t[0] = (d + f) / m, t[1] = (s + l) / m, t[2] = .25 * m), t;
      }

      function z(t, n, r, u) {
        var a = n[0],
            e = n[1],
            o = n[2],
            i = n[3],
            c = a + a,
            f = e + e,
            h = o + o,
            M = a * c,
            s = a * f,
            d = a * h,
            l = e * f,
            b = e * h,
            v = o * h,
            m = i * c,
            p = i * f,
            y = i * h,
            x = u[0],
            g = u[1],
            q = u[2];
        return t[0] = (1 - (l + v)) * x, t[1] = (s + y) * x, t[2] = (d - p) * x, t[3] = 0, t[4] = (s - y) * g, t[5] = (1 - (M + v)) * g, t[6] = (b + m) * g, t[7] = 0, t[8] = (d + p) * q, t[9] = (b - m) * q, t[10] = (1 - (M + l)) * q, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
      }

      function Q(t, n, r, u, a) {
        var e = n[0],
            o = n[1],
            i = n[2],
            c = n[3],
            f = e + e,
            h = o + o,
            M = i + i,
            s = e * f,
            d = e * h,
            l = e * M,
            b = o * h,
            v = o * M,
            m = i * M,
            p = c * f,
            y = c * h,
            x = c * M,
            g = u[0],
            q = u[1],
            w = u[2],
            j = a[0],
            A = a[1],
            P = a[2],
            S = (1 - (b + m)) * g,
            O = (d + x) * g,
            R = (l - y) * g,
            T = (d - x) * q,
            D = (1 - (s + m)) * q,
            F = (v + p) * q,
            I = (l + y) * w,
            _ = (v - p) * w,
            E = (1 - (s + b)) * w;

        return t[0] = S, t[1] = O, t[2] = R, t[3] = 0, t[4] = T, t[5] = D, t[6] = F, t[7] = 0, t[8] = I, t[9] = _, t[10] = E, t[11] = 0, t[12] = r[0] + j - (S * j + T * A + I * P), t[13] = r[1] + A - (O * j + D * A + _ * P), t[14] = r[2] + P - (R * j + F * A + E * P), t[15] = 1, t;
      }

      function V(t, n) {
        var r = n[0],
            u = n[1],
            a = n[2],
            e = n[3],
            o = r + r,
            i = u + u,
            c = a + a,
            f = r * o,
            h = u * o,
            M = u * i,
            s = a * o,
            d = a * i,
            l = a * c,
            b = e * o,
            v = e * i,
            m = e * c;
        return t[0] = 1 - M - l, t[1] = h + m, t[2] = s - v, t[3] = 0, t[4] = h - m, t[5] = 1 - f - l, t[6] = d + b, t[7] = 0, t[8] = s + v, t[9] = d - b, t[10] = 1 - f - M, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }

      function X(t, n, r, u, a, e, o) {
        var i = 1 / (r - n),
            c = 1 / (a - u),
            f = 1 / (e - o);
        return t[0] = 2 * e * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * c, t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (a + u) * c, t[10] = (o + e) * f, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * e * 2 * f, t[15] = 0, t;
      }

      function Y(t, n, r, u, a) {
        var e,
            o = 1 / Math.tan(n / 2);
        return t[0] = o / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != a && a !== 1 / 0 ? (e = 1 / (u - a), t[10] = (a + u) * e, t[14] = 2 * a * u * e) : (t[10] = -1, t[14] = -2 * u), t;
      }

      function Z(t, n, r, u) {
        var a = Math.tan(n.upDegrees * Math.PI / 180),
            e = Math.tan(n.downDegrees * Math.PI / 180),
            o = Math.tan(n.leftDegrees * Math.PI / 180),
            i = Math.tan(n.rightDegrees * Math.PI / 180),
            c = 2 / (o + i),
            f = 2 / (a + e);
        return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = f, t[6] = 0, t[7] = 0, t[8] = -(o - i) * c * .5, t[9] = (a - e) * f * .5, t[10] = u / (r - u), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = u * r / (r - u), t[15] = 0, t;
      }

      function L(t, n, r, u, a, e, o) {
        var i = 1 / (n - r),
            c = 1 / (u - a),
            f = 1 / (e - o);
        return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * f, t[11] = 0, t[12] = (n + r) * i, t[13] = (a + u) * c, t[14] = (o + e) * f, t[15] = 1, t;
      }

      function k(t, n, r, u) {
        var a,
            o,
            i,
            c,
            f,
            h,
            M,
            s,
            l,
            b,
            v = n[0],
            m = n[1],
            p = n[2],
            y = u[0],
            x = u[1],
            g = u[2],
            q = r[0],
            w = r[1],
            j = r[2];
        return Math.abs(v - q) < e && Math.abs(m - w) < e && Math.abs(p - j) < e ? d(t) : (M = v - q, s = m - w, l = p - j, a = x * (l *= b = 1 / Math.hypot(M, s, l)) - g * (s *= b), o = g * (M *= b) - y * l, i = y * s - x * M, (b = Math.hypot(a, o, i)) ? (a *= b = 1 / b, o *= b, i *= b) : (a = 0, o = 0, i = 0), c = s * i - l * o, f = l * a - M * i, h = M * o - s * a, (b = Math.hypot(c, f, h)) ? (c *= b = 1 / b, f *= b, h *= b) : (c = 0, f = 0, h = 0), t[0] = a, t[1] = c, t[2] = M, t[3] = 0, t[4] = o, t[5] = f, t[6] = s, t[7] = 0, t[8] = i, t[9] = h, t[10] = l, t[11] = 0, t[12] = -(a * v + o * m + i * p), t[13] = -(c * v + f * m + h * p), t[14] = -(M * v + s * m + l * p), t[15] = 1, t);
      }

      function B(t, n, r, u) {
        var a = n[0],
            e = n[1],
            o = n[2],
            i = u[0],
            c = u[1],
            f = u[2],
            h = a - r[0],
            M = e - r[1],
            s = o - r[2],
            d = h * h + M * M + s * s;
        d > 0 && (h *= d = 1 / Math.sqrt(d), M *= d, s *= d);
        var l = c * s - f * M,
            b = f * h - i * s,
            v = i * M - c * h;
        return (d = l * l + b * b + v * v) > 0 && (l *= d = 1 / Math.sqrt(d), b *= d, v *= d), t[0] = l, t[1] = b, t[2] = v, t[3] = 0, t[4] = M * v - s * b, t[5] = s * l - h * v, t[6] = h * b - M * l, t[7] = 0, t[8] = h, t[9] = M, t[10] = s, t[11] = 0, t[12] = a, t[13] = e, t[14] = o, t[15] = 1, t;
      }

      function C(t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
      }

      function G(t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
      }

      function H(t, n, r) {
        return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t[4] = n[4] + r[4], t[5] = n[5] + r[5], t[6] = n[6] + r[6], t[7] = n[7] + r[7], t[8] = n[8] + r[8], t[9] = n[9] + r[9], t[10] = n[10] + r[10], t[11] = n[11] + r[11], t[12] = n[12] + r[12], t[13] = n[13] + r[13], t[14] = n[14] + r[14], t[15] = n[15] + r[15], t;
      }

      function J(t, n, r) {
        return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t[4] = n[4] - r[4], t[5] = n[5] - r[5], t[6] = n[6] - r[6], t[7] = n[7] - r[7], t[8] = n[8] - r[8], t[9] = n[9] - r[9], t[10] = n[10] - r[10], t[11] = n[11] - r[11], t[12] = n[12] - r[12], t[13] = n[13] - r[13], t[14] = n[14] - r[14], t[15] = n[15] - r[15], t;
      }

      function K(t, n, r) {
        return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = n[7] * r, t[8] = n[8] * r, t[9] = n[9] * r, t[10] = n[10] * r, t[11] = n[11] * r, t[12] = n[12] * r, t[13] = n[13] * r, t[14] = n[14] * r, t[15] = n[15] * r, t;
      }

      function N(t, n, r, u) {
        return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t[3] = n[3] + r[3] * u, t[4] = n[4] + r[4] * u, t[5] = n[5] + r[5] * u, t[6] = n[6] + r[6] * u, t[7] = n[7] + r[7] * u, t[8] = n[8] + r[8] * u, t[9] = n[9] + r[9] * u, t[10] = n[10] + r[10] * u, t[11] = n[11] + r[11] * u, t[12] = n[12] + r[12] * u, t[13] = n[13] + r[13] * u, t[14] = n[14] + r[14] * u, t[15] = n[15] + r[15] * u, t;
      }

      function U(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15];
      }

      function W(t, n) {
        var r = t[0],
            u = t[1],
            a = t[2],
            o = t[3],
            i = t[4],
            c = t[5],
            f = t[6],
            h = t[7],
            M = t[8],
            s = t[9],
            d = t[10],
            l = t[11],
            b = t[12],
            v = t[13],
            m = t[14],
            p = t[15],
            y = n[0],
            x = n[1],
            g = n[2],
            q = n[3],
            w = n[4],
            j = n[5],
            A = n[6],
            P = n[7],
            S = n[8],
            O = n[9],
            R = n[10],
            T = n[11],
            D = n[12],
            F = n[13],
            I = n[14],
            _ = n[15];
        return Math.abs(r - y) <= e * Math.max(1, Math.abs(r), Math.abs(y)) && Math.abs(u - x) <= e * Math.max(1, Math.abs(u), Math.abs(x)) && Math.abs(a - g) <= e * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(o - q) <= e * Math.max(1, Math.abs(o), Math.abs(q)) && Math.abs(i - w) <= e * Math.max(1, Math.abs(i), Math.abs(w)) && Math.abs(c - j) <= e * Math.max(1, Math.abs(c), Math.abs(j)) && Math.abs(f - A) <= e * Math.max(1, Math.abs(f), Math.abs(A)) && Math.abs(h - P) <= e * Math.max(1, Math.abs(h), Math.abs(P)) && Math.abs(M - S) <= e * Math.max(1, Math.abs(M), Math.abs(S)) && Math.abs(s - O) <= e * Math.max(1, Math.abs(s), Math.abs(O)) && Math.abs(d - R) <= e * Math.max(1, Math.abs(d), Math.abs(R)) && Math.abs(l - T) <= e * Math.max(1, Math.abs(l), Math.abs(T)) && Math.abs(b - D) <= e * Math.max(1, Math.abs(b), Math.abs(D)) && Math.abs(v - F) <= e * Math.max(1, Math.abs(v), Math.abs(F)) && Math.abs(m - I) <= e * Math.max(1, Math.abs(m), Math.abs(I)) && Math.abs(p - _) <= e * Math.max(1, Math.abs(p), Math.abs(_));
      }

      Math.hypot || (Math.hypot = function () {
        for (var t = 0, n = arguments.length; n--;) {
          t += arguments[n] * arguments[n];
        }

        return Math.sqrt(t);
      });
      var $ = p,
          tt = J;

      function nt() {
        var t = new o(3);
        return o != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t;
      }

      function rt(t) {
        var n = new o(3);
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n;
      }

      function ut(t) {
        var n = t[0],
            r = t[1],
            u = t[2];
        return Math.hypot(n, r, u);
      }

      function at(t, n, r) {
        var u = new o(3);
        return u[0] = t, u[1] = n, u[2] = r, u;
      }

      function et(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
      }

      function ot(t, n, r, u) {
        return t[0] = n, t[1] = r, t[2] = u, t;
      }

      function it(t, n, r) {
        return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t;
      }

      function ct(t, n, r) {
        return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t;
      }

      function ft(t, n, r) {
        return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t;
      }

      function ht(t, n, r) {
        return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t;
      }

      function Mt(t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t;
      }

      function st(t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t;
      }

      function dt(t, n, r) {
        return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t;
      }

      function lt(t, n, r) {
        return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t;
      }

      function bt(t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t;
      }

      function vt(t, n, r) {
        return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t;
      }

      function mt(t, n, r, u) {
        return t[0] = n[0] + r[0] * u, t[1] = n[1] + r[1] * u, t[2] = n[2] + r[2] * u, t;
      }

      function pt(t, n) {
        var r = n[0] - t[0],
            u = n[1] - t[1],
            a = n[2] - t[2];
        return Math.hypot(r, u, a);
      }

      function yt(t, n) {
        var r = n[0] - t[0],
            u = n[1] - t[1],
            a = n[2] - t[2];
        return r * r + u * u + a * a;
      }

      function xt(t) {
        var n = t[0],
            r = t[1],
            u = t[2];
        return n * n + r * r + u * u;
      }

      function gt(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t;
      }

      function qt(t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t;
      }

      function wt(t, n) {
        var r = n[0],
            u = n[1],
            a = n[2],
            e = r * r + u * u + a * a;
        return e > 0 && (e = 1 / Math.sqrt(e)), t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t;
      }

      function jt(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
      }

      function At(t, n, r) {
        var u = n[0],
            a = n[1],
            e = n[2],
            o = r[0],
            i = r[1],
            c = r[2];
        return t[0] = a * c - e * i, t[1] = e * o - u * c, t[2] = u * i - a * o, t;
      }

      function Pt(t, n, r, u) {
        var a = n[0],
            e = n[1],
            o = n[2];
        return t[0] = a + u * (r[0] - a), t[1] = e + u * (r[1] - e), t[2] = o + u * (r[2] - o), t;
      }

      function St(t, n, r, u, a, e) {
        var o = e * e,
            i = o * (2 * e - 3) + 1,
            c = o * (e - 2) + e,
            f = o * (e - 1),
            h = o * (3 - 2 * e);
        return t[0] = n[0] * i + r[0] * c + u[0] * f + a[0] * h, t[1] = n[1] * i + r[1] * c + u[1] * f + a[1] * h, t[2] = n[2] * i + r[2] * c + u[2] * f + a[2] * h, t;
      }

      function Ot(t, n, r, u, a, e) {
        var o = 1 - e,
            i = o * o,
            c = e * e,
            f = i * o,
            h = 3 * e * i,
            M = 3 * c * o,
            s = c * e;
        return t[0] = n[0] * f + r[0] * h + u[0] * M + a[0] * s, t[1] = n[1] * f + r[1] * h + u[1] * M + a[1] * s, t[2] = n[2] * f + r[2] * h + u[2] * M + a[2] * s, t;
      }

      function Rt(t, n) {
        n = n || 1;
        var r = 2 * i() * Math.PI,
            u = 2 * i() - 1,
            a = Math.sqrt(1 - u * u) * n;
        return t[0] = Math.cos(r) * a, t[1] = Math.sin(r) * a, t[2] = u * n, t;
      }

      function Tt(t, n, r) {
        var u = n[0],
            a = n[1],
            e = n[2],
            o = r[3] * u + r[7] * a + r[11] * e + r[15];
        return o = o || 1, t[0] = (r[0] * u + r[4] * a + r[8] * e + r[12]) / o, t[1] = (r[1] * u + r[5] * a + r[9] * e + r[13]) / o, t[2] = (r[2] * u + r[6] * a + r[10] * e + r[14]) / o, t;
      }

      function Dt(t, n, r) {
        var u = n[0],
            a = n[1],
            e = n[2];
        return t[0] = u * r[0] + a * r[3] + e * r[6], t[1] = u * r[1] + a * r[4] + e * r[7], t[2] = u * r[2] + a * r[5] + e * r[8], t;
      }

      function Ft(t, n, r) {
        var u = r[0],
            a = r[1],
            e = r[2],
            o = r[3],
            i = n[0],
            c = n[1],
            f = n[2],
            h = a * f - e * c,
            M = e * i - u * f,
            s = u * c - a * i,
            d = a * s - e * M,
            l = e * h - u * s,
            b = u * M - a * h,
            v = 2 * o;
        return h *= v, M *= v, s *= v, d *= 2, l *= 2, b *= 2, t[0] = i + h + d, t[1] = c + M + l, t[2] = f + s + b, t;
      }

      function It(t, n, r, u) {
        var a = [],
            e = [];
        return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], e[0] = a[0], e[1] = a[1] * Math.cos(u) - a[2] * Math.sin(u), e[2] = a[1] * Math.sin(u) + a[2] * Math.cos(u), t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
      }

      function _t(t, n, r, u) {
        var a = [],
            e = [];
        return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], e[0] = a[2] * Math.sin(u) + a[0] * Math.cos(u), e[1] = a[1], e[2] = a[2] * Math.cos(u) - a[0] * Math.sin(u), t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
      }

      function Et(t, n, r, u) {
        var a = [],
            e = [];
        return a[0] = n[0] - r[0], a[1] = n[1] - r[1], a[2] = n[2] - r[2], e[0] = a[0] * Math.cos(u) - a[1] * Math.sin(u), e[1] = a[0] * Math.sin(u) + a[1] * Math.cos(u), e[2] = a[2], t[0] = e[0] + r[0], t[1] = e[1] + r[1], t[2] = e[2] + r[2], t;
      }

      function zt(t, n) {
        var r = t[0],
            u = t[1],
            a = t[2],
            e = n[0],
            o = n[1],
            i = n[2],
            c = Math.sqrt(r * r + u * u + a * a) * Math.sqrt(e * e + o * o + i * i),
            f = c && jt(t, n) / c;
        return Math.acos(Math.min(Math.max(f, -1), 1));
      }

      function Qt(t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t;
      }

      function Vt(t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }

      function Xt(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
      }

      function Yt(t, n) {
        var r = t[0],
            u = t[1],
            a = t[2],
            o = n[0],
            i = n[1],
            c = n[2];
        return Math.abs(r - o) <= e * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= e * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(a - c) <= e * Math.max(1, Math.abs(a), Math.abs(c));
      }

      var Zt,
          Lt = ct,
          kt = ft,
          Bt = ht,
          Ct = pt,
          Gt = yt,
          Ht = ut,
          Jt = xt,
          Kt = (Zt = nt(), function (t, n, r, u, a, e) {
        var o, i;

        for (n || (n = 3), r || (r = 0), i = u ? Math.min(u * n + r, t.length) : t.length, o = r; o < i; o += n) {
          Zt[0] = t[o], Zt[1] = t[o + 1], Zt[2] = t[o + 2], a(Zt, Zt, e), t[o] = Zt[0], t[o + 1] = Zt[1], t[o + 2] = Zt[2];
        }

        return t;
      });
      var Nt = new (void 0)();
      console.log("MADE", Nt);
    }
  });
});