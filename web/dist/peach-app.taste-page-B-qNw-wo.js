(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ece15e85-2d37-4cfe-9b9d-ee82fafa61cf", e._sentryDebugIdIdentifier = "sentry-dbid-ece15e85-2d37-4cfe-9b9d-ee82fafa61cf");
	} catch {}
})();
import { ActivePoints as e, AnimatedItems as t, CHART_CARD as n, CHART_COLORS as r, CartesianLabelListContextProvider as i, CategoryTick as a, ChartBackground as o, ChartContainer as s, ChartHead as c, ChartLegend as l, ChartLegendContent as u, ChartTip as d, ChartTooltip as f, ChartTooltipContent as p, DefaultZIndexes as m, Dots as h, EvilBarChart as g, LabelListFromLabelProp as _, Layer as v, LoadingIndicator as y, PolarChart as b, PolarLabelContextProvider as x, PolarLabelFromLabelProp as S, RegisterGraphicalItemId as C, SetPolarGraphicalItem as ee, SetPolarLegendPayload as w, SetTooltipEntrySettings as te, Text as T, ZIndexLayer as E, adaptEventsOfChild as ne, addRadiusAxis as re, arrayTooltipSearcher as ie, categoryAxisWidth as ae, cn as oe, createSelector as D, defaultPolarChartProps as se, defaultPolarRadiusAxisProps as ce, fitLabel as le, getAxisTypeBasedOnLayout as ue, getBandSizeOfAxis as de, getClassNameFromUnknown as fe, getColorsCount as pe, getTooltipNameProp as me, getValueByDataKey as he, identity as ge, interpolate as _e, isArrayLike as ve, isCategoricalAxis as ye, isNullish as be, iteratee as xe, matchAnimationItems as Se, matchByIndex as Ce, noop as we, polarToCartesian as O, removeRadiusAxis as Te, resolveDefaultProps as Ee, selectAngleAxis as De, selectChartDataAndAlwaysIgnoreIndexes as Oe, selectChartLayout as ke, selectPolarViewBox as Ae, selectRadiusAxis as je, selectUnfilteredPolarItems as Me, svgPropertiesAndEvents as Ne, svgPropertiesNoEvents as k, svgPropertiesNoEventsFromUnknown as Pe, tone as Fe, useAnimationCallbacks as Ie, useAnimationStartSnapshot as Le, useAppDispatch as Re, useAppSelector as A, useIsPanorama as ze, usePolarChartLayout as Be } from "./peach-app.chart-tip-CRxYp6KT.js";
import { $542a13ca2fa5b484$export$5b6b19405a83ff9d as Ve, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as He, $b4f18e3395fe64d7$export$3e41faf802a29e71 as Ue, $b4f18e3395fe64d7$export$b2539bed5023c21c as We, Button as j, ButtonLink as Ge, Disclosure as Ke, E3 as qe, EmptyState as M, FLOW_LABEL_X as Je, FLOW_VIEWBOX as Ye, Gg as Xe, IDLE_POLL_MS as Ze, Input as Qe, M6 as $e, MENU_ITEM as et, MENU_ITEM_INTERACTIVE as tt, MENU_POPOVER_SURFACE as nt, MenuDialog as rt, Note as N, OV as it, Progress as at, Rf as ot, SEGMENT as st, SEGMENTED_TRACK as ct, SegmentedTabList as lt, Select$1 as ut, SelectItem as dt, TASTE_REFRESH_KEY as ft, TASTE_WINDOWS as pt, TaskProgress as mt, Wt as ht, Xt as gt, _8 as _t, __toESM as vt, aB as yt, avatarInner as bt, busyProps as P, cB as xt, cardClass as F, clsx as I, configureTasteBrowser as St, confirmModal as Ct, cx as wt, errorMessage as L, f1 as Tt, fetchTaste as Et, fetchTasteJob as Dt, firstGrapheme as Ot, flowGraph as kt, flowLabel as At, fmtSize as jt, g4 as Mt, historySpan as Nt, importTasteExport as Pt, keepPreviousData as Ft, mM as It, pv as R, queryClient as z, r2 as Lt, radarRows as Rt, rankDetail as zt, rankShares as Bt, removeTasteSource as Vt, require_jsx_runtime as Ht, require_react as Ut, siteMarkUrl as Wt, startTasteRefresh as Gt, tasteDate as Kt, tasteDimensions as qt, tasteHours as Jt, tasteKey as B, tasteRefetchInterval as Yt, tasteTime as Xt, topScores as Zt, uo as Qt, useBackgroundJob as $t, useMutation as V, useQuery as en } from "./peach-app.js";
import { Page as tn } from "./peach-app.page-QAncjzM1.js";
import { STAT_STRIP as nn, StatCard as rn, statCardClass as an } from "./peach-app.stat-card-DsNmy_0F.js";
import { LEGACY_AVATAR_IMG as on } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { ActivityHeat as sn, BAR_DOMAIN as cn, ExpandableRanking as ln, PolarAngleAxis as un, Polygon as dn, barLabel as fn, selectPolarAxisScale as pn, selectPolarAxisTicks as H } from "./peach-app.expandable-ranking-De-qnqSd.js";
var mn = D([(e, t) => H(e, "angleAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), hn = D([(e, t) => H(e, "radiusAxis", t, !1)], (e) => {
	if (e) return e.map((e) => e.coordinate);
}), U = /* @__PURE__ */ vt(Ut()), gn = [
	"gridType",
	"radialLines",
	"angleAxisId",
	"radiusAxisId",
	"cx",
	"cy",
	"innerRadius",
	"outerRadius",
	"polarAngles",
	"polarRadius",
	"zIndex"
];
function _n(e, t) {
	if (e == null) return {};
	var n, r, i = vn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function vn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function W() {
	return W = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, W.apply(null, arguments);
}
function yn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function G(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? yn(Object(n), !0).forEach(function(t) {
			bn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function bn(e, t, n) {
	return (t = xn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xn(e) {
	var t = Sn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Sn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Cn = (e, t, n, r) => {
	var i = "";
	return r.forEach((r, a) => {
		var o = O(t, n, e, r);
		i += a ? `L ${o.x},${o.y}` : `M ${o.x},${o.y}`;
	}), i += "Z", i;
}, wn = (e) => {
	var t = e.cx, n = e.cy, r = e.innerRadius, i = e.outerRadius, a = e.polarAngles, o = e.radialLines;
	if (!a || !a.length || !o) return null;
	var s = G({}, k(e));
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-angle" }, a.map((e) => {
		var a = O(t, n, r, e), o = O(t, n, i, e);
		return /*#__PURE__*/ U.createElement("line", W({ key: `line-${e}` }, s, {
			x1: a.x,
			y1: a.y,
			x2: o.x,
			y2: o.y
		}));
	}));
}, Tn = (e) => {
	var t = e.cx, n = e.cy, r = e.radius, i = G({}, k(e));
	return /*#__PURE__*/ U.createElement("circle", W({}, i, {
		className: I("recharts-polar-grid-concentric-circle", e.className),
		cx: t,
		cy: n,
		r
	}));
}, En = (e) => {
	var t = e.radius, n = G({}, k(e));
	return /*#__PURE__*/ U.createElement("path", W({}, n, {
		className: I("recharts-polar-grid-concentric-polygon", e.className),
		d: Cn(t, e.cx, e.cy, e.polarAngles)
	}));
}, Dn = (e) => {
	var t = e.polarRadius, n = e.gridType;
	if (!t || !t.length) return null;
	var r = Math.max(...t), i = e.fill && e.fill !== "none";
	return /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid-concentric" }, i && n === "circle" && /*#__PURE__*/ U.createElement(Tn, W({}, e, { radius: r })), i && n !== "circle" && /*#__PURE__*/ U.createElement(En, W({}, e, { radius: r })), t.map((t, r) => {
		var i = r;
		return n === "circle" ? /*#__PURE__*/ U.createElement(Tn, W({ key: i }, e, {
			fill: "none",
			radius: t
		})) : /*#__PURE__*/ U.createElement(En, W({ key: i }, e, {
			fill: "none",
			radius: t
		}));
	}));
}, On = {
	angleAxisId: 0,
	radiusAxisId: 0,
	gridType: "polygon",
	radialLines: !0,
	zIndex: m.grid,
	stroke: "#ccc",
	strokeWidth: 1,
	fill: "none"
}, kn = (e) => {
	var t = Ee(e, On), n = t.gridType, r = t.radialLines, i = t.angleAxisId, a = t.radiusAxisId, o = t.cx, s = t.cy, c = t.innerRadius, l = t.outerRadius, u = t.polarAngles, d = t.polarRadius, f = t.zIndex, p = _n(t, gn), m = A(Ae), h = A((e) => mn(e, i)), g = A((e) => hn(e, a)), _ = Array.isArray(u) ? u : h, v = Array.isArray(d) ? d : g;
	if (_ == null || v == null) return null;
	var y = G({
		cx: m?.cx ?? o ?? 0,
		cy: m?.cy ?? s ?? 0,
		innerRadius: m?.innerRadius ?? c ?? 0,
		outerRadius: m?.outerRadius ?? l ?? 0,
		polarAngles: _,
		polarRadius: v,
		zIndex: f
	}, p);
	return y.outerRadius <= 0 ? null : /*#__PURE__*/ U.createElement(E, { zIndex: y.zIndex }, /*#__PURE__*/ U.createElement("g", { className: "recharts-polar-grid" }, /*#__PURE__*/ U.createElement(Dn, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	})), /*#__PURE__*/ U.createElement(wn, W({
		gridType: n,
		radialLines: r
	}, y, {
		polarAngles: _,
		polarRadius: v
	}))));
};
kn.displayName = "PolarGrid";
// node_modules/es-toolkit/dist/compat/_internal/toArray.mjs
function An(e) {
	return Array.isArray(e) ? e : Array.from(e);
}
// node_modules/es-toolkit/dist/compat/math/maxBy.mjs
function jn(e, t = ge) {
	if (e == null) return;
	let n = An(e);
	if (n.length === 0) return;
	let r = xe(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o > a) && (a = o, i = t);
	}
	return i;
}
// node_modules/es-toolkit/dist/compat/math/minBy.mjs
function Mn(e, t = ge) {
	if (e == null) return;
	let n = An(e);
	if (n.length === 0) return;
	let r = xe(t), i, a;
	for (let e = 0; e < n.length; e++) {
		let t = n[e], o = r(t, e, n);
		o == null || Number.isNaN(o) || typeof o == "symbol" || (a === void 0 || o < a) && (a = o, i = t);
	}
	return i;
}
// node_modules/recharts/es6/polar/PolarRadiusAxis.js
var Nn = ["type"], Pn = [
	"cx",
	"cy",
	"angle",
	"axisLine"
], Fn = [
	"angle",
	"tickFormatter",
	"stroke",
	"tick"
];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function In(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? In(Object(n), !0).forEach(function(t) {
			Ln(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : In(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Ln(e, t, n) {
	return (t = Rn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Rn(e) {
	var t = zn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function zn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Bn(e, t) {
	if (e == null) return {};
	var n, r, i = Vn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Vn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Hn = "radiusAxis";
function Un(e) {
	var t = Re(), n = Be(), r = (0, U.useMemo)(() => {
		var t = e.type, r = Bn(e, Nn), i = ue(n, "radiusAxis", t);
		if (i != null) return q(q({}, r), {}, { type: i });
	}, [e, n]);
	return (0, U.useEffect)(() => r == null ? we : (t(re(r)), () => {
		t(Te(r));
	}), [t, r]), null;
}
var Wn = (e, t, n, r) => {
	var i = e.coordinate;
	return O(n, r, i, t);
}, Gn = (e) => {
	var t;
	switch (e) {
		case "left":
			t = "end";
			break;
		case "right":
			t = "start";
			break;
		default: t = "middle";
	}
	return t;
}, Kn = (e, t, n, r) => {
	var i = jn(r, (e) => e.coordinate || 0);
	return {
		cx: t,
		cy: n,
		startAngle: e,
		endAngle: e,
		innerRadius: Mn(r, (e) => e.coordinate || 0)?.coordinate || 0,
		outerRadius: i?.coordinate || 0,
		clockWise: !1
	};
}, qn = (e, t) => {
	var n = e.cx, r = e.cy, i = e.angle, a = e.axisLine, o = Bn(e, Pn), s = t.reduce((e, t) => [Math.min(e[0], t.coordinate), Math.max(e[1], t.coordinate)], [Infinity, -Infinity]), c = O(n, r, s[0], i), l = O(n, r, s[1], i), u = q(q(q({}, k(o)), {}, { fill: "none" }, k(a)), {}, {
		x1: c.x,
		y1: c.y,
		x2: l.x,
		y2: l.y
	});
	return /*#__PURE__*/ U.createElement("line", K({ className: "recharts-polar-radius-axis-line" }, u));
}, Jn = (e, t, n) => /*#__PURE__*/ U.isValidElement(e) ? /*#__PURE__*/ U.cloneElement(e, t) : typeof e == "function" ? e(t) : /*#__PURE__*/ U.createElement(T, K({}, t, { className: "recharts-polar-radius-axis-tick-value" }), n), Yn = (e, t) => {
	var n = e.angle, r = e.tickFormatter, i = e.stroke, a = e.tick, o = Bn(e, Fn), s = Gn(e.orientation), c = k(o), l = Pe(a), u = t.map((t, o) => {
		var u = Wn(t, e.angle, e.cx, e.cy), d = q(q(q(q({
			textAnchor: s,
			transform: `rotate(${90 - n}, ${u.x}, ${u.y})`
		}, c), {}, {
			stroke: "none",
			fill: i
		}, l), {}, { index: o }, u), {}, { payload: t });
		return /*#__PURE__*/ U.createElement(v, K({
			className: I("recharts-polar-radius-axis-tick", fe(a)),
			key: `tick-${t.coordinate}`
		}, ne(e, t, o)), Jn(a, d, r ? r(t.value, o) : t.value));
	});
	return /*#__PURE__*/ U.createElement(v, { className: "recharts-polar-radius-axis-ticks" }, u);
}, Xn = (e) => {
	var t = e.radiusAxisId, n = A(Ae), r = A((e) => pn(e, "radiusAxis", t)), i = A((e) => H(e, "radiusAxis", t, !1));
	if (n == null || !i || !i.length || r == null) return null;
	var a = q(q({}, e), {}, { scale: r }, n), o = a.tick, s = a.axisLine;
	return /*#__PURE__*/ U.createElement(E, { zIndex: a.zIndex }, /*#__PURE__*/ U.createElement(v, { className: I("recharts-polar-radius-axis", Hn, a.className) }, s && qn(a, i), o && Yn(a, i), /*#__PURE__*/ U.createElement(x, Kn(a.angle, a.cx, a.cy, i), /*#__PURE__*/ U.createElement(S, { label: a.label }), a.children)));
};
function Zn(e) {
	var t = Ee(e, ce);
	return /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(Un, {
		domain: t.domain,
		id: t.radiusAxisId,
		scale: t.scale,
		type: t.type,
		dataKey: t.dataKey,
		unit: void 0,
		name: t.name,
		allowDuplicatedCategory: t.allowDuplicatedCategory,
		allowDataOverflow: t.allowDataOverflow,
		reversed: t.reversed,
		includeHidden: t.includeHidden,
		allowDecimals: t.allowDecimals,
		niceTicks: t.niceTicks ?? "auto",
		ticks: t.ticks,
		tickCount: t.tickCount,
		tick: t.tick
	}), /*#__PURE__*/ U.createElement(Xn, t));
}
Zn.displayName = "PolarRadiusAxis";
// node_modules/es-toolkit/dist/array/last.mjs
function Qn(e) {
	return e[e.length - 1];
}
// node_modules/es-toolkit/dist/compat/array/last.mjs
function $n(e) {
	if (ve(e) && e.length !== 0) return Qn(An(e));
}
// node_modules/recharts/es6/state/selectors/radarSelectors.js
function er(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function tr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? er(Object(n), !0).forEach(function(t) {
			nr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function nr(e, t, n) {
	return (t = rr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function rr(e) {
	var t = ir(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function ir(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var ar = (e, t) => pn(e, "radiusAxis", t), or = D([ar], (e) => {
	if (e != null) return { scale: e };
}), sr = D([je, ar], (e, t) => {
	if (e != null && t != null) return tr(tr({}, e), {}, { scale: t });
}), cr = (e, t, n, r) => H(e, "radiusAxis", t, r), lr = (e, t, n) => De(e, n), ur = (e, t, n) => pn(e, "angleAxis", n), dr = D([lr, ur], (e, t) => {
	if (e != null && t != null) return tr(tr({}, e), {}, { scale: t });
}), fr = (e, t, n, r) => H(e, "angleAxis", n, r), pr = D([
	lr,
	ur,
	Ae
], (e, t, n) => {
	if (n != null && t != null) return {
		scale: t,
		type: e.type,
		dataKey: e.dataKey,
		cx: n.cx,
		cy: n.cy
	};
}), mr = (e, t, n, r, i) => i, hr = D([
	ke,
	sr,
	cr,
	dr,
	fr
], (e, t, n, r, i) => ye(e, "radiusAxis") ? de(t, n, !1) : de(r, i, !1)), gr = D([Me, mr], (e, t) => {
	if (e != null) return e.find((e) => e.type === "radar" && t === e.id)?.dataKey;
}), _r = D([
	or,
	pr,
	Oe,
	gr,
	hr
], (e, t, n, r, i) => {
	var a = n.chartData, o = n.dataStartIndex, s = n.dataEndIndex;
	if (e != null && t != null && a != null && i != null && r != null) return kr({
		radiusAxis: e,
		angleAxis: t,
		displayedData: a.slice(o, s + 1),
		dataKey: r,
		bandSize: i
	});
}), vr = ["id"];
function J() {
	return J = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, J.apply(null, arguments);
}
function yr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Y(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? yr(Object(n), !0).forEach(function(t) {
			br(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function br(e, t, n) {
	return (t = xr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function xr(e) {
	var t = Sr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Sr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function Cr(e, t) {
	if (e == null) return {};
	var n, r, i = wr(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function wr(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Tr(e, t) {
	return e && e !== "none" ? e : t;
}
var Er = (e) => {
	var t = e.dataKey, n = e.name, r = e.stroke, i = e.fill, a = e.legendType;
	return [{
		inactive: e.hide,
		dataKey: t,
		type: a,
		color: Tr(r, i),
		value: me(n, t),
		payload: e
	}];
}, Dr = /*#__PURE__*/ U.memo((e) => {
	var t = e.dataKey, n = e.stroke, r = e.strokeWidth, i = e.fill, a = e.name, o = e.hide, s = e.tooltipType, c = e.id, l = {
		dataDefinedOnItem: void 0,
		getPosition: we,
		settings: {
			stroke: n,
			strokeWidth: r,
			fill: i,
			nameKey: void 0,
			dataKey: t,
			name: me(a, t),
			hide: o,
			type: s,
			color: Tr(n, i),
			unit: "",
			graphicalItemId: c
		}
	};
	return /*#__PURE__*/ U.createElement(te, { tooltipEntrySettings: l });
});
function Or(e) {
	var t = e.points, n = e.props, r = n.dot, i = n.dataKey;
	n.id;
	var a = Cr(n, vr), o = k(a);
	return /*#__PURE__*/ U.createElement(h, {
		points: t,
		dot: r,
		className: "recharts-radar-dots",
		dotClassName: "recharts-radar-dot",
		dataKey: i,
		baseProps: o
	});
}
function kr(e) {
	var t = e.radiusAxis, n = e.angleAxis, r = e.displayedData, i = e.dataKey, a = e.bandSize, o = n.cx, s = n.cy, c = !1, l = [], u = n.type === "number" ? 0 : a ?? 0;
	r.forEach((e, r) => {
		var a = he(e, n.dataKey, r), d = he(e, i), f = (n.scale.map(a) ?? 0) + u, p = Array.isArray(d) ? $n(d) : d, m = be(p) ? 0 : t.scale.map(p) ?? 0;
		Array.isArray(d) && d.length >= 2 && (c = !0), l.push(Y(Y({}, O(o, s, m, f)), {}, {
			name: a,
			value: d,
			cx: o,
			cy: s,
			radius: m,
			angle: f,
			payload: e
		}));
	});
	var d = [];
	return c && l.forEach((e) => {
		if (Array.isArray(e.value)) {
			var n = e.value[0], r = be(n) ? 0 : t.scale.map(n) ?? 0;
			d.push(Y(Y({}, e), {}, { radius: r }, O(o, s, r, e.angle)));
		} else d.push(e);
	}), {
		points: l,
		isRange: c,
		baseLinePoints: d
	};
}
function Ar(e) {
	var t = e.showLabels, n = e.points, r = e.children, a = n.map((e) => {
		var t = {
			x: e.x,
			y: e.y,
			width: 0,
			lowerWidth: 0,
			upperWidth: 0,
			height: 0
		};
		return Y(Y({}, t), {}, {
			value: e.value ?? "",
			payload: e.payload,
			parentViewBox: void 0,
			viewBox: t,
			fill: void 0
		});
	});
	return /*#__PURE__*/ U.createElement(i, { value: t ? a : void 0 }, r);
}
function jr(e) {
	var t = e.points, n = e.baseLinePoints, r = e.props;
	if (t == null) return null;
	var i = r.shape, a = r.isRange, o = r.connectNulls, s = /*#__PURE__*/ U.isValidElement(i) ? /*#__PURE__*/ U.cloneElement(i, Y(Y({}, r), {}, { points: t })) : typeof i == "function" ? i(Y(Y({}, r), {}, { points: t })) : /*#__PURE__*/ U.createElement(dn, J({}, Ne(r), {
		onMouseEnter: (e) => {
			var t = r.onMouseEnter;
			t && t(r, e);
		},
		onMouseLeave: (e) => {
			var t = r.onMouseLeave;
			t && t(r, e);
		},
		points: t,
		baseLinePoints: a ? n : void 0,
		connectNulls: o
	}));
	return /*#__PURE__*/ U.createElement(v, { className: "recharts-radar-polygon" }, s, /*#__PURE__*/ U.createElement(Or, {
		props: r,
		points: t
	}));
}
var Mr = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [Y(Y({}, e.next), {}, {
	x: _e(e.prev.x, e.next.x, t),
	y: _e(e.prev.y, e.next.y, t)
})] : [Y(Y({}, e.next), {}, {
	x: _e(e.next.cx, e.next.x, t),
	y: _e(e.next.cy, e.next.y, t)
})]);
function Nr(e) {
	var n = e.props, r = e.previousPointsRef, i = e.previousBaseLinePointsRef, a = n.points, o = n.baseLinePoints, s = n.isAnimationActive, c = n.animationBegin, l = n.animationDuration, u = n.animationEasing, d = n.animationMatchBy, f = n.animationInterpolateFn, p = n.onAnimationStart, m = n.onAnimationEnd, h = Le(n, i), g = h.startValue, v = Se(g ?? null, o, d), y = Ie(p, m), b = y.isAnimating, x = y.handleAnimationStart, S = y.handleAnimationEnd, C = Be();
	return C == null ? null : /*#__PURE__*/ U.createElement(Ar, {
		showLabels: !b,
		points: a
	}, /*#__PURE__*/ U.createElement(t, {
		animationInput: n,
		animationIdPrefix: "recharts-radar-",
		items: a,
		previousItemsRef: r,
		isAnimationActive: s,
		animationBegin: c,
		animationDuration: l,
		animationEasing: u,
		onAnimationStart: x,
		onAnimationEnd: S,
		animationInterpolateFn: f,
		animationMatchBy: d,
		layout: C
	}, (e, t) => {
		var r = t === 1 ? o : f(v, t, C);
		return h.syncStepValue(r, t), /*#__PURE__*/ U.createElement(jr, {
			points: e,
			baseLinePoints: r,
			props: n
		});
	}), /*#__PURE__*/ U.createElement(_, { label: n.label }), n.children);
}
function Pr(e) {
	var t = (0, U.useRef)(void 0), n = (0, U.useRef)(void 0);
	return /*#__PURE__*/ U.createElement(Nr, {
		props: e,
		previousPointsRef: t,
		previousBaseLinePointsRef: n
	});
}
var Fr = {
	activeDot: !0,
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: Ce,
	animationInterpolateFn: Mr,
	dot: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	radiusAxisId: 0,
	zIndex: m.area
};
function Ir(t) {
	var n = t.hide, r = t.className, i = t.points;
	if (n) return null;
	var a = I("recharts-radar", r);
	return /*#__PURE__*/ U.createElement(E, { zIndex: t.zIndex }, /*#__PURE__*/ U.createElement(v, { className: a }, /*#__PURE__*/ U.createElement(Pr, t)), /*#__PURE__*/ U.createElement(e, {
		points: i,
		mainColor: Tr(t.stroke, t.fill),
		itemDataKey: t.dataKey,
		activeDot: t.activeDot
	}));
}
function Lr(e) {
	var t = ze(), n = A((n) => _r(n, e.radiusAxisId, e.angleAxisId, t, e.id));
	return n?.points == null ? null : /*#__PURE__*/ U.createElement(Ir, J({}, e, {
		points: n?.points,
		baseLinePoints: n?.baseLinePoints,
		isRange: n?.isRange
	}));
}
function Rr(e) {
	var t = Ee(e, Fr);
	return /*#__PURE__*/ U.createElement(C, {
		id: t.id,
		type: "radar"
	}, (e) => /*#__PURE__*/ U.createElement(U.Fragment, null, /*#__PURE__*/ U.createElement(ee, {
		type: "radar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide,
		angleAxisId: t.angleAxisId,
		radiusAxisId: t.radiusAxisId
	}), /*#__PURE__*/ U.createElement(w, { legendPayload: Er(t) }), /*#__PURE__*/ U.createElement(Dr, {
		dataKey: t.dataKey,
		stroke: t.stroke,
		strokeWidth: t.strokeWidth,
		fill: t.fill,
		name: t.name,
		hide: t.hide,
		tooltipType: t.tooltipType,
		id: e
	}), /*#__PURE__*/ U.createElement(Lr, J({}, t, { id: e }))));
}
Rr.displayName = "Radar";
// node_modules/recharts/es6/chart/RadarChart.js
function zr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Br(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? zr(Object(n), !0).forEach(function(t) {
			Vr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Vr(e, t, n) {
	return (t = Hr(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Hr(e) {
	var t = Ur(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Ur(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Wr = ["axis"], Gr = Br(Br({}, se), {}, {
	layout: "centric",
	startAngle: 90,
	endAngle: -270
}), Kr = /*#__PURE__*/ (0, U.forwardRef)((e, t) => {
	var n = Ee(e, Gr);
	return /*#__PURE__*/ U.createElement(b, {
		chartName: "RadarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: Wr,
		tooltipPayloadSearcher: ie,
		categoricalChartProps: n,
		ref: t
	});
}), X = Ht(), qr = U.memo(function({ cx: e, cy: t, dataKey: n, chartId: r, className: i, fillOpacity: a = 1, type: o = "default", maskId: s }) {
	let c = U.useId().replace(/:/g, ""), l = `url(#${r}-colors-${String(n)})`;
	if (e === void 0 || t === void 0) return null;
	switch (o) {
		case "border": return /* @__PURE__ */ (0, X.jsx)(Yr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		case "colored-border": return /* @__PURE__ */ (0, X.jsx)(Xr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
		default: return /* @__PURE__ */ (0, X.jsx)(Jr, {
			cx: e,
			cy: t,
			dotId: c,
			fillOpacity: a,
			gradientUrl: l,
			className: i,
			maskId: s
		});
	}
}), Jr = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, X.jsxs)("g", {
	className: a,
	mask: o ? `url(#${o})` : void 0,
	children: [/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
		id: `dot-clip-${n}`,
		children: /* @__PURE__ */ (0, X.jsx)("circle", {
			cx: e,
			cy: t,
			r: 3
		})
	}) }), /* @__PURE__ */ (0, X.jsx)("rect", {
		x: "0",
		y: t - 3,
		width: "100%",
		height: 6,
		fill: i,
		fillOpacity: r,
		clipPath: `url(#dot-clip-${n})`
	})]
}));
Jr.displayName = "DefaultDot";
var Yr = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, X.jsxs)("g", {
	className: oe(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ (0, X.jsx)("circle", {
				cx: e,
				cy: t,
				r: 6
			})
		}) }),
		/* @__PURE__ */ (0, X.jsx)("circle", {
			cx: e,
			cy: t,
			r: 6,
			fill: "currentColor"
		}),
		/* @__PURE__ */ (0, X.jsx)("rect", {
			x: "0",
			y: t - (6 - 5 / 2),
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-inner-${n})`
		}),
		/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
			id: `dot-clip-inner-${n}`,
			children: /* @__PURE__ */ (0, X.jsx)("circle", {
				cx: e,
				cy: t,
				r: 6 - 5 / 2
			})
		}) })
	]
}));
Yr.displayName = "PrimaryBorderDot";
var Xr = U.memo(({ cx: e, cy: t, dotId: n, fillOpacity: r, gradientUrl: i, className: a, maskId: o }) => /* @__PURE__ */ (0, X.jsxs)("g", {
	className: oe(a, "text-background"),
	mask: o ? `url(#${o})` : void 0,
	children: [
		/* @__PURE__ */ (0, X.jsx)("defs", { children: /* @__PURE__ */ (0, X.jsx)("clipPath", {
			id: `dot-clip-${n}`,
			children: /* @__PURE__ */ (0, X.jsx)("circle", {
				cx: e,
				cy: t,
				r: 3.5
			})
		}) }),
		/* @__PURE__ */ (0, X.jsx)("rect", {
			x: "0",
			y: t - 3 - 1 / 2,
			width: "100%",
			height: 7,
			fill: i,
			fillOpacity: r,
			clipPath: `url(#dot-clip-${n})`
		}),
		/* @__PURE__ */ (0, X.jsx)("circle", {
			cx: e,
			cy: t,
			r: 3 - 1 / 2,
			fill: "currentColor"
		})
	]
}));
Xr.displayName = "ColoredBorderDot";
// src/react/evilcharts/registry/charts/recharts-radar-chart.tsx
var Zr = 1, Qr = .3, $r = 6, ei = 1500, ti = "value", ni = (0, U.createContext)(null);
function Z() {
	let e = (0, U.use)(ni);
	if (!e) throw Error("Radar chart parts (<Radar />, <PolarAngleAxis />, …) must be used within <EvilRadarChart />");
	return e;
}
function Q({ config: e, data: t, children: n, className: r, chartProps: i, backgroundVariant: a, defaultSelectedDataKey: c = null, onSelectionChange: l, isLoading: u = !1, loadingPoints: d }) {
	let f = (0, U.useId)().replace(/:/g, ""), [p, m] = (0, U.useState)(c), h = vi(u, d), g = (0, U.useCallback)((e) => {
		m(e), l?.(e);
	}, [l]), _ = (0, U.useMemo)(() => ({
		config: e,
		isLoading: u,
		selectedDataKey: p,
		selectDataKey: g
	}), [
		e,
		u,
		p,
		g
	]);
	return /* @__PURE__ */ (0, X.jsx)(ni, {
		value: _,
		children: /* @__PURE__ */ (0, X.jsxs)(s, {
			className: r,
			config: e,
			children: [/* @__PURE__ */ (0, X.jsx)(y, { isLoading: u }), /* @__PURE__ */ (0, X.jsxs)(Kr, {
				id: f,
				data: u ? h : t,
				...i,
				children: [
					a && /* @__PURE__ */ (0, X.jsx)(o, { variant: a }),
					n,
					u && /* @__PURE__ */ (0, X.jsx)(yi, {})
				]
			})]
		})
	});
}
function ri({ dataKey: e, variant: t = "filled", fillOpacity: n = Qr, isGlowing: r = !1, isClickable: i = !1, children: a, radarProps: o }) {
	let { config: s, isLoading: c, selectedDataKey: l, selectDataKey: u } = Z(), d = (0, U.useId)().replace(/:/g, "");
	if (c) return null;
	let f = i && l !== null && l !== e, p = {
		stroke: f ? .2 : 1,
		fill: f ? .1 : 1,
		dot: f ? .2 : 1
	}, m = t === "filled", { dot: h, activeDot: g } = di(a, d, e, p.dot);
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)(Rr, {
		dataKey: e,
		stroke: `url(#${d}-radar-stroke-${e})`,
		strokeOpacity: p.stroke,
		strokeWidth: Zr,
		fill: m ? `url(#${d}-radar-fill-${e})` : "none",
		fillOpacity: m ? n * p.fill : 0,
		dot: h,
		activeDot: g,
		filter: r ? `url(#${d}-radar-glow-${e})` : void 0,
		className: "transition-opacity duration-200",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: () => {
			i && u(l === e ? null : e);
		},
		...o
	}), /* @__PURE__ */ (0, X.jsxs)("defs", { children: [
		/* @__PURE__ */ (0, X.jsx)(pi, {
			id: d,
			dataKey: e,
			config: s
		}),
		/* @__PURE__ */ (0, X.jsx)(mi, {
			id: d,
			dataKey: e,
			config: s
		}),
		m && /* @__PURE__ */ (0, X.jsx)(hi, {
			id: d,
			dataKey: e,
			config: s
		}),
		r && /* @__PURE__ */ (0, X.jsx)(gi, {
			id: d,
			dataKey: e
		})
	] })] });
}
var ii = () => null, ai = () => null;
function oi({ gridType: e = "polygon", stroke: t = "currentColor", strokeOpacity: n = .2, strokeDasharray: r = "3 4", ...i }) {
	return /* @__PURE__ */ (0, X.jsx)(kn, {
		gridType: e,
		stroke: t,
		strokeOpacity: n,
		strokeDasharray: r,
		...i
	});
}
function si({ tick: e = {
	fill: "currentColor",
	fontSize: 12
}, tickLine: t = !1, ...n }) {
	let { isLoading: r } = Z();
	return r ? null : /* @__PURE__ */ (0, X.jsx)(un, {
		tick: e,
		tickLine: t,
		...n
	});
}
function ci({ tick: e = {
	fill: "currentColor",
	fontSize: 10
}, tickLine: t = !1, axisLine: n = !1, ...r }) {
	let { isLoading: i } = Z();
	return i ? null : /* @__PURE__ */ (0, X.jsx)(Zn, {
		tick: e,
		tickLine: t,
		axisLine: n,
		...r
	});
}
function li({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, selectedDataKey: i } = Z();
	return r ? null : /* @__PURE__ */ (0, X.jsx)(f, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, X.jsx)(p, {
			selected: i,
			roundness: t,
			variant: e
		})
	});
}
function ui({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { isLoading: i, selectedDataKey: a, selectDataKey: o } = Z();
	return i ? null : /* @__PURE__ */ (0, X.jsx)(l, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, X.jsx)(u, {
			selected: a,
			onSelectChange: o,
			isClickable: r,
			variant: e
		})
	});
}
var di = (e, t, n, r) => {
	let i = !1, a = !1;
	return U.Children.forEach(e, (e) => {
		if ((0, U.isValidElement)(e)) {
			if (e.type === ii) {
				let { variant: a } = e.props;
				i = /* @__PURE__ */ (0, X.jsx)(qr, {
					type: a,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
			if (e.type === ai) {
				let { variant: i } = e.props;
				a = /* @__PURE__ */ (0, X.jsx)(qr, {
					type: i,
					dataKey: n,
					chartId: t,
					fillOpacity: r
				});
			}
		}
	}), {
		dot: i,
		activeDot: a
	};
}, fi = ({ dataKey: e, colorsCount: t, opacities: n }) => t === 1 ? /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsx)("stop", {
	offset: "0%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[0]
}), /* @__PURE__ */ (0, X.jsx)("stop", {
	offset: "100%",
	stopColor: `var(--color-${e}-0)`,
	stopOpacity: n?.[n.length - 1]
})] }) : /* @__PURE__ */ (0, X.jsx)(X.Fragment, { children: Array.from({ length: t }, (r, i) => {
	let a = `${i / (t - 1) * 100}%`;
	return /* @__PURE__ */ (0, X.jsx)("stop", {
		offset: a,
		stopColor: `var(--color-${e}-${i}, var(--color-${e}-0))`,
		stopOpacity: n?.[i]
	}, a);
}) }), pi = ({ id: e, dataKey: t, config: n }) => {
	let r = pe(n[t] ?? {});
	return /* @__PURE__ */ (0, X.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "0",
		children: /* @__PURE__ */ (0, X.jsx)(fi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, mi = ({ id: e, dataKey: t, config: n }) => {
	let r = pe(n[t] ?? {});
	return /* @__PURE__ */ (0, X.jsx)("linearGradient", {
		id: `${e}-radar-stroke-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: /* @__PURE__ */ (0, X.jsx)(fi, {
			dataKey: t,
			colorsCount: r
		})
	});
}, hi = ({ id: e, dataKey: t, config: n }) => {
	let r = pe(n[t] ?? {}), i = r === 1 ? [.8, .3] : Array.from({ length: r }, (e, t) => t === 0 ? .8 : .3);
	return /* @__PURE__ */ (0, X.jsx)("radialGradient", {
		id: `${e}-radar-fill-${t}`,
		cx: "50%",
		cy: "50%",
		r: "50%",
		children: /* @__PURE__ */ (0, X.jsx)(fi, {
			dataKey: t,
			colorsCount: r,
			opacities: i
		})
	});
}, gi = ({ id: e, dataKey: t }) => /* @__PURE__ */ (0, X.jsxs)("filter", {
	id: `${e}-radar-glow-${t}`,
	x: "-50%",
	y: "-50%",
	width: "200%",
	height: "200%",
	children: [
		/* @__PURE__ */ (0, X.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "4",
			result: "blur"
		}),
		/* @__PURE__ */ (0, X.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.6 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, X.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, X.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, X.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}), _i = (e) => [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
].slice(0, e).map((e) => ({
	skill: e,
	[ti]: 30 + Math.random() * 70
}));
function vi(e, t = $r) {
	let [n, r] = (0, U.useState)(0);
	return (0, U.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			r((e) => e + 1);
		}, ei);
		return () => clearInterval(t);
	}, [e]), (0, U.useMemo)(() => _i(t), [t, n]);
}
var yi = () => /* @__PURE__ */ (0, X.jsx)(Rr, {
	dataKey: ti,
	stroke: "currentColor",
	strokeOpacity: .3,
	strokeWidth: 2,
	fill: "currentColor",
	fillOpacity: .1,
	dot: !1,
	isAnimationActive: !0,
	animationDuration: ei,
	animationEasing: "ease-in-out"
});
Q.Radar = ri, Q.Dot = ii, Q.ActiveDot = ai, Q.PolarGrid = oi, Q.PolarAngleAxis = si, Q.PolarRadiusAxis = ci, Q.Tooltip = li, Q.Legend = ui;
// src/react/taste/charts.tsx
function bi(e) {
	let { x: t = 0, cx: n, textAnchor: r, payload: i, ...a } = e, o = String(i?.value ?? ""), s = typeof n == "number" ? n * 2 : 0, c = s ? r === "start" ? s - t : r === "end" ? t : 2 * Math.min(t, s - t) : 56;
	return /* @__PURE__ */ (0, X.jsxs)("g", { children: [/* @__PURE__ */ (0, X.jsx)("title", { children: o }), /* @__PURE__ */ (0, X.jsx)(T, {
		...a,
		x: t,
		textAnchor: r,
		fill: "currentColor",
		fontSize: 12,
		children: le(o, c - 4)
	})] });
}
var xi = [
	"stroke-chart-1",
	"stroke-chart-2",
	"stroke-chart-3",
	"stroke-chart-4",
	"stroke-chart-5",
	"stroke-chart-6"
], Si = [
	"fill-chart-1",
	"fill-chart-2",
	"fill-chart-3",
	"fill-chart-4",
	"fill-chart-5",
	"fill-chart-6"
], Ci = { value: {
	label: "Tag occurrences",
	colors: Fe(r[3])
} }, wi = [
	"min-h-24",
	"min-h-24",
	"min-h-24",
	"min-h-32",
	"min-h-40",
	"min-h-48",
	"min-h-52",
	"min-h-60",
	"min-h-64"
], Ti = 26, Ei = { radius: Ci.value }, Di = (e, t) => Math.sqrt(e / t);
function Oi({ rows: e, label: t }) {
	let n = Rt(e);
	if (!n.length) return null;
	let r = n[0].value, i = n.map((e) => ({
		...e,
		radius: Di(e.value, r)
	}));
	return /* @__PURE__ */ (0, X.jsx)("div", {
		role: "img",
		"aria-label": `${t}: ${i.map((e) => e.name).join(", ")}`,
		children: /* @__PURE__ */ (0, X.jsxs)(Q, {
			data: i,
			config: Ei,
			chartProps: { outerRadius: "58%" },
			className: "aspect-auto h-70 text-text-secondary",
			children: [
				/* @__PURE__ */ (0, X.jsx)(Q.PolarGrid, {}),
				/* @__PURE__ */ (0, X.jsx)(Q.PolarAngleAxis, {
					dataKey: "name",
					tick: /* @__PURE__ */ (0, X.jsx)(bi, {})
				}),
				/* @__PURE__ */ (0, X.jsx)(Q.PolarRadiusAxis, {
					domain: [0, 1],
					allowDecimals: !0,
					tick: !1
				}),
				/* @__PURE__ */ (0, X.jsx)(Q.Radar, { dataKey: "radius" }),
				/* @__PURE__ */ (0, X.jsx)(d, { valueKey: "value" })
			]
		})
	});
}
function ki({ rows: e, label: t }) {
	let n = Zt(e, 8);
	return n.length ? /* @__PURE__ */ (0, X.jsx)("section", {
		"aria-label": t,
		className: `flex grow flex-col ${wi[n.length]}`,
		children: /* @__PURE__ */ (0, X.jsxs)(g, {
			data: n,
			config: Ci,
			layout: "horizontal",
			barRadius: 4,
			chartProps: {
				maxBarSize: Ti,
				margin: {
					top: 5,
					right: 56,
					bottom: 5,
					left: 5
				}
			},
			className: "aspect-auto text-text-secondary",
			children: [
				/* @__PURE__ */ (0, X.jsx)(g.YAxis, {
					dataKey: "name",
					interval: 0,
					tick: /* @__PURE__ */ (0, X.jsx)(a, { along: "y" }),
					width: ae(n.map((e) => e.name))
				}),
				/* @__PURE__ */ (0, X.jsx)(g.XAxis, {
					hide: !0,
					domain: cn
				}),
				/* @__PURE__ */ (0, X.jsx)(g.Bar, {
					dataKey: "value",
					enableHoverHighlight: !0,
					barProps: {
						dataKey: "value",
						label: fn("right")
					}
				}),
				/* @__PURE__ */ (0, X.jsx)(d, {})
			]
		})
	}) : null;
}
function Ai({ flows: e }) {
	let [t, r] = (0, U.useState)(null), i = kt(e);
	if (!i) return null;
	let a = t?.node ?? null, o = (e, n) => t ? a === null ? t.label === n : e.source === a || e.target === a : !0;
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: n,
		children: [
			/* @__PURE__ */ (0, X.jsx)(c, {
				title: "Creator signal sources",
				figure: (t ? t.value : i.total).toLocaleString(),
				note: t ? t.label : "signals"
			}),
			/* @__PURE__ */ (0, X.jsx)("ol", {
				"aria-label": "Source sites and creator signals",
				className: "flex flex-col sm:hidden",
				children: [...i.links].sort((e, t) => t.value - e.value).map((e) => /* @__PURE__ */ (0, X.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 border-b border-separator-border py-2 text-body-2-regular text-text-primary last:border-b-0",
					children: [/* @__PURE__ */ (0, X.jsx)("span", {
						className: "min-w-0 wrap-anywhere",
						children: e.label
					}), /* @__PURE__ */ (0, X.jsx)("b", {
						className: "shrink-0 tabular-nums",
						children: e.value.toLocaleString()
					})]
				}, e.key))
			}),
			/* @__PURE__ */ (0, X.jsx)("div", {
				className: "min-w-0 max-sm:hidden",
				children: /* @__PURE__ */ (0, X.jsxs)("svg", {
					viewBox: `0 0 ${Ye.width} ${i.height}`,
					fill: "none",
					role: "img",
					"aria-label": "Source sites and creator signals",
					className: "block h-auto w-full",
					onPointerLeave: () => r(null),
					children: [/* @__PURE__ */ (0, X.jsx)("g", { children: i.links.map((e) => /* @__PURE__ */ (0, X.jsx)("path", {
						d: e.d,
						strokeWidth: e.width,
						tabIndex: 0,
						role: "img",
						"aria-label": `${e.label}: ${e.value} signals`,
						fillOpacity: 0,
						strokeOpacity: o(e, e.label) ? .55 : .08,
						className: `outline-none transition-opacity ${xi[e.color]}`,
						onPointerEnter: () => r({
							value: e.value,
							label: e.label,
							node: null
						}),
						onFocus: () => r({
							value: e.value,
							label: e.label,
							node: null
						}),
						onBlur: () => r(null)
					}, e.key)) }), /* @__PURE__ */ (0, X.jsx)("g", { children: i.nodes.map((e) => /* @__PURE__ */ (0, X.jsxs)("g", {
						tabIndex: 0,
						role: "img",
						"aria-label": `${e.name}: ${e.value} signals`,
						className: "outline-none focus-visible:opacity-100",
						onPointerEnter: () => r({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onFocus: () => r({
							value: e.value,
							label: e.name,
							node: e.index
						}),
						onBlur: () => r(null),
						children: [/* @__PURE__ */ (0, X.jsx)("rect", {
							x: e.x,
							y: e.y,
							width: 10,
							height: e.height,
							rx: 5,
							className: e.side === "source" ? Si[e.color] : "fill-text-secondary"
						}), /* @__PURE__ */ (0, X.jsxs)("text", {
							x: Je[e.side],
							y: e.y + e.height / 2,
							textAnchor: e.side === "source" ? "end" : "start",
							dominantBaseline: "middle",
							className: "fill-text-secondary text-caption-1-regular",
							children: [At(e.name), /* @__PURE__ */ (0, X.jsx)("tspan", {
								x: Je[e.side],
								dy: 15,
								children: e.side === "source" ? e.value.toLocaleString() : `${e.share.toFixed(1)}%`
							})]
						})]
					}, e.id)) })]
				})
			}),
			/* @__PURE__ */ (0, X.jsxs)("footer", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary max-sm:hidden",
				children: [/* @__PURE__ */ (0, X.jsx)("span", { children: "Source sites" }), /* @__PURE__ */ (0, X.jsx)("span", { children: "Creators · signal share" })]
			})
		]
	});
}
var ji = {
	version: 1,
	note: "浏览器品牌标识仅用于识别相应数据源；商标归各自所有者。",
	icons: [
		{
			id: "chrome",
			aliases: [
				"chrome",
				"Google Chrome",
				"谷歌浏览器"
			],
			file: "chrome.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome/chrome_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "eccdfe9d867373e2da66eedfcaaab40cbcdf6a221b83d6ee1400895a3e4c8046",
			bytes: 3166
		},
		{
			id: "chrome-beta",
			aliases: ["chrome-beta", "chrome beta"],
			file: "chrome-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome-beta/chrome-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "34d7c73511f666e282e6ffca64315b53c287402de0e594976574a20e9031434f",
			bytes: 3731
		},
		{
			id: "chrome-dev",
			aliases: ["chrome-dev", "chrome dev"],
			file: "chrome-dev.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome-dev/chrome-dev_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "3cc498eae83afeefb6f3ab5d24f4edead0ce6597e3afb91e4dcdaff923bb5a0a",
			bytes: 3706
		},
		{
			id: "chrome-canary",
			aliases: ["chrome-canary", "chrome canary"],
			file: "chrome-canary.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chrome-canary/chrome-canary_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "590d38919b0c3df5dffeb1d4cbe9a24b211920932bcc367778f4962270e0997c",
			bytes: 1858
		},
		{
			id: "chromium",
			aliases: ["chromium", "Chromium浏览器"],
			file: "chromium.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/chromium/chromium_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "9fc23dba1ec6765aee3e6c200ee1b77a7e4ac56a25dd5a89027d3b01f3389d21",
			bytes: 2035
		},
		{
			id: "edge",
			aliases: [
				"edge",
				"Microsoft Edge",
				"微软Edge"
			],
			file: "edge.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge/edge_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "a189a6054451f74073ba27c9e0ff35f46402263a2f883a74b9f6a89bb42b7975",
			bytes: 3574
		},
		{
			id: "edge-beta",
			aliases: ["edge-beta", "edge beta"],
			file: "edge-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge-beta/edge-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "074d4b135e89f1621d55a48831196b5c95b27084e15ffeee7bd3ef869a06e394",
			bytes: 3820
		},
		{
			id: "edge-dev",
			aliases: ["edge-dev", "edge dev"],
			file: "edge-dev.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge-dev/edge-dev_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "70df54bb62d68ae61f042b54bced912ba87f334675b625963fa82bba172e2501",
			bytes: 3671
		},
		{
			id: "edge-canary",
			aliases: ["edge-canary", "edge canary"],
			file: "edge-canary.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/edge-canary/edge-canary_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b0ec80dc2b855f7dc6b4ecee8735c3a397d5803a7a4801011c545d765e5ac705",
			bytes: 3728
		},
		{
			id: "firefox",
			aliases: [
				"firefox",
				"Mozilla Firefox",
				"火狐浏览器"
			],
			file: "firefox.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox/firefox_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "98c4837a6cdce28d66cd51ea1e13cf130a5ac7bd097579a6714ad8345c16d3c9",
			bytes: 3943
		},
		{
			id: "firefox-beta",
			aliases: ["firefox-beta", "firefox beta"],
			file: "firefox-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox-beta/firefox-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2f25600de1c538cdf5965541c1f4960ef0a0da76fc0030b5a36af8288b9dac94",
			bytes: 4365
		},
		{
			id: "firefox-developer-edition",
			aliases: [
				"firefox-developer-edition",
				"firefox developer edition",
				"Firefox Developer Edition",
				"Firefox Dev"
			],
			file: "firefox-developer-edition.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox-developer-edition/firefox-developer-edition_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "482ee0acf9deccbaf0253801f0a2ded2798b33166e3696fc1ae97f15788a335c",
			bytes: 4463
		},
		{
			id: "firefox-nightly",
			aliases: ["firefox-nightly", "firefox nightly"],
			file: "firefox-nightly.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/firefox-nightly/firefox-nightly_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "4082cba90a03962cd7be1ef6a8e7b3915d8b8e5411f919fbeb4d4f62684aa4cb",
			bytes: 4124
		},
		{
			id: "brave",
			aliases: ["brave"],
			file: "brave.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave/brave_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "fc67ee59d32612dc08eac9461fae8840441e888cceae7c07465ebdbfa58c5d63",
			bytes: 2416
		},
		{
			id: "brave-beta",
			aliases: ["brave-beta", "brave beta"],
			file: "brave-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave-beta/brave-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "fb029b4501f68c803429385b496bee9c3ce16710f8f12f9bae9f7db74bce2e1a",
			bytes: 3085
		},
		{
			id: "brave-dev",
			aliases: ["brave-dev", "brave dev"],
			file: "brave-dev.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave-dev/brave-dev_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "1797ab7fc86b1952851082f1dbeb7ff6816525d2654cdc0e455f7dd6d109a0da",
			bytes: 3837
		},
		{
			id: "brave-nightly",
			aliases: ["brave-nightly", "brave nightly"],
			file: "brave-nightly.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/brave-nightly/brave-nightly_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "e2f0e7506642d7491521f10250d0ede60c2a1e89ea7fdb6f8a2a366189643de4",
			bytes: 3929
		},
		{
			id: "vivaldi",
			aliases: ["vivaldi"],
			file: "vivaldi.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/vivaldi/vivaldi_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2cef8b72a605bfd4b3a665e88773ff6e915972db1e874fd3373f34d8e43c03d1",
			bytes: 2657
		},
		{
			id: "vivaldi-snapshot",
			aliases: ["vivaldi-snapshot", "vivaldi snapshot"],
			file: "vivaldi-snapshot.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/vivaldi-snapshot/vivaldi-snapshot_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d7adcb47765e5982d50565a4db328c6656d19503252f49855ae891dc655df22e",
			bytes: 2286
		},
		{
			id: "opera",
			aliases: ["opera"],
			file: "opera.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera/opera_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "907f47f584ca0f83446680a2ce1b4dc4dc81ac2e2bec0090e5b4ac98ccade4d4",
			bytes: 2152
		},
		{
			id: "opera-beta",
			aliases: ["opera-beta", "opera beta"],
			file: "opera-beta.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-beta/opera-beta_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "1a5164ba569241ac87ceb2878190a261d52a63e4218ee16290f6adde7fe1380e",
			bytes: 4225
		},
		{
			id: "opera-developer",
			aliases: ["opera-developer", "opera developer"],
			file: "opera-developer.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-developer/opera-developer_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b5f0fbb90b11daa64b1642beddb00ae73120f46184f6a31e83584a6d2c91efc2",
			bytes: 3854
		},
		{
			id: "opera-gx",
			aliases: ["opera-gx", "opera gx"],
			file: "opera-gx.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-gx/opera-gx_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d92a6e2dbecfdbc0e4986d6eabce5f7c75804699fe8a7b64fe0c0167617a7d0e",
			bytes: 1504
		},
		{
			id: "opera-neon",
			aliases: ["opera-neon", "opera neon"],
			file: "opera-neon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-neon/opera-neon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "12d0a029aa3f3b5e70805bb2c39304efdb1db75e59e9ba89f05f880dc0b6aa1a",
			bytes: 3385
		},
		{
			id: "opera-mini",
			aliases: ["opera-mini", "opera mini"],
			file: "opera-mini.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/opera-mini/opera-mini_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2509f1615ead4c8ddb25dfcc6024ba2e2b98f4da2a012a4039882597903646f9",
			bytes: 3009
		},
		{
			id: "safari",
			aliases: ["safari", "Apple Safari"],
			file: "safari.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/safari/safari_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "5a4608283c36615ebcfb0762f64cfe5706b03bfdcedc5810fe10ee883ca4fff0",
			bytes: 4497
		},
		{
			id: "safari-technology-preview",
			aliases: ["safari-technology-preview", "safari technology preview"],
			file: "safari-technology-preview.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/safari-technology-preview/safari-technology-preview_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "29a6403e566b4b53f125bcdb7381d86eb14558e84d7ff4eb9f74e559fd4d8c72",
			bytes: 4404
		},
		{
			id: "samsung-internet",
			aliases: [
				"samsung-internet",
				"samsung internet",
				"Samsung Internet Browser"
			],
			file: "samsung-internet.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/samsung-internet/samsung-internet_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "239c8d26b38cba9fa9468555a93637b29de64d2f0f2769ddd007d78c564288b0",
			bytes: 1814
		},
		{
			id: "tor",
			aliases: ["tor"],
			file: "tor.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/tor/tor_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "54bae0a77f813c2c9bf7594b52e98931630a450a5ea42dced26e0df3f432fe01",
			bytes: 3685
		},
		{
			id: "tor-alpha",
			aliases: ["tor-alpha", "tor alpha"],
			file: "tor-alpha.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/tor-alpha/tor-alpha_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "9b8b2dfae28ac7fcb452e25225ce337b954ab9c8dc7939364ed1219c9c42864a",
			bytes: 3643
		},
		{
			id: "yandex",
			aliases: ["yandex"],
			file: "yandex.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/yandex/yandex_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "803d73b46b135e783ef9984a35ffcb0b43f31cfe8d6be4a1371598ebdc549f89",
			bytes: 3139
		},
		{
			id: "uc",
			aliases: ["uc", "UC浏览器"],
			file: "uc.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/uc/uc_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "7bfd919258b12a5900a8d19eabe1a16a0f7f50eaebe872fb7f13f6929cdf4c1e",
			bytes: 2853
		},
		{
			id: "dolphin",
			aliases: ["dolphin"],
			file: "dolphin.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/dolphin/dolphin_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2c796d4a3ac4303edc73e33c3a36d709fbaa644b701d98ca1460aa6679c19aa9",
			bytes: 2018
		},
		{
			id: "maxthon",
			aliases: [
				"maxthon",
				"傲游",
				"傲游浏览器"
			],
			file: "maxthon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/maxthon/maxthon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "f807f58b4a0550a5470a713a4737054c5d5ecebe61687c77e77b2bfab1c544c5",
			bytes: 1375
		},
		{
			id: "midori",
			aliases: ["midori"],
			file: "midori.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/midori/midori_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b3149a3d9dcbe8158078f8c47a39e839c2609f2dbce574e6175d4ef7f381f0d4",
			bytes: 4288
		},
		{
			id: "falkon",
			aliases: ["falkon"],
			file: "falkon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/falkon/falkon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "93992beb736d43622ddc085b41955aea13a735c011928c56076b5ed5c74d694c",
			bytes: 4285
		},
		{
			id: "pale-moon",
			aliases: ["pale-moon", "pale moon"],
			file: "pale-moon.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/pale-moon/pale-moon_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "6ffacc33960787e0411897a33524bb03c78df9204cf7dbfc5f063f4b5e73d5e1",
			bytes: 4771
		},
		{
			id: "seamonkey",
			aliases: ["seamonkey"],
			file: "seamonkey.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/seamonkey/seamonkey_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "37dd8ccb6700d83b030614329253af2ac68c44084c887a2d5ca10ea91aa066a5",
			bytes: 4525
		},
		{
			id: "web",
			aliases: [
				"web",
				"Epiphany",
				"GNOME Web"
			],
			file: "web.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/web/web_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "3f149719ecd35cefa8dae87a699550fbfa44b4d2d3b4b4c90ade545c3b9754a8",
			bytes: 2678
		},
		{
			id: "qutebrowser",
			aliases: ["qutebrowser"],
			file: "qutebrowser.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/qutebrowser/qutebrowser_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "8134a7f55a2ca191361ba3ecc5219e3d707a945c7e91e38da310ee12ffeee3eb",
			bytes: 3818
		},
		{
			id: "epic",
			aliases: ["epic"],
			file: "epic.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/epic/epic_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "53dfd851e21ab4f0727891cb2e330503cc250c05216d825be016e84e98ea4dd4",
			bytes: 5534
		},
		{
			id: "icecat",
			aliases: ["icecat"],
			file: "icecat.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/icecat/icecat_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "828718a56d67123abe3526fd42835ffbbb05769791922c2a0564dae92762ecc9",
			bytes: 5700
		},
		{
			id: "basilisk",
			aliases: ["basilisk"],
			file: "basilisk.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/basilisk/basilisk_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "9a0b3f467fe972e7a3e805fcc4b719eccfb1bb1d29d9a9f3afec7cc9dc2349f3",
			bytes: 2331
		},
		{
			id: "avant",
			aliases: ["avant"],
			file: "avant.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/avant/avant_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "a4c66ad8bc25ce59f71713f7c93629cd17b989d886cb8beacf178730631b01a5",
			bytes: 4586
		},
		{
			id: "otter",
			aliases: ["otter"],
			file: "otter.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/otter/otter_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "8fea2736a78b36e8c9eabfd5c47e7b46f28209aa9f1e2a199a54cfeeac290812",
			bytes: 5220
		},
		{
			id: "netsurf",
			aliases: ["netsurf"],
			file: "netsurf.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/netsurf/netsurf_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d57d4ff6fb7052d5228932da17955232ecc5051908cf6580d73c6db3d2b248bd",
			bytes: 4003
		},
		{
			id: "puffin",
			aliases: ["puffin"],
			file: "puffin.png",
			content_type: "image/png",
			source_url: "https://raw.githubusercontent.com/alrra/browser-logos/58881b84c4d73adc03c06fa2c275a7abee02d935/src/puffin/puffin_48x48.png",
			source_page: "https://github.com/alrra/browser-logos",
			revision: "58881b84c4d73adc03c06fa2c275a7abee02d935",
			license: "Logo and trademark belong to the browser owner",
			sha256: "e182c2f54a37e0e1ff6a9469f1cb65bb8299f9b5eaca162c29b7cb9f6cc79768",
			bytes: 3697
		},
		{
			id: "aside",
			aliases: ["aside", "Aside Browser"],
			file: "aside.png",
			content_type: "image/png",
			source_url: "https://aside.com/icon.png?icon.0lfc1q-r_ms2e.png",
			source_page: "https://aside.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "949971a69f8643358bd52875a02a53e60136a88790487c83e42a24cb39f0adea",
			bytes: 27423
		},
		{
			id: "zen",
			aliases: ["zen", "Zen Browser"],
			file: "zen.svg",
			content_type: "image/svg+xml",
			source_url: "https://zen-browser.app/favicon.svg",
			source_page: "https://zen-browser.app/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "090a9ce0283dc66359be584bd1db9227faf4f15fc666f261759852e2519c7c68",
			bytes: 531
		},
		{
			id: "qq",
			aliases: [
				"qq",
				"QQBrowser",
				"QQ浏览器"
			],
			file: "qq.ico",
			content_type: "image/x-icon",
			source_url: "https://browser.qq.com/favicon.ico",
			source_page: "https://browser.qq.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "0c4cfdc5683b15f0b3b1019db71edfa975cadccbd61ce2f340acbdc4b114dbed",
			bytes: 2047
		},
		{
			id: "360se",
			aliases: ["360se", "360安全浏览器"],
			file: "360se.png",
			content_type: "image/png",
			source_url: "https://p4.ssl.qhimg.com/t110b9a93016f838be146a5b14d.png",
			source_page: "https://browser.360.cn/se/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "3363c9c2dd239ab6ac3a59501bf609cc2a94664ab5a1b8f0f0a2bec21aaab34a",
			bytes: 2219
		},
		{
			id: "360chrome",
			aliases: ["360chrome", "360极速浏览器"],
			file: "360chrome.ico",
			content_type: "image/x-icon",
			source_url: "https://browser.360.cn/ee/favicon.ico",
			source_page: "https://browser.360.cn/ee/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "eb11e02318a389cf4b9e06a8ca66694d2d544fbe8bfd28555e2189727675bd8e",
			bytes: 5430
		},
		{
			id: "sogou",
			aliases: [
				"sogou",
				"搜狗",
				"搜狗浏览器",
				"Sogou Explorer"
			],
			file: "sogou.ico",
			content_type: "image/x-icon",
			source_url: "https://sogou.browser.qq.com/favicon.ico",
			source_page: "https://ie.sogou.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "d9b78205c61561e23594886cc7bd24a5842a36602384f059efe670455c40c74f",
			bytes: 5430
		},
		{
			id: "arc",
			aliases: ["arc"],
			file: "arc.png",
			content_type: "image/png",
			source_url: "https://arc.net/favicon.png",
			source_page: "https://arc.net/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "2e6881ee4ea7b22e3bdd97f2432b7ce5bb3e3d5bbbdb5457a4a4f8b69a43e7bd",
			bytes: 1586
		},
		{
			id: "librewolf",
			aliases: ["librewolf"],
			file: "librewolf.svg",
			content_type: "image/svg+xml",
			source_url: "https://librewolf.net/icon.svg",
			source_page: "https://librewolf.net/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "b85d68f1b5b47b9b2c3a3e6b5f5a0f887577e0eb6ee8387fb7b81f5f8e4017c4",
			bytes: 5916
		},
		{
			id: "floorp",
			aliases: ["floorp"],
			file: "floorp.svg",
			content_type: "image/svg+xml",
			source_url: "https://floorp.app/icon.svg?51b46abeef3fc9d9",
			source_page: "https://floorp.app/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "15cf85f15cd722524008cb621763eb8560561048df210cf3a6180732c254f49b",
			bytes: 2199
		},
		{
			id: "waterfox",
			aliases: ["waterfox"],
			file: "waterfox.svg",
			content_type: "image/svg+xml",
			source_url: "https://www.waterfox.com/favicons/favicon.svg",
			source_page: "https://www.waterfox.net/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "05294e9a22b85b32fa632657ac3c2258f56d37f30931ababc494fe8a4b86ea7a",
			bytes: 9266
		},
		{
			id: "duckduckgo",
			aliases: ["duckduckgo"],
			file: "duckduckgo.png",
			content_type: "image/png",
			source_url: "https://duckduckgo.com/static-assets/favicons/DDG-iOS-icon_152x152.png",
			source_page: "https://duckduckgo.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "f6e52a35e8854ebf14c9b8442302f6f7d5d0063f0215b7210edf4676d7fd7369",
			bytes: 3576
		},
		{
			id: "115",
			aliases: [
				"115",
				"115浏览器",
				"115 Browser"
			],
			file: "115.ico",
			content_type: "image/x-icon",
			source_url: "https://115.com/",
			source_page: "https://115.com/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "fba0c364bb745bef18683be03f08b086cb5e46498b8c1dbd32ecdee6624303fe",
			bytes: 63051,
			extraction: {
				method: "PE resource extraction",
				executable: "115chrome.exe",
				executable_sha256: "31d3c29ffade6eb30504173b299d396a42758b2093c442b2adebe83f03750ae9",
				resource_group: "IDR_MAINFRAME"
			}
		},
		{
			id: "360chromex",
			aliases: [
				"360chromex",
				"360极速X",
				"360极速浏览器X"
			],
			file: "360chrome.ico",
			content_type: "image/x-icon",
			source_url: "https://browser.360.cn/ee/favicon.ico",
			source_page: "https://browser.360.cn/ee/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "eb11e02318a389cf4b9e06a8ca66694d2d544fbe8bfd28555e2189727675bd8e",
			bytes: 5430
		},
		{
			id: "quark",
			aliases: [
				"quark",
				"夸克",
				"夸克浏览器"
			],
			file: "quark.png",
			content_type: "image/png",
			source_url: "https://gw.alicdn.com/imgextra/i3/O1CN018r2tKf28YP7ev0fPF_!!6000000007944-2-tps-48-48.png",
			source_page: "https://www.quark.cn/",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "824e079d7d987305f2a0d15de5b1dfe0dc8cb7131afe1dbdaf1ea3ae3dd2d740",
			bytes: 1210
		},
		{
			id: "2345",
			aliases: [
				"2345",
				"2345浏览器",
				"2345加速浏览器"
			],
			file: "2345.png",
			content_type: "image/png",
			source_url: "https://img.onlinedown.net/download/202306/190435-649ac2436780c.png",
			source_page: "https://www.onlinedown.net/soft/111609.htm",
			revision: "",
			license: "Logo and trademark belong to the browser owner",
			sha256: "4c7a1b786d1208c89e00027c46544debe27a6f684b859cfd116b4e796703d38e",
			bytes: 29648
		}
	]
}, Mi = (e) => e.normalize("NFKC").toLowerCase().replace(/[\s_-]/g, ""), Ni = new Map(ji.icons.flatMap((e) => e.aliases.map((t) => [Mi(t), e.id])));
function Pi(e) {
	return Ni.get(Mi(e));
}
function Fi({ name: e }) {
	let [t, n] = (0, U.useState)(""), r = Pi(e);
	return r && t !== r ? /* @__PURE__ */ (0, X.jsx)("img", {
		src: `/browser-icon/${r}`,
		width: 24,
		height: 24,
		alt: "",
		"aria-hidden": !0,
		loading: "lazy",
		className: "size-6 shrink-0 object-contain",
		onError: () => n(r)
	}) : /* @__PURE__ */ (0, X.jsx)(qe, {
		"aria-hidden": !0,
		className: "size-5 shrink-0 text-foreground-icon-secondary"
	});
}
// src/react/taste/browser-sources.tsx
var Ii = "flex min-w-0 items-center gap-3 rounded-xl bg-background-primary-default p-3";
function Li({ browsers: e, sources: t, range: n, children: r }) {
	let [i, a] = (0, U.useState)(!1), [o, s] = (0, U.useState)(""), [c, l] = (0, U.useState)(""), u = V({
		mutationFn: (e) => St(e, n),
		onSuccess: (e) => {
			z.setQueryData(B(n), e.dashboard), a(!1), s(""), l("");
		}
	});
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: `${F()} flex flex-col gap-4`,
		"aria-label": "Data sources",
		children: [
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, X.jsx)("h3", {
					className: "text-title-2-medium text-text-primary",
					children: "Data sources"
				}), /* @__PURE__ */ (0, X.jsx)(j, {
					variant: "secondary",
					onClick: () => a(!0),
					disabled: i,
					children: "Add browser"
				})]
			}),
			u.error ? /* @__PURE__ */ (0, X.jsx)(N, {
				tone: "error",
				children: L(u.error)
			}) : null,
			i ? /* @__PURE__ */ (0, X.jsxs)("form", {
				className: "flex flex-col gap-3",
				onSubmit: (e) => {
					e.preventDefault(), u.isPending || u.mutate({
						operation: "add",
						name: o,
						path: c
					});
				},
				children: [
					/* @__PURE__ */ (0, X.jsx)(Qe, {
						label: "Browser name",
						value: o,
						onChange: s,
						maxLength: 80,
						isRequired: !0,
						isDisabled: u.isPending
					}),
					/* @__PURE__ */ (0, X.jsx)(Qe, {
						label: "Profile folder or history file",
						value: c,
						onChange: l,
						maxLength: 1024,
						isRequired: !0,
						isDisabled: u.isPending,
						hint: "Choose browser data on the computer running Peach."
					}),
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, X.jsx)(j, {
							variant: "ghost",
							disabled: u.isPending,
							onClick: () => {
								a(!1), u.reset();
							},
							children: "Cancel"
						}), /* @__PURE__ */ (0, X.jsx)(j, {
							type: "submit",
							variant: "secondary",
							disabled: !o.trim() || !c.trim(),
							...P(u.isPending),
							children: "Add"
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, X.jsxs)("div", {
				className: "inline-grid w-full min-w-0 gap-2 sm:grid-cols-2",
				children: [r, e.map((e) => {
					let n = t.filter((t) => e.source_keys?.includes(t.source_key)), r = n.reduce((e, t) => e + (t.visits || 0), 0), i = n.reduce((e, t) => e + (t.bookmarks || 0), 0);
					return /* @__PURE__ */ (0, X.jsxs)("div", {
						"data-taste-source": "browser",
						className: Ii,
						children: [
							/* @__PURE__ */ (0, X.jsx)("span", {
								className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
								children: /* @__PURE__ */ (0, X.jsx)(Fi, { name: e.name })
							}),
							/* @__PURE__ */ (0, X.jsxs)("div", {
								className: "flex min-w-0 grow flex-col gap-0.5",
								children: [
									/* @__PURE__ */ (0, X.jsx)("b", {
										className: "text-body-2-medium break-words text-text-primary",
										children: e.name
									}),
									/* @__PURE__ */ (0, X.jsx)("span", {
										className: "break-all text-caption-1-regular text-text-secondary",
										children: e.path
									}),
									/* @__PURE__ */ (0, X.jsx)("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: e.enabled ? e.available ? `History and bookmarks · ${e.profiles} profiles` : "Profile folder unavailable" : "Reading stopped"
									}),
									n.length ? /* @__PURE__ */ (0, X.jsxs)("span", {
										className: "text-caption-1-regular text-text-secondary",
										children: [
											r.toLocaleString(),
											" history entries · ",
											i.toLocaleString(),
											" bookmarks"
										]
									}) : null
								]
							}),
							/* @__PURE__ */ (0, X.jsxs)("span", {
								className: "flex shrink-0 gap-1",
								children: [/* @__PURE__ */ (0, X.jsx)(j, {
									variant: "secondary",
									size: "small",
									...P(u.isPending),
									iconOnly: !0,
									leadingIcon: e.enabled ? it : Xe,
									"aria-label": `${e.enabled ? "Stop reading" : "Enabled"} ${e.name}`,
									onClick: () => {
										e.enabled ? Ct({
											title: `Stop reading ${e.name}`,
											body: "Imported history and bookmarks are still used for taste analysis.",
											confirmLabel: "Stop reading",
											onConfirm: () => u.mutateAsync({
												operation: "disable",
												id: e.id
											})
										}) : u.mutate({
											operation: "enable",
											id: e.id
										});
									}
								}), /* @__PURE__ */ (0, X.jsx)(j, {
									variant: "secondary",
									size: "small",
									iconOnly: !0,
									leadingIcon: $e,
									...P(u.isPending),
									"aria-label": `Delete ${e.name}`,
									onClick: () => {
										Ct({
											title: `Delete ${e.name}`,
											body: "Removes this browser's read settings and its imported history and bookmarks; the browser's own files are kept. You can reconnect it by adding the browser again.",
											confirmLabel: "Delete browser source",
											danger: !0,
											onConfirm: () => u.mutateAsync({
												operation: "delete_browser",
												id: e.id
											})
										});
									}
								})]
							})
						]
					}, e.id);
				})]
			})
		]
	});
}
// src/react/taste/taste-page.tsx
var Ri = 10, zi = wt(et, tt, "text-body-2-medium"), Bi = `${F()} flex flex-col gap-4`, Vi = "rounded-xl bg-background-primary-default p-3", Hi = "Read browsing history and bookmarks on this computer running Peach", Ui = "After you import or read browsing history, the devices it came from are listed here.", Wi = "No tags in the library match what you've browsed yet.", Gi = "After you read browsing history, what you've browsed is summarized by category here.", Ki = "These tags appear in your browsing history but not yet in Peach viewing or rating records", qi = "After browsing history is collected, browsed tags are listed here.", Ji = "After browsing history is collected, browsed creators are listed here.", Yi = "After browsing history is collected, frequent sites are listed here.", Xi = "After you play or rate titles in Peach, their tags are listed here.", Zi = "After you play or rate titles in Peach, their creators are listed here.", Qi = "After you play or rate titles in Peach, their actresses are listed here.", $i = "Browsers on the computer running Peach: click “Read browser history” above.", ea = "History on other devices: export a file, then choose “Import history file” or “Import bookmarks file”. Bookmarks support HTML files exported by browsers and Chromium Bookmarks JSON files.", ta = "Read or import again when you need to refresh; data sources can be removed at the bottom of the page.", na = "Deletes this source's imported records; the original files are kept. If the browser is still enabled, the next read imports them again.", ra = "peach-taste-guide-dismissed", ia = (0, U.createContext)(/* @__PURE__ */ (0, X.jsx)(Ge, {
	size: "small",
	href: "/",
	children: "Browse library"
}));
function aa() {
	return (0, U.useContext)(ia);
}
function $({ icon: e, term: t, figure: n, detail: r, detailTitle: i, accent: a }) {
	return /* @__PURE__ */ (0, X.jsx)("div", {
		className: an(),
		children: /* @__PURE__ */ (0, X.jsx)(rn, {
			label: t,
			icon: e,
			accent: a,
			figure: n,
			footer: /* @__PURE__ */ (0, X.jsx)("span", {
				className: "block min-w-0 truncate",
				title: i || r,
				children: r ?? ""
			})
		})
	});
}
function oa({ name: e, domain: t }) {
	return /* @__PURE__ */ (0, X.jsxs)("span", {
		className: "relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-lg bg-background-tertiary-default text-caption-1-medium text-text-secondary",
		children: [Ot(e).toUpperCase(), /* @__PURE__ */ (0, X.jsx)("img", {
			src: Wt({ domain: t }),
			alt: "",
			loading: "lazy",
			width: 20,
			height: 20,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute size-5 object-contain"
		})]
	});
}
function sa({ html: e }) {
	return /* @__PURE__ */ (0, X.jsx)("span", {
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-medium text-text-secondary ${on}`,
		dangerouslySetInnerHTML: { __html: e }
	});
}
function ca({ rows: e, kind: t, visual: n, empty: r, onSignal: i }) {
	if (!e.length) return /* @__PURE__ */ (0, X.jsx)(M, {
		size: "compact",
		icon: R,
		title: "Not enough history yet",
		actions: /* @__PURE__ */ (0, X.jsx)(aa, {}),
		children: r
	});
	let a = Bt(e);
	return /* @__PURE__ */ (0, X.jsx)(ln, {
		previewCount: Ri,
		className: "inline-grid w-full gap-x-7 gap-y-2 sm:grid-cols-2",
		children: e.map((e, r) => {
			let o = !!t && !!e.peach_items, s = String(e.source_domain || ""), c = /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [
				/* @__PURE__ */ (0, X.jsx)("svg", {
					viewBox: "0 0 100 1",
					preserveAspectRatio: "none",
					"aria-hidden": !0,
					className: "absolute inset-0 -z-10 size-full overflow-hidden rounded-lg opacity-15",
					children: /* @__PURE__ */ (0, X.jsx)("rect", {
						width: a[r],
						height: 1,
						className: "fill-chart-4"
					})
				}),
				/* @__PURE__ */ (0, X.jsx)("span", {
					className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
					children: r + 1
				}),
				n === "domain" ? /* @__PURE__ */ (0, X.jsx)(oa, {
					name: e.name,
					domain: e.name
				}) : null,
				n === "creator" && !e.entity_id && !e.has_avatar && s ? /* @__PURE__ */ (0, X.jsx)(oa, {
					name: e.name,
					domain: s
				}) : null,
				n !== "none" && n !== "domain" && (e.entity_id || e.has_avatar || !s) ? /* @__PURE__ */ (0, X.jsx)(sa, { html: bt(e.name, e.entity_id ? {
					id: e.entity_id,
					has_image: !!e.has_image,
					image_version: e.image_version,
					avatar_focus: e.avatar_focus,
					avatar_stand_in: e.avatar_stand_in
				} : null, e.has_avatar ? e.representative_asset_id ?? null : null, n === "creator" ? "creator" : t || "performer") }) : null,
				/* @__PURE__ */ (0, X.jsxs)("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, X.jsx)("b", {
						className: "min-w-0 text-body-medium break-words text-text-primary",
						children: e.name
					}), /* @__PURE__ */ (0, X.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: zt(e)
					})]
				}),
				o ? /* @__PURE__ */ (0, X.jsx)(Lt, {
					"aria-hidden": !0,
					className: "size-4 shrink-0 text-text-tertiary"
				}) : null
			] }), l = "relative isolate flex min-h-11 w-full min-w-0 items-center gap-2.5 rounded-lg px-3 py-2 text-left";
			return /* @__PURE__ */ (0, X.jsx)("li", {
				className: "min-w-0",
				children: o ? /* @__PURE__ */ (0, X.jsx)("button", {
					type: "button",
					onClick: () => i(t, e.name),
					className: `${l} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: c
				}) : /* @__PURE__ */ (0, X.jsx)("div", {
					className: l,
					children: c
				})
			}, `${e.name}:${r}`);
		})
	});
}
function la({ label: e, panels: t, onSignal: n }) {
	return /* @__PURE__ */ (0, X.jsxs)(We, {
		className: `${F({ padding: "none" })} flex flex-col`,
		children: [/* @__PURE__ */ (0, X.jsx)("div", {
			className: "px-4 pt-3",
			children: /* @__PURE__ */ (0, X.jsx)(lt, {
				"aria-label": e,
				className: ct,
				children: t.map((e) => /* @__PURE__ */ (0, X.jsx)(Ue, {
					id: e.id,
					className: st,
					children: e.name
				}, e.id))
			})
		}), t.map((e) => /* @__PURE__ */ (0, X.jsx)(He, {
			id: e.id,
			className: "px-4 pt-3.5 pb-4",
			children: /* @__PURE__ */ (0, X.jsx)(ca, {
				...e.props,
				onSignal: n
			})
		}, e.id))]
	});
}
function ua({ data: e, onSignal: t, navigate: n }) {
	let r = e.analysis;
	if (!r?.headline) return null;
	let i = r.confidence || {}, a = [...(r.explore || []).map((e) => ({
		key: `tag:${e.tag}`,
		title: e.title,
		detail: e.detail,
		act: () => t("tag", e.tag)
	})), ...(r.next_steps || []).map((e) => ({
		key: `route:${e.route}`,
		title: e.title,
		detail: e.detail,
		act: () => n(e.route)
	}))];
	return /* @__PURE__ */ (0, X.jsxs)("section", {
		className: Bi,
		"aria-label": "Taste summary",
		children: [
			/* @__PURE__ */ (0, X.jsxs)("header", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, X.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "Taste summary"
					}),
					/* @__PURE__ */ (0, X.jsx)("p", {
						className: "max-w-prose text-title-2-regular wrap-anywhere text-text-primary",
						children: r.headline
					}),
					/* @__PURE__ */ (0, X.jsxs)("p", {
						className: "flex flex-wrap items-center gap-2 text-body-2-regular text-text-secondary",
						children: [/* @__PURE__ */ (0, X.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2 shrink-0 rounded-full ${i.level === "high" ? "bg-status-lime-text" : i.level === "medium" ? "bg-status-yellow-text" : "bg-text-tertiary"}`
						}), /* @__PURE__ */ (0, X.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: i.label || "Still learning"
						})]
					})
				]
			}),
			r.points?.length ? /* @__PURE__ */ (0, X.jsx)("div", {
				className: "inline-grid w-full gap-3 sm:grid-cols-2",
				children: r.points.map((e) => /* @__PURE__ */ (0, X.jsxs)("div", {
					className: `flex min-w-0 flex-col gap-1 ${Vi}`,
					children: [/* @__PURE__ */ (0, X.jsx)("span", {
						className: "text-caption-1-regular text-text-secondary",
						children: e.label
					}), /* @__PURE__ */ (0, X.jsx)("b", {
						className: "text-body-2-medium break-words text-text-primary",
						children: e.text
					})]
				}, e.label))
			}) : null,
			a.length ? /* @__PURE__ */ (0, X.jsx)("div", {
				className: "flex flex-col gap-2",
				children: a.map((e) => /* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					onClick: e.act,
					className: `flex w-full min-w-0 cursor-pointer items-center gap-3 ${Vi} text-left outline-none hover:bg-background-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus-ring`,
					children: [/* @__PURE__ */ (0, X.jsxs)("span", {
						className: "flex min-w-0 grow flex-col gap-1",
						children: [/* @__PURE__ */ (0, X.jsx)("b", {
							className: "text-body-2-medium wrap-anywhere text-text-primary",
							children: e.title
						}), /* @__PURE__ */ (0, X.jsx)("small", {
							className: "text-caption-1-regular wrap-anywhere text-text-secondary",
							children: e.detail
						})]
					}), /* @__PURE__ */ (0, X.jsx)(Lt, {
						"aria-hidden": !0,
						className: "size-4 shrink-0 text-text-tertiary"
					})]
				}, e.key))
			}) : /* @__PURE__ */ (0, X.jsx)(M, {
				size: "compact",
				icon: R,
				title: "Nothing to explore yet",
				actions: /* @__PURE__ */ (0, X.jsx)(Ge, {
					size: "small",
					href: "/",
					children: "Browse library"
				}),
				children: Wi
			})
		]
	});
}
function da({ onboarding: e, done: t }) {
	let [n, r] = (0, U.useState)(() => {
		try {
			return localStorage.getItem(ra) === "1";
		} catch {
			return !1;
		}
	});
	return t || n ? null : /* @__PURE__ */ (0, X.jsx)("div", {
		className: F({
			padding: "none",
			className: "p-4"
		}),
		children: /* @__PURE__ */ (0, X.jsxs)(Ke, {
			summary: "Browser history import guide",
			defaultOpen: e,
			children: [
				/* @__PURE__ */ (0, X.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: $i
				}),
				/* @__PURE__ */ (0, X.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ea
				}),
				/* @__PURE__ */ (0, X.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [/* @__PURE__ */ (0, X.jsxs)("li", { children: [
						"Chrome: in ",
						/* @__PURE__ */ (0, X.jsxs)("a", {
							href: "https://takeout.google.com/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-text-primary underline-offset-4 hover:underline",
							children: ["Google Takeout", /* @__PURE__ */ (0, X.jsx)(ht, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})]
						}),
						" ",
						" choose Chrome history, download the ZIP and import it directly."
					] }), /* @__PURE__ */ (0, X.jsxs)("li", { children: [
						"Other browsers: use ",
						/* @__PURE__ */ (0, X.jsxs)("a", {
							href: "https://github.com/purarue/browserexport",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-text-primary underline-offset-4 hover:underline",
							children: ["browserexport", /* @__PURE__ */ (0, X.jsx)(ht, {
								"aria-hidden": !0,
								className: "size-(--icon-inline) shrink-0"
							})]
						}),
						" ",
						" to export history, then import the exported file."
					] })]
				}),
				/* @__PURE__ */ (0, X.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: ta
				}),
				/* @__PURE__ */ (0, X.jsx)("span", {
					className: "self-start",
					children: /* @__PURE__ */ (0, X.jsx)(j, {
						variant: "secondary",
						size: "small",
						onClick: () => {
							try {
								localStorage.setItem(ra, "1");
							} catch {}
							r(!0);
						},
						children: "Skip"
					})
				})
			]
		})
	});
}
function fa({ busy: e, onRefresh: t, onImport: n, onImportBookmarks: r }) {
	let i = (0, U.useRef)(null), [a, o] = (0, U.useState)(!1), s = (e) => {
		o(!1), e();
	};
	return /* @__PURE__ */ (0, X.jsxs)(X.Fragment, { children: [/* @__PURE__ */ (0, X.jsxs)("span", {
		"data-button-group": !0,
		"data-split-button": !0,
		"data-variant": "primary",
		children: [/* @__PURE__ */ (0, X.jsx)(j, {
			leadingIcon: qe,
			title: Hi,
			onClick: t,
			...P(e),
			children: "Read browser history"
		}), /* @__PURE__ */ (0, X.jsx)(j, {
			ref: i,
			iconOnly: !0,
			leadingIcon: Tt,
			"aria-label": "More ways to get browsing history",
			"aria-haspopup": "dialog",
			"aria-expanded": a,
			...P(e),
			onClick: () => {
				e || o(!0);
			}
		})]
	}), /* @__PURE__ */ (0, X.jsx)(Ve, {
		triggerRef: i,
		isOpen: a,
		onOpenChange: o,
		placement: "bottom end",
		offset: 4,
		className: nt,
		children: /* @__PURE__ */ (0, X.jsxs)(rt, {
			"aria-label": "More ways to get browsing history",
			className: "flex w-52 flex-col gap-1 outline-none",
			children: [
				/* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					className: zi,
					onClick: () => s(t),
					children: [/* @__PURE__ */ (0, X.jsx)(qe, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "Read browser history"]
				}),
				/* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					className: zi,
					onClick: () => s(n),
					children: [/* @__PURE__ */ (0, X.jsx)(ot, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "Import history file"]
				}),
				/* @__PURE__ */ (0, X.jsxs)("button", {
					type: "button",
					className: zi,
					onClick: () => s(r),
					children: [/* @__PURE__ */ (0, X.jsx)(Mt, {
						"aria-hidden": !0,
						className: "size-4 shrink-0"
					}), "Import bookmarks file"]
				})
			]
		})
	})] });
}
function pa({ sources: e, browsers: t, window: n, toast: r, emptyActions: i }) {
	let a = V({
		mutationFn: (e) => Vt(e, n),
		onSuccess: (e) => {
			z.setQueryData(B(n), e.dashboard), r("Taste data source removed");
		}
	});
	return /* @__PURE__ */ (0, X.jsxs)(Li, {
		browsers: t,
		sources: e,
		range: n,
		children: [a.error ? /* @__PURE__ */ (0, X.jsx)("div", {
			className: "sm:col-span-2",
			children: /* @__PURE__ */ (0, X.jsx)(N, {
				tone: "error",
				children: L(a.error)
			})
		}) : null, e.length ? /* @__PURE__ */ (0, X.jsx)(X.Fragment, { children: e.filter((e) => !t.some((t) => t.source_keys?.includes(e.source_key))).map((e) => /* @__PURE__ */ (0, X.jsxs)("div", {
			"data-taste-source": "import",
			className: Ii,
			children: [
				/* @__PURE__ */ (0, X.jsx)("span", {
					className: "inline-grid size-8 shrink-0 place-items-center rounded-lg text-text-secondary",
					children: e.browser === "browserexport" ? /* @__PURE__ */ (0, X.jsx)(ot, {
						"aria-hidden": !0,
						className: "size-4"
					}) : /* @__PURE__ */ (0, X.jsx)(_t, {
						"aria-hidden": !0,
						className: "size-4"
					})
				}),
				/* @__PURE__ */ (0, X.jsxs)("span", {
					className: "flex min-w-0 grow flex-col gap-0.5",
					children: [/* @__PURE__ */ (0, X.jsx)("b", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.profile
					}), /* @__PURE__ */ (0, X.jsx)("small", {
						className: "min-w-0 text-caption-1-regular break-words text-text-secondary",
						children: `Imported file · ${e.host} · ${Number(e.visits || e.bookmarks || 0).toLocaleString()} ${e.bookmarks ? "bookmarks" : "history entries"}`
					})]
				}),
				/* @__PURE__ */ (0, X.jsx)(j, {
					variant: "secondary",
					size: "small",
					"aria-label": `Remove ${e.profile}`,
					className: "shrink-0",
					iconOnly: !0,
					leadingIcon: $e,
					...P(a.isPending),
					onClick: () => {
						a.isPending || Ct({
							title: "Remove taste data source",
							body: na,
							confirmLabel: "Remove taste data source",
							onConfirm: () => a.mutateAsync(e.source_key)
						});
					}
				})
			]
		}, e.source_key)) }) : t.length ? null : /* @__PURE__ */ (0, X.jsx)(M, {
			size: "compact",
			icon: _t,
			title: "No data sources yet",
			actions: i,
			children: Ui
		})]
	});
}
function ma(e) {
	let { onSignal: t, navigate: n, toast: r, onboarding: i } = e, [a, o] = (0, U.useState)("all"), [s, c] = (0, U.useState)("browser"), l = (0, U.useRef)(null), u = (0, U.useRef)(null), d = en({
		queryKey: B(a),
		queryFn: ({ signal: e }) => Et(a, e),
		placeholderData: Ft,
		refetchInterval: (e) => Yt(e.state.data)
	}), { job: f, running: p, outcome: m, start: h } = $t({
		queryKey: ft,
		queryFn: ({ signal: e }) => Dt(e),
		start: () => Gt(a),
		idlePollMs: Ze,
		onFinish: (e) => {
			e.status !== "failed" && (z.invalidateQueries({ queryKey: ["taste"] }), r(e.warnings?.length ? "Some browsing history not obtained" : "Taste analysis updated"));
		}
	}), g = V({
		mutationFn: (e) => Et(e, void 0, !0),
		onSuccess: (e, t) => {
			z.setQueryData(B(t), e);
		}
	}), _ = V({
		mutationFn: (e) => Pt(e),
		onSuccess: (e) => {
			z.setQueryData(B("all"), e.dashboard), o("all"), r("Taste data imported");
		}
	}), v = (e) => {
		let t = e.currentTarget.files?.[0];
		e.currentTarget.value = "", t && !_.isPending && (_.reset(), _.mutate(t));
	}, y = () => {
		p || h.isPending || (h.reset(), h.mutate());
	}, b = d.data;
	if (!b) return /* @__PURE__ */ (0, X.jsx)(tn, { children: /* @__PURE__ */ (0, X.jsx)(N, {
		tone: "error",
		title: "Couldn't load taste analysis",
		children: d.error ? L(d.error) : "Failed to load taste analysis"
	}) });
	let x = b.summary || {}, S = b.coverage || {}, C = b.rankings || {}, ee = b.storage || {}, w = qt(C.browser_categories || []), te = Rt(w).length > 0, T = b.gaps || [], E = S.tagged || 0, ne = S.identified || 0, re = h.error ? L(h.error) : _.error ? L(_.error) : g.error ? L(g.error) : m?.status === "failed" ? m.error || "Read not obtained" : "", ie = /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "flex flex-wrap justify-center gap-2",
		children: [/* @__PURE__ */ (0, X.jsx)(j, {
			variant: "secondary",
			...P(p || h.isPending || _.isPending),
			onClick: y,
			children: "Read browser history"
		}), /* @__PURE__ */ (0, X.jsx)(j, {
			variant: "secondary",
			...P(_.isPending),
			onClick: () => l.current?.click(),
			children: "Import history file"
		})]
	});
	return /* @__PURE__ */ (0, X.jsx)(tn, { children: /* @__PURE__ */ (0, X.jsxs)(ia, {
		value: a === "all" ? s === "peach" ? /* @__PURE__ */ (0, X.jsx)(Ge, {
			size: "small",
			variant: "secondary",
			href: "/",
			children: "Browse library"
		}) : ie : /* @__PURE__ */ (0, X.jsx)(j, {
			size: "small",
			variant: "secondary",
			onClick: () => o("all"),
			children: "View all time"
		}),
		children: [
			/* @__PURE__ */ (0, X.jsxs)(We, {
				selectedKey: s,
				onSelectionChange: (e) => c(String(e)),
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ (0, X.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, X.jsxs)(lt, {
							"aria-label": "Taste analysis data sources",
							className: ct,
							children: [/* @__PURE__ */ (0, X.jsx)(Ue, {
								id: "browser",
								className: st,
								children: "Browser history"
							}), /* @__PURE__ */ (0, X.jsx)(Ue, {
								id: "peach",
								className: st,
								children: "Peach viewing and ratings"
							})]
						}), /* @__PURE__ */ (0, X.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, X.jsx)(ut, {
									"aria-label": "Analysis range",
									selectedKey: a,
									onSelectionChange: (e) => {
										e !== null && o(String(e));
									},
									children: pt.map(([e, t]) => /* @__PURE__ */ (0, X.jsx)(dt, {
										id: e,
										children: t
									}, e))
								}),
								/* @__PURE__ */ (0, X.jsx)(fa, {
									busy: p || h.isPending || _.isPending,
									onRefresh: y,
									onImport: () => l.current?.click(),
									onImportBookmarks: () => u.current?.click()
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: l,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: v
								}),
								/* @__PURE__ */ (0, X.jsx)("input", {
									ref: u,
									type: "file",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									"data-bookmark-import": !0,
									onChange: v
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, X.jsx)(da, {
						onboarding: i,
						done: !!(x.history_sources || b.updated_at)
					}),
					/* @__PURE__ */ (0, X.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-3 empty:hidden",
						children: [
							p ? /* @__PURE__ */ (0, X.jsx)(mt, {
								label: f?.message || "Reading browsing history and updating taste analysis",
								value: f?.checked,
								total: f?.total
							}) : null,
							_.isPending ? /* @__PURE__ */ (0, X.jsx)(mt, { label: "Importing taste data" }) : null,
							b.stale && b.error ? /* @__PURE__ */ (0, X.jsx)(N, {
								tone: "error",
								action: /* @__PURE__ */ (0, X.jsx)(j, {
									variant: "secondary",
									size: "small",
									...P(g.isPending),
									onClick: () => g.mutate(a),
									children: "Retry now"
								}),
								children: `Taste analysis update failed; showing results from ${Xt(b.computed_at)}. ${b.error}`
							}) : b.stale ? /* @__PURE__ */ (0, X.jsx)(mt, { label: `Updating taste analysis; showing results from ${Xt(b.computed_at)}` }) : null,
							re ? /* @__PURE__ */ (0, X.jsx)(N, {
								tone: "error",
								children: re
							}) : null,
							m?.warnings?.length ? /* @__PURE__ */ (0, X.jsx)(N, {
								tone: "warning",
								children: m.warnings.join("; ")
							}) : null
						]
					}),
					/* @__PURE__ */ (0, X.jsxs)(He, {
						id: "browser",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, X.jsxs)("div", {
								className: nn,
								children: [
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 0,
										icon: Qt,
										term: "Browsing history",
										figure: Number(x.history_visits || 0).toLocaleString(),
										detail: Nt(x),
										detailTitle: `${Kt(x.range_start)}—${Kt(x.range_end)}`
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 1,
										icon: It,
										term: "Taste dimensions",
										figure: w.length.toLocaleString(),
										detail: w[0]?.name || "No main dimension yet"
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 2,
										icon: R,
										term: "Browsing signals",
										figure: T.length.toLocaleString()
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 3,
										icon: Mt,
										term: "Browser bookmarks",
										figure: Number(x.bookmarks || 0).toLocaleString(),
										detail: `${Number(ee.exports || 0).toLocaleString()} private exports · ${jt(ee.bytes || 0)}`
									})
								]
							}),
							/* @__PURE__ */ (0, X.jsxs)("section", {
								className: te ? `${Bi} md:flex-row md:gap-6` : Bi,
								"aria-label": "Browser profile",
								children: [/* @__PURE__ */ (0, X.jsxs)("div", {
									className: te ? "flex shrink-0 flex-col gap-2 pb-5 md:w-80 md:pr-6 md:pb-0" : "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [
										/* @__PURE__ */ (0, X.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: "Browser profile"
										}),
										te ? /* @__PURE__ */ (0, X.jsx)(Oi, {
											rows: w,
											label: "Main taste dimensions"
										}) : null,
										/* @__PURE__ */ (0, X.jsx)("small", {
											className: "text-caption-1-regular text-text-secondary",
											children: b.updated_at ? `Updated ${Kt(b.updated_at)}` : "No browsing history collected yet"
										})
									]
								}), /* @__PURE__ */ (0, X.jsx)("div", {
									className: "flex min-w-0 grow flex-col",
									children: w.length ? /* @__PURE__ */ (0, X.jsx)(ki, {
										rows: w,
										label: "Taste dimension ranking"
									}) : /* @__PURE__ */ (0, X.jsx)(M, {
										size: "compact",
										icon: R,
										title: "No taste dimensions yet",
										actions: /* @__PURE__ */ (0, X.jsx)(aa, {}),
										children: Gi
									})
								})]
							}),
							/* @__PURE__ */ (0, X.jsx)(sn, {
								activity: b.activity,
								title: "Browsing activity times",
								dailyTitle: "Daily activity",
								words: {
									unit: "Taste site visits",
									series: "Visits",
									cellUnit: "visits"
								},
								tone: 4,
								empty: "No taste site visits available for analysis yet."
							}),
							/* @__PURE__ */ (0, X.jsx)(Ai, { flows: b.creator_flows }),
							/* @__PURE__ */ (0, X.jsx)(la, {
								label: "Browser taste dimensions",
								onSignal: t,
								panels: [
									{
										id: "tags",
										name: "Tags",
										props: {
											rows: C.browser_tags || [],
											kind: "tag",
											visual: "none",
											empty: qi
										}
									},
									{
										id: "creators",
										name: "Creators",
										props: {
											rows: C.browser_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Ji
										}
									},
									{
										id: "performers",
										name: "Actresses",
										props: {
											rows: C.browser_performers || [],
											kind: "performer",
											visual: "entity",
											empty: "No browsing history linked to profiled actresses yet."
										}
									},
									{
										id: "domains",
										name: "Frequent sites",
										props: {
											rows: C.domains || [],
											kind: "",
											visual: "domain",
											empty: Yi
										}
									},
									{
										id: "gaps",
										name: "Browsing signals",
										props: {
											rows: T,
											kind: "",
											visual: "none",
											empty: Ki
										}
									}
								]
							})
						]
					}),
					/* @__PURE__ */ (0, X.jsxs)(He, {
						id: "peach",
						className: "flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, X.jsxs)("div", {
								className: nn,
								children: [
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 0,
										icon: gt,
										term: "Watched in Peach",
										figure: Number(x.peach_items || 0).toLocaleString(),
										detail: Jt(x.peach_seconds || 0)
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 1,
										icon: yt,
										term: "Like",
										figure: Number(x.liked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 2,
										icon: xt,
										term: "Not to taste",
										figure: Number(x.disliked || 0).toLocaleString()
									}),
									/* @__PURE__ */ (0, X.jsx)($, {
										accent: 3,
										icon: It,
										term: "Tagged",
										figure: E.toLocaleString()
									})
								]
							}),
							/* @__PURE__ */ (0, X.jsxs)("section", {
								className: `${Bi} md:flex-row md:gap-6`,
								"aria-label": "Peach viewing",
								children: [/* @__PURE__ */ (0, X.jsxs)("div", {
									className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-72 md:pr-6 md:pb-0",
									children: [
										/* @__PURE__ */ (0, X.jsx)("span", {
											className: "text-caption-1-regular text-text-secondary",
											children: "Peach viewing"
										}),
										/* @__PURE__ */ (0, X.jsx)("b", {
											className: "text-display-4-medium tabular-nums text-text-primary",
											children: Number(x.peach_items || 0).toLocaleString()
										}),
										/* @__PURE__ */ (0, X.jsx)("span", {
											className: "text-body-2-regular text-text-secondary",
											children: "titles with viewing or rating records"
										})
									]
								}), /* @__PURE__ */ (0, X.jsxs)("div", {
									className: "flex min-w-0 grow flex-col",
									children: [/* @__PURE__ */ (0, X.jsx)(ha, {
										term: "Tagged",
										value: E,
										rest: S.untagged || 0
									}), /* @__PURE__ */ (0, X.jsx)(ha, {
										term: "Has identity",
										value: ne,
										rest: S.unidentified || 0
									})]
								})]
							}),
							/* @__PURE__ */ (0, X.jsx)(la, {
								label: "Peach taste dimensions",
								onSignal: t,
								panels: [
									{
										id: "tags",
										name: "Tags",
										props: {
											rows: C.peach_tags || [],
											kind: "tag",
											visual: "none",
											empty: Xi
										}
									},
									{
										id: "creators",
										name: "Creators",
										props: {
											rows: C.peach_creators || [],
											kind: "creator",
											visual: "creator",
											empty: Zi
										}
									},
									{
										id: "performers",
										name: "Actresses",
										props: {
											rows: C.peach_performers || [],
											kind: "performer",
											visual: "entity",
											empty: Qi
										}
									}
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, X.jsx)(ua, {
				data: b,
				onSignal: t,
				navigate: n
			}),
			/* @__PURE__ */ (0, X.jsx)(pa, {
				sources: b.sources || [],
				browsers: b.browsers || [],
				window: a,
				toast: r,
				emptyActions: ie
			})
		]
	}) });
}
function ha({ term: e, value: t, rest: n }) {
	let r = Math.max(t + n, 1);
	return /* @__PURE__ */ (0, X.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, X.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, X.jsx)("span", { children: e }), /* @__PURE__ */ (0, X.jsxs)("b", {
				className: "tabular-nums",
				children: [t.toLocaleString(), /* @__PURE__ */ (0, X.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: `${n.toLocaleString()} to fill in`
				})]
			})]
		}), /* @__PURE__ */ (0, X.jsx)(at, {
			label: `${e}: ${t.toLocaleString()} / ${r.toLocaleString()}`,
			value: t,
			max: r
		})]
	});
}
export { ra as TASTE_GUIDE_KEY, ma as TastePage };

//# debugId=ece15e85-2d37-4cfe-9b9d-ee82fafa61cf