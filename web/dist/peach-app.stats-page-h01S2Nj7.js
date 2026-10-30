(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0039bf8d-b8d3-4280-820e-ec8325029b72", e._sentryDebugIdIdentifier = "sentry-dbid-0039bf8d-b8d3-4280-820e-ec8325029b72");
	} catch {}
})();
import { AnimatedItems as e, CHART_CARD as t, CHART_COLORS as n, Cell as r, ChartBackground as i, ChartContainer as a, ChartEmpty as o, ChartLegend as s, ChartLegendContent as c, ChartTip as l, ChartTooltip as u, ChartTooltipContent as d, DefaultZIndexes as f, LabelListFromLabelProp as p, Layer as m, LoadingIndicator as h, PolarChart as g, PolarLabelListContextProvider as _, RegisterGraphicalItemId as v, Sector as y, SetPolarGraphicalItem as b, SetPolarLegendPayload as x, SetTooltipEntrySettings as S, Shape as C, ZIndexLayer as w, adaptEventsOfChild as T, arrayTooltipSearcher as E, combineAllBarPositions as ee, combineBarPosition as D, combineBarSizeList as te, combineDisplayedStackedData as ne, combineStackGroups as re, combineStackedData as ie, createSelector as O, defaultPolarChartProps as ae, findAllByType as oe, getBandSizeOfAxis as k, getBaseValueOfBar as se, getCateCoordinateOfBar as ce, getColorsCount as le, getNormalizedStackId as ue, getTooltipNameProp as de, getValueByDataKey as fe, getZIndexFromUnknown as pe, interpolate as me, isCategoricalAxis as he, isNullish as ge, isStacked as _e, matchAppend as ve, mathSign as ye, noop as be, resolveDefaultProps as xe, selectActiveTooltipIndex as Se, selectAngleAxis as Ce, selectBarCategoryGap as we, selectBarGap as Te, selectChartDataAndAlwaysIgnoreIndexes as Ee, selectChartDataWithIndexes as De, selectChartLayout as A, selectPolarItemsSettings as Oe, selectPolarViewBox as ke, selectRadiusAxis as Ae, selectReverseStackOrder as je, selectRootBarSize as Me, selectRootMaxBarSize as Ne, selectStackOffsetType as Pe, selectTooltipAxis as Fe, selectUnfilteredPolarItems as Ie, sliceConfig as Le, sliceKey as Re, svgPropertiesNoEvents as ze, svgPropertiesNoEventsFromUnknown as Be, truncateByDomain as Ve, useAnimationCallbacks as He, useAppSelector as j, useMouseClickItemDispatch as Ue, useMouseEnterItemDispatch as We, useMouseLeaveItemDispatch as Ge, usePolarChartLayout as Ke } from "./peach-app.chart-tip-CRxYp6KT.js";
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as M, $b4f18e3395fe64d7$export$3e41faf802a29e71 as N, $b4f18e3395fe64d7$export$b2539bed5023c21c as qe, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as Je, ButtonLink as P, EmptyState as F, LOC as Ye, MEDIA_SOURCE_ICONS as Xe, NR as Ze, Note as Qe, Progress as I, SEGMENT as $e, SEGMENTED_TRACK as et, STATS_KEY as tt, SegmentedTabList as nt, SourceMark as rt, StatusLabel as it, Xc as at, Xt as ot, _8 as st, __toESM as ct, bandRows as lt, cardClass as ut, clsx as dt, errorMessage as ft, fetchStats as pt, fmtCount as L, fmtSize as R, known as mt, lengthRows as ht, mM as z, mediumRows as gt, percentText as B, playedFor as _t, playedItemUrl as vt, radialArc as yt, radialBarSize as bt, radialCeiling as xt, radialSlices as St, reachedShare as Ct, replayRows as wt, require_jsx_runtime as Tt, require_react as Et, settingsPath as Dt, uo as Ot, useQuery as kt, watchNote as At, watchedShare as jt } from "./peach-app.js";
import { Page as Mt } from "./peach-app.page-QAncjzM1.js";
import { STAT_STRIP as Nt, StatCard as Pt, statCardClass as Ft } from "./peach-app.stat-card-DsNmy_0F.js";
import { ConnectionStatus as It } from "./peach-app.connection-status-B0tSnjj0.js";
import { ActivityHeat as Lt, BarCard as V, ExpandableRanking as Rt, PolarAngleAxis as zt, selectPolarAxisScale as Bt, selectPolarAxisTicks as Vt, selectPolarGraphicalItemAxisTicks as Ht } from "./peach-app.expandable-ranking-De-qnqSd.js";
// node_modules/recharts/es6/util/RadialBarUtils.js
var H = /* @__PURE__ */ ct(Et()), Ut = ["option"];
function Wt(e, t) {
	if (e == null) return {};
	var n, r, i = Gt(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Gt(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var Kt = y;
function qt(e) {
	return typeof e == "string" ? parseInt(e, 10) : e;
}
function Jt(e) {
	var t = e.option, n = Wt(e, Ut);
	return /*#__PURE__*/ H.createElement(C, {
		option: t,
		DefaultShape: Kt,
		shapeProps: n
	});
}
// node_modules/recharts/es6/state/selectors/radialBarSelectors.js
function Yt(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function U(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Yt(Object(n), !0).forEach(function(t) {
			Xt(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Xt(e, t, n) {
	return (t = Zt(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Zt(e) {
	var t = Qt(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Qt(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var W = O([(e, t) => Ae(e, t), (e, t) => Bt(e, "radiusAxis", t)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), $t = (e, t) => Ht(e, "radiusAxis", t, !1), G = O([(e, t, n) => Ce(e, n), (e, t, n) => Bt(e, "angleAxis", n)], (e, t) => {
	if (e != null && t != null) return U(U({}, e), {}, { scale: t });
}), en = (e, t, n) => Vt(e, "angleAxis", n, !1), tn = O([Ie, (e, t, n, r) => r], (e, t) => {
	if (e.some((e) => e.type === "radialBar" && t.dataKey === e.dataKey && t.stackId === e.stackId)) return t;
}), nn = O([
	A,
	W,
	$t,
	G,
	en
], (e, t, n, r, i) => he(e, "radiusAxis") ? k(t, n, !1) : k(r, i, !1)), rn = O([
	G,
	W,
	A
], (e, t, n) => {
	var r = n === "radial" ? e : t;
	if (r != null && r.scale != null) return se({ numericAxis: r });
}), an = (e, t, n, r, i) => i, on = (e, t, n, r, i) => n, sn = (e, t, n, r, i) => t, cn = (e, t, n, r, i) => r.maxBarSize, ln = (e) => e.type === "radialBar", un = O([
	A,
	Ie,
	on,
	sn
], (e, t, n, r) => t.filter((t) => e === "centric" ? t.angleAxisId === n : t.radiusAxisId === r).filter((e) => e.hide === !1).filter(ln)), dn = O([
	un,
	Me,
	() => void 0
], te), fn = O([
	A,
	Ne,
	G,
	en,
	W,
	$t,
	cn
], (e, t, n, r, i, a, o) => {
	var s = ge(o) ? t : o;
	return e === "centric" ? k(n, r, !0) ?? s ?? 0 : k(i, a, !0) ?? s ?? 0;
}), pn = O([
	dn,
	Ne,
	Te,
	we,
	fn,
	nn,
	cn
], ee), mn = O([pn, tn], D), hn = O([Oe], (e) => e.filter(ln).filter(_e)), gn = O([
	hn,
	Ee,
	Fe
], ne), _n = O([
	gn,
	hn,
	Pe,
	je
], re), vn = O([(e, t, n) => A(e) === "centric" ? _n(e, "radiusAxis", t) : _n(e, "angleAxis", n), tn], ie), yn = O([
	G,
	en,
	W,
	$t,
	De,
	tn,
	nn,
	A,
	rn,
	ke,
	an,
	mn,
	vn
], (e, t, n, r, i, a, o, s, c, l, u, d, f) => {
	var p = i.chartData, m = i.dataStartIndex, h = i.dataEndIndex;
	if (a == null || n == null || e == null || p == null || o == null || d == null || s !== "centric" && s !== "radial" || r == null || l == null) return [];
	var g = a.dataKey, _ = a.minPointSize, v = l.cx, y = l.cy, b = l.startAngle, x = l.endAngle;
	return Bn({
		angleAxis: e,
		angleAxisTicks: t,
		bandSize: o,
		baseValue: c,
		cells: u,
		cx: v,
		cy: y,
		dataKey: g,
		dataStartIndex: m,
		displayedData: p.slice(m, h + 1),
		endAngle: x,
		layout: s,
		minPointSize: _,
		pos: d,
		radiusAxis: n,
		radiusAxisTicks: r,
		stackedData: f,
		stackedDomain: f ? (s === "centric" ? n : e).scale.domain() : null,
		startAngle: b
	});
}), bn = O([Ee, (e, t) => t], (e, t) => {
	var n = e.chartData, r = e.dataStartIndex, i = e.dataEndIndex;
	if (n == null) return [];
	var a = n.slice(r, i + 1);
	return a.length === 0 ? [] : a.map((e) => ({
		type: t,
		value: e.name,
		color: e.fill,
		payload: e
	}));
}), xn = [
	"shape",
	"activeShape",
	"cornerRadius",
	"id"
], Sn = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], Cn = ["value", "background"];
function K() {
	return K = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, K.apply(null, arguments);
}
function wn(e, t) {
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
		t % 2 ? wn(Object(n), !0).forEach(function(t) {
			Tn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Tn(e, t, n) {
	return (t = En(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function En(e) {
	var t = Dn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Dn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function On(e, t) {
	if (e == null) return {};
	var n, r, i = kn(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function kn(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
var An = [];
function jn(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = n.map((e) => ({
		value: e.value,
		payload: e.payload,
		parentViewBox: void 0,
		clockWise: !1,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	}));
	return /*#__PURE__*/ H.createElement(_, { value: t ? i : void 0 }, r);
}
function Mn(e) {
	var t = e.sectors, n = e.allOtherRadialBarProps, r = e.showLabels, i = e.animationElapsedTime, a = e.isAnimating, o = e.isEntrance, s = n.shape, c = n.activeShape, l = n.cornerRadius, u = n.id, d = On(n, xn), m = ze(d), h = j(Se), g = n.onMouseEnter, _ = n.onClick, v = n.onMouseLeave, y = On(n, Sn), b = We(g, n.dataKey, u), x = Ge(v), S = Ue(_, n.dataKey, u);
	return t == null ? null : /*#__PURE__*/ H.createElement(jn, {
		showLabels: r,
		sectors: t
	}, t.map((e, t) => {
		var n = !!(c && h === String(t)), r = b(e, t), u = x(e, t), p = S(e, t), g = q(q(q(q({}, m), {}, { cornerRadius: qt(l) }, e), T(y, e, t)), {}, {
			onMouseEnter: r,
			onMouseLeave: u,
			onClick: p,
			className: `recharts-radial-bar-sector ${e.className}`,
			forceCornerRadius: d.forceCornerRadius,
			cornerIsExternal: d.cornerIsExternal,
			animationElapsedTime: i,
			isAnimating: a,
			isEntrance: o,
			isActive: n,
			option: n && c != null ? c : s,
			index: t
		});
		return n ? /*#__PURE__*/ H.createElement(w, {
			zIndex: f.activeBar,
			key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}`
		}, /*#__PURE__*/ H.createElement(Jt, g)) : /*#__PURE__*/ H.createElement(Jt, K({ key: `sector-${e.cx}-${e.cy}-${e.innerRadius}-${e.outerRadius}-${e.startAngle}-${e.endAngle}-${t}` }, g));
	}), /*#__PURE__*/ H.createElement(p, { label: n.label }), n.children);
}
var Nn = (e, t) => e == null ? [] : t === 1 ? e.flatMap((e) => e.status === "removed" ? [] : [e.next]) : e.flatMap((e) => e.status === "removed" ? [] : e.status === "matched" ? [q(q({}, e.next), {}, {
	startAngle: me(e.prev.startAngle, e.next.startAngle, t),
	endAngle: me(e.prev.endAngle, e.next.endAngle, t)
})] : [q(q({}, e.next), {}, { endAngle: me(e.next.startAngle, e.next.endAngle, t) })]);
function Pn(t) {
	var n = t.props, r = t.previousSectorsRef, i = n.sectors, a = n.isAnimationActive, o = n.animationBegin, s = n.animationDuration, c = n.animationEasing, l = n.onAnimationStart, u = n.onAnimationEnd, d = He(l, u), f = d.isAnimating, p = d.handleAnimationStart, m = d.handleAnimationEnd, h = Ke();
	return h == null ? null : /*#__PURE__*/ H.createElement(e, {
		animationInput: n,
		animationIdPrefix: "recharts-radialbar-",
		items: i,
		previousItemsRef: r,
		isAnimationActive: a,
		animationBegin: o,
		animationDuration: s,
		animationEasing: c,
		onAnimationStart: p,
		onAnimationEnd: m,
		animationInterpolateFn: n.animationInterpolateFn,
		animationMatchBy: n.animationMatchBy,
		layout: h
	}, (e, t, r) => /*#__PURE__*/ H.createElement(Mn, {
		sectors: e,
		allOtherRadialBarProps: n,
		showLabels: !f,
		animationElapsedTime: t,
		isAnimating: f || t < 1,
		isEntrance: r
	}));
}
function Fn(e) {
	var t = (0, H.useRef)(null);
	return /*#__PURE__*/ H.createElement(Pn, {
		props: e,
		previousSectorsRef: t
	});
}
function In(e) {
	var t = j((t) => bn(t, e.legendType));
	return /*#__PURE__*/ H.createElement(x, { legendPayload: t ?? [] });
}
var Ln = /*#__PURE__*/ H.memo((e) => {
	var t = e.dataKey, n = e.sectors, r = e.stroke, i = e.strokeWidth, a = e.name, o = e.hide, s = e.fill, c = e.tooltipType, l = e.formatter, u = e.id, d = {
		dataDefinedOnItem: n,
		getPosition: be,
		settings: {
			graphicalItemId: u,
			stroke: r,
			strokeWidth: i,
			fill: s,
			nameKey: void 0,
			dataKey: t,
			name: de(a, t),
			hide: o,
			type: c,
			color: s,
			unit: "",
			formatter: l
		}
	};
	return /*#__PURE__*/ H.createElement(S, { tooltipEntrySettings: d });
}), Rn = class extends H.PureComponent {
	renderBackground(e) {
		if (e == null) return null;
		var t = this.props.cornerRadius, n = Be(this.props.background);
		return /*#__PURE__*/ H.createElement(w, { zIndex: pe(this.props.background, f.barBackground) }, e.map((e, r) => {
			e.value;
			var i = e.background, a = On(e, Cn);
			if (!i) return null;
			var o = q(q(q(q(q({ cornerRadius: qt(t) }, a), {}, { fill: "#eee" }, i), n), T(this.props, e, r)), {}, {
				index: r,
				className: dt("recharts-radial-bar-background-sector", String(n?.className)),
				option: i,
				isActive: !1
			});
			return /*#__PURE__*/ H.createElement(Jt, K({ key: `background-${a.cx}-${a.cy}-${a.innerRadius}-${a.outerRadius}-${a.startAngle}-${a.endAngle}-${r}` }, o));
		}));
	}
	render() {
		var e = this.props, t = e.hide, n = e.sectors, r = e.className, i = e.background;
		if (t) return null;
		var a = dt("recharts-area", r);
		return /*#__PURE__*/ H.createElement(w, { zIndex: this.props.zIndex }, /*#__PURE__*/ H.createElement(m, { className: a }, i && /*#__PURE__*/ H.createElement(m, { className: "recharts-radial-bar-background" }, this.renderBackground(n)), /*#__PURE__*/ H.createElement(m, { className: "recharts-radial-bar-sectors" }, /*#__PURE__*/ H.createElement(Fn, this.props))));
	}
};
function zn(e) {
	var t = H.useMemo(() => oe(e.children, r), [e.children]), n = H.useMemo(() => ({
		data: void 0,
		hide: !1,
		id: e.id,
		dataKey: e.dataKey,
		minPointSize: e.minPointSize,
		stackId: ue(e.stackId),
		maxBarSize: e.maxBarSize,
		barSize: e.barSize,
		type: "radialBar",
		angleAxisId: e.angleAxisId,
		radiusAxisId: e.radiusAxisId
	}), [
		e.id,
		e.dataKey,
		e.minPointSize,
		e.stackId,
		e.maxBarSize,
		e.barSize,
		e.angleAxisId,
		e.radiusAxisId
	]), i = j((r) => yn(r, e.radiusAxisId, e.angleAxisId, n, t)) ?? An;
	return /*#__PURE__*/ H.createElement(H.Fragment, null, /*#__PURE__*/ H.createElement(Ln, {
		dataKey: e.dataKey,
		sectors: i,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		name: e.name,
		hide: e.hide,
		fill: e.fill,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: e.id
	}), /*#__PURE__*/ H.createElement(Rn, K({}, e, { sectors: i })));
}
var J = {
	angleAxisId: 0,
	animationBegin: 0,
	animationDuration: 1500,
	animationEasing: "ease",
	animationMatchBy: ve,
	animationInterpolateFn: Nn,
	background: !1,
	cornerIsExternal: !1,
	cornerRadius: 0,
	forceCornerRadius: !1,
	hide: !1,
	isAnimationActive: "auto",
	label: !1,
	legendType: "rect",
	minPointSize: 0,
	radiusAxisId: 0,
	shape: Kt,
	zIndex: f.bar
};
function Bn(e) {
	var t = e.displayedData, n = e.stackedData, r = e.dataStartIndex, i = e.stackedDomain, a = e.dataKey, o = e.baseValue, s = e.layout, c = e.radiusAxis, l = e.radiusAxisTicks, u = e.bandSize, d = e.pos, f = e.angleAxis, p = e.minPointSize, m = e.cx, h = e.cy, g = e.angleAxisTicks, _ = e.cells, v = e.startAngle, y = e.endAngle;
	return g == null || l == null ? An : (t ?? []).map((e, t) => {
		var b, x, S, C, w, T;
		if (n ? b = Ve(n[r + t], i) : (b = fe(e, a), Array.isArray(b) || (b = [o, b])), s === "radial") {
			if (C = f.scale.map(b[0]) ?? v, w = f.scale.map(b[1]) ?? y, x = ce({
				axis: c,
				ticks: l,
				bandSize: u,
				offset: d.offset,
				entry: e,
				index: t
			}), x != null && w != null && C != null) {
				S = x + d.size;
				var E = w - C;
				if (Math.abs(p) > 0 && Math.abs(E) < Math.abs(p)) {
					var ee = ye(E || p) * (Math.abs(p) - Math.abs(E));
					w += ee;
				}
				T = { background: {
					cx: m,
					cy: h,
					innerRadius: x,
					outerRadius: S,
					startAngle: v,
					endAngle: y
				} };
			}
		} else if (x = c.scale.map(b[0]), S = c.scale.map(b[1]), C = ce({
			axis: f,
			ticks: g,
			bandSize: u,
			offset: d.offset,
			entry: e,
			index: t
		}), x != null && S != null && C != null) {
			w = C + d.size;
			var D = S - x;
			if (Math.abs(p) > 0 && Math.abs(D) < Math.abs(p)) {
				var te = ye(D || p) * (Math.abs(p) - Math.abs(D));
				S += te;
			}
		}
		return q(q(q({}, e), T), {}, {
			payload: e,
			value: n ? b : b[1],
			cx: m,
			cy: h,
			innerRadius: x,
			outerRadius: S,
			startAngle: C,
			endAngle: w
		}, _ && _[t] && _[t].props);
	});
}
function Vn(e) {
	var t = xe(e, J);
	return /*#__PURE__*/ H.createElement(v, {
		id: t.id,
		type: "radialBar"
	}, (e) => /*#__PURE__*/ H.createElement(H.Fragment, null, /*#__PURE__*/ H.createElement(b, {
		type: "radialBar",
		id: e,
		data: void 0,
		dataKey: t.dataKey,
		hide: t.hide ?? J.hide,
		angleAxisId: t.angleAxisId ?? J.angleAxisId,
		radiusAxisId: t.radiusAxisId ?? J.radiusAxisId,
		stackId: ue(t.stackId),
		barSize: t.barSize,
		minPointSize: t.minPointSize,
		maxBarSize: t.maxBarSize
	}), /*#__PURE__*/ H.createElement(In, t), /*#__PURE__*/ H.createElement(zn, K({}, t, { id: e }))));
}
Vn.displayName = "RadialBar";
// node_modules/recharts/es6/chart/RadialBarChart.js
function Hn(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Un(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Hn(Object(n), !0).forEach(function(t) {
			Wn(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hn(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Wn(e, t, n) {
	return (t = Gn(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Gn(e) {
	var t = Kn(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Kn(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var qn = ["axis", "item"], Jn = Un(Un({}, ae), {}, {
	layout: "radial",
	startAngle: 0,
	endAngle: 360
}), Yn = /*#__PURE__*/ (0, H.forwardRef)((e, t) => {
	var n = xe(e, Jn);
	return /*#__PURE__*/ H.createElement(g, {
		chartName: "RadialBarChart",
		defaultTooltipEventType: "axis",
		validateTooltipEventTypes: qn,
		tooltipPayloadSearcher: E,
		categoricalChartProps: n,
		ref: t
	});
}), Y = Tt(), Xn = "30%", Zn = "100%", Qn = 5, $n = 14, er = 5, tr = 1500, nr = (0, H.createContext)(null);
function rr() {
	let e = (0, H.use)(nr);
	if (!e) throw Error("Radial chart parts (<RadialBar />, <Tooltip />, …) must be used within <EvilRadialChart />");
	return e;
}
function X({ config: e, data: t, nameKey: n, children: r, className: o, chartProps: s, variant: c = "full", max: l, innerRadius: u = Xn, outerRadius: d = Zn, defaultSelectedDataKey: f = null, onSelectionChange: p, isLoading: m = !1, backgroundVariant: g }) {
	let _ = (0, H.useId)().replace(/:/g, ""), [v, y] = (0, H.useState)(f), b = ur(m), x = sr(c), S = (0, H.useCallback)((e, t) => {
		y(e), p?.(e === null ? null : {
			dataKey: e,
			value: t ?? 0
		});
	}, [p]), C = (0, H.useMemo)(() => t.map((e) => ({
		...e,
		fill: `url(#${_}-radial-colors-${e[n]})`
	})), [
		t,
		n,
		_
	]), w = (0, H.useMemo)(() => ({
		config: e,
		nameKey: n,
		chartId: _,
		isLoading: m,
		selectedBar: v,
		selectBar: S
	}), [
		e,
		n,
		_,
		m,
		v,
		S
	]);
	return /* @__PURE__ */ (0, Y.jsx)(nr, {
		value: w,
		children: /* @__PURE__ */ (0, Y.jsxs)(a, {
			className: o,
			config: e,
			children: [/* @__PURE__ */ (0, Y.jsx)(h, { isLoading: m }), /* @__PURE__ */ (0, Y.jsxs)(Yn, {
				id: _,
				data: m ? b : C,
				innerRadius: u,
				outerRadius: d,
				startAngle: x.startAngle,
				endAngle: x.endAngle,
				cx: x.cx,
				cy: x.cy,
				...s,
				children: [
					l != null && l > 0 && /* @__PURE__ */ (0, Y.jsx)(zt, {
						type: "number",
						domain: [0, l],
						tick: !1,
						axisLine: !1
					}),
					g && /* @__PURE__ */ (0, Y.jsx)(i, { variant: g }),
					r,
					m && /* @__PURE__ */ (0, Y.jsx)(dr, {}),
					/* @__PURE__ */ (0, Y.jsx)("defs", { children: /* @__PURE__ */ (0, Y.jsx)(cr, {
						config: e,
						chartId: _
					}) })
				]
			})]
		})
	});
}
function ir({ dataKey: e, cornerRadius: t = Qn, barSize: n = $n, showBackground: r = !0, isClickable: i = !1, radialBarProps: a }) {
	let { nameKey: o, isLoading: s, selectedBar: c, selectBar: l } = rr();
	return s ? null : /* @__PURE__ */ (0, Y.jsx)(Vn, {
		dataKey: e,
		cornerRadius: t,
		barSize: n,
		background: r,
		className: "drop-shadow-sm",
		style: i ? { cursor: "pointer" } : void 0,
		onClick: (t, n) => {
			if (!i) return;
			let r = t, a = r?.[o] ?? String(n), s = Number(r?.[e] ?? 0);
			l(c === a ? null : a, s);
		},
		shape: (e) => {
			let t = e[o], n = c === null || c === t;
			return /* @__PURE__ */ (0, Y.jsx)(y, {
				...e,
				opacity: i && !n ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...a
	});
}
function ar({ variant: e, roundness: t, defaultIndex: n }) {
	let { nameKey: r, isLoading: i } = rr();
	return i ? null : /* @__PURE__ */ (0, Y.jsx)(u, {
		defaultIndex: n,
		cursor: !1,
		content: /* @__PURE__ */ (0, Y.jsx)(d, {
			nameKey: r,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function or({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: i, isLoading: a, selectedBar: o, selectBar: l } = rr();
	return a ? null : /* @__PURE__ */ (0, Y.jsx)(s, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Y.jsx)(c, {
			selected: o,
			onSelectChange: l,
			isClickable: r,
			nameKey: i,
			variant: e
		})
	});
}
function sr(e) {
	switch (e) {
		case "semi": return {
			startAngle: 180,
			endAngle: 0,
			cx: "50%",
			cy: "70%"
		};
		default: return {
			startAngle: 90,
			endAngle: -270,
			cx: "50%",
			cy: "50%"
		};
	}
}
var cr = ({ config: e, chartId: t }) => /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: Object.entries(e).map(([e, n]) => {
	let r = le(n);
	return /* @__PURE__ */ (0, Y.jsx)("linearGradient", {
		id: `${t}-radial-colors-${e}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${e}-0)`
		}), /* @__PURE__ */ (0, Y.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${e}-0)`
		})] }) : Array.from({ length: r }, (t, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, Y.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${e}-${n}, var(--color-${e}-0))`
			}, i);
		})
	}, `${t}-radial-colors-${e}`);
}) });
function lr() {
	return Array.from({ length: er }, (e, t) => ({
		name: `loading${t}`,
		value: 40 + Math.random() * 60
	}));
}
function ur(e) {
	let [t, n] = (0, H.useState)(0);
	return (0, H.useEffect)(() => {
		if (!e) return;
		let t = setInterval(() => {
			n((e) => e + 1);
		}, tr);
		return () => clearInterval(t);
	}, [e]), (0, H.useMemo)(() => lr(), [t]);
}
var dr = () => /* @__PURE__ */ (0, Y.jsx)(Vn, {
	dataKey: "value",
	cornerRadius: Qn,
	barSize: $n,
	background: !0,
	isAnimationActive: !0,
	animationDuration: tr,
	animationEasing: "ease-in-out",
	shape: (e) => /* @__PURE__ */ (0, Y.jsx)(y, {
		...e,
		fill: "currentColor",
		fillOpacity: .25
	})
});
X.RadialBar = ir, X.Tooltip = ar, X.Legend = or;
// src/react/stats/radial-card.tsx
var fr = [
	"bg-chart-1",
	"bg-chart-2",
	"bg-chart-3",
	"bg-chart-4",
	"bg-chart-5",
	"bg-chart-6"
], pr = [
	"aria-pressed:bg-chart-1/10 aria-pressed:ring-chart-1",
	"aria-pressed:bg-chart-2/10 aria-pressed:ring-chart-2",
	"aria-pressed:bg-chart-3/10 aria-pressed:ring-chart-3",
	"aria-pressed:bg-chart-4/10 aria-pressed:ring-chart-4",
	"aria-pressed:bg-chart-5/10 aria-pressed:ring-chart-5",
	"aria-pressed:bg-chart-6/10 aria-pressed:ring-chart-6"
];
function mr({ title: e, rows: n, empty: r, unit: i = "videos" }) {
	let [a, s] = (0, H.useState)(-1), [c, u] = (0, H.useState)(-1), d = St(n);
	if (!d.length) return /* @__PURE__ */ (0, Y.jsx)(o, {
		title: e,
		children: r
	});
	let f = c >= 0 ? c : a, p = d.reduce((e, t) => e + t.value, 0), m = d[f], h = (e) => s((t) => t === e ? -1 : e), g = xt(d.map((e) => e.value)), _ = d.map((e, t) => ({
		slice: Re(t),
		value: e.value,
		arc: yt(e.value, g)
	}));
	return /* @__PURE__ */ (0, Y.jsxs)("section", {
		className: t,
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-x-4 gap-y-1",
				children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Y.jsxs)("h3", {
						className: "flex items-center gap-1.5 text-title-2-medium wrap-anywhere text-text-primary",
						children: [m?.mark ? /* @__PURE__ */ (0, Y.jsx)(rt, { mark: m.mark }) : null, m ? m.name : e]
					}), /* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-display-4-medium tabular-nums text-text-primary",
						children: (m ? m.value : p).toLocaleString()
					})]
				}), /* @__PURE__ */ (0, Y.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: i
				})]
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				role: "img",
				"aria-label": e,
				onPointerLeave: () => u(-1),
				children: /* @__PURE__ */ (0, Y.jsxs)(X, {
					data: _,
					nameKey: "slice",
					config: Le(d.map((e) => e.name)),
					max: g,
					innerRadius: "22%",
					className: "aspect-auto h-75 max-sm:h-65",
					children: [/* @__PURE__ */ (0, Y.jsx)(X.RadialBar, {
						dataKey: "arc",
						barSize: bt(d.length),
						radialBarProps: {
							shape: (e) => /* @__PURE__ */ (0, Y.jsx)(y, {
								...e,
								opacity: f >= 0 && f !== e.index ? .3 : 1,
								className: "cursor-pointer transition-opacity duration-200"
							}),
							onClick: (e, t) => h(t),
							onMouseEnter: (e, t) => u(t)
						}
					}), /* @__PURE__ */ (0, Y.jsx)(l, {
						nameKey: "slice",
						valueKey: "value",
						hideLabel: !0
					})]
				})
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: "inline-grid w-full grid-cols-3 gap-2 max-sm:grid-cols-2",
				children: d.map((e, t) => /* @__PURE__ */ (0, Y.jsxs)("button", {
					type: "button",
					"aria-pressed": a === t,
					onClick: () => h(t),
					onPointerEnter: () => u(t),
					onPointerLeave: () => u(-1),
					onFocus: () => u(t),
					onBlur: () => u(-1),
					className: `flex min-w-0 cursor-pointer flex-col items-start gap-1 rounded-xl bg-background-tertiary-default p-2.5 text-left outline-none aria-pressed:ring-1 aria-pressed:ring-inset focus-visible:ring-2 focus-visible:ring-border-focus-ring ${pr[t % 6]}`,
					children: [
						/* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "flex min-w-0 max-w-full items-start gap-1.5 text-caption-1-regular text-text-secondary",
							children: [/* @__PURE__ */ (0, Y.jsx)("i", {
								"aria-hidden": !0,
								className: `mt-0.5 size-3 shrink-0 rounded-sm ${fr[t % 6]}`
							}), /* @__PURE__ */ (0, Y.jsxs)("span", {
								className: "inline-flex min-w-0 items-start gap-1.5 wrap-anywhere",
								children: [e.mark ? /* @__PURE__ */ (0, Y.jsx)(rt, { mark: e.mark }) : null, e.name]
							})]
						}),
						/* @__PURE__ */ (0, Y.jsx)("b", {
							className: "text-title-2-medium tabular-nums text-text-primary",
							children: e.value.toLocaleString()
						}),
						e.bytes == null ? null : /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "text-caption-1-regular text-text-secondary",
							children: R(e.bytes)
						})
					]
				}, Re(t)))
			})
		]
	});
}
// src/react/stats/stats-page.tsx
var hr = Dt("Media libraries and import"), gr = 10, _r = n[5], vr = n[4], yr = `${ut()} flex flex-col gap-4`, br = "After you add a media folder or follow source, library stats show up here.", xr = "After you fill in metadata or add tags, the library's content tags show up here.", Sr = "Once you start playing, recent real viewing evidence shows up here.", Cr = "After you add title metadata or tag manually, the video count for each tag source shows up here.", wr = "After you add a media folder, storage shows up here.", Tr = "After you assign media folders to libraries, video counts per library show up here.", Er = "After durations are probed, the duration distribution shows up here.", Dr = "After quality is probed, the quality distribution shows up here.", Or = "Once you start playing, the times of week you watch show up here.", kr = "Once you start playing, how many times each title was played shows up here.", Ar = (e, t) => Math.min(Math.max(e, 0), t);
function Z({ term: e, value: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex min-h-16 min-w-0 flex-col gap-1.5 rounded-2lg bg-background-primary-default p-3",
		children: [/* @__PURE__ */ (0, Y.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, Y.jsx)("b", {
			className: "text-title-3-medium tabular-nums text-text-primary",
			children: L(t)
		})]
	});
}
function Q({ term: e, value: t, total: n }) {
	let r = Math.max(n, 1);
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [/* @__PURE__ */ (0, Y.jsxs)("p", {
			className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
			children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: e }), /* @__PURE__ */ (0, Y.jsxs)("b", {
				className: "tabular-nums",
				children: [L(t), mt(t) ? /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "ml-1.5 text-caption-1-regular text-text-secondary",
					children: B(t, n)
				}) : null]
			})]
		}), /* @__PURE__ */ (0, Y.jsx)(I, {
			label: `${e}: ${L(t)} / ${n.toLocaleString()}`,
			value: mt(t) ? Ar(t, r) : 0,
			max: r
		})]
	});
}
function jr({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex shrink-0 flex-col gap-0.5 pb-5 md:w-64 md:pr-6 md:pb-0",
		children: [
			/* @__PURE__ */ (0, Y.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: e
			}),
			/* @__PURE__ */ (0, Y.jsx)("b", {
				className: "text-display-4-medium tabular-nums text-text-primary",
				children: t
			}),
			/* @__PURE__ */ (0, Y.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: n
			})
		]
	});
}
function Mr({ headline: e, children: t }) {
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `${yr} md:flex-row md:gap-6`,
		children: [e, /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "min-w-0 grow",
			children: t
		})]
	});
}
function Nr({ data: e }) {
	return e.by_loc.reduce((e, t) => e + t.videos, 0) ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, Y.jsx)(mr, {
				title: "Cloud and local",
				empty: br,
				rows: e.by_loc.map((e) => ({
					name: Ye[e.k] ?? e.k,
					value: e.videos,
					bytes: e.bytes,
					mark: Xe[e.k] || "database"
				}))
			}), /* @__PURE__ */ (0, Y.jsx)(mr, {
				title: "Media library",
				empty: Tr,
				rows: e.by_library.map((e) => ({
					name: e.name,
					value: e.videos,
					bytes: e.bytes,
					mark: Xe[e.icon] || e.icon || "database"
				}))
			})]
		}), /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "inline-grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(V, {
					title: "Duration",
					unit: "videos",
					series: "Videos",
					color: _r,
					rows: ht(e.by_length),
					empty: Er
				}),
				/* @__PURE__ */ (0, Y.jsx)(V, {
					title: "Quality",
					unit: "videos",
					series: "Videos",
					color: _r,
					rows: lt(e.by_quality),
					empty: Dr
				}),
				/* @__PURE__ */ (0, Y.jsx)(V, {
					title: "File type",
					unit: "entries",
					series: "Entry",
					color: _r,
					layout: "horizontal",
					rows: gt(e.by_medium),
					empty: br
				})
			]
		})]
	}) : /* @__PURE__ */ (0, Y.jsx)(F, {
		icon: Ze,
		title: "No videos yet",
		actions: /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(P, {
			variant: "secondary",
			href: "/subscriptions?tab=add",
			size: "small",
			children: "Add follows"
		}), /* @__PURE__ */ (0, Y.jsx)(P, {
			variant: "primary",
			href: hr,
			size: "small",
			children: "Add media"
		})] }),
		children: br
	});
}
function Pr({ data: e }) {
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(Lt, {
		activity: e.play_activity,
		title: "Playback time",
		dailyTitle: "Daily plays",
		words: {
			unit: "titles",
			series: "Works",
			cellUnit: "titles"
		},
		tone: 5,
		empty: Or
	}), /* @__PURE__ */ (0, Y.jsx)(V, {
		title: "Play count",
		unit: "titles",
		series: "Works",
		color: vr,
		rows: wt(e.replays),
		empty: kr
	})] });
}
function Fr({ attribution: e }) {
	let t = e.videos;
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: "Has creator",
				value: e.creator,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: "Has code",
				value: e.code,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: "Has studio",
				value: e.studio,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: "Frames sampled",
				value: e.thumb,
				total: t
			}),
			/* @__PURE__ */ (0, Y.jsx)(Q, {
				term: "Duration probed",
				value: e.duration,
				total: t
			})
		]
	});
}
function Ir({ volume: e }) {
	let t = e.total, n = e.used ?? 0;
	return /* @__PURE__ */ (0, Y.jsxs)("article", {
		className: "flex min-w-0 flex-col gap-1.5 border-b border-separator-border py-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("header", {
				className: "flex items-baseline justify-between gap-3 text-body-2-regular text-text-primary",
				children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
					className: "min-w-0 break-words",
					children: e.label
				}), t == null ? e.online ? /* @__PURE__ */ (0, Y.jsx)(it, { children: "Capacity not obtained" }) : /* @__PURE__ */ (0, Y.jsx)(It, { online: !1 }) : /* @__PURE__ */ (0, Y.jsxs)("b", {
					className: "whitespace-nowrap tabular-nums",
					children: [R(n), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "ml-1.5 text-caption-1-regular text-text-secondary",
						children: B(n, t)
					})]
				})]
			}),
			t == null ? null : /* @__PURE__ */ (0, Y.jsx)(I, {
				label: `${e.label} space usage`,
				value: Ar(n, Math.max(t, 1)),
				max: Math.max(t, 1)
			}),
			/* @__PURE__ */ (0, Y.jsxs)("p", {
				className: "flex justify-between gap-3 text-caption-1-regular text-text-secondary",
				children: [/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "min-w-0 break-words",
					children: e.root ?? "Not mapped"
				}), t == null ? null : /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${R(e.free ?? 0)} free · ${R(t)} total`
				})]
			})
		]
	});
}
function Lr({ volumes: e }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "flex flex-col",
		children: e.map((e) => /* @__PURE__ */ (0, Y.jsx)(Ir, { volume: e }, `${e.kind}:${e.label}`))
	}) : /* @__PURE__ */ (0, Y.jsx)(F, {
		icon: at,
		title: "No storage sources yet",
		actions: /* @__PURE__ */ (0, Y.jsx)(P, {
			variant: "primary",
			href: hr,
			size: "small",
			children: "Add media"
		}),
		children: wr
	});
}
function Rr({ tags: e, tagLabel: t, onTag: n, hasMedia: r }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)(Rt, {
		previewCount: gr,
		className: "inline-grid w-full gap-x-6 gap-y-1 sm:grid-cols-2",
		children: e.map((e, r) => /* @__PURE__ */ (0, Y.jsx)("li", {
			className: "min-w-0",
			children: /* @__PURE__ */ (0, Y.jsxs)("button", {
				type: "button",
				onClick: () => n(e.k),
				className: "flex min-h-11 w-full min-w-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: [
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "w-6 shrink-0 text-caption-1-regular tabular-nums text-text-secondary",
						children: r + 1
					}),
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "min-w-0 grow text-body-2-regular break-words text-text-primary",
						children: t(e.k)
					}),
					/* @__PURE__ */ (0, Y.jsx)("b", {
						className: "text-body-2-medium tabular-nums text-text-secondary",
						children: e.n.toLocaleString()
					})
				]
			})
		}, `${e.k}:${r}`))
	}) : /* @__PURE__ */ (0, Y.jsx)(F, {
		icon: z,
		title: "No content tags yet",
		actions: /* @__PURE__ */ (0, Y.jsx)(P, {
			variant: "secondary",
			href: r ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: r ? "Complete metadata" : "Add media"
		}),
		children: xr
	});
}
function zr({ rows: e, hasMedia: t }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "flex flex-col gap-5",
		children: e.map((e) => {
			let t = jt(e);
			return /* @__PURE__ */ (0, Y.jsxs)("article", {
				className: "flex flex-wrap items-center gap-x-6 gap-y-2",
				children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "min-w-0 grow basis-64",
					children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "min-w-0 text-body-2-medium text-text-primary",
						children: /* @__PURE__ */ (0, Y.jsx)("a", {
							href: vt(e),
							"data-middle-truncate": !0,
							className: "block max-w-full overflow-hidden whitespace-nowrap hover:underline",
							children: e.name
						})
					}), /* @__PURE__ */ (0, Y.jsxs)("p", {
						className: "flex flex-wrap gap-3 text-caption-1-regular text-text-secondary",
						children: [e.creator ? /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 wrap-anywhere",
							children: e.creator
						}) : null, /* @__PURE__ */ (0, Y.jsx)("span", { children: At(e) })]
					})]
				}), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "min-w-0 basis-40",
					children: [/* @__PURE__ */ (0, Y.jsx)(I, {
						label: `${t.toFixed(0)}% real viewing`,
						value: t
					}), /* @__PURE__ */ (0, Y.jsx)("small", {
						className: "mt-1.5 block text-caption-1-regular text-text-secondary",
						children: `${t.toFixed(0)}% real · ${Ct(e).toFixed(0)}% reached`
					})]
				})]
			}, `${e.kind}:${e.id}`);
		})
	}) : /* @__PURE__ */ (0, Y.jsx)(F, {
		icon: Ot,
		title: "No watch history yet",
		actions: /* @__PURE__ */ (0, Y.jsx)(P, {
			variant: "secondary",
			href: t ? "/" : "/settings/library",
			size: "small",
			children: t ? "Browse library" : "Add media"
		}),
		children: Sr
	});
}
function Br({ sources: e, videos: t }) {
	return e.length ? /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "inline-grid w-full gap-x-8 gap-y-6 sm:grid-cols-2",
		children: e.map((e) => /* @__PURE__ */ (0, Y.jsxs)("article", {
			className: "flex min-w-0 flex-col gap-1.5",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)("header", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, Y.jsx)("h3", {
						className: "min-w-0 text-body-2-medium break-words text-text-primary",
						children: e.k
					}), /* @__PURE__ */ (0, Y.jsxs)("b", {
						className: "text-body-2-medium whitespace-nowrap text-text-primary",
						children: [e.assets.toLocaleString(), /* @__PURE__ */ (0, Y.jsx)("small", {
							className: "ml-1 text-caption-1-regular font-normal text-text-secondary",
							children: "videos"
						})]
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(I, {
					label: `Videos covered by ${e.k}`,
					value: Ar(e.assets, Math.max(t, 1)),
					max: Math.max(t, 1)
				}),
				/* @__PURE__ */ (0, Y.jsxs)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: [e.n.toLocaleString(), " tags"]
				})
			]
		}, e.k))
	}) : /* @__PURE__ */ (0, Y.jsx)(F, {
		icon: z,
		title: "No tag sources yet",
		actions: /* @__PURE__ */ (0, Y.jsx)(P, {
			variant: "secondary",
			href: t ? "/data-cleanup" : "/settings/library",
			size: "small",
			children: t ? "Complete metadata" : "Add media"
		}),
		children: Cr
	});
}
function $({ id: e, label: t, figure: n, detail: r, icon: i, accent: a }) {
	return /* @__PURE__ */ (0, Y.jsx)(N, {
		id: e,
		className: Ft({
			interactive: !0,
			selectable: !0
		}),
		children: /* @__PURE__ */ (0, Y.jsx)(Pt, {
			label: t,
			icon: i,
			accent: a,
			figure: n,
			footer: r
		})
	});
}
function Vr(e) {
	let t = kt({
		queryKey: tt,
		queryFn: ({ signal: e }) => pt(e)
	}), n = t.data;
	if (!n) return /* @__PURE__ */ (0, Y.jsx)(Mt, { children: /* @__PURE__ */ (0, Y.jsx)(Qe, {
		tone: "error",
		title: "Couldn't load library stats",
		children: t.error ? ft(t.error) : "Stats not obtained; refresh the page and try again."
	}) });
	let r = n.consumption, i = n.storage_summary, a = n.by_loc.reduce((e, t) => e + t.videos, 0), o = n.by_loc.reduce((e, t) => e + t.bytes, 0), s = mt(n.tag_cov) ? B(n.tag_cov, n.attribution.videos) : "Not obtained", c = `${L(n.tag_cov)} / ${n.attribution.videos.toLocaleString()}`;
	return /* @__PURE__ */ (0, Y.jsxs)(Mt, { children: [
		/* @__PURE__ */ (0, Y.jsx)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: `Current database stats · ${a.toLocaleString()} videos · ${R(o)}`
		}),
		/* @__PURE__ */ (0, Y.jsxs)(qe, {
			defaultSelectedKey: "inventory",
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)(Je, {
					"aria-label": "Stats views",
					className: Nt,
					children: [
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "inventory",
							label: "Library videos",
							icon: st,
							accent: 0,
							figure: a.toLocaleString(),
							detail: R(o)
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "viewing",
							label: "Watched",
							icon: ot,
							accent: 1,
							figure: L(r.played),
							detail: _t(r.play_seconds)
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "coverage",
							label: "Content tags",
							icon: z,
							accent: 2,
							figure: s,
							detail: c
						}),
						/* @__PURE__ */ (0, Y.jsx)($, {
							id: "storage",
							label: "Space used",
							icon: at,
							accent: 3,
							figure: `${i.online.toLocaleString()} volumes`,
							detail: i.measured ? `${R(i.used)} used` : "Capacity not obtained"
						})
					]
				}),
				/* @__PURE__ */ (0, Y.jsx)(M, {
					id: "inventory",
					children: /* @__PURE__ */ (0, Y.jsx)(Nr, {
						data: n,
						...e
					})
				}),
				/* @__PURE__ */ (0, Y.jsxs)(M, {
					id: "viewing",
					className: "flex flex-col gap-5",
					children: [/* @__PURE__ */ (0, Y.jsx)(Mr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(jr, {
							term: "Viewing",
							figure: L(r.played),
							unit: "titles with play history"
						}),
						children: /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "inline-grid w-full gap-3 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Library viewing",
									value: r.library_played
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Watched online directly",
									value: r.online_played
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Climax count",
									value: r.o_total
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Skimmed",
									value: r.skimmed
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Like",
									value: r.liked
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Explicitly disliked",
									value: r.dislike
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Watched",
									value: r.seen
								}),
								/* @__PURE__ */ (0, Y.jsx)(Z, {
									term: "Trash",
									value: r.trash
								})
							]
						})
					}), /* @__PURE__ */ (0, Y.jsx)(Pr, { data: n })]
				}),
				/* @__PURE__ */ (0, Y.jsx)(M, {
					id: "coverage",
					children: /* @__PURE__ */ (0, Y.jsx)(Mr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(jr, {
							term: "Content tag coverage",
							figure: s,
							unit: c
						}),
						children: /* @__PURE__ */ (0, Y.jsx)(Fr, { attribution: n.attribution })
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(M, {
					id: "storage",
					children: /* @__PURE__ */ (0, Y.jsx)(Mr, {
						headline: /* @__PURE__ */ (0, Y.jsx)(jr, {
							term: "Space used",
							figure: i.measured.toLocaleString(),
							unit: "volumes with known capacity"
						}),
						children: /* @__PURE__ */ (0, Y.jsx)(Lr, {
							volumes: n.storage_volumes,
							...e
						})
					})
				})
			]
		}),
		/* @__PURE__ */ (0, Y.jsxs)(qe, {
			defaultSelectedKey: "tags",
			className: `${ut({ padding: "none" })} flex flex-col`,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "px-4 pt-3",
					children: /* @__PURE__ */ (0, Y.jsxs)(nt, {
						"aria-label": "Stats dimensions",
						className: et,
						children: [
							/* @__PURE__ */ (0, Y.jsx)(N, {
								id: "tags",
								className: $e,
								children: "Content tags"
							}),
							/* @__PURE__ */ (0, Y.jsx)(N, {
								id: "recent",
								className: $e,
								children: "Recently watched"
							}),
							/* @__PURE__ */ (0, Y.jsx)(N, {
								id: "sources",
								className: $e,
								children: "Tag sources"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(M, {
					id: "tags",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(Rr, {
						tags: n.top_tags,
						hasMedia: a > 0,
						...e
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(M, {
					id: "recent",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(zr, {
						rows: n.recent,
						hasMedia: a > 0
					})
				}),
				/* @__PURE__ */ (0, Y.jsx)(M, {
					id: "sources",
					className: "px-4 pt-3.5 pb-4",
					children: /* @__PURE__ */ (0, Y.jsx)(Br, {
						sources: n.tag_source,
						videos: n.attribution.videos
					})
				})
			]
		})
	] });
}
export { Vr as StatsPage };

//# debugId=0039bf8d-b8d3-4280-820e-ec8325029b72