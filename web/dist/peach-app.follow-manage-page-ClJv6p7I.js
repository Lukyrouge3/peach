(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e6003d5-f7d7-44ec-9afa-722204af8652", e._sentryDebugIdIdentifier = "sentry-dbid-3e6003d5-f7d7-44ec-9afa-722204af8652");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as r, $542a13ca2fa5b484$export$5b6b19405a83ff9d as i, $76d00c5a4edb230a$export$76ccd210b9029917 as a, $76d00c5a4edb230a$export$816b5d811295e6bc as o, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as s, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as c, $76d00c5a4edb230a$export$f850895b287ef28e as l, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as u, $b4f18e3395fe64d7$export$3e41faf802a29e71 as d, $b4f18e3395fe64d7$export$b2539bed5023c21c as f, $ea3928288112382f$export$439d29a4e110a164 as p, $l as m, Button as h, ButtonLink as ee, Bx as g, Checkbox as _, ChevronSortDown as te, Chip as v, DataTableFooter as y, DataTableFrame as ne, DataTableSort as b, EmptyFocusButton as x, EmptyState as S, ErrorText as C, ExternalLink as w, FEEDS_KEY as T, FOLLOW_CREDENTIALS_KEY as re, FOLLOW_MANAGE_KEY as E, FOLLOW_MANAGE_NAV as D, FOLLOW_RESOLVE_KEY as O, FieldLabel as k, Help as A, Input as j, LoadingDots as M, M6 as N, MENU_ITEM as P, MENU_ITEM_INTERACTIVE as F, MENU_POPOVER_SURFACE as I, ModalFrame as L, Note as R, P7 as z, SORT_DEFAULT_DIR as B, SelectionDock as V, SelectionPopover as H, SiteLabel as U, Switch as ie, Table as ae, TableColumnControls as oe, TableColumnResizer as se, TableSelectionHeader as ce, TagManager as le, TaskProgress as W, Wt as ue, Xf as de, __toESM as fe, addAlias as pe, addSource as me, avatarInner as he, busyProps as G, cardClass as K, checkFeeds as q, columnVisibilityFeature as ge, confirmModal as _e, createColumnHelper as ve, credentialDone as ye, cx as J, dZ as be, errorHeadline as xe, errorMessage as Y, feedIntervalText as X, fetchCredentials as Se, fetchFeeds as Ce, fetchFollow as we, fetchResolveJob as Te, fetchSuggestions as Ee, flexRender as De, followFeedByName as Oe, followSuggestKey as ke, groupByAuthor as Ae, isBroken as je, isLayout as Me, keepSelected as Ne, localTime as Pe, lookupFeedActor as Fe, mapLimit as Ie, pageSizeOf as Le, pageWindow as Re, pv as ze, queryClient as Be, reloadFollowManage as Ve, removeAlias as He, removeFeed as Ue, renameAliasGroup as We, require_jsx_runtime as Ge, require_react as Ke, resolveFollowSort as qe, rowPaginationFeature as Je, rowSelectionFeature as Ye, rowSortingFeature as Xe, setFeedEnabled as Ze, startCheck as Qe, startResolve as $e, tableFeatures as et, useAction as tt, useBackgroundJob as nt, useMutation as rt, useQuery as it, useTable as at, useTablePreferences as ot } from "./peach-app.js";
import { Page as st } from "./peach-app.page-QAncjzM1.js";
import { STAT_STRIP_SIX as ct } from "./peach-app.stat-card-DsNmy_0F.js";
import { LEGACY_AVATAR_IMG as lt } from "./peach-app.legacy-avatar-NSITxLRS.js";
import { PillAriaTabList as ut } from "./peach-app.pill-aria-tab-list-BMY1ZEv1.js";
import { AuthorAvatar as dt, SourceIcon as ft } from "./peach-app.source-view-CRsaavRy.js";
import { SourceList as pt } from "./peach-app.source-list-BGaRj6Rq.js";
// src/react/follow-manage/add-source.tsx
var Z = /* @__PURE__ */ fe(Ke(), 1), Q = Ge(), mt = J(P, F, "text-body-2-medium"), ht = "Paste a source link, or enter a creator name or id…", gt = "Follow a creator", _t = "Searching (the first name search downloads the creator index and may take tens of seconds)", vt = "Identifying", yt = "No sources found on the site", bt = "/settings/subscriptions", xt = (e, t) => `${e}:${t.url}`;
function St({ field: e, menu: t, options: n, active: r, busy: a, onPick: o, onClose: s }) {
	return (0, Z.useEffect)(() => {
		t.current?.querySelector("[aria-current=\"true\"]")?.scrollIntoView({ block: "nearest" });
	}, [t, r]), /* @__PURE__ */ (0, Q.jsxs)(i, {
		ref: t,
		triggerRef: e,
		isOpen: !0,
		isNonModal: !0,
		shouldFlip: !1,
		onOpenChange: (e) => {
			e || s();
		},
		placement: "bottom start",
		offset: 4,
		"aria-label": "Source suggestions",
		className: J(I, "flex w-(--trigger-width) flex-col gap-1 overscroll-contain"),
		children: [a && !n.length ? /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 py-1.5",
			children: /* @__PURE__ */ (0, Q.jsx)(M, { label: "Finding suggestions" })
		}) : null, n.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [e.group === n[t - 1]?.group ? null : /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "px-2 pt-1 text-caption-1-regular text-text-tertiary",
			children: e.group
		}), /* @__PURE__ */ (0, Q.jsxs)("button", {
			type: "button",
			"aria-current": t === r ? "true" : void 0,
			className: t === r ? J(mt, "bg-background-secondary-default") : mt,
			onMouseDown: (e) => e.preventDefault(),
			onClick: () => o(e.value),
			children: [
				/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "min-w-0 grow truncate text-left",
					children: e.value
				}),
				e.matched ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular text-text-tertiary",
					children: e.matched
				}) : null,
				e.n ? /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "shrink-0 text-caption-1-regular tabular-nums text-text-tertiary",
					children: e.n.toLocaleString()
				}) : null
			]
		})] }, `${e.group}-${e.value}`))]
	});
}
function Ct({ credentials: e, hidden: t, onHidden: n }) {
	let r = (e.providers || []).filter((e) => e.followable), i = r.filter((e) => !t.has(e.provider_label)).length, a = i === r.length ? "All sources" : `${i}/${r.length} sources`;
	return /* @__PURE__ */ (0, Q.jsx)(H, {
		label: "Source filter",
		triggerLabel: a,
		leadingIcon: m,
		empty: "No sources available",
		items: r.map((e) => ({
			id: e.provider_label,
			selected: !t.has(e.provider_label),
			label: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ (0, Q.jsx)(ft, { provider: e.provider }), e.provider_label]
			})
		})),
		onChange: (e, r) => {
			let i = new Set(t);
			r ? i.delete(e) : i.add(e), n(i);
		},
		actions: [
			{
				label: "Select all",
				disabled: !r.length,
				onPress: () => n(/* @__PURE__ */ new Set())
			},
			{
				label: "Select none",
				disabled: !r.length,
				onPress: () => n(new Set(r.map((e) => e.provider_label)))
			},
			{
				label: "Credential settings",
				href: bt
			}
		]
	});
}
function wt({ row: e, at: t, hidden: n, unpicked: r, onPick: i }) {
	if (e.kind === "error") return /* @__PURE__ */ (0, Q.jsx)(R, {
		tone: "error",
		title: e.line,
		children: e.error || "Search failed"
	});
	let a = (e.candidates || []).filter((e) => !n.has(e.provider_label || "")), o = Object.entries(e.failures || {});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: K({
			variant: "outlined",
			padding: "none",
			className: "flex flex-col gap-2 p-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "text-body-medium text-text-primary",
				children: e.line
			}),
			a.length ? a.map((e) => {
				let n = xt(t, e);
				return /* @__PURE__ */ (0, Q.jsx)(_, {
					isSelected: !e.known && !r.has(n),
					isDisabled: e.known,
					onChange: (e) => i(n, e),
					children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex min-w-0 flex-wrap items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(ft, { provider: e.provider }),
							/* @__PURE__ */ (0, Q.jsx)("b", {
								className: "text-body-medium",
								children: e.provider_label
							}),
							/* @__PURE__ */ (0, Q.jsx)("span", {
								className: "min-w-0 break-words",
								children: e.label
							}),
							/* @__PURE__ */ (0, Q.jsx)("small", {
								className: "text-caption-1-regular text-text-secondary",
								children: e.known ? "Already following" : e.evidence
							})
						]
					})
				}, n);
			}) : /* @__PURE__ */ (0, Q.jsx)(A, { children: yt }),
			(e.external_searches || []).map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("small", {
					className: "text-caption-1-regular text-text-secondary",
					children: e.evidence
				}), /* @__PURE__ */ (0, Q.jsx)(w, {
					href: e.url,
					children: `${e.label}: ${e.query}`
				})]
			}, e.url)),
			o.length ? /* @__PURE__ */ (0, Q.jsx)(A, { children: o.map(([e, t]) => `${e}: ${t}`).join("; ") }) : null
		]
	});
}
function Tt({ data: e, credentials: t, readOnly: n, toast: r }) {
	let [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(""), [f, p] = (0, Z.useState)(!1), [m, ee] = (0, Z.useState)(null), [g, _] = (0, Z.useState)(-1), te = (0, Z.useRef)(null), v = (0, Z.useRef)(null), [y, ne] = (0, Z.useState)(/* @__PURE__ */ new Set()), [b, x] = (0, Z.useState)(/* @__PURE__ */ new Set()), [S, C] = (0, Z.useState)(""), [w, T] = (0, Z.useState)(0);
	(0, Z.useEffect)(() => {
		let e = i.trim();
		if (o || !e || e.includes("/")) {
			d("");
			return;
		}
		let t = setTimeout(() => d(e), 250);
		return () => clearTimeout(t);
	}, [i, o]);
	let re = it({
		queryKey: ke(u),
		queryFn: ({ signal: e }) => Ee(u, e),
		enabled: u.length > 0 && f && !o && m !== i
	}), E = (0, Z.useMemo)(() => (re.data?.groups || []).flatMap((e) => e.items.map((t) => ({
		value: t.value,
		matched: t.matched || "",
		n: t.n || 0,
		group: e.label
	}))), [re.data]), { job: D, running: A, outcome: M, start: N, dismiss: P } = nt({
		queryKey: O,
		queryFn: ({ signal: e }) => Te(e),
		start: (e) => $e([e]),
		onStarted: () => x(/* @__PURE__ */ new Set()),
		onError: (e) => C(Y(e)),
		onFinish: (e) => {
			e.status === "failed" && C(e.error || "Search failed");
		}
	}), F = (e) => {
		let t = e.trim();
		!t || n || o || A || N.isPending || (C(""), _(-1), l(t), a(t), d(""), ee(t), N.mutate(t));
	}, I = re.isFetching, L = f && !o && m !== i && (E.length > 0 || I), z = () => {
		_(-1), ee(i);
	}, B = (e) => {
		if (!(o || e.nativeEvent.isComposing || e.nativeEvent.keyCode === 229)) {
			if (e.key === "Escape" && L) z();
			else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				if (!E.length) return;
				if (e.preventDefault(), !L) {
					ee(null);
					return;
				}
				let t = e.key === "ArrowDown" ? 1 : -1;
				_((e) => {
					let n = e + t;
					return n < 0 ? E.length - 1 : n >= E.length ? 0 : n;
				});
			} else e.key === "Enter" && (e.preventDefault(), F(E[g]?.value || i));
		}
	}, V = M?.results || [], H = V.flatMap((e, t) => (e.candidates || []).filter((e) => !e.known && !y.has(e.provider_label || "")).map((e) => ({
		candidate: e,
		key: xt(t, e)
	})).filter((e) => !b.has(e.key))), U = rt({
		mutationFn: async (e) => {
			let t = [], n = [];
			T(0);
			for (let r of e) {
				try {
					let e = await me(r.candidate);
					n.push(e.source);
				} catch (e) {
					t.push(`${r.candidate.label}: ${Y(e)}`);
				}
				T((e) => e + 1);
			}
			if (n.length) try {
				await Qe(n);
			} catch (e) {
				t.push(Y(e));
			}
			return {
				failures: t,
				sources: n
			};
		},
		onSuccess: (e) => {
			Ve(), e.failures.length ? C(e.failures.join("; ")) : (C(""), P(), r(`Added ${e.sources.length} follow sources`));
		},
		onError: (e) => C(Y(e))
	}), ie = e.suggestions || [], ae = !c.includes("/");
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": gt,
		className: K({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: gt
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						ref: te,
						className: "min-w-64 grow",
						onFocus: () => p(!0),
						onBlur: (e) => {
							let t = e.relatedTarget;
							!e.currentTarget.contains(t) && !v.current?.contains(t) && p(!1);
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(j, {
							"aria-label": "Source link, name or id",
							placeholder: ht,
							value: i,
							leadingIcon: ze,
							enterKeyHint: "search",
							isDisabled: n,
							onChange: a,
							onCompositionStart: () => {
								s(!0), _(-1);
							},
							onCompositionEnd: (e) => {
								s(!1), a(e.currentTarget.value);
							},
							onKeyDown: B
						}), L ? /* @__PURE__ */ (0, Q.jsx)(St, {
							field: te,
							menu: v,
							options: E,
							active: g,
							busy: I,
							onPick: F,
							onClose: z
						}) : null]
					}),
					/* @__PURE__ */ (0, Q.jsx)(Ct, {
						credentials: t,
						hidden: y,
						onHidden: ne
					}),
					/* @__PURE__ */ (0, Q.jsx)(h, {
						variant: "primary",
						disabled: n || !i.trim(),
						...G(A || N.isPending),
						onClick: () => F(i),
						children: "Search"
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				"aria-live": "polite",
				className: "flex flex-col gap-3 empty:hidden",
				children: [A || N.isPending ? /* @__PURE__ */ (0, Q.jsx)(W, {
					embedded: !0,
					label: D?.message || (D?.total ? `Searching: ${D.checked || 0}/${D.total}` : ae ? _t : vt),
					value: D?.checked,
					total: D?.total
				}) : null, S ? /* @__PURE__ */ (0, Q.jsx)(R, {
					tone: "error",
					title: "This run didn't finish",
					children: S
				}) : null]
			}),
			V.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(k, { children: "Search results" }),
					V.map((e, t) => /* @__PURE__ */ (0, Q.jsx)(wt, {
						row: e,
						at: t,
						hidden: y,
						unpicked: b,
						onPick: (e, t) => {
							let n = new Set(b);
							t ? n.delete(e) : n.add(e), x(n);
						}
					}, `${e.line}-${t}`)),
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(h, {
								variant: "secondary",
								size: "small",
								onClick: () => P(),
								children: "Close"
							}),
							/* @__PURE__ */ (0, Q.jsx)(h, {
								variant: "primary",
								size: "small",
								disabled: n || !H.length,
								...G(U.isPending),
								onClick: () => U.mutate(H),
								children: `Add selected (${H.length})`
							}),
							U.isPending ? /* @__PURE__ */ (0, Q.jsx)("span", {
								role: "status",
								className: "text-body-2-regular text-text-secondary",
								children: `Adding… ${w}/${H.length}`
							}) : null
						]
					})
				]
			}) : null,
			ie.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: "You might like"
				}), ie.map((e) => /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: n,
					title: `Appears ${e.visits} times in browsing history${e.origin ? ` · ${e.origin}` : ""}`,
					onClick: () => F(e.name),
					children: e.name
				}, e.name))]
			}) : null
		]
	});
}
// src/react/follow-manage/add-feed.tsx
var Et = "Enter an actress name to find her performer page on JavDB", Dt = "Add JAV subscription";
function Ot(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e.candidates) t.has(r.id) && r.held_by && n.set(r.held_by.id, r.held_by.name);
	if (n.size > 1) return {
		text: `The checked cards belong to different people in the database: ${[...n.values()].join(", ")}. Merge them first, then subscribe`,
		blocked: !0
	};
	let [r] = n.values();
	return r ? {
		text: `Will be registered under “${r}”`,
		blocked: !1
	} : e.known ? {
		text: `Will be registered under “${e.known.name}” in the database`,
		blocked: !1
	} : {
		text: `“${e.q}” isn't in the database yet; a new person will be created`,
		blocked: !1
	};
}
function kt({ card: e, picked: t, onPick: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(_, {
			isSelected: t,
			onChange: n,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-wrap items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, Q.jsx)("span", {
						className: "min-w-0 break-words",
						children: e.names.join(", ")
					}),
					e.record ? /* @__PURE__ */ (0, Q.jsx)(v, {
						variant: "caption",
						color: "neutral",
						children: e.record
					}) : null,
					e.held_by ? /* @__PURE__ */ (0, Q.jsx)("small", {
						className: "text-caption-1-regular text-text-secondary",
						children: `Already under “${e.held_by.name}”`
					}) : null
				]
			})
		}), /* @__PURE__ */ (0, Q.jsx)(w, {
			href: e.url,
			children: e.id
		})]
	});
}
function At({ readOnly: e, toast: t, onAdded: n }) {
	let [r, i] = (0, Z.useState)(""), [a, o] = (0, Z.useState)(null), [s, c] = (0, Z.useState)(/* @__PURE__ */ new Set()), l = tt(), u = () => {
		let t = r.trim();
		t && !e && l.run("lookup", (e) => Fe(t, e), (e) => {
			o(e), c(new Set(e.suggested));
		});
	}, d = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), u());
	}, f = () => {
		o(null), c(/* @__PURE__ */ new Set()), l.setError("");
	}, p = () => {
		a && l.run("follow", (e) => Oe(a.q, [...s], e), (e) => {
			t(e.created ? `Created “${e.entity_name}” and subscribed to her new releases` : `Subscribed to new releases of “${e.entity_name}”`), i(""), f(), n();
		});
	}, m = a ? Ot(a, s) : null;
	return /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": Dt,
		className: K({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: Dt
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("div", {
					className: "min-w-64 grow",
					children: /* @__PURE__ */ (0, Q.jsx)(j, {
						"aria-label": "Actress name",
						placeholder: Et,
						value: r,
						leadingIcon: ze,
						enterKeyHint: "search",
						isDisabled: e,
						onChange: i,
						onKeyDown: d
					})
				}), /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "primary",
					disabled: e || !r.trim(),
					...G(l.busy === "lookup"),
					onClick: u,
					children: "Search"
				})]
			}),
			l.error ? /* @__PURE__ */ (0, Q.jsx)(R, {
				tone: "error",
				title: "This run didn't finish",
				children: l.error
			}) : null,
			a ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(k, { children: "Performer cards on JavDB" }),
					a.candidates.length ? a.candidates.map((e) => /* @__PURE__ */ (0, Q.jsx)(kt, {
						card: e,
						picked: s.has(e.id),
						onPick: (t) => c((n) => {
							let r = new Set(n);
							return t ? r.add(e.id) : r.delete(e.id), r;
						})
					}, e.id)) : /* @__PURE__ */ (0, Q.jsx)(A, { children: "This name wasn't found on JavDB." }),
					a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(A, {
						role: "status",
						children: s.size ? m.text : "Check her performer cards; if both the censored and uncensored records are her, check both."
					}) : null,
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							onClick: f,
							children: "Close"
						}), a.candidates.length ? /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "primary",
							size: "small",
							disabled: e || !s.size || m.blocked,
							...G(l.busy === "follow"),
							onClick: p,
							children: `Add subscription (${s.size})`
						}) : null]
					})
				]
			}) : null
		]
	});
}
// src/react/follow-manage/alias-rename-dialog.tsx
function jt({ group: e, close: t, receipt: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(L, {
		isOpen: !!e,
		onOpenChange: (e) => {
			e || t();
		},
		width: "form",
		label: "Change unified name",
		children: e ? /* @__PURE__ */ (0, Q.jsx)(Mt, {
			group: e,
			close: t,
			receipt: n
		}, e.canonical_key) : null
	});
}
function Mt({ group: e, close: t, receipt: n }) {
	let [i, a] = (0, Z.useState)(e.canonical_name), o = tt();
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		onSubmit: (r) => {
			r.preventDefault(), i.trim() && i.trim() !== e.canonical_name && o.run("rename", (t) => We(e.canonical_key, i.trim(), t), () => {
				Ve(), n(`Unified name changed to ${i.trim()}`), t();
			});
		},
		className: "flex min-h-0 flex-col gap-4 p-5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(r, {
				slot: "title",
				className: "text-title-2-semibold text-text-primary",
				children: "Change unified name"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("p", {
				className: "text-body-2-regular wrap-anywhere text-text-secondary",
				children: ["Current name: ", e.canonical_name]
			}),
			/* @__PURE__ */ (0, Q.jsx)(j, {
				"aria-label": "Unified name",
				autoFocus: !0,
				value: i,
				onChange: a
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(k, { children: "Choose an existing alias" }), /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: e.aliases.map((e) => /* @__PURE__ */ (0, Q.jsx)(h, {
						variant: "secondary",
						size: "small",
						onClick: () => a(e.name),
						children: e.name
					}, e.key))
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "The original name is kept as an alias, and linked profiles and title credits update to match."
			}),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(R, {
				tone: "error",
				children: o.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					onClick: t,
					children: "Cancel"
				}), /* @__PURE__ */ (0, Q.jsx)(h, {
					type: "submit",
					variant: "primary",
					disabled: !i.trim() || i.trim() === e.canonical_name,
					...G(!!o.busy),
					children: "Change unified name"
				})]
			})
		]
	});
}
// src/react/follow-manage/alias-manager.tsx
var Nt = (e) => `The alias “${e}” will be removed and its sources go back to a separate creator group.`, Pt = et({
	rowSelectionFeature: Ye,
	rowSortingFeature: Xe,
	rowPaginationFeature: Je,
	columnVisibilityFeature: ge,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Ft = Pt, It = {
	id: "select",
	label: "Select",
	width: 48,
	min: 48,
	max: 48,
	required: !0
}, Lt = {
	id: "canonical",
	label: "Unified name",
	width: 280,
	min: 240,
	required: !0,
	flex: !0
}, Rt = [
	It,
	Lt,
	{
		id: "alias",
		label: "Platform aliases",
		width: 240
	},
	{
		id: "evidence",
		label: "Basis",
		width: 320
	},
	{
		id: "actions",
		label: "Actions",
		width: 112
	}
], zt = [
	It,
	Lt,
	{
		id: "aliases",
		label: "Platform aliases",
		width: 400
	},
	{
		id: "actions",
		label: "Actions",
		width: 184,
		min: 168
	}
], Bt = (e) => e.alias;
function Vt(e, t, n) {
	let r = n ? `name:${n}` : "", i = r && e.find((e) => e.author_key === r) || e.find((e) => e.author_name === t || e.entity_name === t);
	return i ? e.filter((e) => e.author_key === i.author_key) : [];
}
function Ht({ sources: e, name: t, canonicalKey: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)(dt, {
			group: Vt(e, t, n),
			name: t
		}), /* @__PURE__ */ (0, Q.jsx)("b", {
			className: "text-body-medium",
			children: t
		})]
	});
}
function Ut({ groups: e, suggestions: t, sources: r = [], readOnly: i, toast: u }) {
	let d = ot("alias-suggestions", Rt), f = ot("alias-saved", zt), [p, m] = (0, Z.useState)(null), [ee, g] = (0, Z.useState)({}), [v, w] = (0, Z.useState)({}), T = n(() => g({})), re = n(() => w({})), [E, D] = (0, Z.useState)([]), [O, A] = (0, Z.useState)([]), [M, N] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), [P, F] = (0, Z.useState)({
		pageIndex: 0,
		pageSize: 20
	}), I = {
		...M,
		pageIndex: Math.min(M.pageIndex, Math.max(0, Math.ceil(t.length / M.pageSize) - 1))
	}, L = {
		...P,
		pageIndex: Math.min(P.pageIndex, Math.max(0, Math.ceil(e.length / P.pageSize) - 1))
	}, [R, B] = (0, Z.useState)(""), [H, U] = (0, Z.useState)(""), [ie, le] = (0, Z.useState)(""), W = rt({
		mutationFn: async (e) => {
			let t = 0;
			for (let n of e) {
				try {
					await pe(n.canonical, n.alias);
				} catch (n) {
					throw t && Ve(), Error(`${Y(n)} (${e.length - t} groups not merged yet)`);
				}
				t += 1;
			}
			return {
				done: t,
				items: e
			};
		},
		onSuccess: (e) => {
			B(""), g({}), Ve(), u(`Merged ${e.done} creator alias groups`);
		},
		onError: (e) => B(Y(e))
	}), ue = rt({
		mutationFn: (e) => pe(e.canonical, e.alias),
		onSuccess: () => {
			B(""), U(""), le(""), Ve(), u("Creator aliases saved");
		},
		onError: (e) => B(Y(e))
	}), fe = rt({
		mutationFn: async (e) => {
			let t = typeof e == "string" ? [e] : e, n = 0;
			try {
				for (let e of t) await He(e), n += 1;
			} catch (e) {
				throw Error(`${Y(e)} (${n} aliases removed, ${t.length - n} not removed)`);
			} finally {
				Ve();
			}
		},
		onSuccess: () => {
			B(""), w({}), u("Creator aliases removed");
		},
		onError: (e) => B(Y(e))
	}), me = (e, t) => {
		e.length && _e({
			title: t ? "Merge all creator aliases" : "Merge selected creator aliases",
			body: `The following ${e.length} creator groups will be merged: ${e.map((e) => `“${e.alias}” into “${e.canonical}”`).join("; ")}.`,
			confirmLabel: t ? "Merge all aliases" : "Merge selected aliases",
			onConfirm: () => W.mutateAsync(e)
		});
	}, he = (e) => void _e({
		title: "Remove creator aliases",
		body: Nt(e),
		confirmLabel: "Remove creator aliases",
		onConfirm: () => fe.mutateAsync(e)
	}), q = (0, Z.useRef)({
		sources: r,
		readOnly: i,
		merging: W.isPending,
		removing: fe.isPending,
		merge: me,
		remove: he,
		rename: m
	});
	q.current = {
		sources: r,
		readOnly: i,
		merging: W.isPending,
		removing: fe.isPending,
		merge: me,
		remove: he,
		rename: m
	};
	let ge = (0, Z.useMemo)(() => {
		let e = ve();
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(ce, {
					table: e.table,
					label: "Select all aliases to merge"
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(_, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					"aria-label": `Select alias ${e.row.original.alias}, into ${e.row.original.canonical}`,
					onChange: (t) => e.row.toggleSelected(t)
				})
			}),
			e.accessor("canonical", {
				header: "Unified name",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ht, {
					sources: q.current.sources,
					name: e.getValue()
				})
			}),
			e.accessor("alias", {
				header: "Platform aliases",
				cell: (e) => e.getValue()
			}),
			e.accessor("evidence", {
				header: "Basis",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary",
					children: e.getValue()
				})
			}),
			e.display({
				id: "actions",
				header: "Actions",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: q.current.readOnly,
					...G(q.current.merging),
					onClick: () => q.current.merge([e.row.original], !1),
					children: "Merge"
				})
			})
		]);
	}, []), ye = (0, Z.useMemo)(() => {
		let e = ve();
		return e.columns([
			e.display({
				id: "select",
				header: ({ table: e }) => /* @__PURE__ */ (0, Q.jsx)(ce, {
					table: e,
					label: "Select all saved aliases"
				}),
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(_, {
					slot: null,
					"aria-label": `Select saved alias ${e.original.canonical_name}`,
					isSelected: e.getIsSelected(),
					onChange: (t) => e.toggleSelected(t)
				})
			}),
			e.accessor("canonical_name", {
				id: "canonical",
				header: "Unified name",
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Ht, {
					sources: q.current.sources,
					name: e.getValue(),
					canonicalKey: e.row.original.canonical_key
				})
			}),
			e.accessor("aliases", {
				header: "Platform aliases",
				sortFn: (e, t) => e.original.aliases.map((e) => e.name).join(" ").localeCompare(t.original.aliases.map((e) => e.name).join(" "), "zh-CN"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "flex flex-wrap items-center gap-1.5",
					children: e.getValue().map((e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-1 rounded-md bg-background-secondary-default px-1.5 py-1 text-caption-1-medium text-text-secondary",
						children: [e.name, /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "xs",
							iconOnly: !0,
							leadingIcon: z,
							"aria-label": `Remove alias ${e.name}`,
							disabled: q.current.readOnly,
							...G(q.current.removing),
							onClick: () => q.current.remove(e.name)
						})]
					}, e.key))
				})
			}),
			e.display({
				id: "actions",
				header: "Actions",
				cell: ({ row: e }) => /* @__PURE__ */ (0, Q.jsx)(h, {
					variant: "secondary",
					size: "small",
					disabled: q.current.readOnly,
					"aria-label": `Change the unified name of ${e.original.canonical_name}`,
					onClick: () => q.current.rename(e.original),
					children: "Change unified name"
				})
			})
		]);
	}, []), J = at({
		features: Pt,
		data: t,
		columns: ge,
		getRowId: Bt,
		state: {
			rowSelection: ee,
			sorting: E,
			pagination: I,
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onRowSelectionChange: (e) => {
			T(), g(e);
		},
		onSortingChange: (e) => {
			D(e), N((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: N,
		enableRowSelection: !0
	}), be = at({
		features: Ft,
		data: e,
		columns: ye,
		getRowId: (e) => e.canonical_key,
		state: {
			rowSelection: v,
			sorting: O,
			pagination: L,
			columnVisibility: f.visibility
		},
		onColumnVisibilityChange: f.change,
		onRowSelectionChange: (e) => {
			re(), w(e);
		},
		enableRowSelection: !0,
		onSortingChange: (e) => {
			A(e), F((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: F
	}), xe = J.getSelectedRowModel().rows.map((e) => e.original), X = be.getSelectedRowModel().rows.flatMap((e) => e.original.aliases.map((e) => e.name)), Se = G(W.isPending);
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: K({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "text-title-2-medium text-text-primary",
				children: "Creator aliases"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(k, { children: "Add alias manually" }), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-end gap-2",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(j, {
							"aria-label": "Unified name",
							placeholder: "The name shown consistently in Peach",
							value: H,
							onChange: U,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(j, {
							"aria-label": "Platform aliases",
							placeholder: "Platform aliases",
							value: ie,
							onChange: le,
							isDisabled: i,
							className: "w-56"
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "primary",
							disabled: i || !H.trim() || !ie.trim(),
							...G(ue.isPending),
							onClick: () => ue.mutate({
								canonical: H.trim(),
								alias: ie.trim()
							}),
							children: "Save alias"
						})
					]
				})]
			}),
			R ? /* @__PURE__ */ (0, Q.jsx)(C, { children: R }) : null,
			t.length ? /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(k, { children: "To merge" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${t.length} groups`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [
								/* @__PURE__ */ (0, Q.jsx)(h, {
									variant: "primary",
									size: "small",
									disabled: i,
									...Se,
									onClick: () => me(t, !0),
									children: `Merge all (${t.length})`
								}),
								/* @__PURE__ */ (0, Q.jsx)(b, {
									label: "Creator aliases to merge",
									sorting: E,
									options: [
										{
											id: "canonical",
											label: "Unified name"
										},
										{
											id: "alias",
											label: "Platform aliases"
										},
										{
											id: "evidence",
											label: "Basis"
										}
									],
									onChange: (e) => {
										D(e), N((e) => ({
											...e,
											pageIndex: 0
										}));
									}
								}),
								/* @__PURE__ */ (0, Q.jsx)(oe, {
									preferences: d,
									label: "Creator aliases to merge"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(V, {
						label: "Bulk actions for aliases to merge",
						visible: xe.length > 0,
						count: `${xe.length} groups selected`,
						children: [/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...Se,
							onClick: () => me(xe, !1),
							children: `Merge selected (${xe.length})`
						}), /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => g({}),
							children: "Clear selection"
						})]
					}),
					/* @__PURE__ */ (0, Q.jsx)(ne, {
						follow: !0,
						preferences: d,
						onRowClick: (e) => J.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(ae, {
							"aria-label": "Creator aliases to merge",
							size: "sm",
							sortDescriptor: E[0] ? {
								column: E[0].id,
								direction: E[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => J.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [J.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [De(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(te, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(se, {
									preferences: d,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": "Row blank area",
								"data-table-space": "",
								width: d.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: J.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: De(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(y, {
						label: "Creator aliases to merge",
						unit: "groups",
						total: t.length,
						pagination: I,
						onChange: N
					})
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-responsive-toolbar": "",
						children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-heading": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(k, { children: "Saved aliases" }), /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								children: `${e.length} groups`
							})]
						}), /* @__PURE__ */ (0, Q.jsxs)("div", {
							"data-toolbar-actions": "",
							children: [/* @__PURE__ */ (0, Q.jsx)(b, {
								label: "Creator aliases saved",
								sorting: O,
								options: [{
									id: "canonical",
									label: "Unified name"
								}, {
									id: "aliases",
									label: "Platform aliases"
								}],
								onChange: (e) => {
									A(e), F((e) => ({
										...e,
										pageIndex: 0
									}));
								}
							}), /* @__PURE__ */ (0, Q.jsx)(oe, {
								preferences: f,
								label: "Creator aliases saved"
							})]
						})]
					}),
					/* @__PURE__ */ (0, Q.jsxs)(V, {
						label: "Saved alias bulk actions",
						visible: X.length > 0,
						count: `${X.length} aliases selected`,
						children: [/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: i,
							...G(fe.isPending),
							onClick: () => void _e({
								title: "Remove selected creator aliases",
								body: `The following ${X.length} aliases will be removed and their sources go back to separate creator groups.`,
								items: X,
								confirmLabel: "Remove selected aliases",
								onConfirm: () => fe.mutateAsync(X)
							}),
							children: `Remove selected aliases (${X.length})`
						}), /* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => w({}),
							children: "Clear selection"
						})]
					}),
					e.length ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(ne, {
						follow: !0,
						preferences: f,
						onRowClick: (e) => be.getRow(e)?.toggleSelected(),
						children: /* @__PURE__ */ (0, Q.jsxs)(ae, {
							"aria-label": "Creator aliases saved",
							size: "sm",
							sortDescriptor: O[0] ? {
								column: O[0].id,
								direction: O[0].desc ? "descending" : "ascending"
							} : void 0,
							onSortChange: (e) => be.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
							children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [be.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "canonical",
								allowsSorting: e.column.getCanSort(),
								...f.columnProps(e.id),
								children: ({ sortDirection: t }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [De(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": t || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(te, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(se, {
									preferences: f,
									id: e.id
								})] })
							}, e.id)), /* @__PURE__ */ (0, Q.jsx)(o, {
								id: "remaining-space",
								"aria-label": "Row blank area",
								"data-table-space": "",
								width: f.spaceWidth,
								minWidth: 0
							})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: be.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
								id: e.id,
								"data-board-selected": e.getIsSelected() || void 0,
								children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: De(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
							}, e.id)) })]
						})
					}), /* @__PURE__ */ (0, Q.jsx)(y, {
						label: "Creator aliases saved",
						unit: "groups",
						total: e.length,
						pagination: L,
						onChange: F
					})] }) : /* @__PURE__ */ (0, Q.jsx)(S, {
						size: "compact",
						icon: de,
						title: "No creator aliases saved yet",
						actions: i ? void 0 : /* @__PURE__ */ (0, Q.jsx)(x, {
							target: "input[aria-label=\"Unified name\"]",
							children: "Add alias"
						}),
						children: "Enter the unified name and the names this creator uses on other platforms."
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsx)(jt, {
				group: p,
				close: () => m(null),
				receipt: u
			})
		]
	});
}
// src/react/follow-manage/feed-sources.tsx
var Wt = et({
	rowPaginationFeature: Je,
	rowSelectionFeature: Ye,
	rowSortingFeature: Xe,
	columnVisibilityFeature: ge,
	sortedRowModel: t(),
	paginatedRowModel: e()
}), Gt = {
	select: "Select",
	name: "Name",
	kind: "Type",
	origin: "Source",
	status: "Status",
	interval: "Frequency",
	fetched: "Last fetched",
	fresh: "Last new",
	actions: "Actions"
}, Kt = /* @__PURE__ */ new Set(["actions"]), qt = Object.entries(Gt).map(([e, t]) => ({
	id: e,
	label: t,
	width: e === "select" ? 48 : e === "name" ? 300 : e === "actions" ? 208 : e === "fetched" ? 200 : 160,
	min: e === "select" ? 48 : e === "actions" ? 200 : e === "name" ? 300 : 112,
	max: e === "select" ? 48 : e === "name" ? 2e3 : 800,
	flex: e === "name",
	required: e === "select" || e === "name"
})), Jt = () => Be.invalidateQueries({
	queryKey: T,
	exact: !0
}), $ = (e) => e.name || e.url;
function Yt(e) {
	try {
		return new URL(e).hostname.replace(/^www\./, "");
	} catch {
		return e;
	}
}
function Xt({ source: e }) {
	return e.enabled ? e.last_error ? /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "rose",
		children: "Fetch failed"
	}) : e.last_fetched_at ? /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "lime",
		children: "Normal"
	}) : /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "gray",
		children: "Not checked"
	}) : /* @__PURE__ */ (0, Q.jsx)(v, {
		variant: "caption",
		color: "gray",
		children: "Paused"
	});
}
function Zt({ source: e }) {
	let t = e.entity_id ? {
		id: e.entity_id,
		has_image: !!e.has_image,
		image_version: e.image_version,
		avatar_focus: e.avatar_focus
	} : null;
	return /* @__PURE__ */ (0, Q.jsx)("span", {
		"aria-hidden": !0,
		className: `relative inline-grid size-8 shrink-0 place-items-center overflow-hidden rounded-full bg-background-tertiary-default text-caption-1-semibold text-text-secondary ${lt}`,
		dangerouslySetInnerHTML: { __html: he($(e), t, null, "performer") }
	});
}
var Qt = (e, t) => e.entity_id !== null && t.has(e.entity_id) && e.page_name && e.page_name !== e.name ? e.page_name : "";
function $t(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let { entity_id: r } of e) r !== null && (t.has(r) ? n.add(r) : t.add(r));
	return n;
}
function en(e, t) {
	let n = e.length === 1 ? e[0] : null;
	return _e({
		title: n ? "Remove feed" : `Remove ${e.length} feeds`,
		body: n ? `The feed “${$(n)}” will be removed and its new releases no longer fetched; releases already fetched are kept.` : "The selected feeds will be removed and their new releases no longer fetched; releases already fetched are kept.",
		confirmLabel: n ? "Remove feed" : "Remove selected feeds",
		danger: !0,
		onConfirm: t
	});
}
function tn({ readOnly: e, toast: t, onAdd: n, selection: r }) {
	let i = it({
		queryKey: T,
		queryFn: ({ signal: e }) => Ce(e)
	}), u = tt(), d = ot("jav-feeds", qt), f = i.data, m = (0, Z.useMemo)(() => f?.sources ?? [], [f]), [ee, v] = (0, Z.useState)(/* @__PURE__ */ new Set()), x = r?.ids ?? ee, w = r?.onChange ?? v, [re, E] = (0, Z.useState)(1), [D, O] = (0, Z.useState)(20), [k, j] = (0, Z.useState)([]), M = Re(m.length, D, re);
	(0, Z.useEffect)(() => {
		E((e) => Math.min(e, M.pages));
	}, [M.pages]), (0, Z.useEffect)(() => {
		w((e) => {
			let t = new Set(m.map((e) => e.id)), n = new Set([...e].filter((e) => t.has(e)));
			return n.size === e.size ? e : n;
		});
	}, [m, w]);
	let P = rt({
		mutationFn: async (e) => {
			let t = await Ie(e.ids, 4, async (t) => {
				e.action === "remove" ? await Ue(t) : await Ze(t, e.action === "enabled");
			});
			return {
				...e,
				results: t
			};
		},
		onSuccess: (e) => {
			let n = e.results.filter((e) => !e.ok), r = e.ids.length - n.length;
			if (w(/* @__PURE__ */ new Set()), Jt(), e.action === "remove" && r && t(`Removed ${r} feeds`), n.length) {
				let e = n[0];
				u.setError(`${n.length} not written: ${e.ok ? "" : Y(e.error)}`);
			}
		},
		onError: (e) => u.setError(Y(e))
	}), F = (0, Z.useMemo)(() => $t(m), [m]), I = (0, Z.useRef)({
		readOnly: e,
		shared: F,
		busy: null,
		toggle: () => {},
		fetch: () => {},
		remove: () => {}
	});
	I.current = {
		readOnly: e,
		shared: F,
		busy: u.busy,
		toggle: (e, t) => void u.run(`enabled-${e.id}`, (n) => Ze(e.id, t, n), () => void Jt()),
		fetch: (e) => void u.run(`check-${e.id}`, (t) => q(t, [e.id]), () => void Jt()),
		remove: (e) => void en([e], async () => {
			await Ue(e.id), t(`Removed feed “${$(e)}”`), Jt();
		})
	};
	let L = (0, Z.useMemo)(() => {
		let e = ve(), t = (e) => () => Gt[e] || e;
		return e.columns([
			e.display({
				id: "select",
				header: (e) => /* @__PURE__ */ (0, Q.jsx)(ce, {
					table: e.table,
					label: "Select all feeds on this page",
					page: !0
				}),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(_, {
					slot: null,
					isSelected: e.row.getIsSelected(),
					onChange: (t) => e.row.toggleSelected(t),
					"aria-label": `Select ${$(e.row.original)}`
				})
			}),
			e.accessor($, {
				id: "name",
				header: t("name"),
				cell: (e) => {
					let t = Qt(e.row.original, I.current.shared);
					return /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "flex items-center gap-2 whitespace-nowrap text-body-medium text-text-primary",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Zt, { source: e.row.original }),
							e.getValue(),
							t ? /* @__PURE__ */ (0, Q.jsx)("span", {
								className: "text-body-2-regular text-text-secondary",
								title: `This page on the site is listed under “${t}”`,
								children: t
							}) : null
						]
					});
				}
			}),
			e.accessor((e) => e.kind_label, {
				id: "kind",
				header: t("kind"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: e.getValue()
				})
			}),
			e.accessor((e) => e.url, {
				id: "origin",
				header: t("origin"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("a", {
					href: e.getValue(),
					target: "_blank",
					rel: "noopener noreferrer",
					title: "Open source page",
					className: "text-text-primary underline-offset-2 hover:underline",
					children: [/* @__PURE__ */ (0, Q.jsx)(U, {
						site: e.row.original.kind.startsWith("javdb") ? "javdb" : Yt(e.getValue()),
						label: Yt(e.getValue())
					}), /* @__PURE__ */ (0, Q.jsx)(ue, {
						"aria-hidden": !0,
						className: "size-(--icon-inline) shrink-0"
					})]
				})
			}),
			e.accessor((e) => e.last_error ? "Fetch failed" : e.enabled ? "Enabled" : "Paused", {
				id: "status",
				header: t("status"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)(Xt, { source: e.row.original })
			}),
			e.accessor((e) => e.interval_minutes, {
				id: "interval",
				header: t("interval"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap",
					children: X(e.getValue())
				})
			}),
			e.accessor((e) => e.last_fetched_at && Date.parse(e.last_fetched_at) || 0, {
				id: "fetched",
				header: t("fetched"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: e.row.original.last_fetched_at ? Pe(e.row.original.last_fetched_at) : "Never fetched"
				})
			}),
			e.accessor((e) => e.last_new_count, {
				id: "fresh",
				header: t("fresh"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "whitespace-nowrap tabular-nums",
					children: `${e.getValue()}`
				})
			}),
			e.display({
				id: "actions",
				header: t("actions"),
				cell: (e) => /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(ie, {
							"aria-label": `Enable ${$(e.row.original)}`,
							isSelected: e.row.original.enabled,
							isDisabled: I.current.readOnly,
							onChange: (t) => I.current.toggle(e.row.original, t)
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: be,
							"aria-label": `Fetch ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							...G(I.current.busy === `check-${e.row.original.id}`),
							onClick: () => I.current.fetch(e.row.original)
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							iconOnly: !0,
							leadingIcon: N,
							"aria-label": `Remove ${$(e.row.original)}`,
							disabled: I.current.readOnly,
							onClick: () => I.current.remove(e.row.original)
						})
					]
				})
			})
		]);
	}, []), z = (0, Z.useMemo)(() => Object.fromEntries([...x].map((e) => [String(e), !0])), [x]), B = at({
		features: Wt,
		data: m,
		columns: L,
		getRowId: (e) => String(e.id),
		state: {
			rowSelection: z,
			sorting: k,
			pagination: {
				pageIndex: M.page - 1,
				pageSize: D
			},
			columnVisibility: d.visibility
		},
		onColumnVisibilityChange: d.change,
		onSortingChange: (e) => {
			j(e), E(1);
		},
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			r?.onActivate();
			let t = typeof e == "function" ? e(z) : e;
			w(new Set(Object.entries(t).filter(([, e]) => e).map(([e]) => Number(e))));
		}
	});
	if (!f) return i.error ? /* @__PURE__ */ (0, Q.jsx)(R, {
		tone: "error",
		title: "Can't open feeds",
		children: Y(i.error)
	}) : /* @__PURE__ */ (0, Q.jsx)(A, { children: "Loading feeds." });
	let H = () => void u.run("check", (e) => q(e), () => void Jt()), le = (e) => {
		r?.onActivate(), w((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}, W = m.filter((e) => x.has(e.id)), de = m.filter((e) => e.last_error);
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)("section", {
			"aria-label": "JAV subscription list",
			className: K({
				padding: "none",
				className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
			}),
			children: [
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-responsive-toolbar": "",
					children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-heading": "",
						children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
							className: "text-title-2-medium text-text-primary",
							children: "JAV feeds"
						}), /* @__PURE__ */ (0, Q.jsx)("span", {
							className: "text-body-2-regular text-text-secondary",
							children: `${m.length.toLocaleString()} feeds · ${(Number(f.unread) || 0).toLocaleString()} unwatched`
						})]
					}), /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-toolbar-actions": "",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(h, {
								onClick: H,
								disabled: e,
								...G(u.busy === "check"),
								children: "Fetch now"
							}),
							/* @__PURE__ */ (0, Q.jsx)(oe, {
								preferences: d,
								label: "JAV feeds"
							}),
							/* @__PURE__ */ (0, Q.jsx)(b, {
								label: "JAV feeds",
								sorting: k,
								onChange: (e) => {
									j(e), E(1);
								},
								options: [
									"name",
									"kind",
									"origin",
									"status",
									"interval",
									"fetched",
									"fresh"
								].map((e) => ({
									id: e,
									label: Gt[e]
								}))
							})
						]
					})]
				}),
				de.length || u.error ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [de.length ? /* @__PURE__ */ (0, Q.jsx)(R, {
						tone: "error",
						title: `${de.length.toLocaleString()} feeds failed to fetch`,
						extra: /* @__PURE__ */ (0, Q.jsx)("ul", {
							className: "flex flex-col gap-0.5 text-body-2-regular",
							children: de.map((e) => /* @__PURE__ */ (0, Q.jsx)("li", {
								className: "min-w-0 truncate",
								title: e.last_error || "",
								children: `${$(e)}: ${xe(e.last_error || "") || "No reason given"}`
							}, e.id))
						}),
						children: "These feeds got no new entries this round."
					}) : null, u.error ? /* @__PURE__ */ (0, Q.jsx)(C, { children: u.error }) : null]
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(V, {
					visible: W.length > 0,
					label: "Feed bulk actions",
					count: `${W.length} feeds selected`,
					children: [
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(P.isPending),
							onClick: () => P.mutate({
								ids: W.map((e) => e.id),
								action: "enabled"
							}),
							children: "Enabled"
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "secondary",
							size: "small",
							disabled: e,
							...G(P.isPending),
							onClick: () => P.mutate({
								ids: W.map((e) => e.id),
								action: "paused"
							}),
							children: "Pause"
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "danger",
							size: "small",
							disabled: e,
							...G(P.isPending),
							onClick: () => void en(W, () => P.mutateAsync({
								ids: W.map((e) => e.id),
								action: "remove"
							})),
							children: "Remove"
						}),
						/* @__PURE__ */ (0, Q.jsx)(h, {
							variant: "ghost",
							size: "small",
							onClick: () => w(/* @__PURE__ */ new Set()),
							children: "Clear selection"
						})
					]
				}),
				m.length ? /* @__PURE__ */ (0, Q.jsx)(ne, {
					follow: !0,
					preferences: d,
					onRowClick: (e) => le(Number(e)),
					children: /* @__PURE__ */ (0, Q.jsxs)(ae, {
						"aria-label": "JAV feeds",
						size: "sm",
						sortDescriptor: k[0] ? {
							column: k[0].id,
							direction: k[0].desc ? "descending" : "ascending"
						} : void 0,
						onSortChange: (e) => B.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
						children: [/* @__PURE__ */ (0, Q.jsxs)(l, { children: [B.getHeaderGroups()[0].headers.map((e) => {
							let t = De(e.column.columnDef.header, e.getContext());
							return /* @__PURE__ */ (0, Q.jsx)(o, {
								id: e.id,
								isRowHeader: e.column.id === "name",
								allowsSorting: e.column.getCanSort(),
								...d.columnProps(e.id),
								children: ({ sortDirection: n }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [Kt.has(e.column.id) ? /* @__PURE__ */ (0, Q.jsx)(p, { children: t }) : /* @__PURE__ */ (0, Q.jsxs)("span", {
									className: "flex items-center gap-0.5",
									children: [t, e.column.getCanSort() ? /* @__PURE__ */ (0, Q.jsx)("span", {
										"data-sort-indicator": !0,
										"data-direction": n || void 0,
										children: /* @__PURE__ */ (0, Q.jsx)(te, {})
									}) : null]
								}), /* @__PURE__ */ (0, Q.jsx)(se, {
									preferences: d,
									id: e.id
								})] })
							}, e.id);
						}), /* @__PURE__ */ (0, Q.jsx)(o, {
							id: "remaining-space",
							"aria-label": "Row blank area",
							"data-table-space": "",
							width: d.spaceWidth,
							minWidth: 0
						})] }), /* @__PURE__ */ (0, Q.jsx)(a, { children: B.getRowModel().rows.map((e) => /* @__PURE__ */ (0, Q.jsxs)(s, {
							id: e.id,
							"data-follow-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, Q.jsx)(c, { children: De(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, Q.jsx)(c, { "data-table-space": "" })]
						}, e.id)) })]
					})
				}) : /* @__PURE__ */ (0, Q.jsx)(S, {
					icon: g,
					title: "No feeds yet",
					size: "compact",
					actions: e ? void 0 : /* @__PURE__ */ (0, Q.jsx)(h, {
						variant: "secondary",
						onClick: n,
						children: "Add subscription"
					}),
					children: "Add by actress name under “Add follows”, or click “Subscribe to new releases” on a person's page."
				}),
				m.length ? /* @__PURE__ */ (0, Q.jsx)(y, {
					label: "JAV subscriptions",
					total: M.total,
					unit: "feeds",
					pagination: {
						pageIndex: M.page - 1,
						pageSize: D
					},
					onChange: (e) => {
						O(e.pageSize), E(e.pageIndex + 1);
					}
				}) : null,
				/* @__PURE__ */ (0, Q.jsx)("footer", {
					className: "-mx-6 -mb-5 flex flex-wrap items-center gap-2 border-t border-separator-border rounded-b-2xl bg-card-footer px-6 py-4 max-sm:-mx-4 max-sm:px-4",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						role: "status",
						className: "mr-auto text-body-2-regular text-text-secondary",
						children: `Unwatched ${(Number(f.unread) || 0).toLocaleString()} · enabled ${m.filter((e) => e.enabled).length.toLocaleString()} / ${m.length.toLocaleString()}`
					})
				})
			]
		})
	});
}
// src/react/follow-manage/follow-manage-page.tsx
var nn = (e) => D.some(([t]) => t === e);
function rn({ term: e, figure: t, unit: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: K({
			padding: "none",
			className: "flex flex-col gap-3 px-6 py-5 max-sm:gap-2 max-sm:p-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "text-body-medium text-text-secondary",
			children: e
		}), /* @__PURE__ */ (0, Q.jsxs)("b", {
			"data-follow-reading": "",
			className: `flex min-w-0 flex-wrap items-baseline gap-x-1 tabular-nums text-text-primary ${t >= 1e6 ? "text-headline-medium" : t >= 1e5 ? "text-title-3-medium" : "text-title-1-medium"}`,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "min-w-0 wrap-anywhere",
				children: t.toLocaleString()
			}), /* @__PURE__ */ (0, Q.jsx)("small", {
				className: "whitespace-nowrap text-body-2-regular text-text-secondary",
				children: ` ${n}`
			})]
		})]
	});
}
function an(e) {
	let { route: t, savePreference: n, toast: r, openFollow: i, readOnly: a, readOnlyMessage: o, writerUrl: s } = e, [c, l] = (0, Z.useState)(nn(e.tab) ? e.tab : "list"), [p, m] = (0, Z.useState)(Math.max(1, Math.floor(e.page) || 1)), [h, g] = (0, Z.useState)(() => qe(e.sort, e.dir).sort), [_, te] = (0, Z.useState)(() => qe(e.sort, e.dir).dir), [v, y] = (0, Z.useState)(Me(e.layout) ? e.layout : "default"), [ne, b] = (0, Z.useState)(Le(e.pageSize)), [x, S] = (0, Z.useState)(/* @__PURE__ */ new Set()), [C, O] = (0, Z.useState)(/* @__PURE__ */ new Set()), k = it({
		queryKey: E,
		queryFn: ({ signal: e }) => we(e)
	}), A = it({
		queryKey: re,
		queryFn: ({ signal: e }) => Se(e)
	}), j = it({
		queryKey: T,
		queryFn: ({ signal: e }) => Ce(e)
	}), M = k.data || { sources: [] }, N = A.data || {
		root: "",
		providers: []
	}, P = M.sources;
	(0, Z.useEffect)(() => {
		S((e) => {
			let t = Ne(e, P);
			return t.size === e.size ? e : t;
		});
	}, [P]);
	let F = (e) => {
		let n = e.sort ?? h, r = e.dir ?? _;
		t({
			tab: e.tab ?? c,
			page: e.page ?? p,
			sort: n === "checked" ? "" : n,
			dir: r === B[n] ? "" : r
		});
	}, I = Ae(P), L = P.filter(je).length, z = P.filter((e) => e.enabled).length, V = (N.providers || []).filter((e) => e.requirement === "required" && !ye(e)).length, H = new Set((j.data?.sources || []).map((e) => e.entity_id ?? `source-${e.id}`)).size;
	return /* @__PURE__ */ (0, Q.jsxs)(st, { children: [
		a ? /* @__PURE__ */ (0, Q.jsx)(R, {
			tone: "warning",
			title: "Browse-only on this device",
			extra: s ? /* @__PURE__ */ (0, Q.jsx)("p", {
				className: "text-body-2-regular",
				children: /* @__PURE__ */ (0, Q.jsx)(w, {
					href: s,
					children: "Manage follows on the writer"
				})
			}) : void 0,
			children: o
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: ct,
			"aria-label": "Follow overview",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "Followed creators",
					figure: I.length,
					unit: "people"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "Enabled sources",
					figure: z,
					unit: `/ ${P.length}`
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "Check failed",
					figure: L,
					unit: "sources"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "Unwatched updates",
					figure: M.counts?.new || 0,
					unit: "items"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "JAV subscriptions",
					figure: H,
					unit: "people"
				}),
				/* @__PURE__ */ (0, Q.jsx)(rn, {
					term: "Unwatched releases",
					figure: j.data?.unread || 0,
					unit: "items"
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsxs)(f, {
			selectedKey: c,
			onSelectionChange: (e) => {
				let t = String(e);
				nn(t) && (S(/* @__PURE__ */ new Set()), O(/* @__PURE__ */ new Set()), l(t), F({ tab: t }));
			},
			className: "flex flex-col gap-6",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(ut, {
					"aria-label": "Follow management areas",
					"data-section-nav": !0,
					"data-section-items": !0,
					className: "flex max-w-full flex-nowrap overflow-x-auto",
					children: D.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(d, {
						id: e,
						"data-pill-selected": c === e ? "" : void 0,
						"data-pill-variant": "gray",
						className: "cursor-pointer whitespace-nowrap",
						children: t
					}, e))
				}),
				/* @__PURE__ */ (0, Q.jsxs)(u, {
					id: "list",
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, Q.jsx)(tn, {
						readOnly: a,
						toast: r,
						onAdd: () => {
							l("add"), F({ tab: "add" });
						},
						selection: {
							ids: C,
							onChange: O,
							onActivate: () => S(/* @__PURE__ */ new Set())
						}
					}), /* @__PURE__ */ (0, Q.jsx)(pt, {
						data: M,
						sort: h,
						dir: _,
						page: p,
						layout: v,
						pageSize: ne,
						selected: x,
						readOnly: a,
						toast: r,
						openFollow: i,
						onAdd: () => {
							l("add"), F({ tab: "add" });
						},
						onSort: (e, t) => {
							g(e), te(t), m(1), F({
								sort: e,
								dir: t,
								page: 1
							});
						},
						onPage: (e) => {
							m(e), F({ page: e });
						},
						onSelected: (e) => {
							S(e), O(/* @__PURE__ */ new Set());
						},
						onLayout: (e) => {
							y(e), m(1), n({ layout: e }), F({ page: 1 });
						},
						onPageSize: (e) => {
							b(e), m(1), n({ pageSize: e }), F({ page: 1 });
						}
					})]
				}),
				/* @__PURE__ */ (0, Q.jsxs)(u, {
					id: "add",
					className: "flex flex-col gap-8",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(Tt, {
							data: M,
							credentials: N,
							readOnly: a,
							toast: r
						}),
						/* @__PURE__ */ (0, Q.jsx)(At, {
							readOnly: a,
							toast: r,
							onAdded: () => {
								j.refetch(), l("list"), F({ tab: "list" });
							}
						}),
						/* @__PURE__ */ (0, Q.jsx)(Ut, {
							groups: M.author_aliases || [],
							readOnly: a,
							toast: r,
							suggestions: M.alias_suggestions || [],
							sources: M.sources
						})
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(u, {
					id: "tags",
					className: "flex flex-col gap-4",
					children: /* @__PURE__ */ (0, Q.jsx)(le, { scope: "online" })
				})
			]
		}),
		/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsxs)(ee, {
			variant: "secondary",
			href: "/settings/subscriptions",
			children: ["Source and subscription settings", V ? ` (${V})` : ""]
		}) })
	] });
}
export { an as FollowManagePage };

//# debugId=3e6003d5-f7d7-44ec-9afa-722204af8652