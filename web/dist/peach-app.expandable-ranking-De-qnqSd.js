(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "70fa165b-0840-40d4-94fc-cabe92ae5bac", e._sentryDebugIdIdentifier = "sentry-dbid-70fa165b-0840-40d4-94fc-cabe92ae5bac");
	} catch {}
})();
import { CHART_CARD as e, CategoryTick as t, ChartEmpty as n, ChartHead as r, ChartTip as i, Dot as a, EvilBarChart as o, Layer as s, TIP_SURFACE as c, TIP_SWATCH as l, Text as u, TipRow as d, ZIndexLayer as f, adaptEventsOfChild as p, addAngleAxis as m, categoryAxisWidth as h, combineAxisTicks as g, combineCategoricalDomain as _, combineConfiguredScale as v, combineGraphicalItemTicks as y, createSelector as b, defaultPolarAngleAxisProps as x, degreeToRadian as S, getAxisTypeBasedOnLayout as ee, getClassNameFromUnknown as te, noop as ne, pickAxisType as C, polarToCartesian as w, rechartsScaleFactory as re, removeAngleAxis as ie, resolveDefaultProps as ae, roundTemplateLiteral as oe, selectAngleAxis as T, selectAngleAxisRangeWithReversed as se, selectChartLayout as E, selectDuplicateDomain as D, selectPolarAppliedValues as ce, selectPolarAxisCheckedDomain as le, selectPolarNiceTicks as ue, selectPolarViewBox as de, selectRadiusAxis as fe, selectRadiusAxisRangeWithReversed as pe, selectRealScaleType as me, selectRenderableAxisSettings as he, svgPropertiesAndEvents as O, svgPropertiesNoEvents as k, svgPropertiesNoEventsFromUnknown as ge, tone as _e, useAppDispatch as ve, useAppSelector as A, useIsPanorama as ye, usePolarChartLayout as be } from "./peach-app.chart-tip-CRxYp6KT.js";
import { __toESM as xe, clsx as j, f1 as Se, require_jsx_runtime as Ce, require_react as we } from "./peach-app.js";
// node_modules/recharts/es6/shape/Polygon.js
var M = /* @__PURE__ */ xe(we()), Te = [
	"points",
	"className",
	"baseLinePoints",
	"connectNulls"
], Ee;
function N() {
	return N = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, N.apply(null, arguments);
}
function De(e, t) {
	if (e == null) return {};
	var n, r, i = Oe(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Oe(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function ke(e, t) {
	return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var P = (e) => e != null && e.x === +e.x && e.y === +e.y, Ae = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = [[]];
	e.forEach((e) => {
		var n = t[t.length - 1];
		P(e) ? n && n.push(e) : n && n.length > 0 && t.push([]);
	});
	var n = e[0], r = t[t.length - 1];
	P(n) && r && r.push(n);
	var i = t[t.length - 1];
	return i && i.length <= 0 && (t = t.slice(0, -1)), t;
}, F = (e, t) => {
	var n = Ae(e);
	t && (n = [n.reduce((e, t) => [...e, ...t], [])]);
	var r = n.map((e) => e.reduce((e, t, n) => oe(Ee ||= ke([
		"",
		"",
		"",
		",",
		""
	]), e, n === 0 ? "M" : "L", t.x, t.y), "")).join("");
	return n.length === 1 ? `${r}Z` : r;
}, je = (e, t, n) => {
	var r = F(e, n);
	return `${r.slice(-1) === "Z" ? r.slice(0, -1) : r}L${F(Array.from(t).reverse(), n).slice(1)}`;
}, I = (e) => {
	var t = e.points, n = e.className, r = e.baseLinePoints, i = e.connectNulls, a = De(e, Te);
	if (!t || !t.length) return null;
	var o = j("recharts-polygon", n);
	if (r && r.length) {
		var s = a.stroke && a.stroke !== "none", c = je(t, r, i);
		return /*#__PURE__*/ M.createElement("g", { className: o }, /*#__PURE__*/ M.createElement("path", N({}, O(a), {
			fill: c.slice(-1) === "Z" ? a.fill : "none",
			stroke: "none",
			d: c
		})), s ? /*#__PURE__*/ M.createElement("path", N({}, O(a), {
			fill: "none",
			d: F(t, i)
		})) : null, s ? /*#__PURE__*/ M.createElement("path", N({}, O(a), {
			fill: "none",
			d: F(r, i)
		})) : null);
	}
	var l = F(t, i);
	return /*#__PURE__*/ M.createElement("path", N({}, O(a), {
		fill: l.slice(-1) === "Z" ? a.fill : "none",
		className: o,
		d: l
	}));
}, L = (e, t, n) => {
	switch (t) {
		case "angleAxis": return T(e, n);
		case "radiusAxis": return fe(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, R = (e, t, n) => {
	switch (t) {
		case "angleAxis": return se(e, n);
		case "radiusAxis": return pe(e, n);
		default: throw Error(`Unexpected axis type: ${t}`);
	}
}, Me = b([
	L,
	me,
	le,
	R
], v), z = b([Me], re), B = b([
	E,
	ce,
	he,
	C
], _), V = b([
	E,
	L,
	me,
	z,
	ue,
	R,
	D,
	B,
	C
], g), Ne = b([V], (e) => {
	if (e) {
		var t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			var n = (e.coordinate + 360) % 360;
			t.has(n) || t.set(n, e);
		}), Array.from(t.values());
	}
}), Pe = b([
	E,
	L,
	z,
	R,
	D,
	B,
	C
], y), Fe = ["children", "type"], Ie = ["ref"];
function H() {
	return H = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, H.apply(null, arguments);
}
function U(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function W(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? U(Object(n), !0).forEach(function(t) {
			Le(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Le(e, t, n) {
	return (t = Re(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Re(e) {
	var t = ze(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ze(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function G(e, t) {
	if (e == null) return {};
	var n, r, i = Be(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Be(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var K = 1e-5, Ve = Math.cos(S(45)), He = "angleAxis";
function Ue(e) {
	var t = ve(), n = be(), r = (0, M.useMemo)(() => {
		e.children;
		var t = e.type, r = G(e, Fe), i = ee(n, "angleAxis", t);
		if (i != null) return W(W({}, r), {}, { type: i });
	}, [e, n]), i = r === A((e) => T(e, r?.id));
	return (0, M.useEffect)(() => r == null ? ne : (t(m(r)), () => {
		t(ie(r));
	}), [t, r]), i ? e.children : null;
}
var We = (e, t) => {
	var n = t.cx, r = t.cy, i = t.radius, a = t.orientation, o = t.tickSize || 8, s = w(n, r, i, e.coordinate), c = w(n, r, i + (a === "inner" ? -1 : 1) * o, e.coordinate);
	return {
		x1: s.x,
		y1: s.y,
		x2: c.x,
		y2: c.y
	};
}, Ge = (e, t) => {
	var n = Math.cos(S(-e.coordinate));
	return n > K ? t === "outer" ? "start" : "end" : n < -K ? t === "outer" ? "end" : "start" : "middle";
}, Ke = (e) => {
	var t = Math.cos(S(-e.coordinate)), n = Math.sin(S(-e.coordinate));
	return Math.abs(t) <= Ve ? n > 0 ? "start" : "end" : "middle";
}, qe = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = e.axisLineType, o = e.axisLine, s = e.ticks;
	if (!o) return null;
	var c = W(W({}, k(e)), {}, { fill: "none" }, k(o));
	if (i === "circle") return /*#__PURE__*/ M.createElement(a, H({ className: "recharts-polar-angle-axis-line" }, c, {
		cx: t,
		cy: n,
		r
	}));
	var l = s.map((e) => w(t, n, r, e.coordinate));
	return /*#__PURE__*/ M.createElement(I, H({ className: "recharts-polar-angle-axis-line" }, c, { points: l }));
}, Je = (e) => {
	var t = e.tick, n = e.tickProps, r = e.value;
	return t ? /*#__PURE__*/ M.isValidElement(t) ? /*#__PURE__*/ M.cloneElement(t, n) : typeof t == "function" ? t(n) : /*#__PURE__*/ M.createElement(u, H({}, n, { className: "recharts-polar-angle-axis-tick-value" }), r) : null;
}, Ye = (e) => {
	var t = e.tick, n = e.tickLine, r = e.tickFormatter, i = e.stroke, a = e.ticks, o = k(e);
	o.ref;
	var c = G(o, Ie), l = ge(t), u = W(W({}, c), {}, { fill: "none" }, k(n)), d = a.map((a, o) => {
		var d = We(a, e), f = Ge(a, e.orientation), m = Ke(a), h = W(W(W({}, c), {}, {
			textAnchor: f,
			verticalAnchor: m,
			stroke: "none",
			fill: i
		}, l), {}, {
			index: o,
			payload: a,
			x: d.x2,
			y: d.y2
		});
		return /*#__PURE__*/ M.createElement(s, H({
			className: j("recharts-polar-angle-axis-tick", te(t)),
			key: `tick-${a.coordinate}`
		}, p(e, a, o)), n && /*#__PURE__*/ M.createElement("line", H({ className: "recharts-polar-angle-axis-tick-line" }, u, d)), /*#__PURE__*/ M.createElement(Je, {
			tick: t,
			tickProps: h,
			value: r ? r(a.value, o) : a.value
		}));
	});
	return /*#__PURE__*/ M.createElement(s, { className: "recharts-polar-angle-axis-ticks" }, d);
}, Xe = (e) => {
	var t = e.angleAxisId, n = A(de), r = A((e) => z(e, "angleAxis", t)), i = ye(), a = A((e) => Ne(e, "angleAxis", t, i));
	if (n == null || !a || !a.length || r == null) return null;
	var o = W(W(W({}, e), {}, { scale: r }, n), {}, {
		radius: n.outerRadius,
		ticks: a
	});
	return /*#__PURE__*/ M.createElement(f, { zIndex: o.zIndex }, /*#__PURE__*/ M.createElement(s, { className: j("recharts-polar-angle-axis", He, o.className) }, /*#__PURE__*/ M.createElement(qe, o), /*#__PURE__*/ M.createElement(Ye, o)));
};
function q(e) {
	var t = ae(e, x);
	return /*#__PURE__*/ M.createElement(Ue, {
		id: t.angleAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: !1,
		allowDataOverflow: !1,
		reversed: t.reversed,
		includeHidden: !1,
		allowDecimals: t.allowDecimals,
		tickCount: t.tickCount,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tick: t.tick,
		domain: t.domain
	}, /*#__PURE__*/ M.createElement(Xe, t));
}
q.displayName = "PolarAngleAxis";
// src/react/charts/bar-card.tsx
var J = Ce(), Y = [0, (e) => e * 1.2];
function Ze(e) {
	let t = Math.abs(e), n = (t, n) => {
		let r = e / t;
		return `${r.toLocaleString(void 0, { maximumFractionDigits: +(Math.abs(r) < 100) })}${n}`;
	};
	return t >= 1e9 ? n(1e9, "B") : t >= 1e6 ? n(1e6, "M") : t >= 1e5 ? n(1e3, "K") : e.toLocaleString();
}
var X = (e) => ({
	position: e,
	className: "fill-text-secondary",
	formatter: (e) => Ze(Number(e))
});
function Qe({ title: a, unit: s, series: c, rows: l, color: u, empty: d, layout: f = "vertical" }) {
	let p = l.filter((e) => Number.isFinite(e.value) && e.value >= 0).map((e) => ({
		name: e.name,
		value: e.value
	})), m = p.reduce((e, t) => e + t.value, 0);
	if (!m) return /* @__PURE__ */ (0, J.jsx)(n, {
		title: a,
		children: d
	});
	let g = f === "horizontal";
	return /* @__PURE__ */ (0, J.jsxs)("section", {
		className: e,
		"aria-label": a,
		children: [/* @__PURE__ */ (0, J.jsx)(r, {
			title: a,
			figure: m.toLocaleString(),
			note: s
		}), /* @__PURE__ */ (0, J.jsxs)(o, {
			data: p,
			config: { value: {
				label: c,
				colors: _e(u)
			} },
			layout: f,
			barRadius: 4,
			chartProps: g ? { margin: {
				top: 5,
				right: 56,
				bottom: 5,
				left: 5
			} } : void 0,
			className: g ? "aspect-auto h-64 flex-none text-text-secondary" : "aspect-auto h-56 flex-none text-text-secondary",
			children: [
				/* @__PURE__ */ (0, J.jsx)(o.Grid, {}),
				g ? /* @__PURE__ */ (0, J.jsx)(o.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, J.jsx)(t, { along: "y" }),
					width: h(p.map((e) => e.name))
				}) : /* @__PURE__ */ (0, J.jsx)(o.XAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, J.jsx)(t, { along: "x" })
				}),
				g ? /* @__PURE__ */ (0, J.jsx)(o.XAxis, {
					hide: !0,
					domain: Y
				}) : /* @__PURE__ */ (0, J.jsx)(o.YAxis, {
					hide: !0,
					domain: Y
				}),
				/* @__PURE__ */ (0, J.jsx)(o.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: X(g ? "right" : "top")
					}
				}),
				/* @__PURE__ */ (0, J.jsx)(i, {})
			]
		})]
	});
}
// src/react/charts/heat.ts
var $e = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri",
	"Sat",
	"Sun"
], et = (e, t) => e ? Math.max(.12, e / t) : 0;
function tt(e) {
	let t = Array.from({ length: 7 }, () => Array(24).fill(0));
	for (let n of e?.hours || []) {
		let { weekday: e, hour: r, count: i } = n;
		!Number.isInteger(e) || e < 0 || e > 6 || !Number.isInteger(r) || r < 0 || r > 23 || !Number.isFinite(i) || i < 0 || (t[e][r] = (t[e][r] || 0) + i);
	}
	let n = t.flat(), r = Math.max(1, ...n);
	return {
		cells: t.flatMap((e, t) => e.map((e, n) => ({
			key: `${t}-${n}`,
			label: `${$e[t]} ${n}:00`,
			count: e,
			share: et(e, r)
		}))),
		total: n.reduce((e, t) => e + t, 0)
	};
}
function nt(e) {
	let t = (e?.days || []).filter((e) => /^\d{4}-\d{2}-\d{2}$/.test(e.date) && Number.isFinite(e.count) && e.count >= 0).slice().sort((e, t) => e.date.localeCompare(t.date)), n = {
		cells: [],
		total: 0,
		start: "",
		end: ""
	};
	if (!t.length) return n;
	let r = /* @__PURE__ */ new Date(`${t.at(-1).date}T00:00:00Z`), i = new Date(r);
	i.setUTCDate(i.getUTCDate() - 90);
	let a = new Map(t.map((e) => [e.date, e.count])), o = Math.max(1, ...t.map((e) => e.count)), s = Array.from({ length: 91 }, (e, t) => {
		let n = new Date(i);
		n.setUTCDate(i.getUTCDate() + t);
		let r = n.toISOString().slice(0, 10), s = a.get(r) || 0;
		return {
			key: r,
			label: r,
			count: s,
			share: et(s, o)
		};
	});
	return {
		cells: s,
		total: s.reduce((e, t) => e + t.count, 0),
		start: i.toISOString().slice(0, 10),
		end: t.at(-1).date
	};
}
// src/react/charts/heat-card.tsx
var Z = 14, Q = 17, rt = {
	4: {
		fill: "fill-chart-4",
		dot: "bg-chart-4"
	},
	5: {
		fill: "fill-chart-5",
		dot: "bg-chart-5"
	}
}, it = {
	start: "translate-x-0",
	center: "-translate-x-1/2",
	end: "-translate-x-full"
};
function at({ cell: e, series: t, tone: n, left: r, top: i, anchor: a }) {
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		"aria-hidden": !0,
		style: {
			left: `${r}%`,
			top: `${i}%`
		},
		className: `pointer-events-none absolute z-10 -mt-2 -translate-y-full ${c} ${it[a]}`,
		children: [/* @__PURE__ */ (0, J.jsx)("div", {
			className: "font-medium text-foreground",
			children: e.label
		}), /* @__PURE__ */ (0, J.jsx)(d, {
			name: t,
			value: e.count,
			swatch: /* @__PURE__ */ (0, J.jsx)("i", { className: `${l} ${rt[n].dot}` })
		})]
	});
}
function $({ title: t, words: n, cells: i, total: a, columns: o, rows: s, axis: c, footer: l, tone: u }) {
	let [d, f] = (0, M.useState)(-1), p = c ? 30 : 0, m = c ? 18 : 0, h = p + o * Q, g = m + s * Q, _ = (e) => ({
		x: p + e % o * Q,
		y: m + Math.floor(e / o) * Q
	}), v = i[d], y = v ? _(d) : null, b = y ? (y.x + Z / 2) / h : 0, x = b < .1 ? "start" : b > .9 ? "end" : "center", S = y ? {
		start: y.x,
		center: y.x + Z / 2,
		end: y.x + Z
	}[x] : 0;
	return /* @__PURE__ */ (0, J.jsxs)("section", {
		className: e,
		children: [
			/* @__PURE__ */ (0, J.jsx)(r, {
				title: t,
				figure: (v ? v.count : a).toLocaleString(),
				note: v ? v.label : n.unit
			}),
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, J.jsx)("div", {
					className: "min-w-0 overflow-x-auto",
					children: /* @__PURE__ */ (0, J.jsxs)("svg", {
						role: "img",
						"aria-label": t,
						onPointerLeave: () => f(-1),
						viewBox: `0 0 ${h} ${g}`,
						className: c ? "block h-auto min-w-80 w-full" : "block h-auto w-full",
						children: [c, i.map((e, t) => {
							let { x: r, y: i } = _(t);
							return /* @__PURE__ */ (0, J.jsx)("rect", {
								tabIndex: 0,
								role: "img",
								"aria-label": `${e.label}, ${e.count} ${n.cellUnit}`,
								x: r,
								y: i,
								width: Z,
								height: Z,
								rx: 3,
								fillOpacity: e.share || 1,
								opacity: d >= 0 && d !== t ? .4 : 1,
								className: e.share ? `outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring ${rt[u].fill}` : "fill-chart-track outline-none transition-opacity duration-200 focus-visible:stroke-border-focus-ring",
								onPointerEnter: () => f(t),
								onFocus: () => f(t),
								onBlur: () => f(-1)
							}, e.key);
						})]
					})
				}), v && y ? /* @__PURE__ */ (0, J.jsx)(at, {
					cell: v,
					series: n.series,
					tone: u,
					anchor: x,
					left: S / h * 100,
					top: y.y / g * 100
				}) : null]
			}),
			/* @__PURE__ */ (0, J.jsx)("footer", {
				className: "flex flex-wrap justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: l
			})
		]
	});
}
var ot = /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [$e.map((e, t) => /* @__PURE__ */ (0, J.jsx)("text", {
	x: 0,
	y: 18 + t * Q + 7,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: e
}, e)), Array.from({ length: 24 }, (e, t) => t % 2 ? null : /* @__PURE__ */ (0, J.jsx)("text", {
	x: 30 + t * Q,
	y: 8,
	dominantBaseline: "middle",
	className: "fill-text-secondary text-caption-1-regular",
	children: t
}, t))] });
function st({ activity: e, title: t, dailyTitle: r, words: i, tone: a, empty: o }) {
	let s = tt(e), c = nt(e);
	return c.cells.length ? /* @__PURE__ */ (0, J.jsxs)("div", {
		className: "inline-grid w-full items-start gap-5 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, J.jsx)($, {
			title: t,
			words: i,
			tone: a,
			cells: s.cells,
			total: s.total,
			columns: 24,
			rows: 7,
			axis: ot,
			footer: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("span", { children: "Weekday × hour" }), /* @__PURE__ */ (0, J.jsx)("span", { children: e?.timezone || "UTC+08:00" })] })
		}), /* @__PURE__ */ (0, J.jsx)($, {
			title: r,
			words: i,
			tone: a,
			cells: c.cells,
			total: c.total,
			columns: 13,
			rows: 7,
			footer: /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [/* @__PURE__ */ (0, J.jsx)("span", { children: c.start }), /* @__PURE__ */ (0, J.jsx)("span", { children: c.end })] })
		})]
	}) : /* @__PURE__ */ (0, J.jsx)(n, {
		title: t,
		children: o
	});
}
// src/react/components/expandable-ranking.tsx
function ct({ children: e, className: t = "", previewCount: n = 10 }) {
	let r = (0, M.useId)(), i = (0, M.useRef)(null), [a, o] = (0, M.useState)(!1), [s, c] = (0, M.useState)(!1), l = M.Children.toArray(e), u = l.length > n;
	(0, M.useLayoutEffect)(() => {
		let e = i.current;
		if (!e || !u) return;
		let t = () => {
			let t = e.children[Math.min(n, e.children.length) - 1];
			t && e.offsetWidth && (e.style.setProperty("--ranking-collapsed-height", `${t.offsetTop - e.offsetTop + t.offsetHeight}px`), e.style.setProperty("--ranking-expanded-height", `${e.scrollHeight}px`));
		};
		t();
		let r = new ResizeObserver(t);
		return r.observe(e), () => r.disconnect();
	}, [
		u,
		n,
		l.length
	]);
	let d = l.map((e, t) => !(0, M.isValidElement)(e) || t < n ? e : (0, M.cloneElement)(e, { inert: !a || void 0 }));
	return /* @__PURE__ */ (0, J.jsxs)("div", {
		"data-expandable-ranking": !0,
		"data-expandable": u || void 0,
		"data-expanded": a || void 0,
		"data-animating": s || void 0,
		children: [/* @__PURE__ */ (0, J.jsx)("ol", {
			id: r,
			ref: i,
			"data-expandable-ranking-list": !0,
			className: t,
			onTransitionEnd: (e) => {
				e.target === i.current && e.propertyName === "max-height" && c(!1);
			},
			children: d
		}), u ? /* @__PURE__ */ (0, J.jsx)("button", {
			type: "button",
			"data-ranking-toggle": !0,
			"aria-controls": r,
			"aria-expanded": a,
			"aria-label": a ? "Collapse ranking" : "Show more rankings",
			onClick: () => {
				c(!0), o((e) => !e);
			},
			children: /* @__PURE__ */ (0, J.jsx)(Se, { "aria-hidden": !0 })
		}) : null]
	});
}
export { st as ActivityHeat, Y as BAR_DOMAIN, Qe as BarCard, ct as ExpandableRanking, q as PolarAngleAxis, I as Polygon, X as barLabel, z as selectPolarAxisScale, V as selectPolarAxisTicks, Pe as selectPolarGraphicalItemAxisTicks };

//# debugId=70fa165b-0840-40d4-94fc-cabe92ae5bac