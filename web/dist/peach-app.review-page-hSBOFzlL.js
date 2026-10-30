(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a9ba4f8f-97a9-483b-8257-acb4b9450c6a", e._sentryDebugIdIdentifier = "sentry-dbid-a9ba4f8f-97a9-483b-8257-acb4b9450c6a");
	} catch {}
})();
import { $b4f18e3395fe64d7$export$3d96ec278d3efce4 as e, $b4f18e3395fe64d7$export$3e41faf802a29e71 as t, $b4f18e3395fe64d7$export$b2539bed5023c21c as n, $ea3928288112382f$export$439d29a4e110a164 as r, $fe21c36db05242bb$export$a98f0dcb43a68a25 as i, $fe21c36db05242bb$export$d7b12c4107be0d61 as a, Button as o, ButtonLink as s, Checkbox as c, CheckboxGlyph as l, Chip as u, CollapseChevron as d, CollapseRegion as f, DEFAULT_CATEGORY as p, ENTITY_REVIEW_KINDS as m, Ea as h, EmptyState as ee, ExternalLink as g, FIELDSET_FOOT as _, FilterGlassRows as v, Gg as y, InputBase as b, LinkButton as te, Note as ne, REVIEW_CATEGORIES as x, REVIEW_DECISION_LABELS as re, REVIEW_KEY as S, REVIEW_LABELS as C, REVIEW_QUEUES as w, REVIEW_QUEUE_LABELS as T, Select as E, SelectItem as D, SelectionActions as O, SelectionDock as k, TextField as A, Wt as j, __toESM as M, avatarInner as N, busyProps as P, canApprove as ie, cardClass as F, commonReviewSources as I, currentReviewRow as ae, cx as L, decisionPayload as oe, decisionReceipt as se, defaultChoice as ce, errorMessage as le, fetchReview as ue, filterReviewRows as de, groupReviewRows as fe, isReviewCategory as pe, l7 as me, m7 as he, mirrorText as ge, paginationRange as R, pendingGenres as _e, recordGenre as ve, reloadReview as ye, require_jsx_runtime as be, require_react as xe, reviewGroupingOptions as Se, reviewQueueData as Ce, reviewQueueOf as we, reviewWindow as Te, rowEvidence as Ee, rowFieldName as z, rowSubject as De, rowTags as Oe, rowTitle as ke, selectReviewRange as Ae, settleReviewRows as je, spinnerHtml as B, submitDecision as Me, useMutation as Ne, useOverlayScrollbar as V, useQuery as Pe, useViewGlide as Fe } from "./peach-app.js";
import { Page as Ie } from "./peach-app.page-QAncjzM1.js";
import { LEGACY_AVATAR_IMG as Le } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as Re } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
// src/react/review/bulk-toolbar.tsx
var H = /* @__PURE__ */ M(xe(), 1), U = be();
function ze(e) {
	let { groupOptions: t, groupBy: n, onGroupBy: r, groups: i, filter: a, onFilter: s, pageKeys: c, selected: l, onSelected: u, selectedRows: d, metadata: f, approvable: p, busy: m, feedback: h, onUnifySource: ee, onRun: g, queueView: _ = "pending", queueCounts: y, onQueueChange: b, locked: te, fields: ne, fieldFilter: x, onFieldFilter: re } = e, S = c.filter((e) => l.has(e)), C = S.length > 0 && S.length === c.length, O = I(d), A = f && d.some((e) => (e.candidates?.length || 0) > 1), j = O.length ? "Choose source for all" : "Selected items have no common source", M = (0, H.useRef)(null), N = (0, H.useRef)(null), P = (0, H.useRef)(null), [ie, F] = (0, H.useState)(!1), ae = Fe(M, N, "[data-entity-state][aria-pressed=\"true\"]", _);
	return (0, H.useLayoutEffect)(() => {
		let e = N.current, t = P.current, n = e?.parentElement, r = e?.closest("[data-review-filter]");
		if (!e || !t || !n || !r) return;
		let i = () => F(t.offsetHeight > 0 && Math.abs(n.getBoundingClientRect().top - t.getBoundingClientRect().top) < 1), a = new ResizeObserver(i);
		for (let n of [
			r,
			e,
			t
		]) a.observe(n);
		return i(), () => a.disconnect();
	}, []), /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)(v, {
		label: "Review filters",
		topLabel: "Handling status",
		attrs: { "data-review-filter": "" },
		className: "mb-0 flex-row flex-wrap",
		topClassName: "max-w-full flex-none",
		bottomClassName: c.length ? "min-h-12 max-w-full flex-none flex-wrap" : "hidden",
		bottomRef: P,
		panes: /* @__PURE__ */ (0, U.jsx)("span", {
			ref: M,
			"data-view-glide": "",
			"aria-hidden": "true"
		}),
		top: /* @__PURE__ */ (0, U.jsxs)("div", {
			ref: N,
			role: "group",
			"aria-label": "Review status",
			"data-entity-states": "",
			onPointerLeave: ae.leave,
			children: [w.map((e) => /* @__PURE__ */ (0, U.jsxs)("button", {
				type: "button",
				"data-entity-state": e,
				"data-entity-press": "",
				disabled: m,
				"aria-pressed": _ === e,
				onPointerEnter: ae.hover,
				onClick: () => {
					e !== _ && b(e);
				},
				children: [
					/* @__PURE__ */ (0, U.jsx)("span", {
						"data-copy-key": `review.queue.${e}`,
						children: T[e]
					}),
					" ",
					/* @__PURE__ */ (0, U.jsx)("span", {
						className: "ms-1.5 tabular-nums text-caption-1-medium text-text-secondary",
						children: y ? y[e].toLocaleString() : "…"
					})
				]
			}, e)), /* @__PURE__ */ (0, U.jsx)("span", {
				"data-entity-sep": "",
				"aria-hidden": "true",
				className: ie ? void 0 : "invisible"
			})]
		}),
		bottom: c.length ? /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [
			f && ne.length ? /* @__PURE__ */ (0, U.jsxs)(E, {
				"aria-label": "Filter metadata fields",
				size: "sm",
				prefix: /* @__PURE__ */ (0, U.jsx)("span", {
					"data-copy-key": "review.filter.field",
					className: "pointer-events-auto",
					children: "Field"
				}),
				selectedKey: x || "*",
				isDisabled: m,
				onSelectionChange: (e) => {
					e !== null && re(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, U.jsx)(D, {
					id: "*",
					children: "All"
				}), ne.map((e) => /* @__PURE__ */ (0, U.jsx)(D, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			/* @__PURE__ */ (0, U.jsx)(E, {
				"aria-label": "Filter grouping",
				size: "sm",
				selectedKey: n,
				onSelectionChange: (e) => {
					e !== null && r(String(e));
				},
				children: t.map(([e, t]) => /* @__PURE__ */ (0, U.jsx)(D, {
					id: e,
					children: t
				}, e))
			}),
			i.length > 1 ? /* @__PURE__ */ (0, U.jsxs)(E, {
				"aria-label": n === "field" ? "Filter field category" : "Filter current category",
				size: "sm",
				prefix: "Category",
				selectedKey: a || "*",
				onSelectionChange: (e) => {
					e !== null && s(String(e) === "*" ? "" : String(e));
				},
				children: [/* @__PURE__ */ (0, U.jsx)(D, {
					id: "*",
					children: "All"
				}), i.map((e) => /* @__PURE__ */ (0, U.jsx)(D, {
					id: e.key,
					children: `${e.title} · ${e.rows.length}`
				}, e.key))]
			}) : null,
			te ? null : /* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				leadingIcon: me,
				"aria-pressed": C,
				disabled: m,
				onClick: () => {
					let e = new Set(l);
					for (let t of c) C ? e.delete(t) : e.add(t);
					u(e);
				},
				children: C ? "Clear current selection" : a ? "Select all in current category" : "Select page"
			})
		] }) : null
	}), /* @__PURE__ */ (0, U.jsxs)(k, {
		label: "Review selected items",
		visible: !te && l.size > 0,
		count: `${l.size} selected`,
		children: [
			A && _ !== "ignored" ? /* @__PURE__ */ (0, U.jsxs)(E, {
				"aria-label": "Choose source for all",
				size: "sm",
				selectedKey: "",
				isDisabled: m || !O.length,
				onSelectionChange: (e) => {
					e !== null && e !== "" && ee(String(e));
				},
				children: [/* @__PURE__ */ (0, U.jsx)(D, {
					id: "",
					children: j
				}), O.map((e) => /* @__PURE__ */ (0, U.jsx)(D, {
					id: e,
					children: e
				}, e))]
			}) : null,
			_ === "ignored" ? null : /* @__PURE__ */ (0, U.jsx)(o, {
				variant: "ghost",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("rejected"),
				children: "Ignore selected"
			}),
			_ === "pending" ? /* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("skipped"),
				children: "Later for selected"
			}) : /* @__PURE__ */ (0, U.jsx)(o, {
				variant: _ === "ignored" ? "primary" : "secondary",
				size: "small",
				disabled: m || !l.size,
				onClick: () => g("restore"),
				children: "Restore selected"
			}),
			_ === "ignored" ? null : /* @__PURE__ */ (0, U.jsx)(o, {
				variant: "primary",
				size: "small",
				disabled: m || !l.size || !p,
				onClick: () => g("approved"),
				children: "Approve selected"
			}),
			/* @__PURE__ */ (0, U.jsx)(o, {
				variant: "ghost",
				size: "small",
				disabled: m,
				onClick: () => u(/* @__PURE__ */ new Set()),
				children: "Clear selection"
			}),
			h ? /* @__PURE__ */ (0, U.jsx)("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-secondary",
				children: h
			}) : null
		]
	})] });
}
// src/react/boardui/components/base/radio/radio.tsx
var Be = {
	sm: {
		dot: "size-3.5",
		inner: "size-[5px]",
		selected: "bg-gradient-to-b from-accent-500 to-accent-600 shadow-[inset_0px_0px_0px_0.875px_var(--color-accent-500),inset_0px_1.75px_0px_0px_rgba(255,255,255,0.25)]",
		border: "border-[0.875px]",
		gap: "gap-2",
		label: "text-body-2-medium"
	},
	md: {
		dot: "size-4",
		inner: "size-1.5",
		selected: "bg-gradient-to-b from-accent-500 to-accent-600 shadow-[inset_0px_0px_0px_1px_var(--color-accent-500),inset_0px_2px_0px_0px_rgba(255,255,255,0.25)]",
		border: "border",
		gap: "gap-2",
		label: "text-body-medium"
	}
};
function W({ selected: e = !1, size: t = "sm", focusVisible: n = !1, className: r }) {
	let i = Be[t];
	return /* @__PURE__ */ (0, U.jsxs)("span", {
		"aria-hidden": !0,
		className: L("relative flex shrink-0 items-center justify-center rounded-full", i.dot, n && "ring-2 ring-border-focus-ring ring-offset-2", r),
		children: [
			/* @__PURE__ */ (0, U.jsx)("span", { className: L("absolute inset-0 rounded-full border-border-checkbox-default bg-background-primary-default shadow-xs", "transition-opacity duration-200 ease", i.border, e && "opacity-0") }),
			/* @__PURE__ */ (0, U.jsx)("span", { className: L("absolute inset-0 rounded-full", "transition-opacity duration-200 ease", i.selected, !e && "opacity-0") }),
			/* @__PURE__ */ (0, U.jsx)("span", { className: L("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-control-indicator-background", "transition-[scale,opacity] duration-200 ease", i.inner, e ? "scale-100 opacity-100" : "scale-0 opacity-0") })
		]
	});
}
function Ve({ className: e, children: t, ref: n, ...r }) {
	return /* @__PURE__ */ (0, U.jsx)(i, {
		ref: n,
		...r,
		className: (t) => L("flex flex-col gap-2", typeof e == "function" ? e(t) : e),
		children: t
	});
}
// src/react/boardui/components/base/radio/radio-card.tsx
function G({ className: e, title: t, description: n, ref: r, ...i }) {
	return /* @__PURE__ */ (0, U.jsx)(a, {
		ref: r,
		...i,
		className: (t) => L("group flex w-full items-center justify-between gap-3 rounded-2lg border border-border-button-default py-3 pe-5 ps-4 select-none", "transition-colors duration-150 ease", t.isHovered && !t.isDisabled ? "bg-background-primary-hover" : "bg-background-primary-default", t.isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer", typeof e == "function" ? e(t) : e),
		children: (e) => /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsxs)("span", {
			className: "flex min-w-0 flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, U.jsx)("span", {
				className: "truncate text-body-medium text-text-primary",
				children: t
			}), n != null && /* @__PURE__ */ (0, U.jsx)("span", {
				className: "truncate text-body-regular text-text-secondary",
				children: n
			})]
		}), /* @__PURE__ */ (0, U.jsx)("span", {
			className: "flex shrink-0 items-center py-1",
			children: /* @__PURE__ */ (0, U.jsx)(W, {
				size: "md",
				selected: e.isSelected,
				focusVisible: e.isFocusVisible
			})
		})] })
	});
}
// node_modules/diff/libesm/diff/base.js
var K = class {
	diff(e, t, n = {}) {
		let r;
		typeof n == "function" ? (r = n, n = {}) : "callback" in n && (r = n.callback);
		let i = this.castInput(e, n), a = this.castInput(t, n), o = this.removeEmpty(this.tokenize(i, n)), s = this.removeEmpty(this.tokenize(a, n));
		return this.diffWithOptionsObj(o, s, n, r);
	}
	diffWithOptionsObj(e, t, n, r) {
		let i = (e) => {
			if (e = this.postProcess(e, n), r) setTimeout(function() {
				r(e);
			}, 0);
			else return e;
		}, a = t.length, o = e.length, s = 1, c = a + o;
		n.maxEditLength != null && (c = Math.min(c, n.maxEditLength));
		let l = n.timeout ?? Infinity, u = Date.now() + l, d = [{
			oldPos: -1,
			lastComponent: void 0
		}], f = this.extractCommon(d[0], t, e, 0, n);
		if (d[0].oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(d[0].lastComponent, t, e));
		let p = -Infinity, m = Infinity, h = () => {
			for (let r = Math.max(p, -s); r <= Math.min(m, s); r += 2) {
				let s, c = d[r - 1], l = d[r + 1];
				c && (d[r - 1] = void 0);
				let u = !1;
				if (l) {
					let e = l.oldPos - r;
					u = l && 0 <= e && e < a;
				}
				let h = c && c.oldPos + 1 < o;
				if (!u && !h) d[r] = void 0;
				else {
					if (s = !h || u && c.oldPos < l.oldPos ? this.addToPath(l, !0, !1, 0, n) : this.addToPath(c, !1, !0, 1, n), f = this.extractCommon(s, t, e, r, n), s.oldPos + 1 >= o && f + 1 >= a) return i(this.buildValues(s.lastComponent, t, e)) || !0;
					d[r] = s, s.oldPos + 1 >= o && (m = Math.min(m, r - 1)), f + 1 >= a && (p = Math.max(p, r + 1));
				}
			}
			s++;
		};
		if (r) (function e() {
			setTimeout(function() {
				if (s > c || Date.now() > u) return r(void 0);
				h() || e();
			}, 0);
		})();
		else for (; s <= c && Date.now() <= u;) {
			let e = h();
			if (e) return e;
		}
	}
	addToPath(e, t, n, r, i) {
		let a = e.lastComponent;
		return a && !i.oneChangePerToken && a.added === t && a.removed === n ? {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: a.count + 1,
				added: t,
				removed: n,
				previousComponent: a.previousComponent
			}
		} : {
			oldPos: e.oldPos + r,
			lastComponent: {
				count: 1,
				added: t,
				removed: n,
				previousComponent: a
			}
		};
	}
	extractCommon(e, t, n, r, i) {
		let a = t.length, o = n.length, s = e.oldPos, c = s - r, l = 0;
		for (; c + 1 < a && s + 1 < o && this.equals(n[s + 1], t[c + 1], i);) c++, s++, l++, i.oneChangePerToken && (e.lastComponent = {
			count: 1,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		});
		return l && !i.oneChangePerToken && (e.lastComponent = {
			count: l,
			previousComponent: e.lastComponent,
			added: !1,
			removed: !1
		}), e.oldPos = s, c;
	}
	equals(e, t, n) {
		return n.comparator ? n.comparator(e, t) : e === t || !!n.ignoreCase && e.toLowerCase() === t.toLowerCase();
	}
	removeEmpty(e) {
		let t = [];
		for (let n = 0; n < e.length; n++) e[n] && t.push(e[n]);
		return t;
	}
	castInput(e, t) {
		return e;
	}
	tokenize(e, t) {
		return Array.from(e);
	}
	join(e) {
		return e.join("");
	}
	postProcess(e, t) {
		return e;
	}
	get useLongestToken() {
		return !1;
	}
	buildValues(e, t, n) {
		let r = [], i;
		for (; e;) r.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
		r.reverse();
		let a = r.length, o = 0, s = 0, c = 0;
		for (; o < a; o++) {
			let e = r[o];
			if (e.removed) e.value = this.join(n.slice(c, c + e.count)), c += e.count;
			else {
				if (!e.added && this.useLongestToken) {
					let r = t.slice(s, s + e.count);
					r = r.map(function(e, t) {
						let r = n[c + t];
						return r.length > e.length ? r : e;
					}), e.value = this.join(r);
				} else e.value = this.join(t.slice(s, s + e.count));
				s += e.count, e.added || (c += e.count);
			}
		}
		return r;
	}
}, He = new class extends K {}();
function q(e, t, n) {
	return He.diff(e, t, n);
}
// node_modules/diff/libesm/util/string.js
function Ue(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length; n++) if (e[n] != t[n]) return e.slice(0, n);
	return e.slice(0, n);
}
function We(e, t) {
	let n;
	if (!e || !t || e[e.length - 1] != t[t.length - 1]) return "";
	for (n = 0; n < e.length && n < t.length; n++) if (e[e.length - (n + 1)] != t[t.length - (n + 1)]) return e.slice(-n);
	return e.slice(-n);
}
function J(e, t, n) {
	if (e.slice(0, t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);
	return n + e.slice(t.length);
}
function Y(e, t, n) {
	if (!t) return e + n;
	if (e.slice(-t.length) != t) throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);
	return e.slice(0, -t.length) + n;
}
function X(e, t) {
	return J(e, t, "");
}
function Z(e, t) {
	return Y(e, t, "");
}
function Ge(e, t) {
	return t.slice(0, Ke(e, t));
}
function Ke(e, t) {
	let n = 0;
	e.length > t.length && (n = e.length - t.length);
	let r = t.length;
	e.length < t.length && (r = e.length);
	let i = Array(r), a = 0;
	i[0] = 0;
	for (let e = 1; e < r; e++) {
		for (t[e] == t[a] ? i[e] = i[a] : i[e] = a; a > 0 && t[e] != t[a];) a = i[a];
		t[e] == t[a] && a++;
	}
	a = 0;
	for (let r = n; r < e.length; r++) {
		for (; a > 0 && e[r] != t[a];) a = i[a];
		e[r] == t[a] && a++;
	}
	return a;
}
function qe(e, t) {
	let n = [];
	for (let r of Array.from(t.segment(e))) {
		let e = r.segment;
		n.length && /\s/.test(n[n.length - 1]) && /\s/.test(e) ? n[n.length - 1] += e : n.push(e);
	}
	return n;
}
function Je(e, t) {
	if (t) return $(e, t)[1];
	let n;
	for (n = e.length - 1; n >= 0 && e[n].match(/\s/); n--);
	return e.substring(n + 1);
}
function Q(e, t) {
	if (t) return $(e, t)[0];
	let n = e.match(/^\s*/);
	return n ? n[0] : "";
}
function $(e, t) {
	if (!t) return [Q(e), Je(e)];
	if (t.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
	let n = qe(e, t), r = n[0], i = n[n.length - 1];
	return [/\s/.test(r) ? r : "", /\s/.test(i) ? i : ""];
}
// node_modules/diff/libesm/diff/word.js
var Ye = "a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", Xe = RegExp(`[${Ye}]+|\\s+|[^${Ye}]`, "ug");
new class extends K {
	equals(e, t, n) {
		return n.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e.trim() === t.trim();
	}
	tokenize(e, t = {}) {
		let n;
		if (t.intlSegmenter) {
			let r = t.intlSegmenter;
			if (r.resolvedOptions().granularity != "word") throw Error("The segmenter passed must have a granularity of \"word\"");
			n = qe(e, r);
		} else n = e.match(Xe) || [];
		let r = [], i = null;
		return n.forEach((e) => {
			/\s/.test(e) ? i == null ? r.push(e) : r.push(r.pop() + e) : i != null && /\s/.test(i) ? r[r.length - 1] == i ? r.push(r.pop() + e) : r.push(i + e) : r.push(e), i = e;
		}), r;
	}
	join(e) {
		return e.map((e, t) => t == 0 ? e : e.replace(/^\s+/, "")).join("");
	}
	postProcess(e, t) {
		if (!e || t.oneChangePerToken) return e;
		let n = null, r = null, i = null;
		return e.forEach((e) => {
			e.added ? r = e : e.removed ? i = e : ((r || i) && Ze(n, i, r, e, t.intlSegmenter), n = e, r = null, i = null);
		}), (r || i) && Ze(n, i, r, null, t.intlSegmenter), e;
	}
}();
function Ze(e, t, n, r, i) {
	if (t && n) {
		let [a, o] = $(t.value, i), [s, c] = $(n.value, i);
		if (e) {
			let r = Ue(a, s);
			e.value = Y(e.value, s, r), t.value = X(t.value, r), n.value = X(n.value, r);
		}
		if (r) {
			let e = We(o, c);
			r.value = J(r.value, c, e), t.value = Z(t.value, e), n.value = Z(n.value, e);
		}
	} else if (n) {
		if (e) {
			let e = Q(n.value, i);
			n.value = n.value.substring(e.length);
		}
		if (r) {
			let e = Q(r.value, i);
			r.value = r.value.substring(e.length);
		}
	} else if (e && r) {
		let n = Q(r.value, i), [a, o] = $(t.value, i), s = Ue(n, a);
		t.value = X(t.value, s);
		let c = We(X(n, s), o);
		t.value = Z(t.value, c), r.value = J(r.value, n, c), e.value = Y(e.value, n, n.slice(0, n.length - c.length));
	} else if (r) {
		let e = Q(r.value, i), n = Ge(Je(t.value, i), e);
		t.value = Z(t.value, n);
	} else if (e) {
		let n = Ge(Je(e.value, i), Q(t.value, i));
		t.value = X(t.value, n);
	}
}
new class extends K {
	tokenize(e) {
		let t = RegExp(`(\\r?\\n)|[${Ye}]+|[^\\S\\n\\r]+|[^${Ye}]`, "ug");
		return e.match(t) || [];
	}
}(), new class extends K {
	constructor() {
		super(...arguments), this.tokenize = Qe;
	}
	equals(e, t, n) {
		return n.ignoreWhitespace ? (n.newlineIsToken && e.includes("\n") || (e = e.trim()), n.newlineIsToken && t.includes("\n") || (t = t.trim())) : n.ignoreNewlineAtEof && !n.newlineIsToken && (e.endsWith("\n") && (e = e.slice(0, -1)), t.endsWith("\n") && (t = t.slice(0, -1))), super.equals(e, t, n);
	}
}();
function Qe(e, t) {
	t.stripTrailingCr && (e = e.replace(/\r\n/g, "\n"));
	let n = [], r = e.split(/(\n|\r\n)/);
	r[r.length - 1] || r.pop();
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		e % 2 && !t.newlineIsToken ? n[n.length - 1] += i : n.push(i);
	}
	return n;
}
// node_modules/diff/libesm/diff/sentence.js
function $e(e) {
	return e == "." || e == "!" || e == "?";
}
new class extends K {
	tokenize(e) {
		let t = [], n = 0;
		for (let r = 0; r < e.length; r++) {
			if (r == e.length - 1) {
				t.push(e.slice(n));
				break;
			}
			if ($e(e[r]) && e[r + 1].match(/\s/)) {
				for (t.push(e.slice(n, r + 1)), r = n = r + 1; e[r + 1]?.match(/\s/);) r++;
				t.push(e.slice(n, r + 1)), n = r + 1;
			}
		}
		return t;
	}
}(), new class extends K {
	tokenize(e) {
		return e.split(/([{}:;,]|\s+)/);
	}
}(), new class extends K {
	constructor() {
		super(...arguments), this.tokenize = Qe;
	}
	get useLongestToken() {
		return !0;
	}
	castInput(e, t) {
		let { undefinedReplacement: n, stringifyReplacer: r = (e, t) => t === void 0 ? n : t } = t;
		return typeof e == "string" ? e : JSON.stringify(et(e, null, null, r), null, "  ");
	}
	equals(e, t, n) {
		return super.equals(e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"), n);
	}
}();
function et(e, t, n, r, i) {
	t ||= [], n ||= [], r && (e = r(i === void 0 ? "" : i, e));
	let a = 0;
	for (; a < t.length; a += 1) if (t[a] === e) return n[a];
	let o;
	if (Object.prototype.toString.call(e) === "[object Array]") {
		for (t.push(e), o = Array(e.length), n.push(o), a = 0; a < e.length; a += 1) o[a] = et(e[a], t, n, r, String(a));
		return t.pop(), n.pop(), o;
	}
	if (e && e.toJSON && (e = e.toJSON()), typeof e == "object" && e) {
		t.push(e), o = {}, n.push(o);
		let i = [], s;
		for (s in e)
 /* istanbul ignore else */
		Object.prototype.hasOwnProperty.call(e, s) && i.push(s);
		for (i.sort(), a = 0; a < i.length; a += 1) s = i[a], o[s] = et(e[s], t, n, r, s);
		t.pop(), n.pop();
	} else o = e;
	return o;
}
new class extends K {
	tokenize(e) {
		return e.slice();
	}
	join(e) {
		return e;
	}
	removeEmpty(e) {
		return e;
	}
}();
// src/react/review/comparison-text.tsx
function tt({ value: e, reference: t }) {
	let n = (0, H.useMemo)(() => t ? q(t, e).filter((e) => !e.removed) : [{
		value: e,
		added: !1
	}], [e, t]);
	return /* @__PURE__ */ (0, U.jsx)(U.Fragment, { children: n.map((e, t) => e.added ? /* @__PURE__ */ (0, U.jsx)("mark", {
		"data-review-difference": "",
		className: "rounded-sm bg-status-yellow-background text-status-yellow-text",
		children: e.value
	}, t) : /* @__PURE__ */ (0, U.jsx)("span", { children: e.value }, t)) });
}
// src/react/review/candidate-form.tsx
var nt = {
	title: "Title",
	original_title: "Original title",
	runtime: "Source duration",
	director: "Director",
	label: "Label",
	poster_url: "Poster",
	cover_url: "Cover",
	screenshot_urls: "Screenshots",
	trailer_url: "Trailer"
}, rt = "reviewgenretags";
function it({ tags: e }) {
	return e.length ? /* @__PURE__ */ (0, U.jsx)("datalist", {
		id: rt,
		children: e.map((e) => /* @__PURE__ */ (0, U.jsx)("option", { value: e }, e))
	}) : null;
}
function at({ candidate: e, row: t }) {
	let [n, r] = (0, H.useState)(!1), i = (0, H.useId)(), a = Object.entries(e.catalog_evidence || {}).filter(([, e]) => e && e.display_value);
	return a.length ? /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, U.jsxs)(o, {
			variant: "secondary",
			size: "small",
			leadingIcon: d,
			"aria-expanded": n,
			"aria-controls": i,
			"aria-label": `${n ? "Collapse" : "Expand"} ${e.source || "this source"} source evidence`,
			onClick: () => r(!n),
			children: [/* @__PURE__ */ (0, U.jsx)("span", {
				"data-copy-key": "review.card.source_evidence",
				children: "Source evidence"
			}), ` · ${a.length}`]
		}), /* @__PURE__ */ (0, U.jsx)(f, {
			id: i,
			open: n,
			children: /* @__PURE__ */ (0, U.jsx)("dl", {
				className: "flex min-w-0 flex-col gap-2 px-3 pt-2 pb-1",
				children: a.map(([n, r]) => /* @__PURE__ */ (0, U.jsxs)("div", {
					className: "flex min-w-0 flex-wrap gap-x-2",
					children: [
						/* @__PURE__ */ (0, U.jsx)("dt", {
							className: "text-caption-1-regular text-text-tertiary",
							children: nt[n] || n
						}),
						/* @__PURE__ */ (0, U.jsx)("dd", {
							className: "min-w-0 text-body-2-regular break-words text-text-primary",
							children: /* @__PURE__ */ (0, U.jsx)(tt, {
								value: r.display_value || "",
								reference: n === t.field && t.current_value ? t.current_value : t.candidates?.find((t) => t.candidate_key !== e.candidate_key && t.catalog_evidence?.[n]?.display_value)?.catalog_evidence?.[n]?.display_value
							})
						}),
						(r.warnings || []).map((e) => /* @__PURE__ */ (0, U.jsx)("small", {
							className: "w-full text-caption-1-regular text-status-yellow-text",
							children: e
						}, e))
					]
				}, n))
			})
		})]
	}) : null;
}
function ot(e) {
	let t = e.content_id || e.provider_id;
	return `${e.source || "Source not labeled"}${e.official ? " · official first" : ""}${t ? ` · ID ${t}` : ""}`;
}
function st({ candidate: e, reference: t }) {
	return /* @__PURE__ */ (0, U.jsxs)("span", {
		className: "flex min-w-0 flex-col gap-2 whitespace-normal wrap-anywhere",
		children: [/* @__PURE__ */ (0, U.jsx)("span", {
			className: "text-body-regular text-text-primary",
			children: /* @__PURE__ */ (0, U.jsx)(tt, {
				value: e.display_value || "",
				reference: t
			})
		}), (e.warnings || []).map((e) => /* @__PURE__ */ (0, U.jsx)("span", {
			className: "text-body-2-regular text-status-yellow-text",
			children: e
		}, e))]
	});
}
function ct({ row: e, fieldName: t, value: n, onChange: r, locked: i }) {
	let a = e.candidates || [];
	return a.length ? a.length === 1 ? /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-2 rounded-2lg bg-background-primary-default px-4 py-3",
			children: [/* @__PURE__ */ (0, U.jsx)("p", {
				className: "text-body-medium text-text-primary",
				children: ot(a[0])
			}), /* @__PURE__ */ (0, U.jsx)(st, {
				candidate: a[0],
				reference: e.current_value || void 0
			})]
		}), /* @__PURE__ */ (0, U.jsx)(at, {
			candidate: a[0],
			row: e
		})]
	}) : /* @__PURE__ */ (0, U.jsx)(Ve, {
		"aria-label": `${t || "profiles"} sources of`,
		value: n,
		isDisabled: i,
		onChange: r,
		children: /* @__PURE__ */ (0, U.jsx)("div", {
			className: "flex min-w-0 flex-col gap-3",
			children: a.map((t) => /* @__PURE__ */ (0, U.jsxs)("div", {
				className: "flex min-w-0 flex-col gap-1",
				children: [/* @__PURE__ */ (0, U.jsx)(G, {
					value: t.candidate_key,
					className: "relative items-start",
					title: /* @__PURE__ */ (0, U.jsx)("span", {
						title: ot(t),
						children: ot(t)
					}),
					description: /* @__PURE__ */ (0, U.jsx)(st, {
						candidate: t,
						reference: e.current_value || a.find((e) => e.candidate_key !== t.candidate_key)?.display_value
					})
				}), /* @__PURE__ */ (0, U.jsx)(at, {
					candidate: t,
					row: e
				})]
			}, t.candidate_key))
		})
	}) : null;
}
function lt({ genre: e, tags: t, locked: n, toast: r }) {
	let [i, a] = (0, H.useState)(""), [s, c] = (0, H.useState)(""), l = Ne({
		mutationFn: (t) => ve(e, t),
		onSuccess: async (t, n) => {
			t.ok ? (r(n ? `Added “${e}” as tag “${n}”` : `Marked “${e}” as not a content tag`), await ye()) : c(t.error || "The server rejected this addition");
		},
		onError: (e) => c(le(e))
	}), u = () => {
		let e = i.trim();
		e ? (c(""), l.mutate(e)) : c("Give it a Chinese tag first");
	};
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, U.jsx)("b", {
				lang: "ja",
				className: "text-body-medium text-text-primary",
				children: e
			}),
			/* @__PURE__ */ (0, U.jsx)(A, {
				"aria-label": `Chinese tag for “${e}”`,
				value: i,
				onChange: a,
				maxLength: 40,
				isDisabled: n || l.isPending,
				className: "min-w-40 flex-1",
				children: /* @__PURE__ */ (0, U.jsx)(b, {
					size: "small",
					list: t.length ? rt : void 0,
					autoComplete: "off",
					placeholder: "Chinese tag",
					onKeyDown: (e) => {
						e.key !== "Enter" || e.nativeEvent.isComposing || (e.preventDefault(), u());
					}
				})
			}),
			/* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: u,
				children: "Add"
			}),
			/* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: n || l.isPending,
				onClick: () => {
					c(""), l.mutate("");
				},
				children: "Not content"
			}),
			s ? /* @__PURE__ */ (0, U.jsx)("p", {
				role: "status",
				className: "w-full text-body-2-regular text-text-error-primary",
				children: s
			}) : null
		]
	});
}
function ut({ row: e, tags: t, locked: n, toast: r }) {
	let i = _e(e);
	return i.length ? /* @__PURE__ */ (0, U.jsxs)("div", {
		role: "group",
		"aria-label": "Unmapped genres",
		className: "flex flex-col gap-2 border-t border-separator-border pt-4",
		children: [/* @__PURE__ */ (0, U.jsx)("h5", {
			className: "text-body-2-medium text-text-secondary",
			children: `Unmapped genres · ${i.length}`
		}), /* @__PURE__ */ (0, U.jsx)("div", {
			role: "list",
			className: "flex flex-col",
			children: i.map((e, i) => /* @__PURE__ */ (0, U.jsx)("div", {
				role: "listitem",
				className: `py-3 first:pt-0 last:pb-0 ${i ? "border-t border-separator-border" : ""}`,
				children: /* @__PURE__ */ (0, U.jsx)(lt, {
					genre: e,
					tags: t,
					locked: n,
					toast: r
				})
			}, e))
		})]
	}) : null;
}
// src/react/review/review-evidence.tsx
var dt = (e = "") => /^https?:\/\//i.test(e) ? e : "", ft = (e = "") => dt(e) || (e.startsWith("/") && !e.startsWith("//") ? e : "");
function pt({ url: e }) {
	let t = ft(e || "");
	return /* @__PURE__ */ (0, U.jsx)(mt, { source: t }, t);
}
function mt({ source: e }) {
	let [t, n] = (0, H.useState)("idle");
	return (0, H.useEffect)(() => {
		if (t !== "loading") return;
		let e = setTimeout(() => n("failed"), 3e4);
		return () => clearTimeout(e);
	}, [t]), /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "relative flex h-review-image items-center justify-center overflow-hidden rounded-surface bg-background-secondary-default",
		children: [t === "loading" ? /* @__PURE__ */ (0, U.jsxs)("span", {
			role: "status",
			className: "absolute flex items-center gap-2 text-body-2-regular text-text-secondary",
			children: [/* @__PURE__ */ (0, U.jsx)("span", { dangerouslySetInnerHTML: { __html: B("Loading image") } }), "Loading image"]
		}) : null, e && (t === "loading" || t === "ready") ? /* @__PURE__ */ (0, U.jsx)("img", {
			src: e,
			alt: "Candidate images from the source",
			referrerPolicy: "no-referrer",
			decoding: "async",
			className: `size-full object-contain ${t === "loading" ? "invisible" : ""}`,
			onLoad: () => n("ready"),
			onError: () => n("failed")
		}) : e ? /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex flex-col items-center gap-2",
			children: [t === "failed" ? /* @__PURE__ */ (0, U.jsx)("span", {
				className: "text-body-2-regular text-text-secondary",
				children: "Source images not obtained"
			}) : null, /* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				"aria-label": t === "failed" ? "Retry loading source images now" : void 0,
				onClick: () => n("loading"),
				children: t === "failed" ? "Retry now" : "View source images"
			})]
		}) : /* @__PURE__ */ (0, U.jsx)("span", {
			className: "text-body-2-regular text-text-secondary",
			children: "Source images not obtained"
		})]
	});
}
function ht({ asset: e, openItem: t }) {
	let n = e.name || "";
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, U.jsxs)("button", {
			type: "button",
			onClick: () => t(e.id),
			className: "flex aspect-card-cover w-20 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-2lg bg-background-tertiary-default outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
			children: [e.preview_url ? /* @__PURE__ */ (0, U.jsx)("img", {
				src: e.preview_url,
				alt: "",
				loading: "lazy",
				className: "size-full object-cover"
			}) : /* @__PURE__ */ (0, U.jsx)("span", {
				className: "text-caption-1-regular text-text-secondary",
				children: "No cover"
			}), /* @__PURE__ */ (0, U.jsx)(r, { children: `Open original video ${n}` })]
		}), /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start gap-1",
			children: [/* @__PURE__ */ (0, U.jsx)("b", {
				title: n,
				className: "w-full truncate text-body-medium text-text-primary",
				children: e.code || n || "Original video"
			}), /* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				leadingIcon: y,
				onClick: () => t(e.id),
				children: "Open original video"
			})]
		})]
	});
}
function gt({ kind: e, name: t, works: n, avatar: r, openEntity: i }) {
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex min-w-0 items-center gap-3",
		children: [/* @__PURE__ */ (0, U.jsx)("button", {
			type: "button",
			"aria-label": `Open creator page: ${t}`,
			onClick: () => i(e, t),
			className: `relative inline-grid size-11 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-full bg-background-secondary-default text-caption-1-medium text-text-secondary outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring ${Le}`,
			dangerouslySetInnerHTML: { __html: r }
		}), /* @__PURE__ */ (0, U.jsxs)("div", {
			className: "flex min-w-0 flex-col items-start",
			children: [/* @__PURE__ */ (0, U.jsx)("button", {
				type: "button",
				onClick: () => i(e, t),
				className: "max-w-full cursor-pointer truncate text-body-medium text-text-primary underline-offset-2 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-border-focus-ring",
				children: t
			}), n ? /* @__PURE__ */ (0, U.jsx)("small", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: `${n.toLocaleString()} titles`
			}) : null]
		})]
	});
}
function _t({ row: e, openItem: t, openEntity: n, onReveal: r, revealing: i, note: a }) {
	let c = dt(e.profile_url || ""), l = (e.preview_assets || []).slice(0, 6), u = Math.max(0, Number(e.video_count || e.videos || 0));
	return /* @__PURE__ */ (0, U.jsxs)("section", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, U.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: `Person to confirm: ${e.babepedia_name || "Not labeled"}`
			}),
			/* @__PURE__ */ (0, U.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [c ? /* @__PURE__ */ (0, U.jsx)(s, {
					variant: "secondary",
					size: "small",
					trailingIcon: j,
					href: c,
					target: "_blank",
					rel: "noopener noreferrer",
					children: "Source profile"
				}) : null, /* @__PURE__ */ (0, U.jsx)(o, {
					variant: "secondary",
					size: "small",
					onClick: () => n("creator", e.creator || ""),
					children: `View all ${u.toLocaleString()} titles`
				})]
			}),
			/* @__PURE__ */ (0, U.jsx)(pt, { url: e.preview_url }),
			/* @__PURE__ */ (0, U.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "Approving records the identity decision."
			}),
			l.length ? /* @__PURE__ */ (0, U.jsxs)(U.Fragment, { children: [/* @__PURE__ */ (0, U.jsx)("h5", {
				className: "text-body-medium text-text-primary",
				children: "Local title samples"
			}), /* @__PURE__ */ (0, U.jsx)("ul", {
				className: "flex flex-col gap-1",
				children: l.map((e) => /* @__PURE__ */ (0, U.jsxs)("li", {
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, U.jsx)(o, {
						variant: "ghost",
						size: "small",
						className: "min-w-0",
						onClick: () => t(e.id),
						children: /* @__PURE__ */ (0, U.jsx)("span", {
							title: e.name,
							className: "block max-w-full truncate",
							children: e.name
						})
					}), /* @__PURE__ */ (0, U.jsx)(o, {
						variant: "ghost",
						size: "small",
						"aria-label": `Open the file location of ${e.name}`,
						...P(i === e.id),
						onClick: () => r(e.id),
						children: "File location"
					})]
				}, e.id))
			})] }) : /* @__PURE__ */ (0, U.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "No local title samples; open all titles to check."
			}),
			a ? /* @__PURE__ */ (0, U.jsx)("p", {
				role: "status",
				className: "text-body-2-regular text-text-error-primary",
				children: a
			}) : null
		]
	});
}
function vt({ assets: e, picked: t, onPicked: n, locked: i }) {
	let [a, o] = (0, H.useState)(null), s = new Set(t), c = (t, r) => {
		if (i) return;
		let c = new Set(s);
		if (r && a !== null) {
			let [n, r] = [Math.min(a, t), Math.max(a, t)];
			for (let t = n; t <= r; t++) c.add(e[t].id);
		} else {
			let n = e[t].id;
			c.has(n) ? c.delete(n) : c.add(n);
		}
		o(t), n(e.filter((e) => c.has(e.id)).map((e) => e.id));
	};
	return /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, U.jsx)(O, {
			prefix: /* @__PURE__ */ (0, U.jsx)("span", {
				className: "tabular-nums text-body-2-regular text-text-secondary",
				children: `${s.size} / ${e.length} selected`
			}),
			actions: [{
				label: "Select all",
				disabled: i,
				onPress: () => n(e.map((e) => e.id))
			}, {
				label: "Clear",
				disabled: i,
				onPress: () => n([])
			}]
		}), /* @__PURE__ */ (0, U.jsx)("div", {
			className: "review-asset-grid gap-1.5",
			children: e.map((e, t) => {
				let n = s.has(e.id);
				return /* @__PURE__ */ (0, U.jsxs)("button", {
					type: "button",
					"aria-pressed": n,
					title: e.name,
					onClick: (e) => c(t, e.shiftKey),
					className: `relative aspect-card-cover cursor-pointer overflow-hidden rounded-surface bg-background-tertiary-default outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-border-focus-ring ${n ? "opacity-100 ring-2 ring-border-button-active ring-inset" : "opacity-50"}`,
					children: [
						/* @__PURE__ */ (0, U.jsx)("img", {
							src: `/poster?id=${e.id}&c=4`,
							alt: "",
							loading: "lazy",
							className: "size-full object-cover"
						}),
						/* @__PURE__ */ (0, U.jsx)("span", {
							className: "absolute top-1 right-1",
							children: /* @__PURE__ */ (0, U.jsx)(l, {
								size: "sm",
								state: {
									isSelected: n,
									isIndeterminate: !1,
									isFocusVisible: !1,
									isDisabled: i,
									isHovered: !1
								}
							})
						}),
						/* @__PURE__ */ (0, U.jsx)(r, { children: `${n ? "Selected" : "Not selected"} ${e.name || e.id}` })
					]
				}, e.id);
			})
		})]
	});
}
// src/react/review/review-card.tsx
var yt = F({
	variant: "filled",
	padding: "none",
	bordered: "soft",
	className: "flex flex-col overflow-hidden"
}), bt = "flex min-h-6 min-w-0 items-center", xt = 2, St = (e) => e === "western_identity" ? "h-review-card-tall" : "h-review-card";
function Ct(e) {
	let { category: t, row: n, choice: r, onChoice: i, selected: a, onSelect: s, locked: l, busy: d, problem: f, genreTags: p, onDecide: g, handlers: v, queueView: y = "pending" } = e, b = (0, H.useRef)(!1), ne = V(), x = t === "metadata_fields", S = m[t] || "", C = String(n.creator || "").trim(), w = !!S && !!C, T = ke(t, n), E = z(t, n), D = De(t, n), O = Ee(n), k = Oe(n), A = ie(t, n), j = n.comparison_assets || [], M = n.preview_assets || [], F = re[n.decision || ""], I = j.length > 1 ? /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [j.slice(0, xt).map((e) => /* @__PURE__ */ (0, U.jsx)(ht, {
			asset: e,
			openItem: v.openItem
		}, e.id)), j.length > xt ? /* @__PURE__ */ (0, U.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: `${(j.length - xt).toLocaleString()} more comparison titles`
		}) : null]
	}) : w ? /* @__PURE__ */ (0, U.jsx)(gt, {
		kind: S,
		name: C,
		works: Number(n.video_count || n.videos || 0),
		openEntity: v.openEntity,
		avatar: N(C, n.entity_id ? {
			id: n.entity_id,
			has_image: !!n.has_image,
			image_version: n.image_version,
			avatar_focus: n.avatar_focus
		} : null, null, S)
	}) : n.asset_id ? /* @__PURE__ */ (0, U.jsx)(ht, {
		openItem: v.openItem,
		asset: {
			id: n.asset_id,
			name: n.asset_name,
			code: n.code,
			preview_url: n.asset_preview_url
		}
	}) : null, ae = x ? /* @__PURE__ */ (0, U.jsx)(ct, {
		row: n,
		fieldName: E,
		value: r.candidateKey,
		onChange: (e) => i({
			...r,
			candidateKey: e
		}),
		locked: l
	}) : t === "creator_tags" ? M.length ? /* @__PURE__ */ (0, U.jsx)(vt, {
		assets: M,
		picked: r.assets,
		locked: l,
		onPicked: (e) => i({
			...r,
			assets: e
		})
	}) : /* @__PURE__ */ (0, U.jsx)(ee, {
		size: "compact",
		icon: h,
		title: "Frames not sampled for these titles yet",
		children: `${n.video_count || ""} titles have no usable preview yet; after approval, tags are still written from the chosen metadata.`
	}) : t === "fc2_similarity" ? null : t === "western_identity" ? /* @__PURE__ */ (0, U.jsx)(_t, {
		row: n,
		openItem: v.openItem,
		openEntity: v.openEntity,
		onReveal: v.onReveal,
		revealing: v.revealing,
		note: v.revealNote
	}) : /* @__PURE__ */ (0, U.jsx)(pt, { url: n.preview_url }), oe = w ? I : E ? /* @__PURE__ */ (0, U.jsxs)("h4", {
		className: L(bt, "flex-wrap gap-2"),
		children: [/* @__PURE__ */ (0, U.jsx)("span", {
			title: E,
			className: "flex max-w-full min-w-0 overflow-hidden rounded-md",
			children: /* @__PURE__ */ (0, U.jsx)(u, {
				variant: "caption",
				color: "neutral",
				children: E
			})
		}), /* @__PURE__ */ (0, U.jsx)("span", {
			title: D,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: D
		})]
	}) : /* @__PURE__ */ (0, U.jsx)("h4", {
		className: bt,
		children: /* @__PURE__ */ (0, U.jsx)("span", {
			title: T,
			className: "min-w-0 truncate text-body-medium text-text-primary",
			children: T
		})
	});
	return /* @__PURE__ */ (0, U.jsxs)("section", {
		"aria-label": T,
		"data-review-key": n.item_key,
		className: L(yt, St(t)),
		children: [
			/* @__PURE__ */ (0, U.jsxs)("header", {
				className: "flex min-w-0 shrink-0 items-center gap-2 border-b border-separator-border px-5 py-4",
				children: [
					l ? null : /* @__PURE__ */ (0, U.jsx)("span", {
						className: L(bt, "shrink-0"),
						onPointerDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						onKeyDownCapture: (e) => {
							b.current = e.shiftKey;
						},
						children: /* @__PURE__ */ (0, U.jsx)(c, {
							isSelected: a,
							"aria-label": `Select ${T}`,
							onChange: (e) => s(b.current, e)
						})
					}),
					/* @__PURE__ */ (0, U.jsx)("div", {
						className: "min-w-0 flex-1",
						children: oe
					}),
					F ? /* @__PURE__ */ (0, U.jsx)(u, {
						variant: "caption",
						color: "neutral",
						children: F
					}) : null
				]
			}),
			/* @__PURE__ */ (0, U.jsx)("div", {
				className: "relative mx-5 flex min-w-0 min-h-0 flex-1 flex-col",
				children: /* @__PURE__ */ (0, U.jsxs)("div", {
					ref: ne,
					className: "flex min-w-0 min-h-0 flex-1 flex-col gap-4 overflow-y-auto py-4",
					children: [
						n.source_name ? /* @__PURE__ */ (0, U.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `Source spelling: ${n.source_name}`
						}) : null,
						!w && (n.board || n.assets) ? /* @__PURE__ */ (0, U.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: `Comparison files: ${Number(n.video_count || n.assets || 0).toLocaleString()}`
						}) : null,
						!w && I ? I : null,
						x && (O || n.current_value !== void 0) ? /* @__PURE__ */ (0, U.jsxs)("div", {
							role: "region",
							"aria-label": "Current info",
							className: "flex min-w-0 flex-col gap-1 border-b border-separator-border pb-4",
							children: [
								/* @__PURE__ */ (0, U.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [/* @__PURE__ */ (0, U.jsx)("h5", {
										"data-copy-key": "review.card.current_value",
										className: "text-caption-1-medium text-text-secondary",
										children: "Current value"
									}), n.current_owner?.startsWith("user:") || n.current_owner?.startsWith("review:") ? /* @__PURE__ */ (0, U.jsx)(u, {
										variant: "caption",
										color: "neutral",
										children: "Manual confirmation"
									}) : null]
								}),
								/* @__PURE__ */ (0, U.jsx)("p", {
									className: "text-body-2-regular text-text-primary wrap-anywhere",
									children: n.current_value === void 0 ? O : n.current_value ? /* @__PURE__ */ (0, U.jsx)(tt, {
										value: n.current_value,
										reference: (n.candidates?.find((e) => e.candidate_key === r.candidateKey) || n.candidates?.[0])?.display_value
									}) : "No metadata yet"
								}),
								n.videos === void 0 ? null : /* @__PURE__ */ (0, U.jsx)("p", {
									className: "text-caption-1-regular text-text-secondary",
									children: `${Number(n.videos).toLocaleString()} items ${n.asset_path ? "Matched files" : "Files with the same code"}`
								})
							]
						}) : null,
						k.length || t === "creator_tags" ? /* @__PURE__ */ (0, U.jsx)("div", {
							className: "flex flex-wrap gap-1",
							children: k.length ? k.map((e) => /* @__PURE__ */ (0, U.jsx)(u, {
								variant: "caption",
								color: "soft",
								children: e
							}, e)) : /* @__PURE__ */ (0, U.jsx)("small", {
								className: "text-body-2-regular text-text-secondary",
								children: "No tags awaiting confirmation"
							})
						}) : null,
						x ? /* @__PURE__ */ (0, U.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, U.jsxs)("h5", {
								className: "text-caption-1-medium text-text-secondary",
								children: [/* @__PURE__ */ (0, U.jsx)("span", {
									"data-copy-key": "review.card.candidate_sources",
									children: "Candidate sources"
								}), ` · ${n.candidates?.length || 0}`]
							}), n.current_value || (n.candidates?.length || 0) > 1 ? /* @__PURE__ */ (0, U.jsx)("span", {
								"data-copy-key": n.current_value ? "review.card.compare_current" : "review.card.compare_sources",
								className: "text-caption-1-regular text-text-tertiary",
								children: n.current_value ? "Compared with current value" : "Differences between sources"
							}) : null]
						}) : null,
						ae,
						/* @__PURE__ */ (0, U.jsx)(ut, {
							row: n,
							tags: p,
							locked: l,
							toast: v.toast
						}),
						!x && O ? /* @__PURE__ */ (0, U.jsx)("p", {
							className: "text-body-2-regular text-text-secondary wrap-anywhere",
							children: O
						}) : null
					]
				})
			}),
			/* @__PURE__ */ (0, U.jsxs)("footer", {
				className: L(_.stack, "shrink-0"),
				children: [
					y === "ignored" ? null : /* @__PURE__ */ (0, U.jsx)(te, {
						variant: "secondary",
						size: "small",
						className: "me-auto",
						disabled: l,
						...P(d),
						onClick: () => g("rejected"),
						children: "Ignore"
					}),
					y === "pending" ? /* @__PURE__ */ (0, U.jsx)(o, {
						variant: "secondary",
						size: "small",
						disabled: l,
						...P(d),
						onClick: () => g("skipped"),
						children: "Later"
					}) : /* @__PURE__ */ (0, U.jsx)(o, {
						variant: y === "ignored" ? "primary" : "secondary",
						size: "small",
						disabled: l,
						...P(d),
						onClick: () => g("restore"),
						children: "Restore to pending"
					}),
					y === "ignored" ? null : /* @__PURE__ */ (0, U.jsx)(o, {
						variant: "primary",
						size: "small",
						disabled: l || !A,
						...P(d),
						title: A ? void 0 : "No usable metadata; keep or ignore it for now",
						onClick: () => g("approved"),
						children: A ? "Approve" : "Can't approve"
					}),
					f ? /* @__PURE__ */ (0, U.jsx)("p", {
						role: "status",
						className: "w-full text-body-2-regular text-text-error-primary",
						children: f
					}) : null
				]
			})
		]
	});
}
// src/react/review/review-page.tsx
var wt = "flex cursor-pointer items-center justify-between gap-2";
function Tt({ page: e, pages: t, onPage: n }) {
	return t <= 1 ? null : /* @__PURE__ */ (0, U.jsxs)("nav", {
		"aria-label": "Review pages",
		"data-pagination-layout": "",
		className: "inline-grid w-full min-w-0 items-center gap-2",
		children: [
			/* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: e <= 1,
				onClick: () => n(e - 1),
				children: "Previous"
			}),
			/* @__PURE__ */ (0, U.jsx)("ul", {
				className: "flex min-w-0 flex-wrap items-center justify-center gap-1",
				children: R(e, t).map((t, r) => /* @__PURE__ */ (0, U.jsx)("li", { children: t === "…" ? /* @__PURE__ */ (0, U.jsx)("span", {
					"aria-hidden": !0,
					className: "px-1 text-body-2-regular text-text-tertiary",
					children: "…"
				}) : /* @__PURE__ */ (0, U.jsx)(o, {
					variant: t === e ? "secondary" : "ghost",
					size: "small",
					"aria-label": `Page ${t}`,
					"aria-current": t === e ? "page" : void 0,
					onClick: () => n(Number(t)),
					children: t
				}) }, t === "…" ? `dots-${r}` : t))
			}),
			/* @__PURE__ */ (0, U.jsx)(o, {
				variant: "secondary",
				size: "small",
				disabled: e >= t,
				onClick: () => n(e + 1),
				children: "Next"
			})
		]
	});
}
function Et(r) {
	let [i, a] = (0, H.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, H.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => a(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let { route: s, openItem: c, openEntity: l, revealSource: u, toast: d, readOnly: f, readOnlyMessage: m, writerUrl: h } = r, [_, v] = (0, H.useState)(pe(r.category) ? r.category : p), [y, b] = (0, H.useState)(() => we(r.queue)), [te, re] = (0, H.useState)("candidates"), [E, D] = (0, H.useState)(""), [O, k] = (0, H.useState)(""), [A, j] = (0, H.useState)(1), [M, N] = (0, H.useState)(/* @__PURE__ */ new Set()), [P, F] = (0, H.useState)(/* @__PURE__ */ new Map()), [I, L] = (0, H.useState)(/* @__PURE__ */ new Map()), [me, R] = (0, H.useState)(""), _e = (0, H.useRef)(null), [ve, ye] = (0, H.useState)(0), [be, xe] = (0, H.useState)(""), Ee = (0, H.useRef)(!0);
	(0, H.useEffect)(() => () => {
		Ee.current = !1;
	}, []);
	let z = Pe({
		queryKey: S,
		queryFn: ({ signal: e }) => ue(e)
	}), De = z.data || {
		sections: {},
		counts: {},
		queues: {
			later: {
				sections: {},
				counts: {}
			},
			ignored: {
				sections: {},
				counts: {}
			}
		}
	}, Oe = Ce(De, y), ke = z.data ? Object.fromEntries(w.map((e) => [e, x.reduce((t, n) => t + Number(Ce(De, e).counts[n] || 0), 0)])) : void 0, B = Oe.sections[_] || [], V = _ === "metadata_fields", Fe = f;
	(0, H.useEffect)(() => {
		let e = new Set(B.map((e) => e.item_key));
		N((t) => {
			let n = [...t].filter((t) => e.has(t));
			return n.length === t.size ? t : new Set(n);
		}), F((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		}), L((t) => {
			let n = [...t].filter(([t]) => e.has(t));
			return n.length === t.size ? t : new Map(n);
		});
	}, [B]);
	let Le = (0, H.useMemo)(() => V ? fe(B, "field") : [], [B, V]), Be = Le.some((e) => e.key === O) ? O : "", W = (0, H.useMemo)(() => V ? de(B, "field", Be) : B, [
		B,
		V,
		Be
	]), Ve = (0, H.useMemo)(() => Se(W, V), [W, V]), G = Ve.some(([e]) => e === te) ? te : "candidates", K = (0, H.useMemo)(() => fe(W, G), [W, G]), He = K.some((e) => e.key === E) ? E : "", q = (0, H.useMemo)(() => Te(de(W, G, He), A), [
		W,
		G,
		He,
		A
	]), Ue = q.rows.map((e) => e.item_key), We = new Set(Ue), J = K.map((e) => ({
		...e,
		rows: e.rows.filter((e) => We.has(e.item_key))
	})).filter((e) => e.rows.length), Y = (e) => P.get(e.item_key) || ce(e), X = (0, H.useMemo)(() => B.filter((e) => M.has(e.item_key)), [B, M]), Z = (e) => {
		let t = new Set(e);
		N((e) => new Set([...e].filter((e) => !t.has(e)))), F((e) => new Map([...e].filter(([e]) => !t.has(e)))), L((e) => new Map([...e].filter(([e]) => !t.has(e))));
	}, Ge = (e, t) => L((n) => new Map(n).set(e, t)), Ke = () => {
		re("candidates"), D(""), k(""), j(1), N(/* @__PURE__ */ new Set()), F(/* @__PURE__ */ new Map()), L(/* @__PURE__ */ new Map()), R(""), _e.current = null;
	}, qe = (e) => {
		v(e), Ke(), s({
			category: e === "metadata_fields" ? "" : e,
			queue: y === "pending" ? "" : y
		});
	}, Je = (e) => {
		b(e), Ke(), s({
			category: _ === "metadata_fields" ? "" : _,
			queue: e === "pending" ? "" : e
		});
	}, Q = Ne({
		mutationFn: ({ row: e, status: t, category: n }) => Me(oe(n, ae(n, e), t, Y(e))),
		onSuccess: (e, { row: t, status: n, category: r }) => {
			e.ok ? (je(r, [t.item_key], n), Z([t.item_key]), d(se(n))) : Ge(t.item_key, e.error || "The server rejected this decision");
		},
		onError: (e, { row: t }) => Ge(t.item_key, le(e))
	}), $ = Ne({
		mutationFn: async ({ status: e, category: t, rows: n }) => {
			let r = [], i = [];
			for (let [a, o] of n.entries()) {
				if (!Ee.current) break;
				R(`Processing ${a} / ${n.length}`);
				try {
					let n = await Me(oe(t, ae(t, o), e, Y(o)));
					if (!n.ok) throw Error(n.error || "The server didn't accept this item");
					r.push(o.item_key);
				} catch (e) {
					i.push([o.item_key, le(e)]);
				}
			}
			return {
				status: e,
				category: t,
				done: r,
				failures: i
			};
		},
		onSuccess: ({ status: e, category: t, done: n, failures: r }) => {
			je(t, n, e), Z(n), r.forEach(([e, t]) => Ge(e, t)), R("");
			let i = {
				approved: "Approve",
				rejected: "Ignore",
				skipped: "Move to later",
				restore: "Restore to pending"
			}[e];
			d(`${i}: ${n.length} items` + (r.length ? `, ${r.length} items not done` : ""));
		},
		onError: (e) => {
			R(le(e));
		}
	}), Ye = (e) => {
		!$.isPending && X.length && (e === "approved" && V && X.some((e) => !Y(e).candidateKey) ? R("Choose the source to use for the selected items first.") : (R(""), $.mutate({
			status: e,
			category: _,
			rows: X
		})));
	}, Xe = (e) => {
		F((t) => {
			let n = new Map(t);
			for (let t of X) {
				let r = t.candidates?.find((t) => t.source === e);
				r && n.set(t.item_key, {
					...Y(t),
					candidateKey: r.candidate_key
				});
			}
			return n;
		}), R(`${e} selected; click Approve selected to use it.`);
	}, Ze = async (e) => {
		if (ve) return;
		ye(e), xe("");
		let t = await u(e);
		Ee.current && (ye(0), xe(t));
	}, Qe = ge(De.mirror, m), $e = De.genre_tags || [], et = {
		openItem: c,
		openEntity: l,
		onReveal: Ze,
		revealing: ve,
		revealNote: be,
		toast: d
	};
	return /* @__PURE__ */ (0, U.jsx)(Ie, { children: /* @__PURE__ */ (0, U.jsxs)("div", {
		className: "flex flex-col gap-5 pb-10",
		children: [
			Fe ? /* @__PURE__ */ (0, U.jsx)(ne, {
				tone: "warning",
				title: "Browse-only on this device",
				extra: h ? /* @__PURE__ */ (0, U.jsx)("p", {
					className: "text-body-2-regular",
					children: /* @__PURE__ */ (0, U.jsx)(g, {
						href: h,
						children: "Review on the writer"
					})
				}) : void 0,
				children: Qe
			}) : null,
			/* @__PURE__ */ (0, U.jsx)(it, { tags: $e }),
			/* @__PURE__ */ (0, U.jsxs)(n, {
				orientation: i ? "horizontal" : "vertical",
				selectedKey: _,
				onSelectionChange: (e) => {
					let t = String(e);
					pe(t) && qe(t);
				},
				className: "flex flex-col gap-5 review-split:flex-row review-split:items-start review-split:gap-6",
				children: [/* @__PURE__ */ (0, U.jsxs)("div", {
					"data-section-nav": !0,
					className: "w-full min-w-0 review-split:sticky review-split:top-topbar review-split:w-review-tabs review-split:shrink-0",
					children: [/* @__PURE__ */ (0, U.jsx)("h2", {
						id: "reviewcategories",
						children: "Review categories"
					}), /* @__PURE__ */ (0, U.jsx)(Re, {
						scrollable: i,
						"aria-labelledby": "reviewcategories",
						"data-section-items": !0,
						className: "flex review-split:flex-col review-split:items-stretch",
						children: x.map((e) => {
							let n = Number(Oe.counts[e] || 0);
							return /* @__PURE__ */ (0, U.jsxs)(t, {
								id: e,
								className: wt,
								isDisabled: Q.isPending || $.isPending,
								"data-pill-selected": _ === e ? "" : void 0,
								"data-pill-variant": "gray",
								children: [C[e], n ? /* @__PURE__ */ (0, U.jsx)("span", {
									className: "tabular-nums text-caption-1-medium text-text-secondary",
									children: n.toLocaleString()
								}) : null]
							}, e);
						})
					})]
				}), /* @__PURE__ */ (0, U.jsxs)(e, {
					id: _,
					className: "flex min-w-0 flex-1 flex-col gap-5",
					children: [
						/* @__PURE__ */ (0, U.jsx)(ze, {
							queueView: y,
							queueCounts: ke,
							onQueueChange: Je,
							locked: Fe,
							fields: Le,
							fieldFilter: Be,
							onFieldFilter: (e) => {
								k(e), D(""), j(1);
							},
							groupOptions: Ve,
							groupBy: G,
							onGroupBy: (e) => {
								re(e), D(""), j(1);
							},
							groups: K,
							filter: He,
							onFilter: (e) => {
								D(e), j(1);
							},
							pageKeys: Ue,
							selected: M,
							onSelected: N,
							selectedRows: X,
							metadata: V,
							approvable: X.every((e) => ie(_, e)),
							busy: $.isPending || Q.isPending,
							feedback: me,
							onUnifySource: Xe,
							onRun: Ye
						}),
						q.rows.length ? J.map((e) => /* @__PURE__ */ (0, U.jsxs)("section", {
							className: "flex flex-col gap-3",
							children: [J.length > 1 || G !== "candidates" ? /* @__PURE__ */ (0, U.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, U.jsx)("h3", {
									className: "text-body-medium text-text-primary",
									children: `${e.title} · ${e.rows.length}`
								}), Fe ? null : /* @__PURE__ */ (0, U.jsx)(o, {
									variant: "ghost",
									size: "small",
									onClick: () => {
										let t = e.rows.map((e) => e.item_key), n = t.every((e) => M.has(e)), r = new Set(M);
										for (let e of t) n ? r.delete(e) : r.add(e);
										N(r);
									},
									children: e.rows.every((e) => M.has(e.item_key)) ? "Clear this group" : "Select this group"
								})]
							}) : null, /* @__PURE__ */ (0, U.jsx)("div", {
								className: "review-grid gap-5",
								children: e.rows.map((e) => /* @__PURE__ */ (0, U.jsx)(Ct, {
									category: _,
									row: e,
									queueView: y,
									choice: Y(e),
									onChoice: (t) => F((n) => new Map(n).set(e.item_key, t)),
									selected: M.has(e.item_key),
									onSelect: (t, n) => N((r) => {
										let i = new Set(r);
										return _e.current = Ae(i, Ue, _e.current, e.item_key, t, n), i;
									}),
									locked: Fe,
									busy: $.isPending || Q.isPending && Q.variables?.row.item_key === e.item_key,
									problem: I.get(e.item_key) || "",
									genreTags: $e,
									onDecide: (t) => {
										Q.isPending || $.isPending || (L((t) => new Map([...t].filter(([t]) => t !== e.item_key))), Q.mutate({
											row: e,
											status: t,
											category: _
										}));
									},
									handlers: et
								}, e.item_key))
							})]
						}, e.key)) : z.isError && !z.data ? /* @__PURE__ */ (0, U.jsx)(ne, {
							tone: "error",
							title: "Couldn't load the review queue",
							action: /* @__PURE__ */ (0, U.jsx)(o, {
								variant: "secondary",
								size: "small",
								disabled: z.isFetching,
								onClick: () => void z.refetch(),
								children: "Retry now"
							}),
							children: le(z.error)
						}) : /* @__PURE__ */ (0, U.jsx)(ee, {
							icon: he,
							title: `No ${T[y]} items in this category`,
							actions: x.some((e) => e !== _ && Number(Oe.counts[e] || 0) > 0) ? /* @__PURE__ */ (0, U.jsx)(o, {
								size: "small",
								onClick: () => {
									let e = x.find((e) => e !== _ && Number(Oe.counts[e] || 0) > 0);
									e && qe(e);
								},
								children: "View other categories"
							}) : void 0,
							children: y === "pending" ? "Switch categories to see other items awaiting confirmation." : `${T[y]} items stay here and can be restored to pending.`
						}),
						/* @__PURE__ */ (0, U.jsx)(Tt, {
							page: q.page,
							pages: q.pages,
							onPage: j
						})
					]
				})]
			})
		]
	}) });
}
export { Et as ReviewPage };

//# debugId=a9ba4f8f-97a9-483b-8257-acb4b9450c6a