(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "206f307d-a881-47cc-b972-3727e8e520a8", e._sentryDebugIdIdentifier = "sentry-dbid-206f307d-a881-47cc-b972-3727e8e520a8");
	} catch {}
})();
import { Button as e, CollectionSummary as t, DUPLICATES_KEY as n, EmptyState as r, FilterGlass as i, GlassPill as a, KEEP_LABELS as o, LOC as s, MEDIA_SOURCES_KEY as c, MEDIA_SOURCE_ICONS as l, Note as u, SourceLabel as d, SourceMark as f, TRASH_KEY as p, __toESM as m, batchOperate as h, bulkCloudPreferences as g, busyProps as _, cardClass as v, cloudLocations as y, confirmModal as b, distinctName as x, duplicateVictims as S, errorMessage as C, fetchDuplicates as w, fetchMediaSources as T, fmtDur as E, fmtSize as D, mixedCloudPreferences as O, queryClient as k, require_jsx_runtime as A, require_react as j, sharedNamePrefix as M, spriteGlyph as N, useMutation as P, useQuery as F, victimBytes as I } from "./peach-app.js";
// src/react/duplicates/duplicates-page.tsx
var L = /* @__PURE__ */ m(j(), 1), R = A(), z = N("play"), B = N("file-stack"), V = v({
	padding: "none",
	radius: "surface",
	className: "mb-6 overflow-hidden dark:bg-background-primary-default"
}), H = "rounded-sm px-1.5 py-px text-caption-1-regular leading-5", U = "rounded-sm px-2 py-0.5 text-caption-1-regular leading-5", W = "font-mono text-caption-1-regular leading-5 text-text-secondary", G = () => {
	k.invalidateQueries({
		queryKey: n,
		exact: !0
	}), k.invalidateQueries({
		queryKey: p,
		exact: !0
	});
};
function K(e) {
	return e.identical ? /* @__PURE__ */ (0, R.jsx)("span", {
		className: `${U} text-(--keep)`,
		children: "Same sha1"
	}) : /* @__PURE__ */ (0, R.jsx)("span", {
		className: `${U} text-text-secondary`,
		children: e.evidence === "same_code_short_copy" ? "Shorter version, same code" : "Inferred from duration"
	});
}
function q({ file: e, prefix: t, openItem: n }) {
	let r = () => n(e.id), i = s[e.location] || e.location || e.drive;
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "duplicate-row items-center gap-3 border-t border-separator-border px-5 py-4 max-compact:p-4",
		children: [
			/* @__PURE__ */ (0, R.jsxs)("button", {
				type: "button",
				onClick: r,
				"aria-label": `Preview ${e.name}`,
				className: "relative row-span-2 inline-grid aspect-16/10 w-full cursor-pointer place-items-center overflow-hidden rounded-2lg bg-background-tertiary-default text-text-secondary",
				children: [/* @__PURE__ */ (0, R.jsx)(z, {
					"aria-hidden": !0,
					className: "size-6"
				}), /* @__PURE__ */ (0, R.jsx)("img", {
					src: `/thumb?id=${e.id}&c=4`,
					alt: "",
					loading: "lazy",
					onError: (e) => e.currentTarget.remove(),
					className: "absolute inset-0 size-full object-contain"
				})]
			}),
			/* @__PURE__ */ (0, R.jsxs)("span", {
				className: "flex min-w-0 items-center gap-2 max-duplicate-narrow:col-start-2 max-duplicate-narrow:-col-end-1",
				children: [/* @__PURE__ */ (0, R.jsx)("button", {
					type: "button",
					onClick: r,
					title: e.name,
					"data-middle-truncate": !0,
					"data-middle-truncate-within": !0,
					className: "min-w-0 shrink cursor-pointer truncate text-left text-body-regular hover:text-text-secondary",
					children: x(e.name, t)
				}), e.is_largest || e.is_longest ? /* @__PURE__ */ (0, R.jsxs)("span", {
					className: "flex flex-none gap-1",
					children: [e.is_largest ? /* @__PURE__ */ (0, R.jsx)("i", {
						className: `${H} not-italic bg-background-primary-hover text-text-secondary`,
						children: "Largest"
					}) : null, e.is_longest ? /* @__PURE__ */ (0, R.jsx)("i", {
						className: `${H} not-italic bg-(--keep)/22 text-(--keep)`,
						children: "Longest"
					}) : null]
				}) : null]
			}),
			/* @__PURE__ */ (0, R.jsxs)("span", {
				className: `${W} flex min-w-0 items-center gap-1.5`,
				children: [/* @__PURE__ */ (0, R.jsx)(f, { mark: l[e.location] || "database" }), /* @__PURE__ */ (0, R.jsx)("span", {
					title: i,
					className: "min-w-0 truncate",
					children: i
				})]
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: W,
				children: D(e.size || 0)
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: W,
				children: E(e.duration)
			}),
			/* @__PURE__ */ (0, R.jsx)("span", {
				className: `${W} col-start-2 -col-end-1 min-w-0 pt-0.5 wrap-anywhere max-duplicate-narrow:col-span-full`,
				children: e.path ?? ""
			})
		]
	});
}
function J({ openItem: l, toast: f, failure: p }) {
	let m = F({
		queryKey: n,
		queryFn: ({ signal: e }) => w(e)
	}), v = F({
		queryKey: c,
		queryFn: ({ signal: e }) => T(e)
	}), [x, E] = (0, L.useState)(""), k = P({
		mutationFn: (e) => h(e, "dispose"),
		onSuccess: (e, t) => {
			G(), f(`Moved ${t.length} items to the trash`, { undo: async () => {
				try {
					await h(t, "restore");
				} catch (e) {
					p("Undo move to trash", e);
				} finally {
					G();
				}
			} });
		},
		onSettled: () => E("")
	}), A = m.data;
	if (!A) return /* @__PURE__ */ (0, R.jsx)("div", {
		className: "mx-auto w-full max-w-board",
		children: /* @__PURE__ */ (0, R.jsx)(u, {
			tone: "error",
			title: "Couldn't load duplicate files",
			children: m.error ? C(m.error) : "Duplicate file list not obtained; refresh the page and try again."
		})
	});
	let j = A.groups ?? [], N = y(v.data), z = ({ groups: e, keep: t, key: n }) => {
		if (k.isPending) return;
		let r = S(e, t);
		r.length && b({
			title: "Move to trash",
			body: `The library records of ${r.length} duplicate files will move to the trash, keeping ${o[t] ?? o.largest} in each group.Files total ${D(I(e, r))}; records can be restored from the trash.`,
			confirmLabel: "Move to trash",
			onConfirm: () => (E(n), k.mutateAsync(r))
		});
	}, H = (e) => _(x === e && k.isPending);
	return /* @__PURE__ */ (0, R.jsxs)("div", {
		className: "mx-auto w-full max-w-board pb-10.5",
		children: [
			/* @__PURE__ */ (0, R.jsx)(t, {
				label: "Duplicates",
				figure: `${Number(A.total || 0).toLocaleString()} groups`,
				detail: `${Number(A.files || 0).toLocaleString()} files · ${D(A.reclaimable)} reclaimable`
			}),
			j.length ? /* @__PURE__ */ (0, R.jsxs)(i, {
				title: "Bulk keep",
				children: [
					/* @__PURE__ */ (0, R.jsx)(a, {
						busy: x === "all:largest",
						onPress: () => z({
							groups: j,
							keep: "largest",
							key: "all:largest"
						}),
						children: "Keep all largest"
					}),
					/* @__PURE__ */ (0, R.jsx)(a, {
						busy: x === "all:longest",
						onPress: () => z({
							groups: j,
							keep: "longest",
							key: "all:longest"
						}),
						children: "Keep all longest"
					}),
					g(j, N).map((e) => /* @__PURE__ */ (0, R.jsx)(a, {
						busy: x === `all:${e}`,
						onPress: () => z({
							groups: j,
							keep: e,
							key: `all:${e}`
						}),
						children: /* @__PURE__ */ (0, R.jsx)(d, {
							source: e,
							label: `Prefer ${s[e] || e} for all`
						})
					}, e))
				]
			}) : null,
			k.isError ? /* @__PURE__ */ (0, R.jsx)("div", {
				className: "mb-5",
				children: /* @__PURE__ */ (0, R.jsx)(u, {
					tone: "error",
					title: "Move to trash failed",
					children: C(k.error)
				})
			}) : null,
			j.length ? j.map((t, n) => {
				let r = [t], i = M(t.files.map((e) => e.name)), a = (e) => `${n}:${e}`;
				return /* @__PURE__ */ (0, R.jsxs)("section", {
					"aria-label": t.code,
					className: V,
					children: [/* @__PURE__ */ (0, R.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 bg-background-tertiary-default p-5 max-compact:p-4 dark:bg-background-secondary-default",
						children: [
							/* @__PURE__ */ (0, R.jsx)("b", {
								className: "text-title-2-medium text-text-primary",
								children: t.code
							}),
							/* @__PURE__ */ (0, R.jsx)("span", {
								className: "font-mono text-caption-1-regular leading-5 text-text-primary",
								children: `${Number(t.count || 0).toLocaleString()} · ${D(t.reclaimable)} reclaimable`
							}),
							K(t),
							t.cross_drive ? /* @__PURE__ */ (0, R.jsx)("span", {
								className: `${U} text-text-secondary`,
								children: `Across drives ${t.drives.join(" ")}`
							}) : null,
							/* @__PURE__ */ (0, R.jsxs)("span", {
								className: "ml-auto flex flex-wrap gap-2 max-compact:ml-0 max-compact:w-full",
								children: [
									/* @__PURE__ */ (0, R.jsx)(e, {
										variant: "secondary",
										size: "small",
										...H(a("largest")),
										onClick: () => z({
											groups: r,
											keep: "largest",
											key: a("largest")
										}),
										children: "Keep largest"
									}),
									/* @__PURE__ */ (0, R.jsx)(e, {
										variant: "secondary",
										size: "small",
										...H(a("longest")),
										onClick: () => z({
											groups: r,
											keep: "longest",
											key: a("longest")
										}),
										children: "Keep longest"
									}),
									O(t.files, N).map((t) => /* @__PURE__ */ (0, R.jsx)(e, {
										variant: "secondary",
										size: "small",
										...H(a(t)),
										onClick: () => z({
											groups: r,
											keep: t,
											key: a(t)
										}),
										children: /* @__PURE__ */ (0, R.jsx)(d, {
											source: t,
											label: `Keep ${s[t] || t}`
										})
									}, t)),
									/* @__PURE__ */ (0, R.jsx)(e, {
										variant: "danger",
										size: "small",
										...H(a("all")),
										onClick: () => z({
											groups: r,
											keep: "all",
											key: a("all")
										}),
										children: "Trash group"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, R.jsx)("div", { children: t.files.map((e) => /* @__PURE__ */ (0, R.jsx)(q, {
						file: e,
						prefix: i,
						openItem: l
					}, e.id)) })]
				}, `${t.code}-${n}`);
			}) : /* @__PURE__ */ (0, R.jsx)(r, {
				icon: B,
				title: "No duplicate files found",
				children: "No files with identical content were detected across sources. This updates automatically after new sources are scanned."
			}),
			j.length > 0 && A.total > j.length ? /* @__PURE__ */ (0, R.jsx)("p", {
				className: "text-center text-caption-1-regular text-text-secondary",
				children: `Showing the top ${j.length.toLocaleString()} groups by reclaimable space, of ${Number(A.total).toLocaleString()}; once these are handled, the rest fill in.`
			}) : null
		]
	});
}
export { J as DuplicatesPage };

//# debugId=206f307d-a881-47cc-b972-3727e8e520a8