(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c226b9cc-ae78-4356-931a-7ecb2d543e66", e._sentryDebugIdIdentifier = "sentry-dbid-c226b9cc-ae78-4356-931a-7ecb2d543e66");
	} catch {}
})();
import { $fe21c36db05242bb$export$d7b12c4107be0d61 as e, ArtSlot as t, Button as n, ButtonLink as r, Chip as i, CloudDownloadDialog as a, DISCOVERY_SORTS as o, DOWNLOADS_KEY as s, DOWNLOADS_URL as c, E3 as l, EmptyFocusButton as u, EmptyState as d, FilterGlassRows as f, FilterIconButton as p, FilterPill as m, GlassPill as h, Help as g, Input as _, JAV_LAYOUTS as v, JAV_RECOMMENDATION_GRID as ee, JavHeader as y, LibraryShortcuts as te, M6 as b, Note as x, PHASES as S, Pagination as C, SEGMENT as w, SEGMENTED_TRACK as T, SegmentedRadioGroup as E, Segments as ne, SortKeys as re, SourceAvatar as ie, TaskProgress as ae, WANTS_KEY as oe, WantMagnets as D, Wt as se, __toESM as ce, addWant as le, apiGet as O, appSettingsStore as ue, avatarInner as k, busyProps as A, cachedMagnetStates as j, cardClass as M, cardRatio as de, coverUrl as fe, discoveryArtwork as pe, discoveryKey as me, discoveryScore as he, entityDisplayName as N, entityPath as ge, errorMessage as P, fetchDiscoveries as _e, fetchWants as F, gridLayout as ve, invalidateWants as I, javContentSkeleton as ye, javLayout as be, javTagSkeleton as xe, pageWindow as L, peachHistory$1 as R, qE as z, recommendationScore as Se, relayoutCovers as Ce, removeWants as B, require_jsx_runtime as V, require_react as H, resetWants as U, searchNote as W, shellNavigate as G, spriteGlyph as K, storeJavLayout as we, textLang as Te, useAction as q, useEntityNames as J, useQuery as Y, wantName as X, wireHorizontalScroller as Ee } from "./peach-app.js";
import { ErrorLine as De } from "./peach-app.source-view-CRsaavRy.js";
import "./peach-app.source-list-BGaRj6Rq.js";
// src/react/jav/discovery-faces.tsx
var Z = /* @__PURE__ */ ce(H(), 1), Q = V();
function Oe({ item: e }) {
	J();
	let t = e.performer_refs?.length ? e.performer_refs : [...new Set(e.performers.split(/[,，、;/]/).filter(Boolean))].map((e) => ({ name: e })), n = t.slice(0, 5).map((t, n) => {
		let r = { "--media-avatar-index": n }, i = t.source_avatar && t.source_actor_id && !t.has_image ? { children: /* @__PURE__ */ (0, Q.jsx)(ie, {
			code: e.code,
			person: t
		}) } : { dangerouslySetInnerHTML: { __html: k(t.name, t, null) } };
		return t.id ? /* @__PURE__ */ (0, Q.jsx)("a", {
			"data-media-avatar": "",
			style: r,
			href: ge("performer", t.name, t.id),
			"aria-label": `Open actress page: ${N("performer", t.name, t.id)}`,
			...i
		}, t.name) : /* @__PURE__ */ (0, Q.jsx)("span", {
			"data-media-avatar": "",
			style: r,
			title: N("performer", t.name),
			...i
		}, t.name);
	});
	return t.length > 1 ? /* @__PURE__ */ (0, Q.jsx)("div", {
		"data-media-avatars": "",
		style: { "--media-avatar-count": Math.min(5, t.length) },
		children: n
	}) : n[0] || null;
}
// src/react/wants/want-list.tsx
var ke = {
	code: "Added manually",
	feed: "Subscribe to new releases",
	follow: "Following"
}, Ae = [
	["all", "All"],
	["available", "Has magnet"],
	["missing", "No magnet"]
], je = (e) => [
	e.release_date,
	e.studio,
	e.performers,
	ke[e.origin]
].filter(Boolean).join(" · ");
function Me({ want: e }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "relative inline-grid w-card-cover shrink-0 aspect-card-cover place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default max-sm:w-24",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "text-caption-1-regular text-text-secondary",
			children: "No cover"
		}), e.cover ? /* @__PURE__ */ (0, Q.jsx)("img", {
			src: e.cover,
			alt: "",
			loading: "lazy",
			referrerPolicy: e.remote_cover ? "no-referrer" : void 0,
			onError: (e) => e.currentTarget.remove(),
			className: "absolute inset-0 size-full object-cover"
		}) : null]
	});
}
function Ne({ want: e, readOnly: t, busy: i, onReset: a, onRemove: o, onCloudDownload: s, downloads: c, provider: l, toast: u }) {
	let [d, f] = (0, Z.useState)(""), p = e.link || d || (e.code ? `https://javdb.com/search?q=${encodeURIComponent(e.code)}&f=all` : "");
	return /* @__PURE__ */ (0, Q.jsxs)("li", {
		"data-want-id": e.id,
		className: M({
			bordered: "soft",
			className: "flex flex-col gap-4 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 items-start gap-4 max-sm:gap-3",
			children: [/* @__PURE__ */ (0, Q.jsx)(Me, { want: e }), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						className: "flex min-w-0 flex-wrap items-baseline gap-x-2",
						children: [/* @__PURE__ */ (0, Q.jsx)("b", {
							className: "min-w-0 text-headline-medium wrap-anywhere text-text-primary",
							children: X(e)
						}), e.code && e.title ? /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "min-w-0 truncate text-body-2-regular text-text-secondary",
							children: e.title
						}) : null]
					}),
					je(e) ? /* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: je(e)
					}) : null,
					!e.code || e.phase === "unreleased" || e.phase === "acquired" ? /* @__PURE__ */ (0, Q.jsx)("p", {
						"data-want-note": "",
						className: "text-caption-1-regular text-text-secondary",
						children: W(e)
					}) : null,
					e.scrape_error ? /* @__PURE__ */ (0, Q.jsx)(De, {
						text: e.scrape_error,
						prefix: "Metadata not obtained:",
						tone: "muted"
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "mt-1 flex flex-wrap items-center gap-2",
						children: [
							p ? /* @__PURE__ */ (0, Q.jsx)(r, {
								"data-button-link": "",
								variant: "secondary",
								size: "small",
								trailingIcon: se,
								href: p,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Source page"
							}) : null,
							/* @__PURE__ */ (0, Q.jsx)(n, {
								variant: "secondary",
								size: "small",
								leadingIcon: b,
								disabled: t,
								...A(i === `remove:${e.id}`),
								onClick: o,
								children: "Remove"
							}),
							e.phase === "given_up" ? /* @__PURE__ */ (0, Q.jsx)(n, {
								variant: "secondary",
								size: "small",
								disabled: t,
								...A(i === `reset:${e.id}`),
								onClick: a,
								children: "Search again"
							}) : null,
							e.phase === "searching" || e.phase === "given_up" ? /* @__PURE__ */ (0, Q.jsx)(n, {
								variant: "secondary",
								size: "small",
								onClick: s,
								children: "Find resources"
							}) : null
						]
					})
				]
			})]
		}), e.code && (e.phase === "searching" || e.phase === "given_up") ? /* @__PURE__ */ (0, Q.jsx)(D, {
			want: e,
			readOnly: t,
			downloads: c,
			provider: l,
			toast: u,
			onSource: f
		}) : null]
	});
}
function Pe({ phase: t, label: r, rows: i, row: a }) {
	let [o, s] = (0, Z.useState)(1), [c, l] = (0, Z.useState)("all"), u = j(i), f = (e) => e.has_magnets ?? u.get(e.code || "") ?? !1, p = i.filter(f), m = t !== "searching" || c === "all" ? i : i.filter((e) => f(e) === (c === "available")), h = L(m.length, 20, o);
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": r,
		"data-want-phase": t,
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsxs)("h3", {
					className: "flex items-baseline gap-2 text-title-2-medium text-text-primary",
					children: [r, /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: i.length.toLocaleString()
					})]
				}), t === "searching" ? /* @__PURE__ */ (0, Q.jsx)(E, {
					name: "want-magnet-filter",
					"aria-label": "Magnet search filter",
					orientation: "horizontal",
					value: c,
					className: T,
					onChange: (e) => {
						l(e), s(1);
					},
					children: Ae.map(([t, n]) => /* @__PURE__ */ (0, Q.jsxs)(e, {
						value: t,
						"aria-label": n,
						className: w,
						children: [n, /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-caption-1-regular tabular-nums text-text-tertiary",
							children: (t === "all" ? i.length : t === "available" ? p.length : i.length - p.length).toLocaleString()
						})]
					}, t))
				}) : null]
			}),
			m.length ? null : /* @__PURE__ */ (0, Q.jsx)(d, {
				size: "compact",
				icon: z,
				title: "No matching titles yet",
				actions: /* @__PURE__ */ (0, Q.jsx)(n, {
					size: "small",
					onClick: () => {
						l("all"), s(1);
					},
					children: "View all"
				}),
				children: null
			}),
			/* @__PURE__ */ (0, Q.jsx)("ul", {
				className: "flex flex-col gap-4",
				children: m.slice(h.start, h.end).map(a)
			}),
			h.pages > 1 ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				"data-want-pager": "",
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular tabular-nums text-text-secondary",
					children: `${(h.start + 1).toLocaleString()}–${h.end.toLocaleString()} / ${h.total.toLocaleString()}`
				}), /* @__PURE__ */ (0, Q.jsx)(C, {
					label: `${r} pages`,
					page: h.page,
					pages: h.pages,
					onPage: s
				})]
			}) : null
		]
	});
}
function Fe({ readOnly: e, toast: t, query: r = "", clearQuery: i }) {
	let [o, l] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(null), m = q(), h = Y({
		queryKey: oe,
		queryFn: ({ signal: e }) => F(e),
		staleTime: 3e4,
		refetchInterval: (e) => e.state.data?.scraping ? 3e3 : !1
	}), v = () => {
		let n = o.trim();
		n && !e && m.run("add", (e) => le({ code: n }, e), (e) => {
			t(e.created ? `Added to wants: ${X(e.want)}` : `${X(e.want)} is already in wants`), l(""), I();
		});
	}, ee = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), v());
	}, y = (e) => {
		m.run(`remove:${e.id}`, (t) => B([e.id], t), () => {
			t(`Removed: ${X(e)}`), I();
		});
	}, te = (e) => {
		m.run(`reset:${e.id}`, (t) => U([e.id], t), () => {
			t(`${X(e)} back to searching`), I();
		});
	}, b = h.data, C = (b?.items || []).filter((e) => !r || [
		e.code,
		e.title,
		e.performers
	].join(" ").toLocaleLowerCase().includes(r.toLocaleLowerCase())), w = Y({
		queryKey: s,
		queryFn: ({ signal: e }) => O(`${c}?limit=100`, e),
		enabled: C.some((e) => e.code && (e.phase === "searching" || e.phase === "given_up"))
	}), T = w.data?.providers.filter((e) => e.configured) || [], E = T[0]?.key || "";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-busy": h.isPending,
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: M({
					padding: "none",
					className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
				}),
				children: [
					/* @__PURE__ */ (0, Q.jsx)("h3", {
						className: "text-title-2-medium text-text-primary",
						children: "Add by code"
					}),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-end gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "min-w-64 grow max-sm:min-w-0",
							children: /* @__PURE__ */ (0, Q.jsx)(_, {
								"aria-label": "Code",
								placeholder: "Enter a code, e.g. SSIS-950",
								value: o,
								isDisabled: e,
								onChange: l,
								onKeyDown: ee
							})
						}), /* @__PURE__ */ (0, Q.jsx)(n, {
							variant: "primary",
							disabled: e || !o.trim(),
							...A(m.busy === "add"),
							onClick: v,
							children: "Add"
						})]
					}),
					m.error ? /* @__PURE__ */ (0, Q.jsx)(x, {
						tone: "error",
						title: "This run didn't finish",
						children: m.error
					}) : null
				]
			}),
			h.error ? /* @__PURE__ */ (0, Q.jsx)(x, {
				tone: "error",
				title: "Couldn't load wants",
				children: P(h.error)
			}) : null,
			h.isPending ? /* @__PURE__ */ (0, Q.jsx)("div", {
				role: "status",
				"aria-label": "Loading wants",
				dangerouslySetInnerHTML: { __html: ye("wants") }
			}) : null,
			b?.scraping ? /* @__PURE__ */ (0, Q.jsx)(g, {
				role: "status",
				children: "Fetching metadata and covers for newly added codes."
			}) : null,
			w.error ? /* @__PURE__ */ (0, Q.jsx)(x, {
				tone: "error",
				title: "Download settings not obtained",
				children: P(w.error)
			}) : null,
			w.data && !T.length ? /* @__PURE__ */ (0, Q.jsxs)(x, {
				tone: "neutral",
				children: ["No download channel configured yet.", /* @__PURE__ */ (0, Q.jsx)("a", {
					href: "/settings/library?section=Download%20channels",
					children: "Download channel settings"
				})]
			}) : null,
			w.data && !w.data.available ? /* @__PURE__ */ (0, Q.jsx)(x, {
				tone: "neutral",
				children: "Cloud downloads are only available on devices allowed to modify the database."
			}) : null,
			b && !C.length ? /* @__PURE__ */ (0, Q.jsx)(d, {
				size: "compact",
				icon: z,
				title: r ? "No matching titles" : "No wanted titles yet",
				actions: r && i ? /* @__PURE__ */ (0, Q.jsx)(n, {
					size: "small",
					onClick: i,
					children: "Clear search"
				}) : !r && !e ? /* @__PURE__ */ (0, Q.jsx)(u, {
					target: "input[aria-label=\"Code\"]",
					children: "Add title"
				}) : void 0,
				children: r ? "Try another code, actress or title." : "Enter a code to add a title you want to watch."
			}) : null,
			S.map(([n, r]) => {
				let i = C.filter((e) => e.phase === n);
				return i.length ? /* @__PURE__ */ (0, Q.jsx)(Pe, {
					phase: n,
					label: r,
					rows: i,
					row: (n) => /* @__PURE__ */ (0, Q.jsx)(Ne, {
						want: n,
						readOnly: e,
						busy: m.busy,
						downloads: w.data,
						provider: E,
						toast: t,
						onReset: () => te(n),
						onRemove: () => y(n),
						onCloudDownload: () => p({
							code: n.code || "",
							title: n.title || "",
							origin: `wishlist:${n.id}`,
							cover: n.cover || "",
							performers: n.performers || "",
							release_date: n.release_date || "",
							studio: n.studio || ""
						})
					}, n.id)
				}, n) : null;
			}),
			/* @__PURE__ */ (0, Q.jsx)(a, {
				prefill: f,
				close: () => p(null),
				receipt: t,
				provider: E
			})
		]
	});
}
// src/react/jav/jav-page.tsx
var Ie = K("search"), Le = K("x"), Re = K("refresh-cw");
function $(e) {
	let t = new URLSearchParams(location.search);
	for (let [n, r] of Object.entries(e)) r ? t.set(n, r) : t.delete(n);
	G(location.pathname + (t.size ? `?${t}` : ""), {
		replace: !0,
		state: R.navigation.location.state
	});
}
function ze({ tab: e, readOnly: t, navigate: n, receipt: r }) {
	let [i, o] = (0, Z.useState)(null), [s, c] = (0, Z.useState)(() => new URLSearchParams(location.search).get("q") || ""), l = (e) => {
		c(e), $({ q: e });
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex w-full flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(y, {
				tab: e,
				navigate: n,
				find: () => o({})
			}),
			/* @__PURE__ */ (0, Q.jsx)("form", {
				"aria-label": e === "discover" ? "Filter recommendations" : "Filter wants",
				onSubmit: (e) => {
					e.preventDefault();
				},
				children: /* @__PURE__ */ (0, Q.jsx)(_, {
					type: "search",
					"aria-label": e === "discover" ? "Filter recommendations" : "Filter wants",
					placeholder: "Filter by code, actress or title",
					leadingIcon: Ie,
					value: s,
					onChange: l,
					enterKeyHint: "search"
				})
			}),
			e === "discover" ? /* @__PURE__ */ (0, Q.jsx)(Be, {
				readOnly: t,
				receipt: r,
				resource: o,
				query: s.trim(),
				navigate: n,
				clearText: () => l("")
			}) : /* @__PURE__ */ (0, Q.jsx)(Fe, {
				readOnly: t,
				toast: r,
				query: s.trim(),
				clearQuery: () => l("")
			}),
			/* @__PURE__ */ (0, Q.jsx)(a, {
				prefill: i,
				close: () => o(null),
				receipt: r
			})
		]
	});
}
function Be({ readOnly: e, receipt: a, resource: s, query: c, navigate: u, clearText: g }) {
	let _ = new URLSearchParams(location.search), [y, b] = (0, Z.useState)(() => _.get("scope") === "library" ? "library" : "external"), [S, C] = (0, Z.useState)(() => _.get("tag") || ""), [w, T] = (0, Z.useState)(() => o.some(([e]) => e === _.get("sort")) ? _.get("sort") : "taste"), [E, ie] = (0, Z.useState)(() => _.get("dir") === "asc"), oe = (e) => {
		b(e), $({ scope: e === "external" ? "" : e });
	}, D = (e) => {
		C(e), $({ tag: e });
	}, ce = (e) => {
		T(e), $({ sort: e === "taste" ? "" : e });
	}, O = (e) => {
		ie(e), $({ dir: e ? "asc" : "" });
	}, k = (0, Z.useRef)(null);
	(0, Z.useEffect)(() => {
		let e = [...k.current?.querySelectorAll("[data-catalog-scroll],[data-catalog-tags],[data-filter-row=\"bottom\"]") || []].map((e) => Ee(e, { drag: !0 }));
		return () => e.forEach((e) => e.destroy());
	}, []);
	let j = ue();
	(0, Z.useSyncExternalStore)(j.subscribe, j.version, j.version);
	let M = be(), N = de(ve({
		active: !0,
		home: !1,
		portrait: !1
	})), F = (0, Z.useRef)({}), L = (0, Z.useRef)(!1), R = (0, Z.useRef)(!1), z = E ? "asc" : "desc", B = Y({
		queryKey: me(y, w, z),
		retry: !1,
		refetchOnWindowFocus: !1,
		queryFn: ({ signal: e }) => {
			let t = L.current, n = R.current;
			return L.current = !1, R.current = !1, _e(y, e, {
				sort: w,
				direction: z,
				jobId: t ? void 0 : F.current[y],
				refreshMetadata: t,
				cancelMetadata: n
			});
		},
		refetchInterval: (e) => e.state.data?.metadata_job?.status === "running" && Math.max(1e3, e.state.data.poll_after_ms || 3e3)
	}), V = B.data?.metadata_job;
	(0, Z.useEffect)(() => {
		V?.job_id && (F.current[y] = V.job_id);
	}, [y, V?.job_id]);
	let H = q(), U = q(), W = (e) => {
		U.run(e, async () => (R.current = e === "stop", L.current = e !== "stop", B.refetch({
			cancelRefetch: !0,
			throwOnError: !0
		})), () => {});
	}, G = B.data?.items || [], K = [...new Set(G.flatMap((e) => e.tags || []))], J = G.filter((e) => (!S || e.tags?.includes(S)) && (!c || [
		e.code,
		e.title,
		e.performers,
		e.studio,
		...e.tags || [],
		...(e.performer_refs || []).map((e) => e.name)
	].join(" ").toLocaleLowerCase().includes(c.toLocaleLowerCase()))), X = B.isPending;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		ref: k,
		"aria-label": "Recommended for you",
		"aria-busy": X,
		className: "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(f, {
				label: "Discover filters and sort",
				topLabel: "Discover scope and tags",
				attrs: {
					"data-filter-frame": "",
					"data-jav-filter": "",
					"data-catalog-frame": ""
				},
				busy: X,
				topClassName: "gap-1.5 overflow-visible",
				bottomClassName: "min-h-12",
				top: /* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-catalog-scroll": "",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-catalog-views": "",
						children: [[["external", "Found outside library"], ["library", "Explore library"]].map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(m, {
							"data-entity-tag": e,
							"data-entity-press": "",
							pressed: y === e,
							onPress: () => {
								oe(e), D("");
							},
							children: t
						}, e)), /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-entity-sep": "",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, Q.jsx)("div", {
						"data-catalog-tags": "",
						dangerouslySetInnerHTML: X ? { __html: xe() } : void 0,
						children: X ? null : K.map((e) => /* @__PURE__ */ (0, Q.jsxs)(m, {
							"data-catalog-tag": e,
							"data-entity-press": "",
							pressed: S === e,
							onPress: () => D(S === e ? "" : e),
							children: [e, /* @__PURE__ */ (0, Q.jsx)("span", {
								"data-count-badge": "",
								children: G.filter((t) => t.tags?.includes(e)).length
							})]
						}, e))
					})]
				}),
				bottom: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						"data-catalog-readout": "",
						children: X ? /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-skeleton": "count",
							"aria-hidden": !0,
							className: "relative inline-block h-3.5 w-37.5 rounded-md align-middle skeleton-sheen"
						}) : `${J.length} titles`
					}),
					/* @__PURE__ */ (0, Q.jsx)(te, { currentHref: () => location.pathname + location.search }),
					c || S ? /* @__PURE__ */ (0, Q.jsx)(h, {
						onPress: () => {
							D(""), g();
						},
						children: "Clear filters"
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("span", {
						"data-entity-sorts": "",
						children: [
							y === "external" ? /* @__PURE__ */ (0, Q.jsx)(p, {
								"data-entity-batch": "",
								"data-jav-metadata-update": "",
								label: V?.status === "running" ? "Stop reading" : "Update metadata",
								disabled: X,
								"data-skeleton-action": X ? "" : void 0,
								busy: !!U.busy,
								icon: V?.status === "running" ? Le : Re,
								onPress: () => W(V?.status === "running" ? "stop" : "update")
							}) : null,
							/* @__PURE__ */ (0, Q.jsx)(ne, {
								label: "JAV card layout",
								value: M,
								options: v,
								onChange: we
							}),
							/* @__PURE__ */ (0, Q.jsx)(re, {
								sorts: o.map(([e, t, n]) => ({
									key: e,
									label: t,
									ariaLabel: n,
									pressed: e === w,
									dir: z
								})),
								onSort: (e) => {
									e === w ? O(!E) : (ce(e), O(e === "code"));
								}
							})
						]
					})
				] })
			}),
			X ? /* @__PURE__ */ (0, Q.jsx)("div", {
				role: "status",
				"aria-label": "Loading recommendations",
				dangerouslySetInnerHTML: { __html: ye("discover", M) }
			}) : null,
			B.error ? /* @__PURE__ */ (0, Q.jsx)(x, {
				tone: "error",
				title: "Recommendations not obtained",
				children: P(B.error)
			}) : null,
			y === "external" && V?.status === "running" ? /* @__PURE__ */ (0, Q.jsx)("div", {
				"data-jav-metadata": "",
				className: "min-w-0",
				children: /* @__PURE__ */ (0, Q.jsx)(ae, {
					embedded: !0,
					label: `Loading title metadata · ${V.completed} / ${V.total} titles`,
					value: V.completed,
					total: V.total
				})
			}) : null,
			V && V.status !== "running" && (V.status !== "complete" || V.failed > 0) ? /* @__PURE__ */ (0, Q.jsx)(x, {
				tone: "neutral",
				action: /* @__PURE__ */ (0, Q.jsx)(n, {
					variant: "secondary",
					...A(U.busy === "retry"),
					"aria-label": "Retry loading title metadata now",
					onClick: () => W("retry"),
					children: "Retry now"
				}),
				children: V.message || `Title metadata ${V.completed} / ${V.total} titles`
			}) : null,
			U.error ? /* @__PURE__ */ (0, Q.jsx)(x, {
				tone: "error",
				children: U.error
			}) : null,
			!X && !B.error && !J.length ? /* @__PURE__ */ (0, Q.jsx)(d, {
				icon: l,
				title: c || S ? "No matching recommendations" : "No titles match your taste yet",
				actions: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(r, {
					size: "small",
					href: "/taste",
					variant: "secondary",
					children: "View taste"
				}), c || S ? /* @__PURE__ */ (0, Q.jsx)(n, {
					variant: "primary",
					size: "small",
					onClick: () => {
						g(), C(""), $({
							q: "",
							tag: ""
						});
					},
					children: "Clear filters"
				}) : y === "library" ? /* @__PURE__ */ (0, Q.jsx)(r, {
					variant: "primary",
					size: "small",
					href: "/",
					children: "Browse library"
				}) : /* @__PURE__ */ (0, Q.jsx)(n, {
					variant: "primary",
					size: "small",
					onClick: () => s({}),
					children: "Find titles"
				})] }),
				children: c || S ? "Clear filters to see other titles." : y === "library" ? "After you watch or mark titles, you can explore less-watched parts of the library." : "You can search for a code, or update follow sources."
			}) : null,
			H.error ? /* @__PURE__ */ (0, Q.jsx)(x, {
				tone: "error",
				children: H.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				"data-media-grid": "",
				className: ee,
				style: { "--card-ratio": N },
				children: J.map((o) => {
					let c = o.performer_refs?.length ? o.performer_refs.map((e) => e.name).join(", ") : o.performers, l = pe(o, M, j.value.javImage), d = Se(o.taste_score ?? o.score), f = [
						d.label,
						`Taste ${he(o.taste_score ?? o.score)}`,
						B.data?.ranking_method === "mmr" && o.ranking_score != null ? `Rank ${he(o.ranking_score)}` : "",
						o.source_score == null ? "" : `Source rating ${o.source_score.toFixed(1)} / 5`,
						...o.reasons || []
					].filter(Boolean).join(" · ");
					return /* @__PURE__ */ (0, Q.jsxs)("article", {
						"data-media-card": "",
						"data-jav-card": "",
						onClick: (e) => {
							e.target.closest("a,button,input") || u(o.asset_id ? `/assets/${o.asset_id}` : `/works/${encodeURIComponent(o.code)}`);
						},
						children: [
							/* @__PURE__ */ (0, Q.jsx)("a", {
								href: o.asset_id ? `/assets/${o.asset_id}` : `/works/${encodeURIComponent(o.code)}`,
								"aria-label": `View ${o.code} details`,
								onClick: (e) => {
									e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0 || (e.preventDefault(), u(e.currentTarget.getAttribute("href")));
								},
								"data-media-pic": "",
								"data-jav-cover-box": "",
								className: "relative inline-grid place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default",
								children: l ? /* @__PURE__ */ (0, Q.jsx)(t, {
									artwork: {
										kind: "cover",
										html: l
									},
									identity: pe(o, "small", j.value.javImage),
									relayout: (e) => Ce(e, M)
								}) : /* @__PURE__ */ (0, Q.jsx)("span", {
									"data-media-nopic": "",
									children: "No cover"
								})
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-media-meta": "",
								children: [/* @__PURE__ */ (0, Q.jsx)(Oe, { item: o }), /* @__PURE__ */ (0, Q.jsxs)("div", {
									"data-media-text": "",
									children: [
										/* @__PURE__ */ (0, Q.jsxs)("h3", {
											"data-jav-title": "",
											"data-media-title": "",
											title: `${o.code} · ${o.title || "Title not obtained"}`,
											children: [
												/* @__PURE__ */ (0, Q.jsx)("b", { children: o.code }),
												" ",
												o.title ? /* @__PURE__ */ (0, Q.jsx)("span", {
													lang: Te(o.title),
													children: o.title
												}) : "Title not obtained"
											]
										}),
										/* @__PURE__ */ (0, Q.jsxs)("div", {
											"data-media-byline": "",
											children: [
												o.performer_refs?.[0]?.id ? /* @__PURE__ */ (0, Q.jsxs)("a", {
													"data-media-who": "",
													href: ge("performer", o.performer_refs[0].name),
													title: c,
													children: [/* @__PURE__ */ (0, Q.jsx)("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ (0, Q.jsx)("use", { href: "#i-user-round" })
													}), /* @__PURE__ */ (0, Q.jsx)("span", { children: o.performer_refs[0].name })]
												}) : /* @__PURE__ */ (0, Q.jsxs)("span", {
													"data-media-who": "",
													title: c,
													children: [/* @__PURE__ */ (0, Q.jsx)("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ (0, Q.jsx)("use", { href: "#i-user-round" })
													}), /* @__PURE__ */ (0, Q.jsx)("span", { children: o.performer_refs?.[0]?.name || c })]
												}),
												(o.performer_refs?.length || 0) > 1 ? /* @__PURE__ */ (0, Q.jsxs)("span", {
													"data-media-who-more": "",
													children: [
														"+",
														o.performer_refs.length,
														" more"
													]
												}) : null,
												o.release_date ? /* @__PURE__ */ (0, Q.jsxs)("time", {
													"data-media-release": "",
													dateTime: o.release_date,
													children: [/* @__PURE__ */ (0, Q.jsx)("svg", {
														viewBox: "0 0 24 24",
														"aria-hidden": "true",
														children: /* @__PURE__ */ (0, Q.jsx)("use", { href: "#i-calendar" })
													}), o.release_date]
												}) : null
											]
										}),
										/* @__PURE__ */ (0, Q.jsxs)("div", {
											"data-jav-tags": "",
											"data-media-tags": "",
											children: [/* @__PURE__ */ (0, Q.jsx)("button", {
												"data-jav-taste-score": "",
												type: "button",
												title: f,
												"aria-label": `Recommendation score ${d.score}, ${d.label}`,
												className: "rounded-md outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring",
												children: /* @__PURE__ */ (0, Q.jsx)(i, {
													color: d.color,
													children: d.label
												})
											}), (o.tags || []).slice(0, 4).map((e) => /* @__PURE__ */ (0, Q.jsx)("button", {
												type: "button",
												"data-media-tag": "",
												"aria-pressed": S === e,
												onClick: () => D(S === e ? "" : e),
												children: e
											}, e))]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-jav-actions": "",
								className: "flex flex-wrap gap-2",
								children: [
									o.link ? /* @__PURE__ */ (0, Q.jsx)(r, {
										"data-button-link": "",
										variant: "secondary",
										trailingIcon: se,
										href: o.link,
										target: "_blank",
										rel: "noopener noreferrer",
										children: "Title sources"
									}) : null,
									/* @__PURE__ */ (0, Q.jsx)(n, {
										variant: "ghost",
										disabled: e || o.wanted || !!o.asset_id,
										...A(H.busy === String(o.id)),
										onClick: () => {
											H.run(String(o.id), (e) => le({ code: o.code }, e), () => {
												a("Added to wants"), I(), B.refetch();
											});
										},
										children: o.asset_id ? "In library" : o.wanted ? "Added to wants" : "Want"
									}),
									/* @__PURE__ */ (0, Q.jsx)(n, {
										variant: "secondary",
										onClick: () => s({
											...o,
											cover: o.has_cover ? fe(o, !0) : o.cover_url,
											origin: `${o.asset_id ? "asset" : "feed"}:${o.id}`
										}),
										children: "Find resources"
									})
								]
							})
						]
					}, o.id);
				})
			})
		]
	});
}
export { ze as JavPage };

//# debugId=c226b9cc-ae78-4356-931a-7ecb2d543e66