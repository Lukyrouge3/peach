(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "064eab0e-81f4-4f37-9b4f-e0ad3430acdc", e._sentryDebugIdIdentifier = "sentry-dbid-064eab0e-81f4-4f37-9b4f-e0ad3430acdc");
	} catch {}
})();
import { Button as e, __toESM as t, cardClass as n, cx as r, require_jsx_runtime as i, require_react as a, useOverlayScrollbar as o } from "./peach-app.js";
// src/react/components/code-block.tsx
var s = /* @__PURE__ */ t(a(), 1), c = i();
function l({ code: t, language: i, label: a, maxCharacters: l, bounded: u = !0, copyLabel: d, onCopy: f }) {
	let p = o(), [m, h] = (0, s.useState)(""), [g, _] = (0, s.useState)(!1);
	(0, s.useEffect)(() => {
		h(""), _(!1);
	}, [t]);
	let v = l !== void 0 && t.length > l, y = async () => {
		try {
			await navigator.clipboard.writeText(t), _(!1), h("Copied"), f?.();
		} catch {
			_(!0), h("Copy failed; select the text and copy it.");
		}
	};
	return /* @__PURE__ */ (0, c.jsxs)("div", {
		className: r(n({
			bordered: "soft",
			radius: "plain",
			padding: "none"
		}), "overflow-hidden bg-background-tertiary-default"),
		"data-code-block": !0,
		children: [
			/* @__PURE__ */ (0, c.jsxs)("div", {
				className: "flex min-w-0 items-center justify-between gap-3 border-b border-separator-border px-3 py-2",
				children: [/* @__PURE__ */ (0, c.jsx)("span", {
					className: "text-caption-1-medium text-text-secondary",
					children: i.toUpperCase()
				}), /* @__PURE__ */ (0, c.jsx)(e, {
					variant: "secondary",
					size: "small",
					onClick: () => void y(),
					children: d || (v ? "Copy full content" : "Copy code")
				})]
			}),
			/* @__PURE__ */ (0, c.jsx)("div", {
				className: "relative min-w-0",
				children: /* @__PURE__ */ (0, c.jsx)("pre", {
					ref: p,
					tabIndex: 0,
					"aria-label": a,
					className: r("m-0 overflow-auto overscroll-contain p-3 font-mono text-caption-1-regular whitespace-pre text-text-primary", u && "max-h-80"),
					children: /* @__PURE__ */ (0, c.jsx)("code", { children: l === void 0 ? t : t.slice(0, l) })
				})
			}),
			m ? /* @__PURE__ */ (0, c.jsx)("p", {
				role: g ? "alert" : "status",
				className: "m-0 px-3 pb-2 text-caption-1-regular text-text-secondary",
				children: m
			}) : null
		]
	});
}
export { l as CodeBlock };

//# debugId=064eab0e-81f4-4f37-9b4f-e0ad3430acdc