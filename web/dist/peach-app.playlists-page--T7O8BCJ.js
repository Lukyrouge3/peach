(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "330274b7-ca2c-4999-9adf-e8197c8c1f64", e._sentryDebugIdIdentifier = "sentry-dbid-330274b7-ca2c-4999-9adf-e8197c8c1f64");
	} catch {}
})();
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as e, $542a13ca2fa5b484$export$5b6b19405a83ff9d as t, Button as n, EmptyFocusButton as r, EmptyState as i, Input as a, MENU_ITEM as o, MENU_ITEM_INTERACTIVE as s, MENU_POPOVER_SURFACE as c, MenuDialog as l, MixCard as u, ModalFrame as d, PLAYLISTS_KEY as f, RetryNote as p, __toESM as m, busyProps as h, confirmModal as g, createPlaylist as _, cx as v, deletePlaylist as y, errorMessage as b, fetchPlaylists as x, keepPlaylist as S, posterUrl as C, recreatePlaylist as w, refreshPlaylists as T, renamePlaylist as E, require_jsx_runtime as D, require_react as O, resumeAssetId as k, spriteGlyph as A, useMutation as j, useQuery as M } from "./peach-app.js";
// src/react/playlists/playlists-page.tsx
var N = /* @__PURE__ */ m(O(), 1), P = D(), F = A("ellipsis"), I = A("pencil"), L = A("trash"), R = A("playlist"), z = v(o, s, "text-body-2-medium"), B = "Playlist name can't be empty", V = (e) => async () => {
	try {
		await e();
	} finally {
		T();
	}
};
function H({ toast: e }) {
	let [t, r] = (0, N.useState)(""), [i, o] = (0, N.useState)(""), s = j({
		mutationFn: (e) => _(e),
		onSuccess: (t) => {
			r(""), o(""), T(), e("Playlist created", { undo: V(() => y(t.playlist.id)) });
		},
		onError: (e) => o(b(e) || "Create failed")
	});
	return /* @__PURE__ */ (0, P.jsxs)("form", {
		"data-playlist-create": "",
		"aria-label": "New playlist",
		onSubmit: (e) => {
			e.preventDefault(), !s.isPending && (t.trim() ? s.mutate(t) : o(B));
		},
		className: "flex flex-wrap items-end gap-2",
		children: [/* @__PURE__ */ (0, P.jsx)("div", {
			className: "min-w-50 max-w-80 flex-1 basis-50 max-board-narrow:min-w-0 max-board-narrow:max-w-none",
			children: /* @__PURE__ */ (0, P.jsx)(a, {
				label: "New playlist",
				placeholder: "Enter a name",
				maxLength: 80,
				value: t,
				onChange: (e) => {
					r(e), o("");
				},
				validationBehavior: "aria",
				isInvalid: !!i,
				hint: i || void 0
			})
		}), /* @__PURE__ */ (0, P.jsx)(n, {
			type: "submit",
			...h(s.isPending),
			children: "New"
		})]
	});
}
function U({ target: t, close: r, toast: i }) {
	let [o, s] = (0, N.useState)(""), [c, l] = (0, N.useState)(""), u = (0, N.useRef)(null);
	(0, N.useEffect)(() => {
		if (!t) return;
		s(t.name), l("");
		let e = requestAnimationFrame(() => {
			u.current?.focus(), u.current?.select();
		});
		return () => cancelAnimationFrame(e);
	}, [t]);
	let f = j({
		mutationFn: ({ row: e, value: t }) => E(e.id, t),
		onSuccess: (e, { row: t }) => {
			r(), T(), i("Playlist renamed", { undo: V(() => E(t.id, t.name)) });
		},
		onError: (e) => l(b(e))
	});
	return /* @__PURE__ */ (0, P.jsx)(d, {
		isOpen: !!t,
		onOpenChange: (e) => {
			e || r();
		},
		width: "form",
		children: /* @__PURE__ */ (0, P.jsxs)("form", {
			"data-playlist-rename": "",
			onSubmit: (e) => {
				if (e.preventDefault(), !t || f.isPending) return;
				let n = o.trim();
				n ? f.mutate({
					row: t,
					value: n
				}) : l(B);
			},
			className: "flex min-h-0 flex-col",
			children: [/* @__PURE__ */ (0, P.jsxs)("div", {
				className: "flex flex-col gap-4 p-5",
				children: [/* @__PURE__ */ (0, P.jsx)(e, {
					slot: "title",
					className: "text-title-2-semibold text-text-primary",
					children: "Edit name"
				}), /* @__PURE__ */ (0, P.jsx)(a, {
					ref: u,
					label: "Name",
					placeholder: "Enter a name",
					maxLength: 80,
					value: o,
					onChange: (e) => {
						s(e), l("");
					},
					validationBehavior: "aria",
					isInvalid: !!c,
					hint: c || void 0
				})]
			}), /* @__PURE__ */ (0, P.jsxs)("div", {
				className: "flex justify-between gap-4 p-3",
				children: [/* @__PURE__ */ (0, P.jsx)(n, {
					variant: "secondary",
					onClick: r,
					children: "Cancel"
				}), /* @__PURE__ */ (0, P.jsx)(n, {
					type: "submit",
					...h(f.isPending),
					children: "Save name"
				})]
			})]
		})
	});
}
function W({ name: e, onRename: n, onDelete: r }) {
	let i = (0, N.useRef)(null), [a, o] = (0, N.useState)(!1), s = (e) => {
		o(!1), e();
	};
	return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsx)("button", {
		ref: i,
		type: "button",
		title: "More actions",
		"aria-label": `Playlist actions: ${e}`,
		"aria-haspopup": "dialog",
		"aria-expanded": a,
		"data-playlist-menu": "",
		onClick: () => o(!0),
		className: "flex size-7.5 flex-none cursor-pointer items-center justify-center rounded-2lg text-foreground-icon-secondary outline-none transition-colors hover:bg-background-primary-hover hover:text-foreground-icon-primary aria-expanded:bg-background-primary-hover aria-expanded:text-foreground-icon-primary focus-visible:ring-2 focus-visible:ring-border-focus-ring",
		children: /* @__PURE__ */ (0, P.jsx)(F, {
			"aria-hidden": !0,
			className: "size-4.5"
		})
	}), /* @__PURE__ */ (0, P.jsx)(t, {
		triggerRef: i,
		isOpen: a,
		onOpenChange: o,
		placement: "bottom end",
		offset: 4,
		className: c,
		children: /* @__PURE__ */ (0, P.jsxs)(l, {
			"aria-label": `Playlist actions: ${e}`,
			className: "flex w-37.5 flex-col gap-0.5 outline-none",
			children: [/* @__PURE__ */ (0, P.jsxs)("button", {
				type: "button",
				className: z,
				onClick: () => s(n),
				children: [/* @__PURE__ */ (0, P.jsx)(I, {
					"aria-hidden": !0,
					className: "size-(--icon-inline) shrink-0"
				}), "Edit name"]
			}), /* @__PURE__ */ (0, P.jsxs)("button", {
				type: "button",
				className: z,
				onClick: () => s(r),
				children: [/* @__PURE__ */ (0, P.jsx)(L, {
					"aria-hidden": !0,
					className: "size-(--icon-inline) shrink-0"
				}), "Delete playlist"]
			})]
		})
	})] });
}
function G({ openPlaylist: e, openEntity: t, canFlip: n, toast: a, revision: o }) {
	let s = M({
		queryKey: f,
		queryFn: ({ signal: e }) => x(e)
	}), [c, l] = (0, N.useState)(null), d = (0, N.useRef)(o);
	(0, N.useEffect)(() => {
		d.current !== o && (d.current = o, T());
	}, [o]);
	let m = s.data, h = m?.items ?? [], _ = (e) => {
		g({
			title: "Delete playlist",
			body: "This playlist will be deleted; video files are kept.",
			confirmLabel: "Delete playlist",
			danger: !0,
			onConfirm: async () => {
				let t = await S(e.id);
				await y(e.id), T(), a("Playlist deleted", t ? { undo: V(() => w(t)) } : void 0);
			}
		});
	};
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "w-full pt-1 pb-10.5",
		children: [
			/* @__PURE__ */ (0, P.jsxs)("header", {
				className: "mb-4 flex items-start justify-between gap-4.5 max-board-narrow:flex-col max-board-narrow:items-stretch",
				children: [/* @__PURE__ */ (0, P.jsxs)("div", { children: [/* @__PURE__ */ (0, P.jsx)("h2", {
					className: "mb-1 text-display-4-medium! text-text-primary",
					children: "Playlists"
				}), /* @__PURE__ */ (0, P.jsx)("p", {
					className: "text-body-2-regular text-text-secondary",
					children: "Save a Mix and keep playing in your own order."
				})] }), /* @__PURE__ */ (0, P.jsx)(H, { toast: a })]
			}),
			/* @__PURE__ */ (0, P.jsx)("div", {
				className: "mx-auto w-full max-w-board",
				children: m ? h.length ? /* @__PURE__ */ (0, P.jsx)("div", {
					"data-playlist-grid": "",
					className: "card-grid-cover gap-4.5",
					children: h.map((r) => {
						let i = k(r), a = r.name.trim() || "Untitled playlist";
						return /* @__PURE__ */ (0, P.jsx)(u, {
							"data-playlist-card": String(r.id),
							name: a,
							caption: r.source_kind === "mix" ? "Saved from a Mix" : "Manual playlist",
							count: r.item_count,
							poster: r.preview_asset_id ? C(r.preview_asset_id) : null,
							flipImages: async () => (r.preview_ids || []).map(C),
							canFlip: n,
							faces: r.faces || [],
							onOpenEntity: t,
							...i ? { onOpen: () => e(r.id, i) } : {},
							openLabel: `Open playlist ${a}`,
							menu: /* @__PURE__ */ (0, P.jsx)(W, {
								name: a,
								onRename: () => l(r),
								onDelete: () => _(r)
							})
						}, r.id);
					})
				}) : /* @__PURE__ */ (0, P.jsx)(i, {
					icon: R,
					title: "No playlists yet",
					actions: /* @__PURE__ */ (0, P.jsx)(r, {
						target: "[data-playlist-create] input",
						children: "New playlist"
					}),
					children: "Save a Mix or create a list, then keep playing it here in your own order."
				}) : s.isError ? /* @__PURE__ */ (0, P.jsx)(p, {
					message: b(s.error) || "Couldn't load playlists",
					onRetry: () => void s.refetch()
				}) : null
			}),
			/* @__PURE__ */ (0, P.jsx)(U, {
				target: c,
				close: () => l(null),
				toast: a
			})
		]
	});
}
export { G as PlaylistsPage };

//# debugId=330274b7-ca2c-4999-9adf-e8197c8c1f64