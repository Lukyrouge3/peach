(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c3535024-8f30-4498-b12a-de27b3c6372a", e._sentryDebugIdIdentifier = "sentry-dbid-c3535024-8f30-4498-b12a-de27b3c6372a");
	} catch {}
})();
import { createPaginatedRowModel as e } from "./peach-app.createPaginatedRowModel-ClHnhG_T.js";
import { createSortedRowModel as t, useTableSelection as n } from "./peach-app.use-table-selection-BSdXI_Nc.js";
import { $76d00c5a4edb230a$export$76ccd210b9029917 as r, $76d00c5a4edb230a$export$816b5d811295e6bc as i, $76d00c5a4edb230a$export$b59bdbef9ce70de2 as a, $76d00c5a4edb230a$export$f6f0c3fe4ec306ea as o, $76d00c5a4edb230a$export$f850895b287ef28e as s, Button as c, Checkbox as l, ChevronSortDown as u, DataTableFooter as d, DataTableFrame as f, DataTableSort as p, SelectionDock as m, Table as h, TableColumnControls as g, TableColumnResizer as _, TableSelectionHeader as v, __toESM as y, cardClass as b, columnVisibilityFeature as x, createColumnHelper as S, flexRender as C, require_jsx_runtime as w, require_react as T, rowPaginationFeature as E, rowSelectionFeature as D, rowSortingFeature as O, tableFeatures as k, useTable as A, useTablePreferences as j } from "./peach-app.js";
// src/react/components/data-table.tsx
var M = /* @__PURE__ */ y(T(), 1), N = w(), P = k({
	rowSortingFeature: O,
	rowSelectionFeature: D,
	rowPaginationFeature: E,
	columnVisibilityFeature: x,
	sortedRowModel: t(),
	paginatedRowModel: e()
});
function F({ label: e, items: t, columns: y, rowId: x, rowLabel: w, selected: T, onSelected: E, actions: D, title: O = e, titleId: k, description: F, footerActions: I, panel: L = !0, unit: R = "records" }) {
	let [z, B] = (0, M.useState)([]), V = (0, M.useMemo)(() => [{
		id: "select",
		label: "Select",
		width: 48,
		min: 48,
		max: 48,
		required: !0
	}, ...y.map((e, t) => ({
		...e,
		width: e.width ?? (t === 0 ? 320 : 160),
		min: e.min ?? (t === 0 ? 320 : 96),
		flex: e.flex ?? t === 0,
		required: t === 0
	}))], [y]), H = j(`data:${e}`, V), [U, W] = (0, M.useState)({
		pageIndex: 0,
		pageSize: 20
	}), G = n(() => E([])), K = Math.max(1, Math.ceil(t.length / U.pageSize)), q = Math.min(U.pageIndex, K - 1), J = Object.fromEntries(T.map((e) => [e, !0])), Y = (0, M.useMemo)(() => {
		let t = S();
		return t.columns([t.display({
			id: "select",
			header: ({ table: t }) => /* @__PURE__ */ (0, N.jsx)(v, {
				table: t,
				label: `Select all ${e}`
			}),
			cell: ({ row: e }) => /* @__PURE__ */ (0, N.jsx)(l, {
				slot: null,
				"aria-label": `Select ${w(e.original)}`,
				isSelected: e.getIsSelected(),
				onChange: (t) => e.toggleSelected(t)
			})
		}), ...y.map((e) => t.accessor((t) => e.value?.(t) ?? "", {
			id: e.id,
			header: e.label,
			enableSorting: !!e.value,
			sortFn: (t, n) => {
				let r = e.value(t.original), i = e.value(n.original);
				return typeof r == "number" && typeof i == "number" ? r - i : String(r).localeCompare(String(i), "zh-CN", { numeric: !0 });
			},
			cell: ({ row: t }) => e.render(t.original)
		}))]);
	}, [
		y,
		e,
		w
	]), X = A({
		features: P,
		data: t,
		columns: Y,
		getRowId: x,
		state: {
			sorting: z,
			rowSelection: J,
			pagination: {
				...U,
				pageIndex: q
			},
			columnVisibility: H.visibility
		},
		onColumnVisibilityChange: H.change,
		onSortingChange: (e) => {
			B(e), W((e) => ({
				...e,
				pageIndex: 0
			}));
		},
		onPaginationChange: W,
		enableRowSelection: !0,
		onRowSelectionChange: (e) => {
			let n = typeof e == "function" ? e(J) : e;
			Object.values(n).some(Boolean) && G(), E(t.filter((e) => n[x(e)]).map(x));
		}
	}), Z = X.getSelectedRowModel().rows.map((e) => e.original);
	return /* @__PURE__ */ (0, N.jsxs)("div", {
		"data-data-table-panel": L || void 0,
		className: L ? b({
			padding: "none",
			bordered: "line",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}) : "flex min-w-0 flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, N.jsxs)("div", {
				"data-responsive-toolbar": "",
				role: "toolbar",
				"aria-label": `${e} toolbar`,
				children: [/* @__PURE__ */ (0, N.jsxs)("div", {
					"data-toolbar-heading": "",
					children: [/* @__PURE__ */ (0, N.jsx)("h3", {
						id: k,
						className: "text-title-2-medium text-text-primary",
						children: O
					}), /* @__PURE__ */ (0, N.jsx)("span", {
						className: "text-body-2-regular tabular-nums text-text-secondary",
						children: `${t.length.toLocaleString()} ${R}`
					})]
				}), /* @__PURE__ */ (0, N.jsxs)("div", {
					"data-toolbar-actions": "",
					children: [/* @__PURE__ */ (0, N.jsx)(g, {
						preferences: H,
						label: e
					}), /* @__PURE__ */ (0, N.jsx)(p, {
						label: e,
						options: y.filter((e) => e.value).map((e) => ({
							id: e.id,
							label: e.label
						})),
						sorting: z,
						onChange: (e) => {
							B(e), W((e) => ({
								...e,
								pageIndex: 0
							}));
						}
					})]
				})]
			}),
			F ? /* @__PURE__ */ (0, N.jsx)("p", {
				className: "text-body-2-regular text-text-secondary",
				children: F
			}) : null,
			/* @__PURE__ */ (0, N.jsxs)(m, {
				label: `${e} bulk actions`,
				visible: Z.length > 0,
				count: `${Z.length.toLocaleString()} ${R} selected`,
				children: [D(Z, () => E([])), /* @__PURE__ */ (0, N.jsx)(c, {
					variant: "ghost",
					size: "small",
					onClick: () => E([]),
					children: "Clear selection"
				})]
			}),
			/* @__PURE__ */ (0, N.jsx)(f, {
				follow: !0,
				preferences: H,
				onRowClick: (e) => X.getRow(e)?.toggleSelected(),
				children: /* @__PURE__ */ (0, N.jsxs)(h, {
					"aria-label": e,
					size: "sm",
					sortDescriptor: z[0] ? {
						column: z[0].id,
						direction: z[0].desc ? "descending" : "ascending"
					} : void 0,
					onSortChange: (e) => X.getColumn(String(e.column))?.toggleSorting(e.direction === "descending"),
					children: [/* @__PURE__ */ (0, N.jsxs)(s, { children: [X.getHeaderGroups()[0].headers.map((e) => /* @__PURE__ */ (0, N.jsx)(i, {
						id: e.id,
						isRowHeader: e.id === y[0].id,
						allowsSorting: e.column.getCanSort(),
						...H.columnProps(e.id),
						children: ({ sortDirection: t }) => /* @__PURE__ */ (0, N.jsxs)(N.Fragment, { children: [/* @__PURE__ */ (0, N.jsxs)("span", {
							className: "flex items-center gap-0.5",
							children: [C(e.column.columnDef.header, e.getContext()), e.column.getCanSort() ? /* @__PURE__ */ (0, N.jsx)("span", {
								"data-sort-indicator": !0,
								"data-direction": t || void 0,
								children: /* @__PURE__ */ (0, N.jsx)(u, {})
							}) : null]
						}), /* @__PURE__ */ (0, N.jsx)(_, {
							preferences: H,
							id: e.id
						})] })
					}, e.id)), /* @__PURE__ */ (0, N.jsx)(i, {
						id: "remaining-space",
						"aria-label": "Row blank area",
						"data-table-space": "",
						width: H.spaceWidth,
						minWidth: 0
					})] }), /* @__PURE__ */ (0, N.jsx)(r, {
						renderEmptyState: () => "No records",
						children: X.getRowModel().rows.map((e) => /* @__PURE__ */ (0, N.jsxs)(a, {
							id: e.id,
							"data-board-selected": e.getIsSelected() || void 0,
							children: [e.getVisibleCells().map((e) => /* @__PURE__ */ (0, N.jsx)(o, { children: C(e.column.columnDef.cell, e.getContext()) }, e.id)), /* @__PURE__ */ (0, N.jsx)(o, { "data-table-space": "" })]
						}, e.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, N.jsx)(d, {
				label: e,
				total: t.length,
				pagination: {
					...U,
					pageIndex: q
				},
				onChange: W,
				unit: R
			}),
			I ? /* @__PURE__ */ (0, N.jsx)("div", {
				className: "flex flex-wrap items-center justify-end gap-2 border-t border-separator-border pt-4",
				children: I
			}) : null
		]
	});
}
export { F as DataTable };

//# debugId=c3535024-8f30-4498-b12a-de27b3c6372a