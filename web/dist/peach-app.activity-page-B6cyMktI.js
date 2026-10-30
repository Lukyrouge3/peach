(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "567150d6-8d7f-4f4f-8f22-9beb4db3ff68", e._sentryDebugIdIdentifier = "sentry-dbid-567150d6-8d7f-4f4f-8f22-9beb4db3ff68");
	} catch {}
})();
import { Button as e, Chip as t, Disclosure as n, DownloadsPanel as r, EmptyState as i, LinkButton as a, LoadingDots as o, Note as s, Progress as c, TASKS_KEY as l, TRIGGER_LABELS as u, __toESM as d, apiGet as f, apiSend as p, busyProps as m, cardClass as h, elapsedText as g, errorMessage as _, f1 as ee, fetchEarlier as v, fetchTasks as te, foldByKind as ne, foldRoutine as y, followupDetail as b, followupTally as x, groupFollowups as re, hasResultProblems as S, i2 as C, isActive as w, isRoutine as ie, latestOfKind as ae, mergeFinished as T, momentText as E, pollInterval as oe, problemDestination as D, progressText as O, require_jsx_runtime as k, require_react as A, statusLabel as j, summaryItems as M, taskIssues as N, uo as se, useMutation as P, useQuery as F, useQueryClient as I } from "./peach-app.js";
import { CodeBlock as L } from "./peach-app.code-block-B--CBV66.js";
import { Page as R } from "./peach-app.page-QAncjzM1.js";
import { ErrorDetails as z, ErrorExcerpt as B } from "./peach-app.error-excerpt-CprIeeZk.js";
// src/react/activity/background-issues.tsx
var V = /* @__PURE__ */ d(A(), 1), H = k(), U = ["background-issues"];
function ce() {
	let e = (0, V.useId)(), t = F({
		queryKey: U,
		queryFn: ({ signal: e }) => f("/api/background-issues", e),
		refetchInterval: 3e4
	}).data?.issues || [];
	return t.length ? /* @__PURE__ */ (0, H.jsxs)("section", {
		"aria-labelledby": e,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, H.jsx)("h3", {
			id: e,
			className: "text-title-2-medium text-text-primary",
			children: "Needs attention"
		}), /* @__PURE__ */ (0, H.jsx)("ul", {
			className: "flex min-w-0 flex-col gap-3",
			children: t.map((e) => /* @__PURE__ */ (0, H.jsx)("li", { children: /* @__PURE__ */ (0, H.jsx)(W, { issue: e }) }, e.key))
		})]
	}) : null;
}
function W({ issue: t }) {
	let n = I(), r = P({
		mutationFn: () => p(t.retry, {}),
		onSuccess: () => {
			n.invalidateQueries({ queryKey: U });
		}
	}), i = t.since ? `Since ${E(t.since)}` : `Noticed ${E(t.noticed_at)}`;
	return /* @__PURE__ */ (0, H.jsx)(s, {
		tone: "error",
		title: t.title,
		action: /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, H.jsx)(a, {
				href: t.href,
				size: "small",
				trailingIcon: C,
				children: t.link_label
			}), t.retry ? /* @__PURE__ */ (0, H.jsx)(e, {
				variant: "secondary",
				size: "small",
				disabled: !t.retry_available,
				...m(r.isPending),
				onClick: () => r.mutate(),
				children: "Retry now"
			}) : null]
		}),
		children: r.error ? `${i}\nNot retrying: ${_(r.error)}` : i
	});
}
// src/react/activity/activity-page.tsx
var G = 50, le = /* @__PURE__ */ new Set(["upgrade-repairs"]), K = {
	succeeded: "lime",
	failed: "rose",
	cancelled: "neutral",
	interrupted: "yellow",
	running: "blue",
	pending: "neutral"
};
function q({ run: e }) {
	let n = e.status === "failed" && e.task_key === "library-processing" && e.result_summary?.outcome === "partial", r = n || e.status === "succeeded" && S(e);
	return /* @__PURE__ */ (0, H.jsx)(t, {
		color: r ? "yellow" : K[e.status] ?? "neutral",
		children: n ? "Some items need attention" : r ? "Issues found" : j(e.status)
	});
}
function J({ rows: e }) {
	return /* @__PURE__ */ (0, H.jsx)("ul", {
		className: "flex min-w-0 flex-col",
		children: e.map((e) => {
			let t = b(e);
			return /* @__PURE__ */ (0, H.jsxs)("li", {
				"data-status": e.status,
				"data-followup-key": e.followup_key,
				className: "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 border-t border-separator-border px-5 py-2.5",
				children: [
					/* @__PURE__ */ (0, H.jsx)("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-primary",
						children: e.task_label
					}),
					/* @__PURE__ */ (0, H.jsx)(q, { run: e }),
					t ? /* @__PURE__ */ (0, H.jsx)("span", {
						className: "min-w-0 break-words text-caption-1-regular text-text-secondary",
						children: t
					}) : null,
					Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, H.jsx)("div", {
						className: "w-full min-w-0",
						children: /* @__PURE__ */ (0, H.jsx)(n, {
							summary: "Technical details",
							contentClassName: "pb-2.5",
							children: /* @__PURE__ */ (0, H.jsx)(L, {
								code: JSON.stringify(e.result_summary, null, 2),
								language: "json",
								label: `${e.task_label} technical details`
							})
						})
					}) : null
				]
			}, e.id);
		})
	});
}
function Y({ run: e, meta: t, children: r, footer: i, followups: a, followupTotal: o = 0, badge: s }) {
	let c = (e) => e.status === "running" ? 3 : e.status === "pending" ? 2 : +(e.status === "failed" || e.status === "interrupted"), l = a ? [...a].sort((e, t) => c(t) - c(e) || t.id - e.id).slice(0, G) : [], u = l.length, d = Math.max(a?.length || 0, o);
	return /* @__PURE__ */ (0, H.jsxs)("li", {
		id: `run-${e.id}`,
		"data-status": e.status,
		"data-task-key": e.task_key,
		"data-run-id": e.id,
		className: h({
			padding: "none",
			bordered: "line",
			className: e.status === "failed" ? "flex flex-col border-border-error-default" : "flex flex-col"
		}),
		children: [
			/* @__PURE__ */ (0, H.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-4",
				children: [
					/* @__PURE__ */ (0, H.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, H.jsx)("strong", {
							className: "min-w-0 break-words text-title-3-medium text-text-primary",
							children: e.task_label
						}), s ?? /* @__PURE__ */ (0, H.jsx)(q, { run: e })]
					}),
					/* @__PURE__ */ (0, H.jsx)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: t
					}),
					r
				]
			}),
			u ? /* @__PURE__ */ (0, H.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, H.jsxs)(n, {
					summary: `Task details · ${d.toLocaleString()} items`,
					contentClassName: "pb-2.5",
					defaultOpen: l.some((e) => w(e)),
					children: [u < d ? /* @__PURE__ */ (0, H.jsxs)("p", {
						className: "text-caption-1-regular text-text-secondary",
						children: [
							"Listing ",
							u.toLocaleString(),
							" of them, with items in progress first"
						]
					}) : null, /* @__PURE__ */ (0, H.jsx)(J, { rows: l })]
				})
			}) : null,
			Object.keys(e.result_summary || {}).length ? /* @__PURE__ */ (0, H.jsx)("div", {
				className: "border-t border-separator-border px-5 py-2.5",
				children: /* @__PURE__ */ (0, H.jsx)(n, {
					summary: "Technical details",
					contentClassName: "pb-2.5",
					children: /* @__PURE__ */ (0, H.jsx)(L, {
						code: JSON.stringify(e.result_summary, null, 2),
						language: "json",
						label: `${e.task_label} technical details`
					})
				})
			}) : null,
			i ? /* @__PURE__ */ (0, H.jsx)("div", {
				className: "flex min-h-14 flex-col justify-center rounded-b-2xl border-t border-separator-border bg-card-footer px-5 py-3",
				children: /* @__PURE__ */ (0, H.jsx)(B, {
					text: i,
					className: "text-caption-1-regular text-text-secondary"
				})
			}) : null
		]
	});
}
function ue({ run: e, followups: t }) {
	let n = e.progress_total || 0, r = e.progress_current || 0, i = e.progress_label || "In progress", a = g(e.elapsed_seconds), s = [u[e.trigger] || e.trigger, a && `Running for ${a}`].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, H.jsx)(Y, {
		run: e,
		meta: s,
		followups: t,
		children: n > 0 ? /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, H.jsx)(c, {
				label: i,
				value: Math.min(r, n),
				max: n
			}), /* @__PURE__ */ (0, H.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: [
					i,
					" · ",
					O(r, n),
					" items"
				]
			})]
		}) : /* @__PURE__ */ (0, H.jsx)(o, { label: i })
	});
}
function X({ run: e, followups: r, runs: i, latest: o, followupTotal: s, followupFailed: c = 0 }) {
	let l = !!(i && i.length > 1 && s), d = l ? [`Processed ${s.toLocaleString()} items`, c ? `${c.toLocaleString()} of them failed` : ""].filter(Boolean) : M(e.result_summary).filter((t) => t !== e.error), f = N(e), p = D(e, o), m = g(e.elapsed_seconds), h = i && i.length > 1 ? i[i.length - 1] : void 0, _ = (h ? [
		u[e.trigger] || e.trigger,
		`Last ${i.length} runs`,
		`${E(h.finished_at)} – ${E(e.finished_at)}`
	] : [
		u[e.trigger] || e.trigger,
		E(e.finished_at),
		m && `Took ${m}`
	]).filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, H.jsxs)(Y, {
		run: e,
		meta: _,
		footer: e.error,
		followups: r,
		followupTotal: s,
		badge: l && c ? /* @__PURE__ */ (0, H.jsx)(t, {
			color: "yellow",
			children: "Issues found"
		}) : void 0,
		children: [
			d.length === 1 ? /* @__PURE__ */ (0, H.jsx)("p", {
				className: "text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d[0]
			}) : d.length ? /* @__PURE__ */ (0, H.jsx)("ul", {
				className: "flex list-disc flex-col gap-1 pl-5 text-caption-1-regular text-text-secondary wrap-anywhere",
				children: d.map((e, t) => /* @__PURE__ */ (0, H.jsx)("li", { children: e }, t))
			}) : null,
			f.length ? /* @__PURE__ */ (0, H.jsx)(n, {
				summary: `Issue details · ${f.length} items`,
				contentClassName: "pt-2",
				children: /* @__PURE__ */ (0, H.jsx)(z, {
					label: "Task issue details",
					children: /* @__PURE__ */ (0, H.jsx)("ul", {
						className: "flex min-w-0 flex-col gap-3",
						"data-task-issues": "",
						children: f.map((e, t) => /* @__PURE__ */ (0, H.jsxs)("li", {
							className: "flex min-w-0 flex-col gap-1 text-body-2-regular wrap-anywhere",
							children: [/* @__PURE__ */ (0, H.jsx)("p", {
								className: "text-body-regular text-text-primary",
								children: [
									e.label,
									e.provider,
									e.kind
								].filter(Boolean).join(" · ")
							}), /* @__PURE__ */ (0, H.jsx)(B, {
								text: e.error,
								className: "text-text-primary"
							})]
						}, `${e.source}-${t}`))
					})
				})
			}) : S(e) && ["follow-check", "feed-check"].includes(e.task_key) ? /* @__PURE__ */ (0, H.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: "Per-item details for this run weren't obtained; check results in the source list."
			}) : null,
			p ? /* @__PURE__ */ (0, H.jsx)(a, {
				href: p.href,
				size: "small",
				trailingIcon: C,
				className: "self-start",
				children: p.label
			}) : null
		]
	});
}
function de({ runs: e, followups: n, counts: r }) {
	let i = e[0], a = e[e.length - 1], o = x(r, e), s = Math.max(o.total, n.length), l = o.total ? o.settled : n.filter((e) => !w(e)).length, d = o.total ? o.failed : n.filter((e) => e.status === "failed" || e.status === "interrupted").length, f = [
		u[i.trigger] || i.trigger,
		e.length > 1 ? `${e.length} batches` : "",
		`Started ${E(a.started_at || a.finished_at)}`
	].filter(Boolean).join(" · ");
	return /* @__PURE__ */ (0, H.jsx)(Y, {
		run: i,
		meta: f,
		followups: n,
		followupTotal: s,
		badge: /* @__PURE__ */ (0, H.jsx)(t, {
			color: "blue",
			children: "Running"
		}),
		children: /* @__PURE__ */ (0, H.jsxs)("div", {
			className: "flex flex-col gap-1.5",
			children: [/* @__PURE__ */ (0, H.jsx)(c, {
				label: `${i.task_label} progress`,
				value: l,
				max: s
			}), /* @__PURE__ */ (0, H.jsxs)("p", {
				className: "text-caption-1-regular text-text-secondary",
				children: [
					"Done ",
					O(l, s),
					" items ",
					d ? ` · ${d.toLocaleString()} of them failed` : ""
				]
			})]
		})
	});
}
function Z({ title: e, children: t }) {
	let n = (0, V.useId)();
	return /* @__PURE__ */ (0, H.jsxs)("section", {
		"aria-labelledby": n,
		className: "flex min-w-0 flex-col gap-3",
		children: [/* @__PURE__ */ (0, H.jsx)("h3", {
			id: n,
			className: "text-title-2-medium text-text-primary",
			children: e
		}), t]
	});
}
function Q({ live: e = !1, children: t }) {
	return /* @__PURE__ */ (0, H.jsx)("ul", {
		"aria-live": e ? "polite" : void 0,
		className: "flex min-w-0 flex-col gap-3",
		children: t
	});
}
function $() {
	let t = F({
		queryKey: l,
		queryFn: ({ signal: e }) => te(e),
		refetchInterval: (e) => oe(e.state.data)
	}), n = t.data, a = n?.finished, [o, c] = (0, V.useState)([]), [u, d] = (0, V.useState)(!1), [f, p] = (0, V.useState)({}), [h, g] = (0, V.useState)(a);
	a !== h && (g(a), o.length && h && c(T(o, h)));
	let b = P({
		mutationFn: ({ oldest: e }) => v(e),
		onSuccess: (e, { shown: t }) => {
			c((n) => T(n, t, e.finished || [])), d(!!e.finished_has_more), p((t) => ({
				...t,
				...e.followup_counts
			}));
		}
	}), C = t.error ? _(t.error) : "";
	if (!n) return /* @__PURE__ */ (0, H.jsx)(R, { children: /* @__PURE__ */ (0, H.jsx)(s, {
		tone: "error",
		children: C || "Couldn't load the task center"
	}) });
	let E = T(n.finished || [], o), D = n.working_parents || [], O = [
		...n.running || [],
		...n.skipped || [],
		...E,
		...D
	], k = re(O), A = new Set(O.map((e) => e.id)), j = (e) => e.filter((e) => !(e.followup_key && e.parent_run_id != null && A.has(e.parent_run_id))), M = j(E), N = M[M.length - 1], I = !!N && (o.length ? u : !!n.finished_has_more), L = () => {
		!b.isPending && N && b.mutate({
			oldest: N,
			shown: E
		});
	}, z = {
		...f,
		...n.followup_counts
	}, B = (e) => e.flatMap((e) => k.get(e.id) || []), U = [...M, ...j(D)].filter((e) => x(z, [e]).active > 0 || k.get(e.id)?.some(w)).sort((e, t) => t.id - e.id), W = j(n.running || []), G = j(n.skipped || []), K = M.filter((e) => !U.includes(e) && !G.some((t) => t.id === e.id)), q = (e) => (k.get(e.id) || []).every((e) => e.status === "succeeded" && !S(e)) && x(z, [e]).failed === 0, J = y(K, (e) => ie(e) && (q(e) || le.has(e.task_key))), Y = ae(O), $ = !W.length && !U.length && !G.length && !K.length;
	return /* @__PURE__ */ (0, H.jsxs)(R, { children: [
		C ? /* @__PURE__ */ (0, H.jsx)(s, {
			tone: "error",
			children: C
		}) : null,
		n.available === !1 ? /* @__PURE__ */ (0, H.jsx)(s, {
			tone: "warning",
			children: n.message || "The database's task record table isn't ready yet"
		}) : null,
		/* @__PURE__ */ (0, H.jsx)(ce, {}),
		$ ? /* @__PURE__ */ (0, H.jsx)(i, {
			icon: se,
			title: "No task records yet",
			children: "Once scans, update checks, bulk actions and command-line batches run, their progress and results show up here."
		}) : /* @__PURE__ */ (0, H.jsxs)(H.Fragment, { children: [
			/* @__PURE__ */ (0, H.jsx)(Z, {
				title: "In progress",
				children: W.length || U.length ? /* @__PURE__ */ (0, H.jsxs)(Q, {
					live: !0,
					children: [W.map((e) => /* @__PURE__ */ (0, H.jsx)(ue, {
						run: e,
						followups: k.get(e.id)
					}, e.id)), ne(U).map(({ run: e, runs: t }) => /* @__PURE__ */ (0, H.jsx)(de, {
						runs: t,
						followups: B(t),
						counts: z
					}, e.id))]
				}) : /* @__PURE__ */ (0, H.jsx)(s, {
					tone: "neutral",
					children: "No tasks running."
				})
			}),
			G.length ? /* @__PURE__ */ (0, H.jsx)(Z, {
				title: "Not run this time",
				children: /* @__PURE__ */ (0, H.jsx)(Q, { children: G.map((e) => /* @__PURE__ */ (0, H.jsx)(X, {
					run: e,
					latest: Y.has(e.id),
					followups: k.get(e.id)
				}, e.id)) })
			}) : null,
			K.length || I ? /* @__PURE__ */ (0, H.jsxs)(Z, {
				title: "Recently finished",
				children: [
					K.length ? /* @__PURE__ */ (0, H.jsx)(Q, { children: J.map(({ run: e, runs: t }) => {
						let n = x(z, t);
						return /* @__PURE__ */ (0, H.jsx)(X, {
							run: e,
							runs: t,
							latest: Y.has(e.id),
							followups: B(t),
							followupTotal: n.total,
							followupFailed: n.failed
						}, e.id);
					}) }) : null,
					b.error ? /* @__PURE__ */ (0, H.jsx)(s, {
						tone: "error",
						children: _(b.error)
					}) : null,
					I ? /* @__PURE__ */ (0, H.jsx)(e, {
						variant: "secondary",
						size: "small",
						leadingIcon: ee,
						className: "self-start",
						...m(b.isPending),
						onClick: L,
						children: "Load earlier"
					}) : null
				]
			}) : null
		] }),
		/* @__PURE__ */ (0, H.jsx)(r, {})
	] });
}
export { $ as ActivityPage };

//# debugId=567150d6-8d7f-4f4f-8f22-9beb4db3ff68