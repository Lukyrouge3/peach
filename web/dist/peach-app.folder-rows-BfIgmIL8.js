(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d961d61a-a1cb-4210-90e6-177febe7bc46", e._sentryDebugIdIdentifier = "sentry-dbid-d961d61a-a1cb-4210-90e6-177febe7bc46");
	} catch {}
})();
import { Button as e, CLOUD_LOCATIONS as t, ErrorText as n, Help as r, IconButton as i, Input as a, Label as o, M6 as s, MEDIA_SOURCE_ICONS as c, MEDIA_SOURCE_OPTIONS as l, Select$1 as u, SelectItem as d, SourceMark as f, __toESM as p, busyProps as m, cx as h, require_jsx_runtime as g, require_react as _ } from "./peach-app.js";
// src/react/settings/folder-rows.tsx
var v = /* @__PURE__ */ p(_(), 1), y = g();
function b({ className: e }) {
	return /* @__PURE__ */ (0, y.jsx)("svg", {
		"aria-hidden": !0,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: e,
		children: /* @__PURE__ */ (0, y.jsx)("use", { href: "#i-folder-search" })
	});
}
var x = l, S = (e) => c[e] || "database", C = (e) => t.includes(e);
function w({ label: e, className: t, children: n }) {
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		className: h("flex min-w-0 flex-col gap-1", t),
		children: [/* @__PURE__ */ (0, y.jsx)(o, {
			elementType: "span",
			"aria-hidden": !0,
			children: e
		}), n]
	});
}
function T({ children: e }) {
	return /* @__PURE__ */ (0, y.jsx)("div", {
		className: "flex w-full flex-wrap items-start gap-2",
		children: e
	});
}
function E({ index: e, cost: t, error: r, onChange: i }) {
	return /* @__PURE__ */ (0, y.jsxs)("div", {
		"data-media-read-policy": e,
		className: "flex w-full flex-col gap-1 @lg:w-32",
		children: [
			/* @__PURE__ */ (0, y.jsx)(o, {
				elementType: "span",
				"aria-hidden": !0,
				children: "Read policy"
			}),
			/* @__PURE__ */ (0, y.jsxs)(u, {
				"aria-label": `Media read policy ${e + 1}`,
				placeholder: "Choose read policy",
				isRequired: !0,
				validationBehavior: "aria",
				isInvalid: !!r,
				selectedKey: t || null,
				onSelectionChange: (e) => {
					(e === "free" || e === "metered") && i(e);
				},
				children: [/* @__PURE__ */ (0, y.jsx)(d, {
					id: "free",
					children: "Normal reads"
				}), /* @__PURE__ */ (0, y.jsx)(d, {
					id: "metered",
					children: "Proxy protection"
				})]
			}),
			r ? /* @__PURE__ */ (0, y.jsx)(n, { children: r }) : null
		]
	});
}
function D() {
	return /* @__PURE__ */ (0, y.jsx)(r, { children: "With the “Proxy protection” read policy, automatic video reads are limited." });
}
function O({ initial: e, blank: t, pickFolder: n, describe: r, focusAfterPick: i = !1 }) {
	let [a, o] = (0, v.useState)(e), [s, c] = (0, v.useState)([]), [l, u] = (0, v.useState)(null), [d, f] = (0, v.useState)(null), p = (0, v.useRef)(!1), m = (0, v.useRef)([]);
	(0, v.useLayoutEffect)(() => {
		l !== null && (m.current[l]?.focus(), u(null));
	}, [l]);
	let h = (e, t) => o((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), g = (e, t) => c((n) => {
		let r = [...n];
		for (; r.length <= e;) r.push("");
		return r[e] = t, r;
	});
	return {
		rows: a,
		edit: h,
		add: () => {
			u(a.length), o((e) => [...e, t()]);
		},
		remove: (e) => {
			o((t) => t.filter((t, n) => n !== e)), c((t) => t.filter((t, n) => n !== e));
		},
		errors: s,
		setErrors: c,
		picking: d,
		pick: async (e) => {
			if (!p.current) {
				p.current = !0, f(e);
				try {
					let t = await n(a[e]?.path ?? "");
					t && (h(e, { path: t }), g(e, "")), i && u(e);
				} catch (t) {
					g(e, r(t));
				} finally {
					p.current = !1, f(null);
				}
			}
		},
		inputRef: (e) => (t) => {
			m.current[e] = t;
		}
	};
}
function k({ label: t, path: n, onPath: r, error: o, inputRef: c, picking: l, onPick: u, onRemove: d, status: f, children: p }) {
	let h = (0, v.useRef)(null), g = () => {
		let e = h.current;
		e && e.ownerDocument.activeElement !== e && (e.scrollLeft = e.scrollWidth);
	};
	return (0, v.useLayoutEffect)(() => {
		h.current && (h.current.title = n), g();
	}, [n]), /* @__PURE__ */ (0, y.jsxs)("div", {
		"data-folder-row": !0,
		className: "@container flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
		children: [/* @__PURE__ */ (0, y.jsxs)("div", {
			className: "flex items-start gap-2",
			children: [
				/* @__PURE__ */ (0, y.jsx)(a, {
					className: "min-w-0 flex-1",
					"aria-label": t,
					placeholder: "Media folder path",
					value: n,
					onChange: r,
					ref: (e) => {
						h.current = e, c(e);
					},
					onBlur: () => requestAnimationFrame(g),
					validationBehavior: "aria",
					isInvalid: !!o,
					hint: o || void 0
				}),
				f ? /* @__PURE__ */ (0, y.jsx)("div", {
					className: "flex h-9 shrink-0 items-center",
					children: f
				}) : null,
				/* @__PURE__ */ (0, y.jsx)(i, {
					icon: b,
					"aria-label": "Choose folder",
					onClick: u,
					...m(l)
				}),
				d ? /* @__PURE__ */ (0, y.jsx)(e, {
					variant: "danger",
					iconOnly: !0,
					leadingIcon: s,
					"aria-label": "Remove this folder",
					onClick: d
				}) : null
			]
		}), /* @__PURE__ */ (0, y.jsx)("div", {
			className: "flex flex-wrap items-end gap-2",
			children: p
		})]
	});
}
function A({ index: e, value: t, onChange: n, options: r = x }) {
	return /* @__PURE__ */ (0, y.jsx)(w, {
		label: "Source",
		className: "w-full @lg:w-60",
		children: /* @__PURE__ */ (0, y.jsx)(u, {
			className: "w-full",
			"aria-label": `Media source ${e + 1}`,
			selectedKey: t,
			onSelectionChange: (e) => {
				e !== null && n(String(e));
			},
			children: r.map(([e, t]) => /* @__PURE__ */ (0, y.jsxs)(d, {
				id: e,
				textValue: t,
				children: [/* @__PURE__ */ (0, y.jsx)(f, { mark: S(e) }), t]
			}, e))
		})
	});
}
export { w as FolderField, T as FolderFieldLine, k as FolderRow, b as FolderSearchIcon, x as MEDIA_SOURCES, E as MediaReadPolicy, D as MediaReadPolicyHelp, A as SourceSelect, C as isCloudSource, S as sourceMark, O as useFolderRows };

//# debugId=d961d61a-a1cb-4210-90e6-177febe7bc46