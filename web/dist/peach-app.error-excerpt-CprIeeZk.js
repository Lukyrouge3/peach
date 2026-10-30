(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5057f329-4742-4a8a-9a68-26ce180c7c7a", e._sentryDebugIdIdentifier = "sentry-dbid-5057f329-4742-4a8a-9a68-26ce180c7c7a");
	} catch {}
})();
import { Button as e, __toESM as t, cardClass as n, readableErrorHeadline as r, require_jsx_runtime as i, require_react as a, useOverlayScrollbar as o } from "./peach-app.js";
// src/react/activity/error-excerpt.tsx
var s = /* @__PURE__ */ t(a(), 1), c = i();
function l({ children: e, label: t, id: r }) {
	let i = o();
	return /* @__PURE__ */ (0, c.jsx)("div", {
		"data-error-details": "",
		className: n({
			bordered: "soft",
			radius: "surface",
			padding: "none",
			className: "relative w-full min-w-0 overflow-hidden bg-background-tertiary-default"
		}),
		children: /* @__PURE__ */ (0, c.jsx)("div", {
			ref: i,
			id: r,
			role: "region",
			"aria-label": t,
			tabIndex: 0,
			className: "max-h-80 overflow-y-auto overscroll-contain p-3 text-body-2-regular whitespace-pre-line wrap-anywhere text-text-primary",
			children: e
		})
	});
}
function u({ text: t, className: n = "" }) {
	let [i, a] = (0, s.useState)(!1), o = (0, s.useId)(), u = String(t || "").trim(), d = r(u);
	if (!d) return null;
	let f = d !== u;
	return /* @__PURE__ */ (0, c.jsxs)("div", {
		"data-error-excerpt": "",
		className: `flex min-w-0 max-w-full flex-col items-start gap-1 ${n}`,
		children: [i ? /* @__PURE__ */ (0, c.jsx)(l, {
			id: o,
			label: "Full error details",
			children: u
		}) : /* @__PURE__ */ (0, c.jsx)("p", {
			className: "w-full wrap-anywhere",
			children: d
		}), f ? /* @__PURE__ */ (0, c.jsx)(e, {
			variant: "ghost",
			size: "small",
			"data-error-details-toggle": "",
			className: "-ml-2",
			"aria-expanded": i,
			"aria-controls": i ? o : void 0,
			onClick: () => a(!i),
			children: i ? "Hide details" : "Show details"
		}) : null]
	});
}
export { l as ErrorDetails, u as ErrorExcerpt };

//# debugId=5057f329-4742-4a8a-9a68-26ce180c7c7a