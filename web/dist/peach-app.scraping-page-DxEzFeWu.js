(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8a69bea2-8a3c-40d4-8285-4dbb8488c436", e._sentryDebugIdIdentifier = "sentry-dbid-8a69bea2-8a3c-40d4-8285-4dbb8488c436");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, AMANE_BRIDGE_CHECK_URL as t, AMANE_BRIDGE_KEY as n, AMANE_BRIDGE_REBUILD_URL as r, Button as i, COVER_JOB_KEY as a, CUSTOM_SOURCES_KEY as o, CUSTOM_SOURCES_URL as s, Checkbox as c, Disclosure as l, ErrorText as u, ExternalLink as d, Fact as f, FactList as p, FieldLabel as m, Footer as h, Help as g, Input as _, LinkButton as v, LoadingDots as y, Note as b, Rows as ee, SCRAPING_CHECK_URL as te, SCRAPING_COVER_URL as x, SCRAPING_KEY as S, SCRAPING_SETTINGS_URL as ne, SEGMENT as re, SEGMENTED_TRACK as ie, Section as C, SegmentedRadioGroup as ae, Select$1 as oe, SelectField as w, SelectItem as se, SettingsRow as ce, Stack as T, StatusLabel as E, __toESM as D, apiSend as O, busyProps as k, checkText as le, confirmModal as A, errorMessage as j, esc as M, fetchAmaneBridge as N, fetchCoverJob as P, fetchCustomSources as F, fetchSources as I, i2 as ue, queryClient as L, require_jsx_runtime as R, require_react as z, spinnerHtml as B, useAction as V, useBackgroundJob as H, useMutation as U, useQuery as W } from "./peach-app.js";
import { CodeBlock as de } from "./peach-app.code-block-B--CBV66.js";
import { Page as G } from "./peach-app.page-QAncjzM1.js";
import { SiteMark as K } from "./peach-app.site-mark-D_VlIyJz.js";
import { ConnectionStatus as fe } from "./peach-app.connection-status-B0tSnjj0.js";
// src/react/scraping/custom-sources.tsx
var q = /* @__PURE__ */ D(z(), 1), J = R(), pe = [
	["code", "Code"],
	["title", "Title"],
	["studio", "Studios"],
	["series", "Series"],
	["release_date", "Release date"],
	["performers", "Performers (text array)"],
	["tags", "Tags (text array)"]
], me = [
	["censored", "Censored"],
	["amateur", "Amateurs"],
	["uncensored", "Uncensored"],
	["fc2", "FC2"],
	["kmib", "Korean MIB"],
	["other", "Other"],
	["unsure", "Code to verify"],
	["unknown", "Unknown"]
], he = () => ({
	name: "",
	endpoint: "",
	enabled: !1,
	fields: {
		code: "id",
		title: "title"
	},
	content_types: ["censored"]
});
function Y({ receipt: e }) {
	let [t, n] = (0, q.useState)(null), r = W({
		queryKey: o,
		queryFn: ({ signal: e }) => F(e)
	}), a = V(), c = (e) => L.setQueryData(o, e), l = !!(r.isPending || r.error || r.data?.items.length || a.error), d = /* @__PURE__ */ (0, J.jsx)(i, {
		variant: "secondary",
		onClick: () => n(he()),
		children: "Add source"
	});
	return /* @__PURE__ */ (0, J.jsxs)(C, {
		title: "Custom metadata sources",
		children: [
			l ? /* @__PURE__ */ (0, J.jsxs)(T, { children: [
				r.isPending ? /* @__PURE__ */ (0, J.jsx)("div", {
					"aria-busy": "true",
					"data-skeleton": "",
					"aria-label": "Loading custom sources"
				}) : null,
				r.error ? /* @__PURE__ */ (0, J.jsx)(u, { children: j(r.error) }) : null,
				r.data?.items.map((t) => /* @__PURE__ */ (0, J.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, J.jsx)("span", {
							className: "min-w-0 flex-1",
							children: t.name
						}),
						/* @__PURE__ */ (0, J.jsx)(E, {
							tone: t.enabled ? "success" : "neutral",
							children: t.enabled ? "Enabled" : "Disabled"
						}),
						/* @__PURE__ */ (0, J.jsx)(i, {
							variant: "secondary",
							onClick: () => n(t),
							children: "Edit"
						}),
						/* @__PURE__ */ (0, J.jsx)(i, {
							variant: "secondary",
							...k(a.busy === t.id),
							onClick: () => void a.run(t.id, (e) => O(s, {
								...t,
								enabled: !t.enabled
							}, "POST", e), (n) => {
								c(n), e(t.enabled ? "Source disabled" : "Source enabled");
							}),
							children: t.enabled ? "Disable" : "Enabled"
						}),
						/* @__PURE__ */ (0, J.jsx)(i, {
							variant: "danger",
							onClick: () => A({
								title: "Delete custom source",
								body: `After deleting “${M(t.name)}”, scraping no longer queries this source.`,
								confirmLabel: "Delete source",
								danger: !0,
								onConfirm: async () => {
									c(await O(s, {
										action: "delete",
										id: t.id
									})), n(null), e("Source deleted");
								}
							}),
							children: "Delete"
						})
					]
				}, t.id)),
				a.error ? /* @__PURE__ */ (0, J.jsx)(u, { children: a.error }) : null
			] }) : null,
			t ? null : l ? /* @__PURE__ */ (0, J.jsx)(h, { children: d }) : /* @__PURE__ */ (0, J.jsx)(T, { children: /* @__PURE__ */ (0, J.jsx)("div", {
				className: "flex justify-end",
				children: d
			}) }),
			t ? /* @__PURE__ */ (0, J.jsx)(ge, {
				initial: t,
				cancel: () => n(null),
				saved: (t) => {
					c(t), n(null), e("Source saved");
				}
			}, t.id || "new") : null
		]
	});
}
function ge({ initial: e, cancel: t, saved: n }) {
	let [r, a] = (0, q.useState)(e), [o, l] = (0, q.useState)(""), [d, f] = (0, q.useState)(""), p = (0, q.useRef)(0), v = V(), y = (e) => {
		p.current++, a((t) => ({
			...t,
			...e
		})), f("");
	};
	return /* @__PURE__ */ (0, J.jsxs)("form", {
		"aria-label": "Metadata source settings",
		"aria-busy": v.busy === "preview",
		onSubmit: (e) => {
			e.preventDefault(), v.run("save", (e) => O(s, r, "POST", e), n);
		},
		children: [/* @__PURE__ */ (0, J.jsxs)(T, { children: [
			/* @__PURE__ */ (0, J.jsx)(_, {
				label: "Source name",
				value: r.name,
				maxLength: 80,
				onChange: (e) => y({ name: e })
			}),
			/* @__PURE__ */ (0, J.jsx)(_, {
				label: "JSON endpoint URL",
				value: r.endpoint,
				maxLength: 2048,
				placeholder: "https://example.com/api/movies/{code}",
				onChange: (e) => y({ endpoint: e })
			}),
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, J.jsx)(m, { children: "Source connection method" }), /* @__PURE__ */ (0, J.jsx)(w, {
					id: "custom-source-network",
					label: "Source connection method",
					epoch: 0,
					value: r.network || "direct",
					options: [["direct", "Direct"], ["peach_proxy", "Peach proxy"]],
					onPick: (e) => y({ network: e })
				})]
			}),
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, J.jsx)(m, { children: "Endpoint code format" }), /* @__PURE__ */ (0, J.jsx)(w, {
					id: "custom-source-code-format",
					label: "Endpoint code format",
					epoch: 0,
					value: r.code_format || "original",
					options: [
						["original", "As is"],
						["lowercase", "Lowercase"],
						["compact", "Remove hyphens"],
						["underscore", "Hyphens to underscores"]
					],
					onPick: (e) => y({ code_format: e })
				})]
			}),
			/* @__PURE__ */ (0, J.jsx)(g, { children: "Enter a public JSON endpoint and response field paths, e.g. data.title. The code field is used to verify the title's identity." }),
			pe.map(([e, t]) => /* @__PURE__ */ (0, J.jsx)(_, {
				label: `${t} field path`,
				value: r.fields[e] || "",
				onChange: (t) => {
					let n = { ...r.fields };
					t ? n[e] = t : delete n[e], y({ fields: n });
				}
			}, e)),
			/* @__PURE__ */ (0, J.jsx)("div", {
				className: "flex flex-wrap gap-3",
				role: "group",
				"aria-label": "Applicable content types",
				children: me.map(([e, t]) => /* @__PURE__ */ (0, J.jsx)(c, {
					isSelected: r.content_types.includes(e),
					onChange: (t) => y({ content_types: t ? [...r.content_types, e] : r.content_types.filter((t) => t !== e) }),
					children: t
				}, e))
			}),
			/* @__PURE__ */ (0, J.jsx)(c, {
				isSelected: r.enabled,
				onChange: (e) => y({ enabled: e }),
				children: "Enabled sources"
			}),
			/* @__PURE__ */ (0, J.jsx)(_, {
				label: "Test code (press Enter to query)",
				value: o,
				onChange: (e) => {
					p.current++, l(e), f("");
				},
				onKeyDown: (e) => {
					if (e.key !== "Enter" || e.nativeEvent.isComposing) return;
					e.preventDefault();
					let t = p.current;
					v.run("preview", (e) => O(s, {
						...r,
						code: o,
						action: "preview"
					}, "POST", e), (e) => {
						t === p.current && f(JSON.stringify(e.record, null, 2));
					}, (e) => {
						t === p.current && v.setError(j(e));
					});
				}
			}),
			v.busy === "preview" ? /* @__PURE__ */ (0, J.jsxs)(g, {
				role: "status",
				children: [/* @__PURE__ */ (0, J.jsx)("span", { dangerouslySetInnerHTML: { __html: B("Testing source") } }), "Testing source"]
			}) : null,
			d ? /* @__PURE__ */ (0, J.jsx)(de, {
				code: d,
				language: "json",
				label: "Metadata endpoint response"
			}) : null,
			v.error ? /* @__PURE__ */ (0, J.jsx)(u, { children: v.error }) : null
		] }), /* @__PURE__ */ (0, J.jsxs)(h, { children: [/* @__PURE__ */ (0, J.jsx)(i, {
			variant: "secondary",
			type: "button",
			onClick: t,
			children: "Cancel"
		}), /* @__PURE__ */ (0, J.jsx)(i, {
			type: "submit",
			...k(v.busy === "save"),
			children: "Save source"
		})] })]
	});
}
// src/react/scraping/scraping-page.tsx
var X = [["peach", "Peach proxy"], ["direct", "Direct connection"]];
function Z(e) {
	return X.some(([t]) => t === e) || !e ? [...X] : [...X, [e, e]];
}
function Q(e) {
	try {
		return new URL(e).host || e;
	} catch {
		return e;
	}
}
var $ = [["paste", "Paste cookie"], ["file", "Import file"]];
function _e() {
	return /* @__PURE__ */ (0, J.jsx)(K, { source: "github" });
}
function ve({ source: t, toast: n }) {
	let [r, a] = (0, q.useState)(t.network), [o, s] = (0, q.useState)(""), [c, l] = (0, q.useState)(""), [f, p] = (0, q.useState)($[0][0]), [g, y] = (0, q.useState)(""), [x, w] = (0, q.useState)(""), D = (0, q.useRef)(null);
	function A() {
		s(""), l(""), y(""), w(""), D.current && (D.current.value = "");
	}
	let M = U({
		mutationFn: (e) => O(ne, {
			source: t.source,
			network: r,
			cookie: o,
			cookies_text: c,
			revoke: e
		}),
		onSuccess: (e, t) => {
			L.setQueryData(S, (t) => t && {
				...t,
				sources: t.sources.map((t) => t.source === e.saved.source ? e.saved : t)
			}), A(), n(t ? "Cookie revoked" : "Source settings saved");
		}
	}), N = U({ mutationFn: () => O(te, { source: t.source }) }), P = M.isPending || N.isPending, F = (e) => {
		e.preventDefault(), !P && (N.reset(), M.mutate(!1));
	}, I = () => {
		P || (N.reset(), M.mutate(!0));
	}, R = () => {
		P || (M.reset(), N.mutate());
	};
	async function z(e) {
		let t = e.currentTarget, n = t.files?.[0];
		if (l(""), w(""), !n) y("");
		else if (n.size > 262144) t.value = "", y(""), w("Cookie text exceeds 256 KiB");
		else try {
			let e = await n.text();
			l(e), y(n.name);
		} catch {
			w("Cookie file not read; choose it again");
		}
	}
	let B = x || (M.error ? j(M.error) : "") || (N.error ? j(N.error) : ""), V = N.data?.results ?? [], H = r === "peach" || t.accepts_cookie || t.browser || !!B || V.length > 0;
	return /* @__PURE__ */ (0, J.jsxs)(C, {
		title: t.label,
		onSubmit: F,
		aside: /* @__PURE__ */ (0, J.jsxs)("span", {
			className: "flex min-w-0 items-center gap-1",
			children: [/* @__PURE__ */ (0, J.jsx)(K, { source: t.source }), t.login ? /* @__PURE__ */ (0, J.jsx)(d, {
				href: t.login,
				children: Q(t.login)
			}) : null]
		}),
		children: [
			/* @__PURE__ */ (0, J.jsx)(ee, { children: /* @__PURE__ */ (0, J.jsx)(ce, {
				label: "Connection method",
				children: /* @__PURE__ */ (0, J.jsx)(oe, {
					"aria-label": "Connection method",
					className: "w-44 min-w-0",
					selectedKey: r,
					onSelectionChange: (e) => {
						e !== null && a(String(e));
					},
					children: Z(r).map(([e, t]) => /* @__PURE__ */ (0, J.jsx)(se, {
						id: e,
						children: t
					}, e))
				})
			}) }),
			t.cooldown_until && t.cooldown_until > Date.now() / 1e3 ? /* @__PURE__ */ (0, J.jsx)(b, {
				tone: "warning",
				children: /* @__PURE__ */ (0, J.jsxs)("span", {
					className: "inline-flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, J.jsx)(E, {
						tone: "warning",
						children: "Cooling down"
					}), /* @__PURE__ */ (0, J.jsxs)("span", { children: [
						"You can retry after ",
						(/* @__PURE__ */ new Date(t.cooldown_until * 1e3)).toLocaleString("en-US"),
						"."
					] })]
				})
			}) : null,
			H ? /* @__PURE__ */ (0, J.jsxs)(T, {
				divided: !0,
				children: [
					r === "peach" ? /* @__PURE__ */ (0, J.jsx)("span", {
						className: "self-start",
						children: /* @__PURE__ */ (0, J.jsx)(v, {
							href: "/settings/library#peachProxy",
							size: "small",
							trailingIcon: ue,
							children: "Set up Peach proxy"
						})
					}) : null,
					t.browser ? /* @__PURE__ */ (0, J.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: "Human verification is completed automatically by the local browser; a window pops up when a click is needed. No cookie is needed on this machine."
					}) : null,
					t.accepts_cookie && !t.browser ? /* @__PURE__ */ (0, J.jsxs)(J.Fragment, { children: [
						/* @__PURE__ */ (0, J.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, J.jsx)("span", {
								className: "self-start",
								children: /* @__PURE__ */ (0, J.jsx)(E, {
									tone: t.cookie_saved ? "success" : "neutral",
									children: t.cookie_saved ? "Cookie saved" : "Cookie not configured"
								})
							}), /* @__PURE__ */ (0, J.jsx)("p", {
								className: "text-body-2-regular text-text-secondary",
								children: t.cookie_saved ? "Sign-in validity not yet verified." : "When sign-in is required, provide the cookie in either way."
							})]
						}),
						/* @__PURE__ */ (0, J.jsx)(ae, {
							"aria-label": "How to provide the cookie (choose one)",
							value: f,
							onChange: (e) => {
								p(e), A();
							},
							className: ie,
							children: $.map(([t, n]) => /* @__PURE__ */ (0, J.jsx)(e, {
								value: t,
								className: re,
								children: n
							}, t))
						}),
						f === "paste" ? /* @__PURE__ */ (0, J.jsx)(_, {
							type: "password",
							label: "Cookie",
							autoComplete: "off",
							value: o,
							onChange: s
						}) : /* @__PURE__ */ (0, J.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ (0, J.jsx)(m, { children: "Netscape cookie file (.txt)" }),
								/* @__PURE__ */ (0, J.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, J.jsx)(i, {
										variant: "secondary",
										onClick: () => D.current?.click(),
										children: "Choose file"
									}), /* @__PURE__ */ (0, J.jsx)("span", {
										className: "min-w-0 text-body-2-regular break-all text-text-secondary",
										children: g || "No file chosen"
									})]
								}),
								/* @__PURE__ */ (0, J.jsx)("input", {
									ref: D,
									type: "file",
									accept: ".txt",
									tabIndex: -1,
									"aria-hidden": !0,
									className: "hidden",
									onChange: (e) => {
										z(e);
									}
								})
							]
						})
					] }) : null,
					B ? /* @__PURE__ */ (0, J.jsx)(u, { children: B }) : null,
					V.map((e) => /* @__PURE__ */ (0, J.jsx)(b, {
						tone: e.ok ? "success" : "error",
						children: /* @__PURE__ */ (0, J.jsxs)("span", {
							className: "flex flex-col items-start gap-1",
							children: [/* @__PURE__ */ (0, J.jsx)(fe, {
								tone: e.ok ? "success" : "error",
								children: e.ok ? "Accessible" : "Connection failed"
							}), /* @__PURE__ */ (0, J.jsx)("span", { children: le(e, t.label) })]
						})
					}, e.label))
				]
			}) : null,
			/* @__PURE__ */ (0, J.jsxs)(h, { children: [
				t.accepts_cookie && t.cookie_saved ? /* @__PURE__ */ (0, J.jsx)(i, {
					variant: "secondary",
					onClick: I,
					...k(P),
					children: "Revoke cookie"
				}) : null,
				/* @__PURE__ */ (0, J.jsx)(i, {
					variant: "secondary",
					onClick: R,
					...k(P),
					children: "Check connection"
				}),
				/* @__PURE__ */ (0, J.jsx)(i, {
					type: "submit",
					...k(P),
					children: "Save"
				})
			] })
		]
	});
}
function ye({ toast: e }) {
	let [t, n] = (0, q.useState)(""), { running: r, outcome: o, start: s } = H({
		queryKey: a,
		queryFn: ({ signal: e }) => P(e),
		start: () => O(x, { code: t }),
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "Cover fetch finished");
		}
	}), c = (e) => {
		e.preventDefault(), !(r || s.isPending || !t.trim()) && s.mutate();
	}, l = s.error ? j(s.error) : o?.status === "failed" ? o.error || "Fetch not obtained" : "";
	return /* @__PURE__ */ (0, J.jsx)(C, {
		title: "HD cover",
		onSubmit: c,
		children: /* @__PURE__ */ (0, J.jsxs)(T, { children: [
			/* @__PURE__ */ (0, J.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, J.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, J.jsx)(_, {
						"aria-label": "Library code",
						isRequired: !0,
						isDisabled: r,
						value: t,
						onChange: n,
						placeholder: "Enter a library code, e.g. ABW-232"
					})
				}), /* @__PURE__ */ (0, J.jsx)(i, {
					type: "submit",
					disabled: !t.trim(),
					...k(r || s.isPending),
					children: "Fetch cover"
				})]
			}),
			r ? /* @__PURE__ */ (0, J.jsx)(y, { label: "Fetching cover" }) : null,
			l ? /* @__PURE__ */ (0, J.jsx)(b, {
				tone: "error",
				children: l
			}) : null,
			o?.status === "complete" ? /* @__PURE__ */ (0, J.jsx)(b, {
				tone: "success",
				children: o.result || "Cover fetch finished"
			}) : null
		] })
	});
}
function be({ toast: e }) {
	let { query: a, running: o, outcome: s, start: c } = H({
		queryKey: n,
		queryFn: ({ signal: e }) => N(e),
		start: () => O(r, {}),
		jobOf: (e) => e.job,
		withJob: (e, t) => e && {
			...e,
			job: t
		},
		onFinish: (t) => {
			t.status === "complete" && e(t.result || "amane bridge rebuilt");
		}
	}), u = U({ mutationFn: () => O(t, {}) }), m = a.data;
	if (!m) return a.error ? /* @__PURE__ */ (0, J.jsx)(C, {
		id: "amane",
		title: "amane",
		children: /* @__PURE__ */ (0, J.jsx)(T, { children: /* @__PURE__ */ (0, J.jsx)(b, {
			tone: "error",
			children: j(a.error)
		}) })
	}) : null;
	let _ = o || c.isPending || u.isPending, v = c.error ? j(c.error) : u.error ? j(u.error) : s?.status === "failed" ? s.error || "Rebuild didn't finish" : "";
	return /* @__PURE__ */ (0, J.jsxs)(C, {
		id: "amane",
		title: "amane",
		aside: /* @__PURE__ */ (0, J.jsx)(d, {
			href: m.repository,
			leadingIcon: _e,
			children: m.repository
		}),
		children: [
			/* @__PURE__ */ (0, J.jsxs)(p, { children: [
				/* @__PURE__ */ (0, J.jsx)(f, {
					term: "Installed version",
					children: m.installed_version || "Not installed"
				}),
				/* @__PURE__ */ (0, J.jsx)(f, {
					term: "Latest upstream version",
					children: u.data?.latest ?? "Not checked yet"
				}),
				/* @__PURE__ */ (0, J.jsx)(f, {
					term: "Runtime environment",
					children: m.installed ? "Installed" : "Not installed"
				}),
				/* @__PURE__ */ (0, J.jsx)(f, {
					term: "Built-in sites",
					children: m.sites.length.toLocaleString()
				})
			] }),
			/* @__PURE__ */ (0, J.jsxs)(T, {
				divided: !0,
				children: [
					m.sites.length ? /* @__PURE__ */ (0, J.jsx)(l, {
						summary: "View built-in sites",
						children: /* @__PURE__ */ (0, J.jsx)("p", {
							className: "text-body-2-regular text-text-secondary",
							children: m.sites.map((e) => e.label).join(", ")
						})
					}) : null,
					m.problem ? /* @__PURE__ */ (0, J.jsx)(b, {
						tone: "error",
						children: m.problem
					}) : /* @__PURE__ */ (0, J.jsxs)(g, { children: [
						"amane (",
						m.license,
						") provides parsing for these built-in sites. When first needed, Peach automatically prepares the pinned ",
						m.version,
						" version; if the installer already includes a usable environment, it is used directly. Manual installs also use this version and don't upgrade automatically with upstream."
					] }),
					o ? /* @__PURE__ */ (0, J.jsx)(y, { label: "Rebuilding runtime environment" }) : null,
					v ? /* @__PURE__ */ (0, J.jsx)(b, {
						tone: "error",
						children: v
					}) : null,
					s?.status === "complete" ? /* @__PURE__ */ (0, J.jsx)(b, {
						tone: "success",
						children: s.result || "amane bridge rebuilt"
					}) : null
				]
			}),
			/* @__PURE__ */ (0, J.jsxs)(h, { children: [/* @__PURE__ */ (0, J.jsx)(i, {
				variant: "secondary",
				onClick: () => {
					_ || u.mutate();
				},
				...k(u.isPending),
				children: "Check upstream version"
			}), /* @__PURE__ */ (0, J.jsx)(i, {
				disabled: !!m.problem,
				onClick: () => {
					_ || c.mutate();
				},
				...k(o || c.isPending),
				children: m.installed ? "Reinstall" : "Install"
			})] })
		]
	});
}
function xe({ toast: e }) {
	let t = W({
		queryKey: S,
		queryFn: ({ signal: e }) => I(e)
	}), n = t.data;
	return n ? /* @__PURE__ */ (0, J.jsxs)(G, { children: [
		/* @__PURE__ */ (0, J.jsx)("p", {
			className: "text-body-2-regular text-text-secondary",
			children: "HD images may need a proxy to download; check the connection first."
		}),
		/* @__PURE__ */ (0, J.jsx)(ye, { toast: e }),
		/* @__PURE__ */ (0, J.jsx)(Y, { receipt: e }),
		(n.sources || []).map((t) => /* @__PURE__ */ (0, J.jsx)(ve, {
			source: t,
			toast: e
		}, t.source)),
		/* @__PURE__ */ (0, J.jsx)(be, { toast: e })
	] }) : /* @__PURE__ */ (0, J.jsx)(G, { children: /* @__PURE__ */ (0, J.jsx)(b, {
		tone: "error",
		title: "Couldn't load scraping sources",
		children: t.error ? j(t.error) : "Failed to load scraping sources"
	}) });
}
export { xe as ScrapingPage, Q as linkHost, Z as networkOptions };

//# debugId=8a69bea2-8a3c-40d4-8285-4dbb8488c436