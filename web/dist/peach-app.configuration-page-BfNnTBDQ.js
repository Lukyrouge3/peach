(function() {
	try {
		var e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, t = new e.Error().stack;
		t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bcd1a993-c6cf-4acb-a358-8b067b6897a0", e._sentryDebugIdIdentifier = "sentry-dbid-bcd1a993-c6cf-4acb-a358-8b067b6897a0");
	} catch {}
})();
import { AnimatedItems as e, Cell as t, ChartBackground as n, ChartContainer as r, ChartLegend as i, ChartLegendContent as a, ChartTip as o, ChartTooltip as s, ChartTooltipContent as c, Curve as l, DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME as u, DATA_ITEM_INDEX_ATTRIBUTE_NAME as d, DefaultZIndexes as f, EvilBarChart as p, LabelList as m, LabelListFromLabelProp as h, Layer as g, LoadingIndicator as _, PolarChart as v, PolarLabelContextProvider as y, PolarLabelListContextProvider as b, RegisterGraphicalItemId as x, Sector as S, SetPolarGraphicalItem as C, SetPolarLegendPayload as w, SetTooltipEntrySettings as T, Shape as ee, TIP_SWATCH as te, Text as ne, ZIndexLayer as re, adaptEventsOfChild as ie, arrayTooltipSearcher as ae, createSelector as oe, defaultPolarChartProps as se, findAllByType as ce, get as le, getClassNameFromUnknown as ue, getColorsCount as de, getMaxRadius as fe, getPercentValue as pe, getTooltipNameProp as me, getValueByDataKey as he, interpolate as ge, isNumber as _e, matchAppend as ve, mathSign as ye, polarToCartesian as be, resolveDefaultProps as xe, selectActiveTooltipDataKey as Se, selectActiveTooltipGraphicalItemId as Ce, selectActiveTooltipIndex as we, selectChartDataAndAlwaysIgnoreIndexes as Te, selectChartOffsetInternal as Ee, selectUnfilteredPolarItems as De, svgPropertiesNoEvents as Oe, svgPropertiesNoEventsFromUnknown as ke, tone as Ae, useAnimationCallbacks as je, useAppSelector as Me, useMouseClickItemDispatch as Ne, useMouseEnterItemDispatch as Pe, useMouseLeaveItemDispatch as Fe, usePolarChartLayout as Ie } from "./peach-app.chart-tip-CRxYp6KT.js";
import { $2ec61d1d4f780267$export$a8a3e93435678ff9 as Le, $3a442827418ebe87$export$eb2fcfdbd7ba97d4 as Re, $542a13ca2fa5b484$export$5b6b19405a83ff9d as ze, $72abaeab4d80592f$export$78efe591171d7d45 as Be, $bd263d78e9bf3c56$export$f5c9f3c2c4054eec as Ve, $ea3928288112382f$export$439d29a4e110a164 as He, $f2ff30fde7b014be$export$3ddf2d174ce01153 as Ue, $fe21c36db05242bb$export$a98f0dcb43a68a25 as We, $fe21c36db05242bb$export$d7b12c4107be0d61 as Ge, ACCENTS as Ke, ApiError as qe, Button as E, ButtonLink as Je, CLOUD_LOCATIONS as Ye, CLOUD_PROXY_HELP as Xe, CONFIGURATION_KEY as Ze, CONFIGURATION_URL as Qe, CREDENTIAL_STATE as $e, Checkbox as D, Chip as et, Disclosure as O, ENTRY_LINKS_HELP as tt, ENTRY_LINKS_HINT as nt, EmptyState as rt, ErrorText as k, ExternalLink as A, FEED_SCHEDULE_KEY as it, FOLLOW_CREDENTIALS_KEY as at, FOLLOW_INITIAL_RANGE_OPTIONS as ot, FOLLOW_SCHEDULE_KEY as st, Fact as j, FactList as ct, FieldLabel as lt, Footer as M, Help as N, HintText as ut, Input as P, LIBRARY_FOLDER_HELP as dt, LIBRARY_PROCESSING_KEY as ft, Label as pt, LinkButton as mt, LoadingDots as ht, M6 as gt, MEDIA_PROCESSING_KEY as _t, MEDIA_PROCESSING_URL as vt, MEDIA_SOURCE_ICONS as yt, MENU_POPOVER_SURFACE as bt, Note as F, PICK_FOLDER_URL as xt, POLICY_COLUMNS as St, POLICY_COVER_NOTE as Ct, POLICY_MATRIX as wt, POLICY_SUMMARY as Tt, PathLine as Et, PillTabList as Dt, Progress as Ot, Rows as I, SEGMENT as kt, SEGMENTED_TRACK as At, SETTINGS_KEY as jt, SETTINGS_URL as Mt, Section as L, SectionSkeleton as Nt, SegmentedRadioGroup as Pt, Select as Ft, Select$1 as R, SelectItem as z, SettingsCard as It, SettingsRow as B, SiteLabel as Lt, SourceLabel as Rt, SourceMark as zt, Stack as V, StatusLabel as H, Switch as U, THUMBNAIL_JOBS_KEY as Bt, TaskCenterLink as Vt, TextField as Ht, TextFieldContext as Ut, __toESM as Wt, animate as Gt, apiGet as W, apiSend as G, appSettingsStore as Kt, boundedPreference as qt, busyProps as K, cardClass as Jt, cloudProxySkeleton as Yt, clsx as Xt, cn as Zt, confirmModal as Qt, credentialDone as $t, credentialsSkeleton as en, cx as tn, errorMessage as q, fetchConfiguration as nn, fetchCredentials as rn, fetchFeedSchedule as an, fetchFollowSchedule as on, fetchMediaProcessing as sn, fetchSettings as cn, fetchThumbnailJobs as ln, fmtSize as J, indexersSkeleton as un, javBrowserSkeleton as dn, momentText as fn, motion as pn, overlayHost as mn, peachHistory$1 as hn, previewLibraryColor as gn, providerIcon as _n, queryClient as vn, randomId as yn, rememberShape as bn, require_jsx_runtime as xn, require_react as Sn, saveCredential as Cn, schedulePollInterval as wn, settingsPath as Tn, shellNavigate as En, sortCx as Dn, sourceDefaultCost as On, useAction as Y, useClientUpdates as kn, useLibraryTints as An, useMutation as jn, useQuery as X, useReducedMotion as Mn, useRunSchedule as Nn, useSaveFollowSchedule as Pn, useSaveSettings as Fn, useSaveThumbnailMode as In } from "./peach-app.js";
import { CodeBlock as Ln } from "./peach-app.code-block-B--CBV66.js";
import { FolderField as Rn, FolderFieldLine as zn, FolderRow as Bn, MEDIA_SOURCES as Vn, MediaReadPolicy as Hn, MediaReadPolicyHelp as Un, SourceSelect as Wn, isCloudSource as Gn, sourceMark as Kn, useFolderRows as qn } from "./peach-app.folder-rows-BfIgmIL8.js";
import { ConnectionStatus as Jn } from "./peach-app.connection-status-B0tSnjj0.js";
import { SourceIcon as Yn } from "./peach-app.source-view-CRsaavRy.js";
// src/react/settings/configuration-panel.ts
var Z = /* @__PURE__ */ Wt(Sn(), 1), Xn = "flex flex-col gap-6";
function Zn(e) {
	return e ? {
		className: e.active ? `${Xn} ui-board-group-active` : Xn,
		"data-board-group": String(e.index),
		id: e.id,
		role: "tabpanel",
		"aria-labelledby": e.labelledBy
	} : { className: Xn };
}
// src/react/settings/userscript-probe.ts
function Qn() {
	let e = (0, Z.useRef)(null), [t, n] = (0, Z.useState)(0), [r, i] = (0, Z.useState)("checking");
	return (0, Z.useEffect)(() => {
		let t = yn(), n = !1, r = e.current, a, o = () => {
			n = !0, clearInterval(u), i("missing");
		}, s = () => {
			n || (clearTimeout(a), a = setTimeout(o, 3e3), c());
		}, c = () => e.current?.contentWindow?.postMessage({
			type: "peach-userscript:probe",
			nonce: t
		}, window.location.origin), l = (r) => {
			!n && r.source === e.current?.contentWindow && r.origin === window.location.origin && r.data?.type === "peach-userscript:ready" && r.data.nonce === t && r.data.protocol === 1 && typeof r.data.version == "string" && /^\d{1,5}\.\d{1,5}\.\d{1,5}$/.test(r.data.version) && typeof r.data.paired == "boolean" && (n = !0, clearInterval(u), clearTimeout(a), i({
				version: r.data.version,
				paired: r.data.paired
			}));
		};
		window.addEventListener("message", l);
		let u = setInterval(c, 250);
		return a = setTimeout(o, 15e3), r?.addEventListener("load", s), r?.contentDocument?.readyState === "complete" && r.contentDocument.URL !== "about:blank" && s(), c(), () => {
			clearInterval(u), clearTimeout(a), r?.removeEventListener("load", s), window.removeEventListener("message", l);
		};
	}, [t]), {
		frame: e,
		attempt: t,
		status: r,
		retry: () => {
			r !== "checking" && (i("checking"), n((e) => e + 1));
		}
	};
}
// src/react/settings/userscript-status.tsx
var Q = xn();
function $n(e, t) {
	let n = e.split(".").map(Number), r = t.split(".").map(Number);
	for (let e = 0; e < 3; e++) if (n[e] !== r[e]) return n[e] > r[e];
	return !0;
}
function er({ enabled: e, release: t }) {
	let { frame: n, attempt: r, status: i, retry: a } = Qn(), o = typeof i == "object", s = o && !$n(i.version, t.minimum_version), c = o && !$n(i.version, t.version), l = i === "checking" ? "progress" : i === "missing" ? "neutral" : s || c || !i.paired ? "warning" : "success", u = i === "checking" ? "Detecting" : i === "missing" ? "Not detected" : s ? "Update required" : c ? "Update available" : i.paired ? "Connected" : "Awaiting pairing", d = i === "checking" ? "checking" : i === "missing" ? "missing" : s ? "required" : c ? "available" : i.paired ? e ? "enabled" : "disabled" : "unpaired";
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("iframe", {
		ref: n,
		title: "Peach userscript detection",
		hidden: !0,
		src: "/integrations/peach-userscript-bridge"
	}, r), /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		"data-userscript-status": "",
		className: Jt({
			variant: "raised",
			bordered: "line",
			className: "flex flex-col gap-3"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-medium text-text-primary",
					children: "Peach userscript"
				}), /* @__PURE__ */ (0, Q.jsx)(Jn, {
					tone: l,
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.${d}.status`,
						children: u
					})
				})]
			}),
			o ? /* @__PURE__ */ (0, Q.jsxs)("p", {
				"data-copy-key": "userscript.installed.version",
				className: "text-body-regular text-text-secondary",
				children: ["Userscript v", i.version]
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "Add from browser"
				}), /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: e ? "success" : "neutral",
					children: /* @__PURE__ */ (0, Q.jsx)("span", {
						"data-copy-key": `userscript.adding.${e ? "enabled" : "disabled"}`,
						children: e ? "Enabled" : "Not enabled"
					})
				})]
			}),
			/* @__PURE__ */ (0, Q.jsx)("p", {
				"data-copy-key": `userscript.${d}.message`,
				className: "text-caption-1-regular text-text-secondary",
				children: i === "checking" ? "Detecting the userscript in this browser." : i === "missing" ? "Make sure the script is enabled and up to date. In Chrome, also turn on “Allow user scripts” or developer mode in the Tampermonkey extension details and allow access to this Peach site; refresh the page and detect again." : s ? `Update to v${t.minimum_version} or later.` : c ? `Userscript v${t.version} is available.` : i.paired ? e ? "You can add titles to the Peach library directly on supported sites." : "After enabling browser adds, you can add titles to the Peach library directly on supported sites." : "After generating a token, copy the pairing info, then paste and save it in the userscript settings."
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					i === "missing" || s || c ? /* @__PURE__ */ (0, Q.jsx)(A, {
						href: t.install_url,
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-copy-key": `userscript.${i === "missing" ? "install" : "update"}.action`,
							children: s || c ? "Update userscript" : "Install Peach userscript"
						})
					}) : null,
					i === "missing" ? /* @__PURE__ */ (0, Q.jsx)(A, {
						href: "https://www.tampermonkey.net/faq.php#Q209",
						children: "Tampermonkey permission setup guide"
					}) : null,
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						type: "button",
						...K(i === "checking"),
						onClick: a,
						children: "Detect again"
					})
				]
			})
		]
	})] });
}
// src/react/settings/jav-browser-settings.tsx
var tr = "/api/configuration/jav-browser";
function nr({ receipt: e, refreshKey: t }) {
	let n = X({
		queryKey: ["jav-browser-settings", t],
		queryFn: ({ signal: e }) => W(tr, e),
		refetchOnMount: "always",
		refetchOnWindowFocus: "always"
	});
	return n.error && !n.data ? /* @__PURE__ */ (0, Q.jsx)(k, { children: q(n.error) }) : n.isFetching && !n.data ? /* @__PURE__ */ (0, Q.jsx)(Nt, {
		label: "Loading browser add settings",
		html: dn
	}) : n.data ? /* @__PURE__ */ (0, Q.jsx)(rr, {
		initial: n.data,
		receipt: e
	}) : null;
}
function rr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.provider), [o, s] = (0, Z.useState)(""), c = Y();
	(0, Z.useEffect)(() => {
		bn("javBrowser", {
			enabled: e.enabled,
			ready: e.providers.some((t) => t.key === e.provider && t.configured && t.target)
		}), r(e), a((t) => e.providers.some((e) => e.key === t) ? t : e.provider), e.enabled || s("");
	}, [e]);
	let l = (e) => {
		c.run(e, (t) => G(tr, {
			action: e,
			provider: i
		}, "POST", t), (n) => {
			let { token: i = "", ...o } = n;
			r(o), a(o.provider), s(i), t(e === "disable" ? "Browser adds turned off" : "Dedicated token generated");
		});
	}, u = n.providers.some((e) => e.key === i && e.configured && e.target);
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Add JAV from browser",
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(er, {
					enabled: n.enabled,
					release: n.userscript
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(lt, { children: "Download channel for browser adds" }), /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "Download channel for browser adds",
						selectedKey: i || null,
						placeholder: "No channels available",
						onSelectionChange: (e) => {
							e !== null && a(String(e));
						},
						isDisabled: !n.providers.length || !!c.busy,
						children: n.providers.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
							id: e.key,
							textValue: e.label,
							children: /* @__PURE__ */ (0, Q.jsx)(Rt, {
								source: e.key,
								label: e.label
							})
						}, e.key))
					})]
				}),
				u ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: "Add a cloud drive that supports cloud downloads to the media library, then set up its account and target folder." }),
				n.problems?.map((e) => /* @__PURE__ */ (0, Q.jsx)(N, { children: e }, e)),
				n.enabled && n.active_provider && !n.providers.some((e) => e.key === n.active_provider) ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "The enabled download channel is unavailable; choose a channel and update the token." }) : null,
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "Peach URL",
					value: window.location.origin,
					isReadOnly: !0,
					autoComplete: "off"
				}),
				o ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
					/* @__PURE__ */ (0, Q.jsx)(P, {
						label: "Dedicated token for browser adds",
						type: "password",
						value: o,
						isReadOnly: !0,
						autoComplete: "new-password"
					}),
					/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						type: "button",
						onClick: () => {
							c.run("copy", async () => navigator.clipboard.writeText(JSON.stringify({
								peach_pairing: 1,
								base: window.location.origin,
								token: o
							})), () => t("Pairing info copied"));
						},
						...K(c.busy === "copy"),
						children: "Copy pairing info"
					}) }),
					/* @__PURE__ */ (0, Q.jsx)(N, { children: "Paste the pairing info into “Peach URL” in the userscript settings to fill in the address and token." })
				] }) : null
			]
		}), c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(M, { children: [n.enabled ? /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			type: "button",
			disabled: !!c.busy,
			onClick: () => l("disable"),
			children: "Turn off browser adds"
		}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "button",
			disabled: !n.available || !u || !!c.busy,
			onClick: () => l(n.enabled ? "rotate" : "enable"),
			...K(c.busy === "enable" || c.busy === "rotate"),
			children: n.enabled ? "Update channel and token" : "Enable and generate token"
		})] })]
	});
}
// src/react/settings/download-settings.tsx
var ir = "/api/configuration/downloads", ar = "/api/configuration/downloads/check", or = "/api/configuration/downloads/folder", sr = "/api/configuration/downloads/pikpak/login", cr = "/api/configuration/downloads/pikpak/logout", lr = "/api/configuration/downloads/pikpak/browser-login", ur = 2e3, dr = _n("pikpak");
function fr({ initial: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...Zn(n),
		children: [r, e ? /* @__PURE__ */ (0, Q.jsx)(pr, {
			initial: e,
			receipt: t
		}) : null]
	});
}
function pr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)("");
	(0, Z.useEffect)(() => {
		r((t) => ({
			...t,
			media_sources: e.media_sources,
			pikpak_roots: e.pikpak_roots
		}));
	}, [e.media_sources, e.pikpak_roots]);
	let o = n.media_sources ?? [], s = o.includes("pikpak"), c = o.some((e) => Ye.includes(e)), l = s && (n.pikpak.logged_in || !!i.trim());
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		c ? /* @__PURE__ */ (0, Q.jsx)(mr, {
			state: n,
			settle: r,
			receipt: t,
			pikpakAccount: l
		}) : null,
		s ? /* @__PURE__ */ (0, Q.jsx)(_r, {
			state: n,
			settle: r,
			receipt: t,
			username: i,
			setUsername: a
		}) : null,
		/* @__PURE__ */ (0, Q.jsx)(nr, {
			receipt: t,
			refreshKey: JSON.stringify([
				n.media_sources,
				n.config,
				n.token_set,
				n.pikpak.logged_in
			])
		})
	] });
}
function mr({ state: e, settle: t, receipt: n, pikpakAccount: r }) {
	let [i, a] = (0, Z.useState)(e.config), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(String(e.config.wait_hours)), [u, d] = (0, Z.useState)(null), [f, p] = (0, Z.useState)(""), [m, h] = (0, Z.useState)(hr), [g, _] = (0, Z.useState)(""), [v, y] = (0, Z.useState)(!1), b = Y(), x = e.media_sources ?? [], S = x.includes("115"), C = x.includes("pikpak"), w = (e) => i.targets[e] ?? "", T = (e, t) => a({
		...i,
		targets: {
			...i.targets,
			[e]: t
		}
	}), ee = S && !(!m.target || m.target.exists || w("115") !== m.target.path), te = (e, t, n = "") => {
		let r = t.target ? e.suggested_target : null, i = !!(r && n && r.path === n), o = t.root ? e.suggested_pikpak_root : "";
		a((n) => ({
			...n,
			clouddrive_address: t.address && e.address ? e.address : n.clouddrive_address,
			targets: r && !i ? {
				...n.targets,
				115: r.path
			} : n.targets,
			pikpak_root: o || n.pikpak_root
		})), d(e), p(t.address ? e.address : ""), h({
			target: r,
			root: o,
			saved: i
		}), y(!1), _("");
	};
	return (0, Z.useEffect)(() => {
		if (!e.available || !e.config.clouddrive_address || !e.token_set) return;
		let t = {
			address: !1,
			target: !e.config.targets[115],
			root: !e.config.pikpak_root
		};
		b.run("auto", (e) => W(ar, e), (e) => te(e, t), (e) => _(q(e)));
	}, []), /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Cloud download",
		onSubmit: (e) => {
			if (e.preventDefault(), ee) {
				y(!0);
				return;
			}
			let u = !w("115").trim(), f = {
				...i,
				wait_hours: c,
				token: o,
				pikpak_account: r
			};
			b.run("save", (e) => G(ir, f, "POST", e), (e) => {
				let { report: r, ...i } = e;
				t(i), a(i.config), l(String(i.config.wait_hours)), s(""), r ? te(r, {
					address: !i.config.clouddrive_address,
					target: u,
					root: !i.config.pikpak_root
				}, i.config.targets[115] ?? "") : (d(null), p(""), h(hr), y(!1), _("")), n("Settings saved");
			}, (e) => _(q(e)));
		},
		children: [
			e.problems?.length ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "Cloud download settings need checking",
				children: e.problems.join("\n")
			}) }) : null,
			/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "CloudDrive2 URL",
					placeholder: "Leave empty to find automatically",
					autoComplete: "off",
					maxLength: 200,
					value: i.clouddrive_address,
					isDisabled: !e.available,
					onChange: (e) => a({
						...i,
						clouddrive_address: e
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "CloudDrive2 API token",
					type: "password",
					autoComplete: "off",
					maxLength: 400,
					placeholder: e.token_set ? "Saved; leave empty to keep" : "Generate it under CloudDrive2 “Settings → API tokens”",
					hint: "Requires offline task permission.",
					value: o,
					isDisabled: !e.available,
					onChange: s
				}),
				S ? /* @__PURE__ */ (0, Q.jsx)(P, {
					label: /* @__PURE__ */ (0, Q.jsx)(Rt, {
						source: "115",
						label: "115 target folder"
					}),
					placeholder: "When empty, filled in from the media library folders",
					autoComplete: "off",
					maxLength: 300,
					validationBehavior: "aria",
					isInvalid: ee,
					hint: ee ? v ? "Create this folder first, or enter an existing one." : "This folder doesn't exist." : "Must be inside a cloud path prefix that is imported automatically.",
					value: w("115"),
					isDisabled: !e.available,
					onChange: (e) => T("115", e)
				}) : null,
				C ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(P, {
					label: /* @__PURE__ */ (0, Q.jsx)(Rt, {
						source: "pikpak",
						label: "PikPak target folder"
					}),
					placeholder: "Cloud drive path starting with /",
					autoComplete: "off",
					maxLength: 300,
					hint: "The folder must already exist.",
					value: w("pikpak"),
					isDisabled: !e.available,
					onChange: (e) => T("pikpak", e)
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(lt, { children: /* @__PURE__ */ (0, Q.jsx)(Rt, {
						source: "pikpak",
						label: "Media folder mapped to the PikPak root"
					}) }), e.pikpak_roots.length ? /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "Media folder mapped to the PikPak root",
						selectedKey: i.pikpak_root || null,
						isDisabled: !e.available,
						placeholder: "Chosen from the media library folders when checking",
						onSelectionChange: (e) => a({
							...i,
							pikpak_root: e === null ? "" : String(e)
						}),
						children: e.pikpak_roots.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
							id: e,
							children: e
						}, e))
					}) : /* @__PURE__ */ (0, Q.jsx)(N, { children: "First add the PikPak mount folder under “Media libraries and import”." })]
				})] }) : null,
				/* @__PURE__ */ (0, Q.jsx)(P, {
					label: "Wait limit (hours)",
					type: "number",
					inputMode: "numeric",
					autoComplete: "off",
					hint: `Marked stalled on timeout; 1–${e.max_wait_hours} hours.`,
					value: c,
					isDisabled: !e.available,
					onChange: l
				})
			] }),
			b.busy === "auto" ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(ht, { label: "Checking CloudDrive2" })
			}) : null,
			u ? /* @__PURE__ */ (0, Q.jsx)(gr, {
				report: u,
				detected: f,
				suggested: m,
				create: e.available ? (e) => {
					let t = {
						clouddrive_address: i.clouddrive_address,
						token: o,
						path: e,
						pikpak_root: i.pikpak_root,
						pikpak_account: r
					};
					b.run("folder", (e) => G(or, t, "POST", e), (t) => {
						d(t), h((t) => ({
							...t,
							target: {
								path: e,
								exists: !0
							}
						})), y(!1), _(""), n("Folder created");
					}, (e) => _(q(e)));
				} : void 0,
				creating: b.busy === "folder"
			}) : null,
			g || b.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: g || b.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(M, {
				status: e.available ? void 0 : "Cloud downloads are only available on devices allowed to modify the database.",
				children: [/* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: () => {
						let e = {
							address: !i.clouddrive_address.trim(),
							target: !w("115").trim(),
							root: !i.pikpak_root
						}, t = {
							clouddrive_address: i.clouddrive_address,
							token: o,
							target: w("115"),
							pikpak_root: i.pikpak_root,
							pikpak_account: r
						};
						b.run("check", (e) => G(ar, t, "POST", e), (t) => te(t, e), (e) => _(q(e)));
					},
					disabled: !e.available,
					...K(b.busy === "check"),
					children: "Check connection"
				}), /* @__PURE__ */ (0, Q.jsx)(E, {
					type: "submit",
					disabled: !e.available,
					...K(b.busy === "save"),
					children: "Save settings"
				})]
			})
		]
	});
}
var hr = {
	target: null,
	root: "",
	saved: !1
};
function gr({ report: e, detected: t, suggested: n, create: r, creating: i }) {
	let a = n.target, o = !!(t || a || n.root || e.permissions.length || e.folder || e.quota);
	return !o && !e.problems.length ? null : /* @__PURE__ */ (0, Q.jsxs)(V, {
		divided: !0,
		children: [o ? /* @__PURE__ */ (0, Q.jsxs)(ct, { children: [
			t ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "CloudDrive2 URL",
				children: `Detected ${t}; takes effect after saving`
			}) : null,
			a?.exists ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Rt, {
					source: "115",
					label: "115 target folder"
				}),
				children: n.saved ? `Filled in ${a.path} from the media library folders` : `Fill in ${a.path} from the media library folders; takes effect after saving`
			}) : null,
			a && !a.exists ? /* @__PURE__ */ (0, Q.jsxs)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Rt, {
					source: "115",
					label: "115 target folder"
				}),
				children: [`${a.path} doesn't exist`, r ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					size: "small",
					onClick: () => r(a.path),
					...K(i),
					children: "Create this folder"
				}) : null]
			}) : null,
			n.root ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Rt, {
					source: "pikpak",
					label: "PikPak root folder"
				}),
				children: `Fill in ${n.root} from the media library folders; takes effect after saving`
			}) : null,
			e.permissions.length ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "Offline permission",
				children: e.missing.length ? e.missing.map((e) => /* @__PURE__ */ (0, Q.jsx)(et, {
					variant: "caption",
					color: "yellow",
					children: `Missing ${e}`
				}, e)) : /* @__PURE__ */ (0, Q.jsx)(et, {
					variant: "caption",
					color: "lime",
					children: "Complete"
				})
			}) : null,
			e.folder ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "Target folder",
				children: e.folder.can_offline ? `${e.folder.path} supports offline downloads` : `${e.folder.path} doesn't support offline downloads`
			}) : null,
			e.quota ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: /* @__PURE__ */ (0, Q.jsx)(Rt, {
					source: "115",
					label: "115 offline quota"
				}),
				children: `${e.quota.left} of ${e.quota.total} left this month`
			}) : null
		] }) : null, e.problems.map((e) => /* @__PURE__ */ (0, Q.jsx)(k, { children: e }, e))]
	});
}
function _r({ state: e, settle: t, receipt: n, username: r, setUsername: i }) {
	let [a, o] = (0, Z.useState)(""), [s, c] = (0, Z.useState)(!1), [l, u] = (0, Z.useState)(""), [d, f] = (0, Z.useState)(""), [p, m] = (0, Z.useState)(""), h = Y(), g = e.pikpak, _ = e.pikpak_browser, v = _.state === "waiting";
	(0, Z.useEffect)(() => {
		if (!v) return;
		let e = new AbortController(), r, i = async () => {
			try {
				let r = await W(lr, e.signal);
				if (e.signal.aborted || (t(r), r.pikpak_browser.state === "done" ? n("Signed in to PikPak") : r.pikpak_browser.state !== "waiting" && m(r.pikpak_browser.message), r.pikpak_browser.state !== "waiting")) return;
			} catch (t) {
				if (e.signal.aborted) return;
				f(q(t));
			}
			r = setTimeout(i, ur);
		};
		return r = setTimeout(i, ur), () => {
			e.abort(), clearTimeout(r);
		};
	}, [v]);
	let y = () => {
		m(""), h.run("browser", (e) => G(lr, {}, "POST", e), (e) => {
			t(e), f("");
		}, (e) => f(q(e)));
	}, b = () => {
		h.run("cancel", (e) => G(`${lr}/cancel`, {}, "POST", e), (e) => {
			t(e), f(""), m(e.pikpak_browser.message);
		}, (e) => f(q(e)));
	}, x = (e) => {
		if (e.preventDefault(), g.logged_in) return;
		let i = {
			username: r,
			password: a,
			remember: s
		};
		h.run("login", (e) => G(sr, i, "POST", e), (e) => {
			t(e.settings), f(""), e.ok ? (u(""), o(""), n("Signed in to PikPak")) : u(e.captcha_url ?? "");
		}, (e) => f(q(e)));
	}, S = () => {
		h.run("logout", (e) => G(cr, {}, "POST", e), (e) => {
			t(e), f(""), n("Signed out of PikPak");
		}, (e) => f(q(e)));
	}, C = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(P, {
			label: "Account",
			placeholder: "Email or phone number",
			autoComplete: "username",
			maxLength: 200,
			value: r,
			isDisabled: !e.available,
			onChange: i
		}),
		/* @__PURE__ */ (0, Q.jsx)(P, {
			label: "Password",
			type: "password",
			autoComplete: "current-password",
			maxLength: 200,
			value: a,
			isDisabled: !e.available,
			onChange: o
		}),
		/* @__PURE__ */ (0, Q.jsx)(D, {
			isSelected: s,
			isDisabled: !e.available,
			onChange: c,
			children: "Save the password and sign in again automatically when the session expires"
		}),
		l ? /* @__PURE__ */ (0, Q.jsx)(F, {
			tone: "warning",
			title: "Human verification required",
			extra: /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					href: l,
					children: "Open PikPak verification page"
				})
			}),
			children: "After completing verification in the browser, come back and click “Sign in” again."
		}) : null
	] }), w = /* @__PURE__ */ (0, Q.jsx)(E, {
		type: "submit",
		variant: "primary",
		disabled: !e.available || v,
		...K(h.busy === "login"),
		children: "Sign in"
	}), T = _.state === "timeout" || _.state === "failed";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "PikPak account",
		icon: /* @__PURE__ */ (0, Q.jsx)(dr, {}),
		onSubmit: x,
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: g.logged_in ? "success" : v ? "progress" : T ? "error" : "neutral",
			children: g.logged_in ? "Signed in" : v ? "Waiting for sign-in" : T ? "Sign-in incomplete" : "Not signed in"
		}),
		children: [
			g.logged_in ? /* @__PURE__ */ (0, Q.jsxs)(ct, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
				term: "Account",
				children: g.username || "Signed in"
			}), g.method === "browser" ? /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "Sign-in method",
				children: "Browser sign-in, renewed by Peach"
			}) : /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "Password",
				children: g.remember ? "Saved; signs in again automatically when the session expires" : "Not saved; come back here to sign in again when the session expires"
			})] }) : /* @__PURE__ */ (0, Q.jsxs)(V, { children: [p ? T ? /* @__PURE__ */ (0, Q.jsx)(k, { children: p }) : /* @__PURE__ */ (0, Q.jsx)(N, {
				role: "status",
				children: p
			}) : null, C] }),
			d || h.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: d || h.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, {
				status: !g.logged_in && v ? /* @__PURE__ */ (0, Q.jsx)(ht, { label: _.message || "Waiting for you to sign in to PikPak in the browser window" }) : null,
				children: g.logged_in ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: S,
					disabled: !e.available,
					...K(h.busy === "logout"),
					children: "Sign out"
				}) : /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [_.available ? v ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					type: "button",
					onClick: b,
					...K(h.busy === "cancel"),
					children: "Cancel"
				}) : /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					type: "button",
					onClick: y,
					disabled: !e.available,
					...K(h.busy === "browser"),
					children: "Sign in with browser"
				}) : null, w] })
			})
		]
	});
}
// src/react/settings/library-sharing-settings.tsx
function vr({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(null), [o, s] = (0, Z.useState)(!1), [c, l] = (0, Z.useState)(!1), u = (0, Z.useMemo)(() => i ? JSON.stringify(i.data, null, 2) : "", [i]), d = Y(), f = (e) => void d.run("save", (t) => G("/api/configuration/library-sharing", {
		enabled: e,
		schema: n.schema,
		consent: c,
		preview_token: i?.token
	}, "POST", t), (e) => {
		r(e), a(null), l(!1), s(!1), t("Library and taste upload options saved");
	}), p = () => {
		let e = URL.createObjectURL(new Blob([u], { type: "application/json" })), t = document.createElement("a");
		t.href = e, t.download = "peach-library-taste-preview.json", document.body.append(t);
		try {
			t.click();
		} finally {
			t.remove(), setTimeout(() => URL.revokeObjectURL(e), 1e3);
		}
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
			label: "Upload library and taste details",
			description: n.notice,
			children: /* @__PURE__ */ (0, Q.jsx)(U, {
				"aria-label": "Upload library and taste details",
				isSelected: n.enabled,
				onChange: (e) => e ? s(!0) : f(!1),
				...K(d.busy === "save")
			})
		}) }),
		n.available ? null : /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, { children: "Upload service not configured" })
			})
		}),
		n.enabled && n.last_attempt?.status === "failed" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: n.last_attempt.attempted ? "error" : "warning",
					children: n.last_attempt.attempted ? "Upload failed" : "Will re-prepare"
				})
			}), /* @__PURE__ */ (0, Q.jsx)(k, { children: n.last_attempt.attempted ? "Library and taste upload failed; nothing more is sent this week." : "Library and taste upload didn't finish; it will re-prepare automatically." })]
		}) : null,
		n.enabled && n.last_attempt?.status === "waiting-data" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, { children: "Waiting for data" })
			}), /* @__PURE__ */ (0, Q.jsx)(N, { children: "Waiting for library or preference data to analyze." })]
		}) : null,
		n.enabled && n.last_attempt?.status === "unknown" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "self-start",
				children: /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: "warning",
					children: "Result not obtained"
				})
			}), /* @__PURE__ */ (0, Q.jsx)(N, { children: "Upload result not obtained; nothing more is sent this week." })]
		}) : null,
		i ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(N, { children: [
					"The current preview contains ",
					i.data.library.length,
					" coded titles and a summary of ",
					i.data.coverage.uncoded_items,
					" uncoded library items, about ",
					(i.bytes / 1024).toFixed(1),
					" KiB. It excludes personal data such as accounts, devices, file paths and browser history."
				] }),
				/* @__PURE__ */ (0, Q.jsx)(O, {
					summary: "Upload data preview",
					defaultOpen: !0,
					children: /* @__PURE__ */ (0, Q.jsx)(Ln, {
						code: u,
						language: "json",
						label: "Library and taste upload preview",
						maxCharacters: 24e3
					})
				}),
				u.length > 24e3 ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "Showing the first 24,000 characters; download to see everything." }) : null,
				/* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "secondary",
					onClick: p,
					children: "Download full preview"
				}),
				n.enabled ? null : /* @__PURE__ */ (0, Q.jsx)(D, {
					isSelected: c,
					onChange: l,
					children: "I've reviewed the upload preview and agree to upload library and taste details"
				})
			]
		}) : null,
		d.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(k, { children: d.error })
		}) : null,
		/* @__PURE__ */ (0, Q.jsxs)(M, { children: [
			o && !n.enabled ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => {
					s(!1), a(null), l(!1);
				},
				children: "Cancel"
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => {
					s(!0), d.run("preview", (e) => W("/api/configuration/library-sharing/preview", e), (e) => {
						a(e), l(!1);
					});
				},
				...K(d.busy === "preview"),
				children: "Preview upload"
			}),
			!n.enabled && i ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "primary",
				disabled: !c,
				onClick: () => f(!0),
				...K(d.busy === "save"),
				children: "Agree and turn on upload"
			}) : null
		] })
	] });
}
// src/react/settings/remote-reporting-settings.tsx
function yr({ value: e, onChange: t, busy: n = !1 }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
		label: "Send version stats and error diagnostics (recommended)",
		description: "Uploads version, system info, error type, code location and occurrence count.",
		children: /* @__PURE__ */ (0, Q.jsx)(U, {
			"aria-label": "Send version stats and error diagnostics (recommended)",
			isSelected: e.usage && e.errors,
			onChange: (n) => t({
				...e,
				usage: n,
				errors: n
			}),
			...K(n)
		})
	}) }), e.available ? null : /* @__PURE__ */ (0, Q.jsx)(V, {
		divided: !0,
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "self-start",
			children: /* @__PURE__ */ (0, Q.jsx)(H, { children: "Upload service not configured" })
		})
	})] });
}
function br({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), i = Y();
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(yr, {
		value: n,
		busy: i.busy === "save",
		onChange: (e) => {
			i.run("save", (t) => G("/api/configuration/remote-reporting", {
				usage: e.usage,
				errors: e.errors
			}, "POST", t), (e) => {
				r(e), t("Diagnostic options saved");
			});
		}
	}), i.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
		divided: !0,
		children: /* @__PURE__ */ (0, Q.jsx)(k, { children: i.error })
	}) : null] });
}
// src/react/components/animated-number.tsx
var xr = .6;
function Sr({ value: e, format: t = (e) => Math.round(e).toLocaleString(), className: n }) {
	let r = Mn(), [i, a] = (0, Z.useState)(e), o = (0, Z.useRef)(e);
	return (0, Z.useEffect)(() => {
		if (r || o.current === e) {
			o.current = e, a(e);
			return;
		}
		let t = Gt(o.current, e, {
			duration: xr,
			ease: "easeOut",
			onUpdate: (e) => {
				o.current = e, a(e);
			}
		});
		return () => t.stop();
	}, [e, r]), /* @__PURE__ */ (0, Q.jsx)("span", {
		className: n ? `tabular-nums ${n}` : "tabular-nums",
		children: t(i)
	});
}
// node_modules/recharts/es6/state/selectors/pieSelectors.js
function Cr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function wr(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Cr(Object(n), !0).forEach(function(t) {
			Tr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Tr(e, t, n) {
	return (t = Er(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Er(e) {
	var t = Dr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Dr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Or = oe([De, (e, t) => t], (e, t) => e.filter((e) => e.type === "pie").find((e) => e.id === t)), kr = [], Ar = (e, t, n) => n?.length === 0 ? kr : n, jr = oe([
	Te,
	Or,
	Ar
], (e, t, n) => {
	var r = e.chartData;
	if (t != null) {
		var i = t?.data != null && t.data.length > 0 ? t.data : r;
		if (i && i.length || n == null || (i = n.map((e) => wr(wr({}, t.presentationProps), e.props))), i != null) return i;
	}
}), Mr = oe([
	jr,
	Or,
	Ar
], (e, t, n) => {
	if (e != null && t != null) return e.map((e, r) => {
		var i, a = he(e, t.nameKey, t.name), o = n != null && (i = n[r]) != null && (i = i.props) != null && i.fill ? n[r].props.fill : typeof e == "object" && e && "fill" in e ? e.fill : t.fill;
		return {
			value: me(a, t.dataKey),
			dataKey: t.dataKey,
			color: o,
			payload: e,
			type: t.legendType
		};
	});
}), Nr = oe([
	jr,
	Or,
	Ar,
	Ee
], (e, t, n, r) => {
	if (t != null && e != null) return ii({
		offset: r,
		pieSettings: t,
		displayedData: e,
		cells: n
	});
}), Pr = ["key"], Fr = [
	"onMouseEnter",
	"onClick",
	"onMouseLeave"
], Ir = ["id"], Lr = ["id"];
function Rr() {
	return Rr = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Rr.apply(null, arguments);
}
function zr(e, t) {
	if (e == null) return {};
	var n, r, i = Br(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function Br(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function Vr(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function $(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Vr(Object(n), !0).forEach(function(t) {
			Hr(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vr(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function Hr(e, t, n) {
	return (t = Ur(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Ur(e) {
	var t = Wr(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function Wr(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var Gr = S;
function Kr(e) {
	var n = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), r = Me((t) => Mr(t, e.id, n));
	return r == null ? null : /*#__PURE__*/ Z.createElement(w, { legendPayload: r });
}
function qr(e) {
	if (e != null && typeof e != "boolean" && typeof e != "function") {
		if (/*#__PURE__*/ Z.isValidElement(e)) {
			var t = e.props?.fill;
			return typeof t == "string" ? t : void 0;
		}
		var n = e.fill;
		return typeof n == "string" ? n : void 0;
	}
}
var Jr = /*#__PURE__*/ Z.memo((e) => {
	var t = e.dataKey, n = e.nameKey, r = e.sectors, i = e.stroke, a = e.strokeWidth, o = e.fill, s = e.name, c = e.hide, l = e.tooltipType, u = e.formatter, d = e.id, f = e.activeShape, p = qr(f), m = {
		dataDefinedOnItem: r.map((e) => {
			var t = e.tooltipPayload;
			return p == null || t == null ? t : t.map((e) => $($({}, e), {}, {
				color: p,
				fill: p
			}));
		}),
		getPosition: (e) => r[Number(e)]?.tooltipPosition,
		settings: {
			stroke: i,
			strokeWidth: a,
			fill: o,
			dataKey: t,
			nameKey: n,
			name: me(s, t),
			hide: c,
			type: l,
			color: o,
			unit: "",
			formatter: u,
			graphicalItemId: d
		}
	};
	return /*#__PURE__*/ Z.createElement(T, { tooltipEntrySettings: m });
}), Yr = (e, t) => e > t ? "start" : e < t ? "end" : "middle", Xr = (e, t, n) => pe(typeof t == "function" ? t(e) : t, n, n * .8), Zr = (e, t, n) => {
	var r = t.top, i = t.left, a = t.width, o = t.height, s = fe(a, o);
	return {
		cx: i + pe(e.cx, a, a / 2),
		cy: r + pe(e.cy, o, o / 2),
		innerRadius: pe(e.innerRadius, s, 0),
		outerRadius: Xr(n, e.outerRadius, s),
		maxRadius: e.maxRadius || Math.sqrt(a * a + o * o) / 2
	};
}, Qr = (e, t) => ye(t - e) * Math.min(Math.abs(t - e), 360), $r = (e, t) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	if (typeof e == "function") return e(t);
	var n = Xt("recharts-pie-label-line", typeof e == "boolean" ? "" : e.className);
	t.key;
	var r = zr(t, Pr);
	return /*#__PURE__*/ Z.createElement(l, Rr({}, r, {
		type: "linear",
		className: n
	}));
}, ei = (e, t, n) => {
	if (/*#__PURE__*/ Z.isValidElement(e)) return /*#__PURE__*/ Z.cloneElement(e, t);
	var r = n;
	if (typeof e == "function" && (r = e(t), /*#__PURE__*/ Z.isValidElement(r))) return r;
	var i = Xt("recharts-pie-label-text", ue(e));
	return /*#__PURE__*/ Z.createElement(ne, Rr({}, t, {
		alignmentBaseline: "middle",
		className: i
	}), r);
};
function ti(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label, a = n.labelLine, o = n.dataKey;
	if (!r || !i || !t) return null;
	var s = Oe(n), c = ke(i), l = ke(a), u = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, d = t.map((e, t) => {
		var n = (e.startAngle + e.endAngle) / 2, r = be(e.cx, e.cy, e.outerRadius + u, n), d = $($($($({}, s), e), {}, { stroke: "none" }, c), {}, {
			index: t,
			textAnchor: Yr(r.x, e.cx)
		}, r), p = $($($($({}, s), e), {}, {
			fill: "none",
			stroke: e.fill
		}, l), {}, {
			index: t,
			points: [be(e.cx, e.cy, e.outerRadius, n), r],
			key: "line"
		});
		return /*#__PURE__*/ Z.createElement(re, {
			zIndex: f.label,
			key: `label-${e.startAngle}-${e.endAngle}-${e.midAngle}-${t}`
		}, /*#__PURE__*/ Z.createElement(g, null, a && $r(a, p), ei(i, d, he(e, o))));
	});
	return /*#__PURE__*/ Z.createElement(g, { className: "recharts-pie-labels" }, d);
}
function ni(e) {
	var t = e.sectors, n = e.props, r = e.showLabels, i = n.label;
	return typeof i == "object" && i && "position" in i ? /*#__PURE__*/ Z.createElement(h, { label: i }) : /*#__PURE__*/ Z.createElement(ti, {
		sectors: t,
		props: n,
		showLabels: r
	});
}
function ri(e) {
	var t = e.sectors, n = e.activeShape, r = e.inactiveShape, i = e.allOtherPieProps, a = e.shape, o = e.id, s = e.animationElapsedTime, c = e.isAnimating, l = e.isEntrance, f = Me(we), p = Me(Se), m = Me(Ce), h = i.onMouseEnter, _ = i.onClick, v = i.onMouseLeave, y = zr(i, Fr), b = Pe(h, i.dataKey, o), x = Fe(v), S = Ne(_, i.dataKey, o);
	return t == null || t.length === 0 ? null : /*#__PURE__*/ Z.createElement(Z.Fragment, null, t.map((e, h) => {
		if (e?.startAngle === 0 && e?.endAngle === 0 && t.length !== 1) return null;
		var _ = m == null || m === o, v = String(h) === f && (p == null || i.dataKey === p) && _, C = n && v ? n : f ? r : null, w = $($({}, e), {}, {
			stroke: e.stroke,
			tabIndex: -1,
			index: h,
			isActive: v,
			animationElapsedTime: s,
			isAnimating: c,
			isEntrance: l,
			[d]: h,
			[u]: o
		});
		return /*#__PURE__*/ Z.createElement(g, Rr({
			key: `sector-${e?.startAngle}-${e?.endAngle}-${e.midAngle}-${h}`,
			tabIndex: -1,
			className: "recharts-pie-sector"
		}, ie(y, e, h), {
			onMouseEnter: b(e, h),
			onMouseLeave: x(e, h),
			onClick: S(e, h)
		}), /*#__PURE__*/ Z.createElement(ee, {
			option: C ?? a,
			DefaultShape: Gr,
			shapeProps: w
		}));
	}));
}
function ii(e) {
	var t = e.pieSettings, n = e.displayedData, r = e.cells, i = e.offset, a = t.cornerRadius, o = t.startAngle, s = t.endAngle, c = t.dataKey, l = t.nameKey, u = t.tooltipType, d = Math.abs(t.minAngle), f = Qr(o, s), p = Math.abs(f), m = n.length <= 1 ? 0 : t.paddingAngle ?? 0, h = n.filter((e) => he(e, c, 0) !== 0).length, g = (p >= 360 ? h : h - 1) * m, _ = n.reduce((e, t) => {
		var n = he(t, c, 0);
		return e + (_e(n) ? n : 0);
	}, 0), v = d > 0 && _ > 0 && n.some((e) => {
		var t = he(e, c, 0), n = (_e(t) ? t : 0) / _;
		return t !== 0 && n * p < d;
	}) ? d : 0, y = p - h * v - g, b;
	if (_ > 0) {
		var x;
		b = n.map((e, n) => {
			var s = he(e, c, 0), d = he(e, l, n), p = Zr(t, i, e), h = (_e(s) ? s : 0) / _, g, b = $($({}, e), r && r[n] && r[n].props), S = b != null && "fill" in b && typeof b.fill == "string" ? b.fill : t.fill;
			g = n ? x.endAngle + ye(f) * m * (s === 0 ? 0 : 1) : o;
			var C = g + ye(f) * ((s === 0 ? 0 : v) + h * y), w = (g + C) / 2, T = (p.innerRadius + p.outerRadius) / 2, ee = [{
				name: d,
				value: s,
				payload: b,
				dataKey: c,
				type: u,
				color: S,
				fill: S,
				graphicalItemId: t.id
			}], te = be(p.cx, p.cy, T, w);
			return x = $($($($({}, t.presentationProps), {}, {
				percent: h,
				cornerRadius: typeof a == "string" ? parseFloat(a) : a,
				name: d,
				tooltipPayload: ee,
				midAngle: w,
				middleRadius: T,
				tooltipPosition: te
			}, b), p), {}, {
				value: s,
				dataKey: c,
				startAngle: g,
				endAngle: C,
				payload: b,
				paddingAngle: s === 0 ? 0 : ye(f) * m
			}), x;
		});
	}
	return b;
}
function ai(e) {
	var t = e.showLabels, n = e.sectors, r = e.children, i = (0, Z.useMemo)(() => !t || !n ? [] : n.map((e) => ({
		value: e.value,
		payload: e.payload,
		clockWise: !1,
		parentViewBox: void 0,
		viewBox: {
			cx: e.cx,
			cy: e.cy,
			innerRadius: e.innerRadius,
			outerRadius: e.outerRadius,
			startAngle: e.startAngle,
			endAngle: e.endAngle,
			clockWise: !1
		},
		fill: e.fill
	})), [n, t]);
	return /*#__PURE__*/ Z.createElement(b, { value: t ? i : void 0 }, r);
}
var oi = (e, t) => {
	if (e == null) return [];
	var n = [], r = e.find((e) => e.status !== "removed"), i = r ? r.next.startAngle : 0;
	return e.forEach((e, r) => {
		if (e.status !== "removed") {
			var a = r > 0 ? le(e.next, "paddingAngle", 0) : 0;
			if (e.status === "matched") {
				var o = ge(e.prev.endAngle - e.prev.startAngle, e.next.endAngle - e.next.startAngle, t), s = $($({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + o + a
				});
				n.push(s), i = s.endAngle;
			} else {
				var c = ge(0, e.next.endAngle - e.next.startAngle, t), l = $($({}, e.next), {}, {
					startAngle: i + a,
					endAngle: i + c + a
				});
				n.push(l), i = l.endAngle;
			}
		}
	}), n;
};
function si(t) {
	var n = t.props, r = t.previousSectorsRef, i = t.id, a = n.sectors, o = n.activeShape, s = n.inactiveShape, c = n.animationInterpolateFn, l = je(n.onAnimationStart, n.onAnimationEnd), u = l.isAnimating, d = l.handleAnimationStart, f = l.handleAnimationEnd, p = Ie();
	if (p == null) return null;
	var m = a[0];
	return /*#__PURE__*/ Z.createElement(ai, {
		showLabels: !u,
		sectors: a
	}, /*#__PURE__*/ Z.createElement(e, {
		animationInput: n,
		animationIdPrefix: "recharts-pie-",
		items: a,
		previousItemsRef: r,
		isAnimationActive: n.isAnimationActive,
		animationBegin: n.animationBegin,
		animationDuration: n.animationDuration,
		animationEasing: n.animationEasing,
		onAnimationStart: d,
		onAnimationEnd: f,
		animationInterpolateFn: c,
		animationMatchBy: n.animationMatchBy,
		layout: p
	}, (e, t, r) => /*#__PURE__*/ Z.createElement(g, null, /*#__PURE__*/ Z.createElement(ri, {
		sectors: e,
		activeShape: o,
		inactiveShape: s,
		allOtherPieProps: n,
		shape: n.shape,
		id: i,
		animationElapsedTime: t,
		isAnimating: u || t < 1,
		isEntrance: r
	}))), /*#__PURE__*/ Z.createElement(ni, {
		showLabels: !u,
		sectors: a,
		props: n
	}), /*#__PURE__*/ Z.createElement(y, {
		cx: m?.cx ?? 0,
		cy: m?.cy ?? 0,
		innerRadius: m?.innerRadius ?? 0,
		outerRadius: m?.outerRadius ?? 0,
		startAngle: n.startAngle,
		endAngle: n.endAngle,
		clockWise: !1
	}, n.children));
}
var ci = {
	animationBegin: 400,
	animationDuration: 1500,
	animationEasing: "ease",
	animationInterpolateFn: oi,
	animationMatchBy: ve,
	cx: "50%",
	cy: "50%",
	dataKey: "value",
	endAngle: 360,
	fill: "#808080",
	hide: !1,
	innerRadius: 0,
	isAnimationActive: "auto",
	label: !1,
	labelLine: !0,
	legendType: "rect",
	minAngle: 0,
	nameKey: "name",
	outerRadius: "80%",
	paddingAngle: 0,
	rootTabIndex: 0,
	shape: Gr,
	startAngle: 0,
	stroke: "#fff",
	zIndex: f.area
};
function li(e) {
	var n = e.id, r = zr(e, Ir), i = e.hide, a = e.className, o = e.rootTabIndex, s = (0, Z.useMemo)(() => ce(e.children, t), [e.children]), c = Me((e) => Nr(e, n, s)), l = (0, Z.useRef)(null), u = Xt("recharts-pie", a);
	return i || c == null ? (l.current = null, /*#__PURE__*/ Z.createElement(g, {
		tabIndex: o,
		className: u
	})) : /*#__PURE__*/ Z.createElement(re, { zIndex: e.zIndex }, /*#__PURE__*/ Z.createElement(Jr, {
		dataKey: e.dataKey,
		nameKey: e.nameKey,
		sectors: c,
		stroke: e.stroke,
		strokeWidth: e.strokeWidth,
		fill: e.fill,
		name: e.name,
		hide: e.hide,
		tooltipType: e.tooltipType,
		formatter: e.formatter,
		id: n,
		activeShape: e.activeShape
	}), /*#__PURE__*/ Z.createElement(g, {
		tabIndex: o,
		className: u
	}, /*#__PURE__*/ Z.createElement(si, {
		props: $($({}, r), {}, { sectors: c }),
		previousSectorsRef: l,
		id: n
	})));
}
function ui(e) {
	var t = xe(e, ci), n = t.id, r = zr(t, Lr), i = Oe(r);
	return /*#__PURE__*/ Z.createElement(x, {
		id: n,
		type: "pie"
	}, (e) => /*#__PURE__*/ Z.createElement(Z.Fragment, null, /*#__PURE__*/ Z.createElement(C, {
		type: "pie",
		id: e,
		data: r.data,
		dataKey: r.dataKey,
		hide: r.hide,
		angleAxisId: 0,
		radiusAxisId: 0,
		name: r.name,
		nameKey: r.nameKey,
		tooltipType: r.tooltipType,
		legendType: r.legendType,
		fill: r.fill,
		cx: r.cx,
		cy: r.cy,
		startAngle: r.startAngle,
		endAngle: r.endAngle,
		paddingAngle: r.paddingAngle,
		minAngle: r.minAngle,
		innerRadius: r.innerRadius,
		outerRadius: r.outerRadius,
		cornerRadius: r.cornerRadius,
		presentationProps: i,
		maxRadius: t.maxRadius
	}), /*#__PURE__*/ Z.createElement(Kr, Rr({}, r, { id: e })), /*#__PURE__*/ Z.createElement(li, Rr({}, r, { id: e }))));
}
var di = ui;
di.displayName = "Pie";
// node_modules/recharts/es6/chart/PieChart.js
function fi(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function pi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? fi(Object(n), !0).forEach(function(t) {
			mi(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fi(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function mi(e, t, n) {
	return (t = hi(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function hi(e) {
	var t = gi(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function gi(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
var _i = ["item"], vi = pi(pi({}, se), {}, {
	layout: "centric",
	startAngle: 0,
	endAngle: 360
}), yi = /*#__PURE__*/ (0, Z.forwardRef)((e, t) => {
	var n = xe(e, vi);
	return /*#__PURE__*/ Z.createElement(v, {
		chartName: "PieChart",
		defaultTooltipEventType: "item",
		validateTooltipEventTypes: _i,
		tooltipPayloadSearcher: ae,
		categoricalChartProps: n,
		ref: t
	});
}), bi = 5, xi = 2e3, Si = 0, Ci = "80%", wi = 0, Ti = 0, Ei = 0, Di = 360, Oi = [], ki = (0, Z.createContext)(null);
function Ai() {
	let e = (0, Z.use)(ki);
	if (!e) throw Error("Pie chart parts (<Pie />, <Tooltip />, …) must be used within <EvilPieChart />");
	return e;
}
function ji({ config: e, data: t, dataKey: n, nameKey: i, children: a, className: o, chartProps: s, defaultSelectedSector: c = null, onSelectionChange: l, isLoading: u = !1 }) {
	let [d, f] = (0, Z.useState)(c), p = (0, Z.useCallback)((e) => {
		if (f(e), e === null) {
			l?.(null);
			return;
		}
		let r = t.find((t) => t[i] === e);
		r && l?.({
			dataKey: e,
			value: r[n]
		});
	}, [
		t,
		n,
		i,
		l
	]), m = (0, Z.useMemo)(() => ({
		config: e,
		data: t,
		dataKey: n,
		nameKey: i,
		isLoading: u,
		selectedSector: d,
		selectSector: p
	}), [
		e,
		t,
		n,
		i,
		u,
		d,
		p
	]);
	return /* @__PURE__ */ (0, Q.jsx)(ki, {
		value: m,
		children: /* @__PURE__ */ (0, Q.jsxs)(r, {
			className: o,
			config: e,
			children: [/* @__PURE__ */ (0, Q.jsx)(_, { isLoading: u }), /* @__PURE__ */ (0, Q.jsx)(yi, {
				id: "evil-charts-pie-chart",
				accessibilityLayer: !0,
				...s,
				children: a
			})]
		})
	});
}
function Mi({ variant: e = "gradient", innerRadius: t = Si, outerRadius: n = Ci, cornerRadius: r = wi, paddingAngle: i = Ti, startAngle: a = Ei, endAngle: o = Di, isClickable: s = !1, glowingSectors: c = Oi, children: l, pieProps: u }) {
	let { config: d, data: f, dataKey: p, nameKey: m, isLoading: h, selectedSector: g, selectSector: _ } = Ai(), v = (0, Z.useId)().replace(/:/g, "");
	if (h) return /* @__PURE__ */ (0, Q.jsx)(di, {
		data: Bi,
		dataKey: "value",
		nameKey: "name",
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !1,
		shape: (e) => /* @__PURE__ */ (0, Q.jsx)(Vi, { ...e })
	});
	let y = Li(l, p), b = f.map((e) => ({
		...e,
		fill: `url(#${v}-colors-${e[m]})`
	}));
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(di, {
		data: b,
		dataKey: p,
		nameKey: m,
		innerRadius: t,
		outerRadius: n,
		cornerRadius: r,
		paddingAngle: i,
		startAngle: a,
		endAngle: o,
		strokeWidth: 0,
		isAnimationActive: !0,
		style: s ? { cursor: "pointer" } : void 0,
		onClick: (e, t) => {
			if (!s) return;
			let n = f[t]?.[m];
			_(g === n ? null : n);
		},
		shape: (e) => {
			let t = f[e.index ?? 0]?.[m], n = c.includes(t), r = s && g !== null && g !== t;
			return /* @__PURE__ */ (0, Q.jsx)(S, {
				...e,
				fill: `url(#${v}-colors-${t})`,
				filter: n ? `url(#${v}-glow-${t})` : void 0,
				stroke: i < 0 ? "var(--background)" : "none",
				strokeWidth: i < 0 ? 5 : 0,
				opacity: r ? .15 : 1,
				className: "transition-opacity duration-200"
			});
		},
		...u,
		children: y
	}), /* @__PURE__ */ (0, Q.jsxs)("defs", { children: [/* @__PURE__ */ (0, Q.jsx)(Ri, {
		id: v,
		config: d,
		variant: e
	}), c.length > 0 && /* @__PURE__ */ (0, Q.jsx)(zi, {
		id: v,
		glowingSectors: c
	})] })] });
}
var Ni = () => null;
function Pi({ variant: e, roundness: t, defaultIndex: n }) {
	let { isLoading: r, nameKey: i } = Ai();
	return r ? null : /* @__PURE__ */ (0, Q.jsx)(s, {
		defaultIndex: n,
		content: /* @__PURE__ */ (0, Q.jsx)(c, {
			nameKey: i,
			hideLabel: !0,
			roundness: t,
			variant: e
		})
	});
}
function Fi({ variant: e, align: t = "center", verticalAlign: n = "bottom", isClickable: r = !1 }) {
	let { nameKey: o, selectedSector: s, selectSector: c } = Ai();
	return /* @__PURE__ */ (0, Q.jsx)(i, {
		verticalAlign: n,
		align: t,
		content: /* @__PURE__ */ (0, Q.jsx)(a, {
			selected: s,
			onSelectChange: c,
			isClickable: r,
			nameKey: o,
			variant: e
		})
	});
}
function Ii({ variant: e = "dots" }) {
	return /* @__PURE__ */ (0, Q.jsx)(n, { variant: e });
}
var Li = (e, t) => {
	let n = null;
	return Z.Children.forEach(e, (e) => {
		if (!(0, Z.isValidElement)(e) || e.type !== Ni) return;
		let { dataKey: r, labelListProps: i } = e.props;
		n = /* @__PURE__ */ (0, Q.jsx)(m, {
			dataKey: r ?? t,
			stroke: "none",
			fontSize: 12,
			fontWeight: 500,
			fill: "currentColor",
			className: "fill-background",
			...i
		});
	}), n;
}, Ri = ({ id: e, config: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: Object.entries(t).map(([t, n]) => {
	let r = de(n);
	return /* @__PURE__ */ (0, Q.jsx)("linearGradient", {
		id: `${e}-colors-${t}`,
		x1: "0",
		y1: "0",
		x2: "1",
		y2: "1",
		children: r === 1 ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "0%",
			stopColor: `var(--color-${t}-0)`
		}), /* @__PURE__ */ (0, Q.jsx)("stop", {
			offset: "100%",
			stopColor: `var(--color-${t}-0)`
		})] }) : Array.from({ length: r }, (e, n) => {
			let i = `${n / (r - 1) * 100}%`;
			return /* @__PURE__ */ (0, Q.jsx)("stop", {
				offset: i,
				stopColor: `var(--color-${t}-${n}, var(--color-${t}-0))`
			}, i);
		})
	}, `${e}-colors-${t}`);
}) }), zi = ({ id: e, glowingSectors: t }) => /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => /* @__PURE__ */ (0, Q.jsxs)("filter", {
	id: `${e}-glow-${t}`,
	x: "-100%",
	y: "-100%",
	width: "300%",
	height: "300%",
	children: [
		/* @__PURE__ */ (0, Q.jsx)("feGaussianBlur", {
			in: "SourceGraphic",
			stdDeviation: "8",
			result: "blur"
		}),
		/* @__PURE__ */ (0, Q.jsx)("feColorMatrix", {
			in: "blur",
			type: "matrix",
			values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0",
			result: "glow"
		}),
		/* @__PURE__ */ (0, Q.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "glow" }), /* @__PURE__ */ (0, Q.jsx)("feMergeNode", { in: "SourceGraphic" })] })
	]
}, `${e}-glow-${t}`)) }), Bi = Array.from({ length: bi }, (e, t) => ({
	name: `loading${t}`,
	value: 100 / bi
})), Vi = (e) => {
	let { index: t = 0, ...n } = e, r = t / bi * (xi / 1e3);
	return /* @__PURE__ */ (0, Q.jsx)(pn.g, {
		initial: { opacity: .15 },
		animate: { opacity: [
			.15,
			.5,
			.15
		] },
		transition: {
			duration: xi / 1e3,
			delay: r,
			repeat: Infinity,
			ease: "easeInOut"
		},
		children: /* @__PURE__ */ (0, Q.jsx)(S, {
			...n,
			fill: "currentColor"
		})
	});
};
ji.Pie = Mi, ji.Label = Ni, ji.Tooltip = Pi, ji.Legend = Fi, ji.Background = Ii;
// src/react/settings/storage-charts.tsx
var Hi = {
	database: "var(--color-chart-1)",
	backups: "var(--color-chart-2)",
	playback: "var(--color-chart-3)",
	thumbnails: "var(--color-chart-4)",
	previews: "var(--color-chart-5)",
	downloads: "var(--color-chart-6)",
	sources: "var(--color-chart-7)",
	records: "var(--color-chart-8)",
	tools: "var(--color-chart-9)"
}, Ui = "var(--color-text-tertiary)", Wi = {
	database: "bg-chart-1",
	backups: "bg-chart-2",
	playback: "bg-chart-3",
	thumbnails: "bg-chart-4",
	previews: "bg-chart-5",
	downloads: "bg-chart-6",
	sources: "bg-chart-7",
	records: "bg-chart-8",
	tools: "bg-chart-9"
}, Gi = (e) => J(e);
function Ki(e) {
	let t = e.filter((e) => Hi[e.key] && e.bytes > 0).map((e) => ({
		key: e.key,
		label: e.label,
		bytes: e.bytes,
		color: Hi[e.key]
	})), n = e.filter((e) => !Hi[e.key]).reduce((e, t) => e + t.bytes, 0);
	return n > 0 ? [...t, {
		key: "rest",
		label: "Rest",
		bytes: n,
		color: Ui
	}] : t;
}
function qi({ storage: e }) {
	let t = e.usage, n = Ki(t.categories), r = Object.fromEntries(n.map((e) => [e.key, {
		label: e.label,
		colors: Ae(e.color)
	}])), i = n.map((e) => ({
		slice: e.key,
		value: e.bytes
	}));
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-5 md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "relative mx-auto size-48 flex-none",
			role: "img",
			"aria-label": `Data folder total ${Gi(t.total_bytes)}, share by category`,
			children: [/* @__PURE__ */ (0, Q.jsxs)(ji, {
				data: i,
				dataKey: "value",
				nameKey: "slice",
				config: r,
				className: "aspect-square size-48 flex-none",
				children: [/* @__PURE__ */ (0, Q.jsx)(ji.Pie, {
					innerRadius: "68%",
					outerRadius: "100%",
					paddingAngle: 1,
					cornerRadius: 3
				}), /* @__PURE__ */ (0, Q.jsx)(o, {
					nameKey: "slice",
					hideLabel: !0,
					format: Gi
				})]
			}), /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center",
				children: [/* @__PURE__ */ (0, Q.jsx)("b", {
					className: "text-title-2-medium tabular-nums text-text-primary",
					children: Gi(t.total_bytes)
				}), /* @__PURE__ */ (0, Q.jsxs)("small", {
					className: "text-caption-1-regular tabular-nums text-text-secondary",
					children: [t.total_files.toLocaleString(), " files"]
				})]
			})]
		}), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-1 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)("ul", {
				className: "flex flex-wrap gap-x-4 gap-y-1.5",
				"aria-label": "Legend",
				children: n.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
					className: "flex items-center gap-1.5 text-caption-1-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
							className: `${te} ${Wi[e.key] || "bg-text-tertiary"}`
						}),
						e.label,
						/* @__PURE__ */ (0, Q.jsx)("span", {
							className: "tabular-nums text-text-primary",
							children: Gi(e.bytes)
						})
					]
				}, e.key))
			}), /* @__PURE__ */ (0, Q.jsx)(Ji, { storage: e })]
		})]
	});
}
function Ji({ storage: e }) {
	if (e.total_bytes === null || e.free_bytes === null || !e.usage) return null;
	let t = Math.min(e.usage.total_bytes, e.total_bytes), n = e.free_bytes, r = Math.max(0, e.total_bytes - n - t), i = {
		peach: {
			label: "Peach data",
			colors: Ae("var(--color-border-focus-ring)")
		},
		others: {
			label: "Other files",
			colors: Ae(Ui)
		},
		free: {
			label: "Free",
			colors: Ae("var(--color-background-tertiary-default)")
		}
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsxs)("p", {
			className: "text-caption-1-regular text-text-secondary",
			children: [
				"Disk total ",
				Gi(e.total_bytes),
				e.system_drive ? " (system disk)" : "",
				", Peach uses ",
				((t) => {
					let n = t / e.total_bytes * 100;
					return n < .1 ? "Under 0.1%" : `${n.toFixed(+(n < 10))}%`;
				})(t),
				", free ",
				Gi(n)
			]
		}), /* @__PURE__ */ (0, Q.jsxs)(p, {
			data: [{
				disk: "Disk",
				peach: t,
				others: r,
				free: n
			}],
			config: i,
			layout: "horizontal",
			stackType: "percent",
			barRadius: 4,
			chartProps: { margin: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			} },
			className: "aspect-auto h-6 flex-none",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(p.YAxis, {
					dataKey: "disk",
					hide: !0
				}),
				/* @__PURE__ */ (0, Q.jsx)(p.XAxis, { hide: !0 }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "peach" }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "others" }),
				/* @__PURE__ */ (0, Q.jsx)(p.Bar, { dataKey: "free" }),
				/* @__PURE__ */ (0, Q.jsx)(o, {
					hideLabel: !0,
					format: Gi
				})
			]
		})]
	});
}
// src/react/settings/storage-settings.tsx
var Yi = "/api/configuration/storage", Xi = 1500, Zi = 864e5, Qi = (e) => e instanceof qe && e.body?.errors?.target || q(e);
function $i(e) {
	if (e.free_bytes === null || e.total_bytes === null) return "Not obtained";
	let t = `${J(e.free_bytes)} free of ${J(e.total_bytes)}`;
	return e.system_drive ? `${t} (system disk)` : t;
}
var ea = (e) => e.cleanable && e.reclaimable > 0;
function ta({ job: e }) {
	let t = e.files || 0, n = e.expected_files || 0, r = /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		"Measured ",
		/* @__PURE__ */ (0, Q.jsx)(Sr, { value: t }),
		" files · ",
		/* @__PURE__ */ (0, Q.jsx)(Sr, {
			value: e.bytes || 0,
			format: J
		})
	] });
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"aria-live": "polite",
		className: "flex flex-col gap-2",
		children: [n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Ot, {
			label: "Measuring progress",
			value: Math.min(t, n * .99),
			max: n
		}), /* @__PURE__ */ (0, Q.jsxs)(N, { children: [
			r,
			", ",
			n.toLocaleString(),
			" last time"
		] })] }) : /* @__PURE__ */ (0, Q.jsx)(ht, { label: "Measuring space usage" }), n ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: r })]
	});
}
function na({ category: e, selected: t, disabled: n, onToggle: r }) {
	let i = ea(e), a = e.cleanable ? e.reclaimable > 0 ? `After clearing, ${e.note}` : "Nothing to clear" : `Can't clear: ${e.note}`;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-category": e.key,
		className: "flex min-h-13 w-full items-start gap-3 border-b border-separator-border py-2.5 pr-3 last:border-b-0",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(D, {
				"aria-label": `Clear ${e.label}`,
				isSelected: t,
				isDisabled: !i || n,
				onChange: r,
				className: "mt-0.5"
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex min-w-0 flex-1 flex-col gap-0.5",
				children: [
					/* @__PURE__ */ (0, Q.jsxs)("p", {
						className: "flex items-center gap-2 text-body-regular text-text-primary",
						children: [/* @__PURE__ */ (0, Q.jsx)("i", {
							"aria-hidden": !0,
							className: `size-2.5 shrink-0 rounded-xs ${Wi[e.key] || "bg-text-tertiary"}`
						}), e.label]
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-body-2-regular text-text-secondary",
						children: e.description
					}),
					/* @__PURE__ */ (0, Q.jsx)("p", {
						className: "text-caption-1-regular text-text-tertiary",
						children: a
					})
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex shrink-0 flex-col items-end gap-0.5 text-right",
				children: [/* @__PURE__ */ (0, Q.jsx)(Sr, {
					value: e.bytes,
					format: J,
					className: "text-body-regular text-text-primary"
				}), i ? /* @__PURE__ */ (0, Q.jsxs)("span", {
					className: "text-caption-1-regular text-text-secondary",
					children: [J(e.reclaimable), " reclaimable"]
				}) : null]
			})
		]
	});
}
function ra({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(/* @__PURE__ */ new Set()), c = Y(), l = n.job.state !== "idle", u = (0, Z.useRef)(l);
	(0, Z.useEffect)(() => {
		if (!l) return;
		let e = new AbortController(), t = setTimeout(() => {
			W(Yi, e.signal).then(r, () => {
				e.signal.aborted || r((e) => ({ ...e }));
			});
		}, Xi);
		return () => {
			e.abort(), clearTimeout(t);
		};
	}, [n]), (0, Z.useEffect)(() => {
		l ? u.current = !0 : u.current && (u.current = !1, s(/* @__PURE__ */ new Set()), n.job.error || t(n.job.message || "Space usage measured"));
	}, [l]);
	let d = () => void c.run("measure", (e) => G(`${Yi}/measure`, {}, "POST", e), r), f = n.usage, p = f?.categories.filter(ea) ?? [], m = p.filter((e) => o.has(e.key)), h = (e, t) => {
		if (!e.length) return;
		let n = e.reduce((e, t) => e + t.reclaimable, 0);
		Qt({
			title: t,
			body: `This will delete ${J(n)}: ${e.map((e) => `${e.label} ${J(e.reclaimable)} (after clearing, ${e.note})`).join("; ")}.`,
			confirmLabel: `Clear ${J(n)}`,
			danger: e.some((e) => e.key === "backups"),
			onConfirm: async () => r(await G(`${Yi}/clean`, { categories: e.map((e) => e.key) }))
		});
	}, g = () => void c.run("relocate", async (e) => {
		let t = (await G(xt, { initial: n.data_root }, "POST", e)).path;
		if (!t) return;
		let r = n.usage ? J(n.usage.total_bytes) : "";
		await Qt({
			title: "Move data folder",
			body: `Move ${r} of data from ${n.data_root} to ${t}. Peach quits during the move and reopens automatically afterward; data in the old location is deleted once verified in the new one.`,
			confirmLabel: "Move data folder",
			onConfirm: async () => {
				try {
					a((await G(`${Yi}/relocate`, { target: t })).message);
				} catch (e) {
					throw Error(Qi(e));
				}
			}
		});
	}, () => void 0), _ = n.relocation.last, v = _ && (_.state === "error" || (_.notes?.length ?? 0) > 0 || Date.now() - _.finished_at * 1e3 < Zi), y = f?.categories.find((e) => e.key === n.job.category)?.label, b = i || (n.job.state === "cleaning" ? `Clearing ${y || ""}…` : n.job.state === "measuring" ? "Measuring space usage…" : m.length ? `Selected ${m.length} categories, reclaimable ${J(m.reduce((e, t) => e + t.reclaimable, 0))}` : f ? `Measured at ${(/* @__PURE__ */ new Date(f.measured_at * 1e3)).toLocaleString()}` : ""), x = l || !!i, S = (e) => (t) => s((n) => {
		let r = new Set(n);
		return t ? r.add(e) : r.delete(e), r;
	});
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "storageSettings",
		title: "Storage",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(ct, { children: [/* @__PURE__ */ (0, Q.jsx)(j, {
				term: "Data folder",
				children: /* @__PURE__ */ (0, Q.jsx)(Et, {
					path: n.data_root,
					className: "text-body-regular text-text-primary",
					onRevealed: t
				})
			}), /* @__PURE__ */ (0, Q.jsx)(j, {
				term: "Disk",
				children: $i(n)
			})] }),
			/* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [
					n.job.state === "measuring" ? /* @__PURE__ */ (0, Q.jsx)(ta, { job: n.job }) : null,
					f ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-storage-result": "",
						className: Jt({
							variant: "outlined",
							padding: "none",
							className: "flex flex-col"
						}),
						children: [/* @__PURE__ */ (0, Q.jsx)("div", {
							className: "border-b border-separator-border p-4",
							children: /* @__PURE__ */ (0, Q.jsx)(qi, { storage: n })
						}), /* @__PURE__ */ (0, Q.jsx)("div", {
							className: "flex flex-col pl-4",
							children: f.categories.map((e) => /* @__PURE__ */ (0, Q.jsx)(na, {
								category: e,
								selected: o.has(e.key),
								disabled: x,
								onToggle: S(e.key)
							}, e.key))
						})]
					}) : n.job.state === "measuring" ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: "After measuring, shows the space used by each kind of data and lets you clear caches and old backups." }),
					n.relocation.available ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: n.relocation.message }),
					!n.relocation.available && n.relocation.steps?.length ? /* @__PURE__ */ (0, Q.jsx)("ol", {
						className: "flex list-decimal flex-col gap-2 pl-5 text-body-2-regular text-text-secondary",
						"aria-label": "Move on the host machine",
						children: n.relocation.steps.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", { children: [e.text, /* @__PURE__ */ (0, Q.jsx)("code", {
							className: "mt-1 block rounded-md bg-background-tertiary-default px-2 py-1 text-caption-1-regular break-all text-text-primary",
							children: e.command
						})] }, e.command))
					}) : null,
					n.job.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: n.job.message }) : null,
					c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null,
					v && _ ? _.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(k, { children: _.message }) : /* @__PURE__ */ (0, Q.jsx)(N, { children: [_.message, ..._.notes ?? []].join("; ") }) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(M, {
				status: b ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: i ? "status" : void 0,
					children: b
				}) : null,
				children: [
					f ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: x || !m.length,
						...K(n.job.state === "cleaning" && m.length > 0),
						onClick: () => h(m, "Clear selected data"),
						children: "Clear selected"
					}), /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: x || !p.length,
						onClick: () => h(p, "Clear all clearable data"),
						children: "Clear all"
					})] }) : null,
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						disabled: x || !n.relocation.available || !f,
						onClick: g,
						...K(c.busy === "relocate"),
						children: "Change location"
					}),
					/* @__PURE__ */ (0, Q.jsx)(E, {
						disabled: !!i || n.job.state === "cleaning",
						onClick: d,
						...K(c.busy === "measure" || n.job.state === "measuring"),
						children: f ? "Measure again" : "Measure usage"
					})
				]
			})
		]
	});
}
// src/react/settings/maintenance-settings.tsx
var ia = [
	["6", "Every 6 hours"],
	["24", "Daily"],
	["168", "Weekly"]
];
function aa({ data: e, receipt: t, reopenTutorial: n, panel: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...Zn(r),
		children: [
			e.storage ? /* @__PURE__ */ (0, Q.jsx)(ra, {
				initial: e.storage,
				receipt: t
			}) : null,
			e.remote_reporting || e.library_sharing ? /* @__PURE__ */ (0, Q.jsxs)(L, {
				id: "librarySharing",
				title: "Data upload",
				children: [e.remote_reporting ? /* @__PURE__ */ (0, Q.jsx)(br, {
					initial: e.remote_reporting,
					receipt: t
				}) : null, e.library_sharing ? /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "border-t border-separator-border",
					children: /* @__PURE__ */ (0, Q.jsx)(vr, {
						initial: e.library_sharing,
						receipt: t
					})
				}) : null]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(ca, { facts: e.facts }),
			/* @__PURE__ */ (0, Q.jsx)(oa, {
				receipt: t,
				reopenTutorial: n
			}),
			e.uninstall ? /* @__PURE__ */ (0, Q.jsx)(la, {
				uninstall: e.uninstall,
				receipt: t
			}) : null
		]
	});
}
function oa({ receipt: e, reopenTutorial: t }) {
	let n = Y();
	return /* @__PURE__ */ (0, Q.jsx)("section", {
		"aria-label": "Setup tutorial",
		className: "w-full",
		children: /* @__PURE__ */ (0, Q.jsxs)(It, { children: [/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
			label: "Setup tutorial",
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => void n.run("reopen", () => t(), () => e("Setup tutorial reopened")),
				...K(n.busy === "reopen"),
				children: "Reopen tutorial"
			})
		}) }), n.error ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: n.error }) }) : null] })
	});
}
function sa({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.mode), [i, a] = (0, Z.useState)(e.interval_hours), o = Y(e.error), s = (r) => {
		r.preventDefault(), e.available && o.run("save", (e) => G("/api/configuration/automatic-updates", {
			mode: n,
			interval_hours: i
		}, "POST", e), () => t("Settings saved"));
	}, c = e.available ? e.download_available ? "Once the download finishes, confirm the restart to install here." : void 0 : "Automatic updates require a tray-managed service.";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "automaticUpdates",
		title: "Automatic updates",
		onSubmit: s,
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Check for new versions automatically",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Check for new versions automatically",
						isSelected: n !== "off",
						isDisabled: !e.available,
						onChange: (e) => r(e ? "check" : "off")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Download updates automatically",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Download updates automatically",
						isSelected: n === "download",
						isDisabled: !e.available || !e.download_available || n === "off",
						onChange: (e) => r(e ? "download" : "check")
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Check frequency",
					description: c,
					children: /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "Check frequency",
						selectedKey: String(i),
						isDisabled: !e.available,
						onSelectionChange: (e) => {
							e !== null && a(Number(e));
						},
						children: ia.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
							id: e,
							children: t
						}, e))
					})
				})
			] }),
			o.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: o.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !e.available,
				...K(o.busy === "save"),
				children: "Save settings"
			}) })
		]
	});
}
function ca({ facts: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(L, {
		title: "Runtime info",
		children: /* @__PURE__ */ (0, Q.jsx)(ct, { children: e.map((e) => /* @__PURE__ */ (0, Q.jsxs)(j, {
			term: e.term,
			children: [e.value, e.download_url ? /* @__PURE__ */ (0, Q.jsx)(A, {
				href: e.download_url,
				children: e.download_label
			}) : null]
		}, e.term)) })
	});
}
function la({ uninstall: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(!1), [i, a] = (0, Z.useState)(""), o = () => void Qt({
		title: "Uninstall Peach",
		danger: !0,
		body: n ? "Peach will quit and remove the program, launch at startup, desktop icon, settings, local database, watch history, credentials and caches. Original media files are kept." : "Peach will quit and remove the program, launch at startup and desktop icon. Settings, local database, watch history and caches are kept.",
		confirmLabel: "Uninstall Peach",
		onConfirm: async () => {
			let e = await G("/api/configuration/uninstall", {
				delete_data: n,
				confirmation: "Uninstall Peach"
			});
			a(e.message);
		}
	}), s = i || e.message, c = [.../* @__PURE__ */ new Set([e.data_root, ...e.directories])];
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "uninstallPeach",
		title: "Uninstall Peach",
		children: [
			e.available ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, { children: "Uninstalling removes the Peach program itself; original media files are kept." }) }) : null,
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Full uninstall",
				description: "Also delete settings, the local database, watch history, credentials and caches",
				children: /* @__PURE__ */ (0, Q.jsx)(U, {
					"aria-label": "Full uninstall",
					isSelected: n,
					isDisabled: !e.full_available || !!i,
					onChange: r
				})
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(O, {
					summary: "Data folder",
					children: c.map((e) => /* @__PURE__ */ (0, Q.jsx)(Et, {
						path: e,
						className: "text-body-2-regular text-text-secondary",
						onRevealed: t
					}, e))
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(M, {
				status: s ? /* @__PURE__ */ (0, Q.jsx)("p", {
					role: i ? "status" : void 0,
					children: s
				}) : null,
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "danger",
					disabled: !e.available || !!i,
					onClick: o,
					children: "Uninstall Peach"
				})
			})
		]
	});
}
// src/react/settings/release-updates.tsx
var ua = /* @__PURE__ */ new Set([
	"downloading",
	"verifying",
	"extracting",
	"preparing",
	"restarting",
	"installing"
]), da = [
	65,
	75,
	90
], fa = 120, pa = "https://github.com/peach-mitao/peach/releases";
function ma({ initial: e, initialJob: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(t || {
		state: "idle",
		progress: 0
	}), [o, s] = (0, Z.useState)(""), c = Y(), l = (0, Z.useRef)(!1), u = (0, Z.useRef)(!0), d = ua.has(i.state);
	(0, Z.useEffect)(() => (u.current = !0, () => {
		u.current = !1;
	}), []);
	let f = async () => {
		let e = await G("/api/configuration/update-restart", {});
		u.current && a(e);
	}, p = () => void Qt({
		title: "Update ready",
		body: `Peach ${i.version || ""} will install after a restart.`,
		confirmLabel: "Restart now",
		cancelLabel: "Later",
		onConfirm: f
	});
	(0, Z.useEffect)(() => {
		i.state !== "ready" || l.current || (l.current = !0, p());
	}, [i.state]), (0, Z.useEffect)(() => {
		let e = new AbortController(), t = ua.has(i.state) ? 1e3 : 3e4, n, o = 0, c = async () => {
			try {
				let t = await W("/api/configuration/update-status", e.signal);
				if (e.signal.aborted) return;
				a(t), o = 0, t.state === "complete" && r((e) => ({
					...e,
					current_version: t.version || e.current_version,
					state: "current",
					message: "Already on the latest test build."
				}));
				let n = await W("/api/configuration/automatic-updates", e.signal);
				!e.signal.aborted && n.result && r(n.result);
			} catch {
				o += 1, o >= fa && !e.signal.aborted && s("Not connected to Peach yet; check the tray and refresh the page.");
			}
			!e.signal.aborted && o < fa && (n = setTimeout(c, t));
		};
		return n = setTimeout(c, t), () => {
			e.abort(), clearTimeout(n);
		};
	}, [i.state]);
	let m = () => {
		d || (l.current = !1, s(""), c.run("download", (e) => G("/api/configuration/update", {}, "POST", e), a));
	}, h = () => void c.run("check", (e) => W("/api/configuration/updates", e), r, (t) => {
		r({
			...e,
			state: "error"
		}), c.setError(q(t));
	}), g = c.error || o, _ = i.state === "downloading" && i.total ? `${((i.downloaded || 0) / 1048576).toFixed(1)} / ${(i.total / 1048576).toFixed(1)} MB` : `${i.progress}%`;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "releaseUpdates",
		title: "Check for updates",
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: g || n.state === "error" || i.state === "error" ? "error" : d ? "progress" : n.state === "available" ? "warning" : n.state === "unchecked" ? "neutral" : "success",
			children: g || n.state === "error" || i.state === "error" ? "Check incomplete" : d ? "Preparing update" : i.state === "ready" ? "Ready to install" : n.state === "available" ? "Update available" : n.state === "unchecked" ? "Not checked yet" : "Check complete"
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(ct, { children: [
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "Current version",
					children: n.current_version
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "Install method",
					children: n.installation
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "Update channel",
					children: n.channel
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "Latest version",
					children: n.latest_version || "Not obtained"
				}),
				n.package_kind ? /* @__PURE__ */ (0, Q.jsxs)(j, {
					term: "Download contents",
					children: [n.package_kind === "update" ? "App update package" : "App and tools", n.asset_size ? ` · ${(n.asset_size / 1048576).toFixed(1)} MB` : ""]
				}) : null
			] }),
			n.package_kind === "update" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "The app update package reuses installed tools; when tools are missing, damaged or changed version, the needed tool package is downloaded separately." }) : n.package_kind === "full" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "This update includes media tools." }) : null,
			n.state === "unchecked" && !n.checked_at && !g && i.state === "idle" ? null : /* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [
					n.checked_at ? /* @__PURE__ */ (0, Q.jsxs)(N, { children: ["Checked at ", (/* @__PURE__ */ new Date(n.checked_at * 1e3)).toLocaleString()] }) : null,
					n.state === "available" && !g ? /* @__PURE__ */ (0, Q.jsx)(F, {
						tone: "info",
						title: "Update available",
						children: n.message
					}) : g || n.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(k, { children: g || n.message }) : n.state === "unchecked" ? null : /* @__PURE__ */ (0, Q.jsx)(N, {
						role: "status",
						children: n.message
					}),
					i.state === "error" ? /* @__PURE__ */ (0, Q.jsx)(k, { children: i.message }) : null,
					i.state !== "idle" && i.state !== "error" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
						"aria-live": "polite",
						className: "flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(Ot, {
								label: "Update preparation progress",
								value: i.progress,
								stops: da
							}),
							/* @__PURE__ */ (0, Q.jsxs)(N, { children: ["Download → verify → extract → prepare install · ", i.message] }),
							/* @__PURE__ */ (0, Q.jsx)(N, { children: _ })
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, Q.jsxs)(M, {
				status: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(A, {
							href: "https://peach.video/#download",
							children: "Official site"
						}),
						/* @__PURE__ */ (0, Q.jsx)(A, {
							href: "https://github.com/peach-mitao/peach",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, Q.jsx)(A, {
							href: n.release_url || pa,
							children: "View release page"
						})
					]
				}),
				children: [
					/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: i.state === "ready" || n.state === "available" && n.installation === "独立测试包" ? "secondary" : "primary",
						disabled: d,
						onClick: h,
						...K(c.busy === "check"),
						children: "Check for updates"
					}),
					n.state === "available" && n.installation === "独立测试包" && i.state !== "ready" ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: m,
						...K(d || c.busy === "download"),
						children: "Download and install"
					}) : null,
					i.state === "ready" ? /* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "primary",
						onClick: p,
						children: "Restart to install"
					}) : null
				]
			})
		]
	});
}
// src/react/settings/upgrade-repairs.tsx
var ha = {
	pending: "Waiting to repair",
	running: "Repairing",
	failed: "Needs retry",
	review: "Needs review",
	complete: "Done",
	unavailable: "Not enabled in this deployment"
};
function ga() {
	let { snapshot: e } = kn(), [t, n] = (0, Z.useState)(null), r = Y();
	(0, Z.useEffect)(() => n(null), [e]);
	let i = t ?? e?.repairs, a = i?.state || "pending", o = i?.items.reduce((e, t) => e + (t.pending || 0), 0) || 0, s = i?.items.reduce((e, t) => e + (t.failed || 0), 0) || 0, c = i?.items.reduce((e, t) => e + (t.review_count || 0), 0) || 0;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "upgradeRepairs",
		title: "Automatic repairs",
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: a === "failed" ? "error" : a === "running" ? "progress" : a === "review" ? "warning" : a === "complete" ? "success" : "neutral",
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-copy-key": `upgradeRepairs.${a}.status`,
				children: ha[a] || "Not obtained"
			}, a)
		}),
		children: [
			/* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, { children: "Fixes metadata and updates caches automatically after an upgrade." }) }),
			/* @__PURE__ */ (0, Q.jsxs)(ct, { children: [
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "Pending",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Sr, { value: o }), " items"] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "Failed",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Sr, { value: s }), " items"] })
				}),
				/* @__PURE__ */ (0, Q.jsx)(j, {
					term: "To review",
					children: /* @__PURE__ */ (0, Q.jsxs)("span", { children: [/* @__PURE__ */ (0, Q.jsx)(Sr, { value: c }), " items"] })
				})
			] }),
			i?.message || r.error ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: r.error || i?.message }) }) : null,
			a === "running" ? /* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: "Metadata and previews are being filled in in the background." }), /* @__PURE__ */ (0, Q.jsx)(Vt, {})] }) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, {
				status: c ? /* @__PURE__ */ (0, Q.jsx)(A, {
					href: "/api/configuration/upgrade-repairs/review",
					children: "Download review records"
				}) : void 0,
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					size: "small",
					variant: "secondary",
					disabled: !i?.available || a === "running" || !!r.busy || !s && a !== "failed",
					onClick: () => void r.run("retry", (e) => G("/api/configuration/upgrade-repairs/retry", {}, "POST", e), (e) => {
						n(e), document.dispatchEvent(new Event("peach:client-updates"));
					}),
					children: "Retry failed items"
				})
			})
		]
	});
}
// src/react/settings/general-settings.tsx
function _a({ data: e, receipt: t, panel: n }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...Zn(n),
		children: [
			e.updates ? /* @__PURE__ */ (0, Q.jsx)(ma, {
				initial: e.updates,
				initialJob: e.update_job
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(ga, {}),
			e.automatic_updates ? /* @__PURE__ */ (0, Q.jsx)(sa, {
				initial: e.automatic_updates,
				receipt: t
			}) : null,
			e.startup ? /* @__PURE__ */ (0, Q.jsx)(va, {
				startup: e.startup,
				receipt: t
			}) : null
		]
	});
}
function va({ startup: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.enabled), [i, a] = (0, Z.useState)(e.silent), [o, s] = (0, Z.useState)(e.desktop), c = Y(), l = e.available && !e.desktop_message;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Launch at startup",
		onSubmit: (r) => {
			r.preventDefault(), e.available && c.run("save", (e) => G("/api/configuration/startup", {
				enabled: n,
				silent: i,
				desktop: o
			}, "POST", e), () => t("Settings saved"));
		},
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Start Peach when the computer starts",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Start Peach when the computer starts",
						isSelected: n,
						isDisabled: !e.available,
						onChange: r
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Start the tray only, without opening the web page",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Start the tray only, without opening the web page",
						isSelected: i,
						isDisabled: !e.available || !n,
						onChange: a
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Create a desktop shortcut",
					description: e.desktop_message || void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Create a desktop shortcut",
						isSelected: o,
						isDisabled: !l,
						onChange: s
					})
				})
			] }),
			e.message || c.error ? /* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [e.message ? /* @__PURE__ */ (0, Q.jsx)(N, { children: e.message }) : null, c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !e.available,
				...K(c.busy === "save"),
				children: "Save settings"
			}) })
		]
	});
}
// src/react/restart-redirect.ts
var ya = 8e3, ba = [
	{
		name: "Hard drive, or up to 8 GB of RAM",
		cache: "10–20 GiB",
		read: "256 / 128 KB",
		task: "1"
	},
	{
		name: "SATA SSD, 8–16 GB of RAM",
		cache: "20–50 GiB",
		read: "256 / 128 KB",
		task: "1–2"
	},
	{
		name: "NVMe SSD, over 16 GB of RAM",
		cache: "50–100 GiB",
		read: "256 / 128 KB",
		task: "2 or more"
	}
], xa = [
	["cache", "Cache limit"],
	["read", "Read length (default / minimum)"],
	["task", "Concurrent videos"]
];
function Sa() {
	return /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "@container flex flex-col gap-3",
		children: /* @__PURE__ */ (0, Q.jsxs)(O, {
			summary: "CloudDrive setup help",
			children: [
				/* @__PURE__ */ (0, Q.jsxs)(N, { children: ["First mount the cloud drive in CloudDrive2 or OpenList as a local folder, then choose it here.", /* @__PURE__ */ (0, Q.jsx)(A, {
					href: "https://www.clouddrive2.com/help.html",
					children: "Mount help"
				})] }),
				/* @__PURE__ */ (0, Q.jsx)(N, { children: "Pick a starting cache value based on the cache disk and free RAM, then adjust based on playback." }),
				/* @__PURE__ */ (0, Q.jsx)(N, { children: "File operations need write permission from the mount tool and the cloud account. Uploading, creating folders, renaming and moving on Guangya Cloud require CloudDrive2 v1.1.0 or later; deleting and copying aren't supported yet." }),
				/* @__PURE__ */ (0, Q.jsx)("ul", {
					"aria-label": "Tiers by cache disk",
					className: "flex flex-col gap-2",
					children: ba.map((e) => /* @__PURE__ */ (0, Q.jsxs)("li", {
						className: "flex flex-col gap-2 rounded-2lg border border-separator-border bg-background-primary-default p-3",
						children: [/* @__PURE__ */ (0, Q.jsx)("p", {
							className: "text-body-medium text-text-primary",
							children: e.name
						}), /* @__PURE__ */ (0, Q.jsx)("dl", {
							className: "inline-grid grid-cols-1 gap-2 @md:grid-cols-3",
							children: xa.map(([t, n]) => /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, Q.jsx)("dt", {
									className: "text-caption-1-regular text-text-secondary",
									children: n
								}), /* @__PURE__ */ (0, Q.jsx)("dd", {
									className: "text-body-regular text-text-primary",
									children: e[t]
								})]
							}, t))
						})]
					}, e.name))
				}),
				/* @__PURE__ */ (0, Q.jsxs)("ul", {
					className: "flex list-disc flex-col gap-1 pl-5 text-body-2-regular text-text-secondary",
					children: [
						/* @__PURE__ */ (0, Q.jsx)("li", { children: "Set the cache limit and eviction in CloudDrive “Settings” and choose LRU eviction. Don't set the limit to 0, and leave at least 40 GiB on the system disk; reopen the settings page afterward to confirm it was saved." }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: "Set read length and download threads in each cloud drive's own download settings, starting threads at 2." }),
						/* @__PURE__ */ (0, Q.jsx)("li", { children: "Buffer Cache uses RAM, while disk cache and folder cache use disk; changing one doesn't limit the other two." })
					]
				}),
				/* @__PURE__ */ (0, Q.jsx)(N, { children: /* @__PURE__ */ (0, Q.jsx)(A, {
					href: "https://github.com/peach-mitao/peach/blob/master/docs/CLOUDDRIVE.md",
					children: "Full setup and tuning guide"
				}) })
			]
		})
	});
}
// src/react/settings/cloud-proxy-settings.tsx
var Ca = "/api/configuration/cloud-proxies", wa = [
	["direct", "Direct"],
	["system", "System"],
	["http", "HTTP proxy"],
	["socks5", "SOCKS5 proxy"]
];
function Ta({ receipt: e }) {
	let [t, n] = (0, Z.useState)(null), [r, i] = (0, Z.useState)(!0), a = (0, Z.useRef)(/* @__PURE__ */ new Set()), o = (0, Z.useRef)(/* @__PURE__ */ new Set()), [s, c] = (0, Z.useState)(!1), l = (0, Z.useRef)(() => void 0), u = Y(), d = () => {
		o.current.size || u.run("refresh", (e) => W(Ca, e), (e) => {
			a.current.clear(), n(e), i(!1);
		}, (e) => {
			i(!1), u.setError(e instanceof Error ? e.message : "Can't read cloud drive proxy");
		});
	};
	return l.current = d, (0, Z.useEffect)(() => {
		l.current();
		let e = () => {
			a.current.size || l.current();
		};
		return window.addEventListener("focus", e), () => window.removeEventListener("focus", e);
	}, []), (0, Z.useEffect)(() => {
		if (!t) return;
		let e = (e) => e.mode === "http" || e.mode === "socks5";
		bn("cloudProxy", {
			configured: t.configured !== !1,
			unlinked: t.unlinked?.length ?? 0,
			accounts: t.accounts.map((t) => [e(t.data), e(t.api)])
		});
	}, [t]), r ? /* @__PURE__ */ (0, Q.jsx)(Nt, {
		label: "Loading cloud drive proxy",
		html: Yt
	}) : /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "CloudDrive proxy",
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: Xe }), /* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [
				u.error ? /* @__PURE__ */ (0, Q.jsxs)(F, {
					tone: "error",
					title: "Settings not loaded",
					children: [
						u.error,
						" ",
						/* @__PURE__ */ (0, Q.jsx)(mt, {
							href: "/settings/downloads",
							size: "small",
							children: "Download settings"
						})
					]
				}) : null,
				t?.configured === !1 ? /* @__PURE__ */ (0, Q.jsxs)(N, { children: ["After you enter the CloudDrive2 URL and API token, set the proxy for each cloud account here. ", /* @__PURE__ */ (0, Q.jsx)(mt, {
					href: "/settings/downloads",
					size: "small",
					children: "Download settings"
				})] }) : t?.accounts.length === 0 && !t.unlinked?.length ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "No media libraries use CloudDrive yet." }) : null,
				t?.unlinked?.map((e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex min-w-0 flex-col gap-1",
					children: [/* @__PURE__ */ (0, Q.jsx)(lt, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, Q.jsx)(zt, { mark: Kn(e.location) }), e.name]
					}) }), /* @__PURE__ */ (0, Q.jsx)(N, { children: "No CloudDrive account matched yet" })]
				}, e.root)),
				t?.accounts.map((t) => /* @__PURE__ */ (0, Q.jsx)(Ea, {
					initial: t,
					receipt: e,
					onDirty: () => a.current.add(t.id),
					onSaving: (e) => {
						e ? o.current.add(t.id) : o.current.delete(t.id), c(!!o.current.size);
					},
					onSaved: (e) => {
						a.current.delete(e.id), n((t) => t && {
							...t,
							accounts: t.accounts.map((t) => t.id === e.id ? e : t)
						});
					}
				}, t.id + t.revision))
			]
		})] }), /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			disabled: s,
			onClick: d,
			...K(u.busy === "refresh"),
			children: "Reload"
		}) })]
	});
}
function Ea({ initial: e, receipt: t, onDirty: n, onSaved: r, onSaving: i }) {
	let [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)([]), l = a.libraries?.map((e) => e.name).join(", ") || a.name, u = Y(), d = (e, t) => {
		o((n) => ({
			...n,
			[e]: t
		})), c((t) => t.includes(e) ? t : [...t, e]), n();
	};
	return /* @__PURE__ */ (0, Q.jsxs)("form", {
		"aria-label": `${l} proxy`,
		onSubmit: (e) => {
			e.preventDefault(), i(!0), u.run("save", (e) => G(Ca, {
				id: a.id,
				revision: a.revision,
				...s.includes("api") ? { api: a.api } : {},
				...s.includes("data") ? { data: a.data } : {}
			}, "POST", e), (e) => {
				o(e), c([]), r(e), t("CloudDrive proxy saved");
			}).finally(() => i(!1));
		},
		className: "flex min-w-0 flex-col gap-4 border-t border-separator-border pt-4",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(lt, { children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "inline-flex items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(zt, { mark: Kn(a.libraries?.[0]?.location || (a.cloud === "115open" ? "115" : a.cloud.toLowerCase())) }), l]
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(N, { children: [
				a.name,
				" · ",
				a.path
			] }),
			/* @__PURE__ */ (0, Q.jsx)(Da, {
				label: "Data proxy",
				value: a.data,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("data", e)
			}),
			/* @__PURE__ */ (0, Q.jsx)(Da, {
				label: "API proxy",
				value: a.api,
				disabled: !a.writable || !!u.busy,
				onChange: (e) => d("api", e)
			}),
			a.writable ? null : /* @__PURE__ */ (0, Q.jsx)(N, { children: "The API token needs the “Modify cloud drive” permission to save." }),
			u.error ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "Not saved",
				children: u.error
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, Q.jsx)(E, {
					type: "submit",
					disabled: !a.writable || !s.length,
					...K(u.busy === "save"),
					children: "Save settings"
				})
			})
		]
	});
}
function Da({ label: e, value: t, disabled: n, onChange: r }) {
	let i = t.mode === "http" || t.mode === "socks5";
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(lt, { children: e }),
			/* @__PURE__ */ (0, Q.jsxs)(R, {
				"aria-label": e,
				selectedKey: t.mode,
				isDisabled: n,
				onSelectionChange: (e) => {
					e && r({
						...t,
						mode: String(e)
					});
				},
				children: [t.mode === "unknown" ? /* @__PURE__ */ (0, Q.jsx)(z, {
					id: "unknown",
					children: "Unrecognized proxy type"
				}) : null, wa.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
					id: e,
					children: t
				}, e))]
			}),
			i ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, Q.jsx)(P, {
					className: "min-w-40 flex-1",
					label: `${e} host`,
					value: t.host,
					autoComplete: "off",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						host: e
					})
				}), /* @__PURE__ */ (0, Q.jsx)(P, {
					className: "w-full sm:w-28",
					label: `${e} port`,
					value: t.port ? String(t.port) : "",
					inputMode: "numeric",
					isDisabled: n,
					onChange: (e) => r({
						...t,
						port: Number(e)
					})
				})]
			}), /* @__PURE__ */ (0, Q.jsxs)(O, {
				summary: "Proxy authentication",
				children: [
					/* @__PURE__ */ (0, Q.jsx)(P, {
						label: `${e} username`,
						value: t.username,
						autoComplete: "off",
						isDisabled: n,
						onChange: (e) => r({
							...t,
							username: e
						})
					}),
					/* @__PURE__ */ (0, Q.jsx)(P, {
						label: `${e} password`,
						type: "password",
						value: t.password || "",
						autoComplete: "new-password",
						isDisabled: n,
						placeholder: t.password_set ? "Saved; leave empty to keep" : "Optional",
						onChange: (e) => r({
							...t,
							password: e
						})
					}),
					t.password_set ? /* @__PURE__ */ (0, Q.jsx)(D, {
						isSelected: !!t.clear_password,
						isDisabled: n,
						onChange: (e) => r({
							...t,
							clear_password: e
						}),
						children: "Clear saved password"
					}) : null
				]
			})] }) : null
		]
	});
}
// src/react/settings/library-icon-picker.tsx
var Oa = [
	["", "Auto-detect"],
	["hard-drive", "Disk"],
	["database", "Archive"],
	["heart", "Crush"],
	["heart-hand", "Intimate"],
	["flame", "Passion"],
	["cherry", "Cherry"],
	["lollipop", "Sweetheart"],
	["candy", "Candy"],
	["banana", "Banana"],
	["droplets", "Wet"],
	["venus", "Female"],
	["mars", "Male"],
	["venus-and-mars", "Couple"],
	["gem", "Featured"],
	["crown", "Queen"],
	["ribbon", "Ribbon"],
	["shirt", "Uniform"],
	["graduation-cap", "Student"],
	["stethoscope", "Nurse"],
	["glasses", "Glasses"],
	["footprints", "Footprints"],
	["hand", "Hands"],
	["flower", "Flower"],
	["venetian-mask", "Role-play"],
	["rabbit", "Bunny girl"],
	["paw-print", "Animal ears"],
	["dumbbell", "Fitness"],
	["bed-double", "Bedroom"],
	["bath", "Bathroom"],
	["key-round", "Private"],
	["wine", "Tipsy"],
	["cigarette", "Smoke"],
	["moon", "Night"],
	["sparkles", "Fantasy"],
	["camera", "Photo shoot"],
	["video", "Video"],
	["film", "Film"],
	["image", "Gallery"],
	["gamepad-2", "Game"],
	["star", "Collection"],
	["tags", "Theme"]
];
function ka(e) {
	let t = e === "local" ? "" : yt[e];
	return t ? [t, "Auto-detect"] : ["hard-drive", "Default"];
}
var Aa = "auto";
function ja({ value: e, label: t, kind: n = "local", onChange: r }) {
	let i = (0, Z.useRef)(null), [a, o] = (0, Z.useState)(!1), [s, c] = (0, Z.useState)(e), [l, u] = ka(n);
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
		ref: i,
		variant: "secondary",
		className: "self-start",
		"aria-label": t,
		"aria-haspopup": "dialog",
		"aria-expanded": a,
		onClick: () => {
			c(e), o(!0);
		},
		children: /* @__PURE__ */ (0, Q.jsxs)("span", {
			"data-icon-choice": !0,
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(zt, { mark: e || l }), ((e) => e && Oa.find(([t]) => t === e)?.[1] || u)(e)]
		})
	}), /* @__PURE__ */ (0, Q.jsx)(ze, {
		triggerRef: i,
		isOpen: a,
		onOpenChange: o,
		placement: "bottom start",
		offset: 4,
		className: bt,
		children: /* @__PURE__ */ (0, Q.jsxs)(Ue, {
			"aria-label": `${t} icon options`,
			className: "flex w-72 flex-col gap-3 outline-none",
			children: [
				/* @__PURE__ */ (0, Q.jsx)(Le, {
					slot: "title",
					className: "px-1 text-body-medium text-text-primary",
					children: "Choose media library icon"
				}),
				/* @__PURE__ */ (0, Q.jsx)(We, {
					"aria-label": "Icon options",
					value: s || Aa,
					onChange: (e) => c(e === Aa ? "" : e),
					className: "inline-grid grid-cols-7 gap-1",
					children: Oa.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
						value: e || Aa,
						"aria-label": e ? t : u,
						className: "flex h-10 cursor-pointer items-center justify-center rounded-lg text-foreground-icon-secondary outline-none hover:bg-dropdown-item-hover-background focus-visible:ring-2 focus-visible:ring-border-focus-ring data-selected:bg-dropdown-item-hover-background data-selected:text-text-primary",
						children: /* @__PURE__ */ (0, Q.jsx)(zt, { mark: e || l })
					}, e || Aa))
				}),
				/* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex justify-end gap-2 border-t border-separator-border pt-2.5",
					children: [/* @__PURE__ */ (0, Q.jsx)(E, {
						variant: "secondary",
						onClick: () => o(!1),
						children: "Cancel"
					}), /* @__PURE__ */ (0, Q.jsx)(E, {
						disabled: s === e,
						onClick: () => {
							r(s), o(!1);
						},
						children: "Apply"
					})]
				})
			]
		})
	})] });
}
// src/react/settings/library-policy-settings.tsx
var Ma = [
	["probe", "Read video info"],
	["metadata", "Fetch metadata online"],
	["cover", "Fetch covers online"],
	["people", "Fetch people images online"],
	["preview", "Generate contact sheet previews"]
], Na = [
	"probe",
	"metadata",
	"cover",
	"people",
	"preview"
], Pa = [
	[
		"auto",
		"Auto-complete",
		"Fetch whatever is missing online"
	],
	[
		"local",
		"Local metadata only",
		"Offline, local NFO and images only"
	],
	[
		"custom",
		"Custom",
		"Choose each step"
	]
];
function Fa() {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		"data-policy-legend": "",
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: Tt }), /* @__PURE__ */ (0, Q.jsxs)(O, {
			summary: "Compare the three handling options",
			children: [/* @__PURE__ */ (0, Q.jsxs)("table", {
				"data-policy-matrix": "",
				className: "text-body-2-regular",
				children: [/* @__PURE__ */ (0, Q.jsx)("thead", { children: /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: /* @__PURE__ */ (0, Q.jsx)(He, { children: "Step" })
				}), St.map((e) => /* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "col",
					children: e
				}, e))] }) }), /* @__PURE__ */ (0, Q.jsx)("tbody", { children: wt.map(([e, ...t]) => /* @__PURE__ */ (0, Q.jsxs)("tr", { children: [/* @__PURE__ */ (0, Q.jsx)("th", {
					scope: "row",
					children: e
				}), t.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("td", {
					"data-policy-cell": e === "✓" ? "on" : e === "—" ? "off" : "choice",
					children: e === "✓" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": "Do",
						children: "✓"
					}) : e === "—" ? /* @__PURE__ */ (0, Q.jsx)("span", {
						"aria-label": "Skip",
						children: "—"
					}) : e
				}, St[t]))] }, e)) })]
			}), /* @__PURE__ */ (0, Q.jsx)(N, { children: Ct })]
		})]
	});
}
function Ia({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(Ft, {
		className: "w-full",
		"aria-label": `${e} handling`,
		selectedKey: t,
		prefix: "Handling",
		renderValue: /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate",
			children: Pa.find(([e]) => e === t)?.[1]
		}),
		onSelectionChange: (e) => n(String(e)),
		children: Pa.map(([e, t, n]) => /* @__PURE__ */ (0, Q.jsx)(z, {
			id: e,
			textValue: t,
			children: /* @__PURE__ */ (0, Q.jsxs)("span", {
				className: "flex min-w-0 flex-col",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", { children: t }), /* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-2-regular text-text-secondary whitespace-normal",
					children: n
				})]
			})
		}, e))
	});
}
function La({ name: e, value: t, onChange: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(O, {
		defaultOpen: !0,
		summary: `${e} processing steps (${t.length}/${Ma.length})`,
		children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-wrap gap-x-6 gap-y-2",
			role: "group",
			"aria-label": `${e} processing steps`,
			children: Ma.map(([e, r]) => /* @__PURE__ */ (0, Q.jsx)(D, {
				isSelected: t.includes(e),
				onChange: (r) => n(r ? [...t, e] : t.filter((t) => t !== e)),
				children: r
			}, e))
		})
	});
}
function Ra({ id: e, name: t, value: n, onChange: r }) {
	let i = (0, Z.useRef)(null), [a, o] = (0, Z.useState)(!1), s = Ke.find(([e]) => e === n)?.[1] || "No color", c = (t) => {
		r(t), gn(e, t), o(!1);
	};
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsxs)("button", {
		ref: i,
		type: "button",
		className: "text-body-medium",
		"data-glow-chip": "",
		"data-library-color-trigger": "",
		"aria-haspopup": "dialog",
		"aria-expanded": a,
		"aria-label": `${t || "Untitled media library"} Source color: ${s}`,
		title: s,
		onClick: () => o(!0),
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				"aria-hidden": !0,
				className: "text-text-tertiary",
				children: "Source color"
			}),
			n ? /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"aria-hidden": "true",
				"data-accent-ball": n
			}) : /* @__PURE__ */ (0, Q.jsx)("span", {
				"data-glow-ball": "",
				"data-library-none": "",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, Q.jsx)("span", { children: s })
		]
	}), /* @__PURE__ */ (0, Q.jsx)(Be, {
		getContainer: () => mn(i.current),
		children: /* @__PURE__ */ (0, Q.jsx)(ze, {
			triggerRef: i,
			isOpen: a,
			onOpenChange: o,
			placement: "bottom start",
			offset: 8,
			containerPadding: 12,
			className: bt,
			children: /* @__PURE__ */ (0, Q.jsxs)(Ue, {
				"aria-label": `${t || "Untitled media library"} Source color`,
				className: "outline-none",
				children: [/* @__PURE__ */ (0, Q.jsx)("p", {
					className: "px-1 pb-2 text-body-medium text-text-primary",
					children: "Choose source color"
				}), /* @__PURE__ */ (0, Q.jsxs)("div", {
					"data-accent-grid": "",
					"data-library-colors": "",
					role: "group",
					children: [/* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": !n,
						title: "No color",
						"aria-label": "No color",
						onClick: () => c(""),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-glow-ball": "",
							"data-library-none": "",
							"aria-hidden": "true"
						})
					}), Ke.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)("button", {
						type: "button",
						"data-glow-chip": "",
						"aria-pressed": e === n,
						title: t,
						"aria-label": t,
						onClick: () => c(e),
						children: /* @__PURE__ */ (0, Q.jsx)("span", {
							"data-glow-ball": "",
							"aria-hidden": "true",
							"data-accent-ball": e
						})
					}, e))]
				})]
			})
		})
	})] });
}
// src/react/settings/push-discovery-settings.tsx
var za = "/api/configuration/push-discovery", Ba = "/api/configuration/push-discovery/secret";
function Va({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.prefixes), [o, s] = (0, Z.useState)(""), c = Y(), l = n.media_roots, [u, d] = (0, Z.useState)(e), f = (e, n) => {
		r(e), d(e), a(e.prefixes), s(""), t(n);
	}, p = (e, t) => a((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), m = (e) => {
		e.preventDefault();
		let t = {
			enabled: n.enabled,
			watch_local: n.watch_local,
			cloud: n.cloud,
			prefixes: i
		};
		c.run("save", (e) => G(za, t, "POST", e), (e) => f(e, "Settings saved"), (e) => s(q(e)));
	}, h = () => {
		c.run("secret", (e) => G(Ba, {}, "POST", e), (e) => f(e, "Shared secret rotated"), (e) => s(q(e)));
	}, g = `${u.queue.ingested} files imported` + (u.queue.failed ? `, ${u.queue.failed} failed to import` : "") + (u.queue.pending ? `, ${u.queue.pending} still in the queue` : ""), _ = u.local_running ? `Watching ${u.local_roots.join(", ")}` : u.local_message || "Not running";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "pushDiscovery",
		title: "Discover new files automatically",
		onSubmit: m,
		children: [
			/* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)("span", {
					className: "text-body-regular text-text-secondary",
					children: "Local watching"
				}), /* @__PURE__ */ (0, Q.jsx)(H, {
					tone: !u.enabled || !u.watch_local ? "neutral" : u.local_running ? "progress" : "warning",
					children: !u.enabled || !u.watch_local ? "Not enabled" : u.local_running ? "Running" : "Not running"
				})]
			}) }),
			/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Import new files automatically",
					description: u.enabled ? g : void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Import new files automatically",
						isSelected: n.enabled,
						isDisabled: !n.available,
						onChange: (e) => r({
							...n,
							enabled: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Watch local folders",
					description: u.enabled && u.watch_local ? _ : void 0,
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Watch local folders",
						isSelected: n.watch_local,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							watch_local: e
						})
					})
				}),
				/* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Receive CloudDrive2 notifications",
					children: /* @__PURE__ */ (0, Q.jsx)(U, {
						"aria-label": "Receive CloudDrive2 notifications",
						isSelected: n.cloud,
						isDisabled: !n.available || !n.enabled,
						onChange: (e) => r({
							...n,
							cloud: e
						})
					})
				}),
				u.enabled && u.cloud ? /* @__PURE__ */ (0, Q.jsx)(B, {
					label: "Webhook settings",
					description: u.config_toml ? "Paste into CloudDrive2 “Settings → Webhooks” (requires membership); paste again after rotating the secret." : u.origin ? "No shared secret yet; it's generated after you save the settings." : "A LAN address reachable by CloudDrive2 is needed before it can be generated."
				}) : null
			] }),
			u.enabled && u.queue.last_error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(F, {
					tone: "error",
					title: "Last import failure",
					children: u.queue.last_error
				})
			}) : null,
			u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					className: "flex flex-col gap-3",
					children: /* @__PURE__ */ (0, Q.jsxs)(O, {
						summary: "View settings",
						children: [/* @__PURE__ */ (0, Q.jsx)(Ln, {
							code: u.config_toml,
							language: "toml",
							label: "CloudDrive2 configuration",
							bounded: !1,
							copyLabel: "Copy configuration",
							onCopy: () => t("CloudDrive2 configuration copied")
						}), /* @__PURE__ */ (0, Q.jsx)(N, { children: "If the Windows desktop app shows “Invalid” after pasting, save this as a .toml file in the %LOCALAPPDATA%\\CloudDrive.WinUI\\webhooks\\ folder." })]
					})
				})
			}) : null,
			n.enabled && n.cloud ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, Q.jsx)(lt, { children: "Cloud path prefix" }),
						/* @__PURE__ */ (0, Q.jsx)("div", {
							role: "group",
							"aria-label": "Cloud path prefix",
							className: "flex flex-col gap-3",
							children: i.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(P, {
										className: "min-w-0 flex-1",
										"aria-label": `Cloud path prefix ${t + 1}`,
										placeholder: "/115",
										autoComplete: "off",
										maxLength: 200,
										value: e.prefix,
										onChange: (e) => p(t, { prefix: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Ft, {
										"aria-label": `Media root for prefix ${t + 1}`,
										prefix: "Mapped folder",
										selectedKey: e.root,
										onSelectionChange: (e) => {
											e !== null && p(t, { root: String(e) });
										},
										children: l.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
											id: e,
											children: e
										}, e))
									}),
									/* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "danger",
										iconOnly: !0,
										leadingIcon: gt,
										"aria-label": "Remove this entry",
										onClick: () => a((e) => e.filter((e, n) => n !== t))
									})
								]
							}, t))
						}),
						/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(E, {
							variant: "secondary",
							onClick: () => a((e) => [...e, {
								prefix: "",
								root: l[0] ?? ""
							}]),
							children: "Add prefix"
						}) })
					]
				})
			}) : null,
			o || c.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: o || c.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsxs)(M, { children: [u.enabled && u.cloud && u.config_toml ? /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: h,
				disabled: !n.available,
				...K(c.busy === "secret"),
				children: "Rotate secret"
			}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				disabled: !n.available,
				...K(c.busy === "save"),
				children: "Save settings"
			})] })
		]
	});
}
// src/react/settings/media-settings.tsx
var Ha = (e) => Vn.find(([t]) => t === e)?.[1] ?? e, Ua = [...Vn, ["smb", "SMB share"]], Wa = (e) => e.library_icon || ka(e.transport === "smb" ? "smb" : e.location)[0], Ga = async (e) => (await G(xt, { initial: e })).path, Ka = (e) => ({
	library_id: e.library_id,
	library: e.library,
	library_icon: e.library_icon,
	library_color: e.library_color,
	library_policy: e.library_policy,
	library_stages: e.library_stages
}), qa = (e) => e.library_stages ? Na.filter((t) => e.library_stages.split(",").includes(t)) : [], Ja = (e = "") => ({
	path: e,
	transport: e.startsWith("smb://") ? "smb" : "filesystem",
	location: "local",
	root: "",
	library_id: yn(),
	library: "",
	library_icon: "",
	library_color: "",
	library_policy: "auto",
	library_stages: "",
	cost: "free"
});
function Ya(e) {
	let t = e.media_sources?.filter((e) => Vn.some(([t]) => t === e.location));
	return t?.length ? t.map((e) => ({
		transport: e.transport === "smb" || e.path.startsWith("smb://") ? "smb" : "filesystem",
		smb_username: e.smb_username,
		smb_password: "",
		smb_encrypt: e.smb_encrypt,
		smb_password_saved: e.smb_password_saved,
		path: e.path,
		location: e.location,
		root: e.root,
		library: e.library || "",
		library_icon: e.library_icon || "",
		library_color: e.library_color || "",
		library_policy: e.library_policy || "auto",
		library_stages: e.library_stages || "",
		root_id: e.root_id,
		library_id: e.library_id || yn(),
		cost: e.cost ?? On(e.location)
	})) : (e.media_dirs.length ? e.media_dirs : [""]).map((e) => Ja(e));
}
var Xa = (e) => !(e instanceof qe) || e.status !== 400 ? null : e.body?.errors ?? null;
function Za({ data: e, receipt: t, panel: n }) {
	let r = !!e.media_sources?.some((e) => Gn(e.location));
	return (0, Z.useEffect)(() => {
		if (e.editable) {
			let t = /* @__PURE__ */ new Map();
			for (let n of Ya(e)) t.set(n.library_id, (t.get(n.library_id) ?? 0) + 1);
			bn("media", {
				folders: [...t.values()],
				cloud: r
			});
		}
		let t = e.push_discovery;
		t && bn("discovery", {
			enabled: t.enabled,
			watchLocal: t.watch_local,
			cloud: t.cloud,
			webhook: t.enabled && t.cloud && !!t.config_toml,
			prefixes: t.prefixes.length
		});
	}, [e, r]), /* @__PURE__ */ (0, Q.jsxs)("div", {
		...Zn(n),
		children: [
			e.editable ? /* @__PURE__ */ (0, Q.jsx)(Qa, {
				data: e,
				receipt: t
			}) : /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "neutral",
				title: "Read-only",
				children: e.notice
			}),
			e.editable ? null : /* @__PURE__ */ (0, Q.jsx)(eo, { data: e }),
			r ? /* @__PURE__ */ (0, Q.jsx)(Ta, { receipt: t }) : null,
			e.push_discovery ? /* @__PURE__ */ (0, Q.jsx)(Va, {
				initial: e.push_discovery,
				receipt: t
			}) : null
		]
	});
}
function Qa({ data: e, receipt: t }) {
	let { rows: n, edit: r, add: i, remove: a, errors: o, setErrors: s, picking: c, pick: l, inputRef: u } = qn({
		initial: () => Ya(e),
		blank: () => Ja(),
		pickFolder: Ga,
		describe: q
	}), [d, f] = (0, Z.useState)(!1), [p, m] = (0, Z.useState)(!1), [h, g] = (0, Z.useState)(""), [_, v] = (0, Z.useState)({}), [y, b] = (0, Z.useState)(null), x = (0, Z.useRef)(e.revision), S = Y();
	An();
	let C = (e, t) => {
		n.forEach((i, a) => {
			i.library_id === n[e].library_id && r(a, t);
		});
	}, w = [...n.reduce((e, t) => e.has(t.library_id) ? e : e.set(t.library_id, t), /* @__PURE__ */ new Map()).values()], [T, ee] = (0, Z.useState)(null);
	(0, Z.useEffect)(() => {
		if (!T) return;
		let e = document.querySelector(`[data-library-key="${CSS.escape(T)}"] [data-library-head] input`);
		e?.scrollIntoView({ block: "center" }), e?.focus(), ee(null);
	}, [T]);
	let te = (e, t) => {
		let i = n.find((e) => e.library_id === t);
		if (i) {
			r(e, Ka(i));
			return;
		}
		let a = yn();
		r(e, {
			library_id: a,
			library: "",
			library_icon: "",
			library_color: "",
			library_policy: "auto",
			library_stages: ""
		}), ee(a);
	};
	(0, Z.useEffect)(() => {
		if (!y) return;
		let e = setTimeout(() => location.assign(y.url), ya);
		return () => clearTimeout(e);
	}, [y]);
	let ne = (r) => {
		r.preventDefault();
		let i = n.findIndex((e) => !e.cost);
		if (i >= 0) {
			m(!0);
			let e = r.currentTarget;
			requestAnimationFrame(() => e.querySelector(`[data-media-read-policy="${i}"] button`)?.focus());
		} else g(""), S.run("save", (t) => G(Qe, {
			revision: x.current,
			media_dirs: n.map((e) => e.path),
			...e.media_sources ? { media_sources: n } : {},
			port: String(e.port),
			scan_now: d
		}, "POST", t), (e) => {
			x.current = e.revision, s([]), t("Settings saved"), b(e);
		}, (e) => {
			let t = Xa(e);
			s(t?.media_dirs ?? []), (!t || t.port) && g(t?.port || q(e));
		});
	};
	if (y) return /* @__PURE__ */ (0, Q.jsx)(L, {
		title: "Media libraries and folders",
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsxs)(F, {
			tone: "success",
			title: "Settings saved",
			children: [
				"Peach is restarting. You'll be redirected shortly, or click",
				/* @__PURE__ */ (0, Q.jsx)(mt, {
					href: y.url,
					size: "small",
					children: "Go to library"
				}),
				"."
			]
		}) })
	});
	let re = (t) => e.media_sources?.find((e) => e.root_id === t.root_id && e.path === t.path), ie = n.some((e) => Gn(e.location)), ae = ie ? (e.mount_dependencies ?? []).filter((e) => !e.available) : [];
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Media libraries and folders",
		onSubmit: ne,
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
			/* @__PURE__ */ (0, Q.jsx)(Fa, {}),
			/* @__PURE__ */ (0, Q.jsx)("div", {
				role: "group",
				"aria-label": "Media libraries and folders",
				className: "flex flex-col gap-4",
				children: w.map((e) => {
					let t = n.findIndex((t) => t.library_id === e.library_id), s = n.map((e, t) => ({
						row: e,
						index: t
					})).filter(({ row: t }) => t.library_id === e.library_id), d = e.library_policy, f = e.library || "Untitled media library";
					return /* @__PURE__ */ (0, Q.jsxs)("div", {
						"data-library-block": "",
						"data-library-key": e.library_id,
						className: Jt({
							variant: "raised",
							padding: "none",
							className: "flex flex-col p-2"
						}),
						"data-library": e.library_color ? e.library_id : void 0,
						children: [
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-head": "",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(ja, {
										label: `${f} icon`,
										value: e.library_icon,
										kind: e.transport === "smb" ? "smb" : e.location,
										onChange: (e) => C(t, { library_icon: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(P, {
										className: "w-full",
										"aria-label": `${f} name`,
										maxLength: 80,
										placeholder: "Media library name",
										value: e.library,
										onChange: (e) => C(t, { library: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Ra, {
										id: e.library_id,
										name: e.library,
										value: e.library_color,
										onChange: (e) => C(t, { library_color: e })
									}),
									/* @__PURE__ */ (0, Q.jsx)(Ia, {
										name: f,
										value: d,
										onChange: (n) => C(t, {
											library_policy: n,
											library_stages: n === "custom" ? e.library_stages || Na.join(",") : ""
										})
									})
								]
							}),
							d === "custom" ? /* @__PURE__ */ (0, Q.jsx)(La, {
								name: f,
								value: qa(e),
								onChange: (e) => C(t, { library_stages: Na.filter((t) => e.includes(t)).join(",") })
							}) : null,
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								"data-library-folders": "",
								role: "group",
								"aria-label": `${f} folders`,
								children: [s.map(({ row: t, index: i }) => /* @__PURE__ */ (0, Q.jsxs)(Bn, {
									label: `Media folder ${i + 1}`,
									path: t.path,
									onPath: (e) => r(i, {
										path: e,
										transport: e.startsWith("smb://") ? "smb" : t.transport
									}),
									error: o[i],
									inputRef: u(i),
									picking: c === i,
									onPick: () => void l(i),
									onRemove: n.length > 1 ? () => a(i) : void 0,
									status: re(t) ? /* @__PURE__ */ (0, Q.jsx)($a, { online: re(t)?.online }) : null,
									children: [/* @__PURE__ */ (0, Q.jsxs)(zn, { children: [
										/* @__PURE__ */ (0, Q.jsx)(Wn, {
											index: i,
											value: t.transport === "smb" ? "smb" : t.location,
											options: Ua,
											onChange: (e) => {
												let n = e === "smb";
												r(i, {
													transport: n ? "smb" : "filesystem",
													location: n ? "local" : e,
													cost: n || e === "local" ? "free" : "",
													path: n ? t.path.startsWith("smb://") ? t.path : "smb://" : t.path.startsWith("smb://") ? "" : t.path
												}), v((e) => {
													let t = { ...e };
													return delete t[i], t;
												});
											}
										}),
										/* @__PURE__ */ (0, Q.jsx)(Hn, {
											index: i,
											cost: t.cost,
											onChange: (e) => r(i, { cost: e }),
											error: p && !t.cost ? "Choose a media read policy" : void 0
										}),
										t.root_id && !re(t) ? /* @__PURE__ */ (0, Q.jsx)(Rn, {
											label: "Change type",
											className: "w-full @lg:w-auto @lg:flex-1",
											children: /* @__PURE__ */ (0, Q.jsxs)(R, {
												className: "w-full",
												"aria-label": `Folder change type ${i + 1}`,
												placeholder: "Choose folder change type",
												selectedKey: t.change_mode || null,
												onSelectionChange: (e) => {
													e === "add" ? r(i, {
														root_id: void 0,
														root: "",
														change_mode: ""
													}) : r(i, { change_mode: "relocate" });
												},
												children: [/* @__PURE__ */ (0, Q.jsx)(z, {
													id: "relocate",
													children: "Relocate this folder, keeping file records"
												}), /* @__PURE__ */ (0, Q.jsx)(z, {
													id: "add",
													children: "Add another folder"
												})]
											})
										}) : null,
										w.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(Rn, {
											label: "Move to media library",
											className: "w-full @lg:w-48",
											children: /* @__PURE__ */ (0, Q.jsxs)(R, {
												className: "w-full",
												"aria-label": `Media library for folder ${i + 1}`,
												selectedKey: t.library_id,
												renderValue: /* @__PURE__ */ (0, Q.jsxs)("span", {
													className: "flex min-w-0 items-center gap-2",
													children: [/* @__PURE__ */ (0, Q.jsx)(zt, { mark: Wa(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
														className: "truncate",
														children: f
													})]
												}),
												onSelectionChange: (e) => {
													e && te(i, String(e));
												},
												children: [w.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
													id: e.library_id,
													textValue: e.library || "Untitled media library",
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, Q.jsx)(zt, { mark: Wa(e) }), /* @__PURE__ */ (0, Q.jsx)("span", {
															className: "truncate",
															children: e.library || "Untitled media library"
														})]
													})
												}, e.library_id)), s.length > 1 ? /* @__PURE__ */ (0, Q.jsx)(z, {
													id: "new",
													textValue: "New media library",
													children: /* @__PURE__ */ (0, Q.jsxs)("span", {
														className: "flex min-w-0 items-center gap-2",
														children: [/* @__PURE__ */ (0, Q.jsx)(zt, { mark: "plus" }), /* @__PURE__ */ (0, Q.jsx)("span", { children: "New media library" })]
													})
												}) : null]
											})
										}) : null
									] }), t.transport === "smb" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
										className: "flex w-full flex-col gap-2",
										children: [
											/* @__PURE__ */ (0, Q.jsxs)(zn, { children: [/* @__PURE__ */ (0, Q.jsx)(Rn, {
												label: "SMB account",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(P, {
													"aria-label": `SMB account ${i + 1}`,
													value: t.smb_username || "",
													autoComplete: "off",
													onChange: (e) => r(i, { smb_username: e })
												})
											}), /* @__PURE__ */ (0, Q.jsx)(Rn, {
												label: "SMB password",
												className: "w-full @lg:flex-1",
												children: /* @__PURE__ */ (0, Q.jsx)(P, {
													"aria-label": `SMB password ${i + 1}`,
													type: "password",
													value: t.smb_password || "",
													autoComplete: "new-password",
													placeholder: t.smb_password_saved ? "Leave empty to keep the saved password" : "",
													onChange: (e) => r(i, { smb_password: e })
												})
											})] }),
											/* @__PURE__ */ (0, Q.jsx)(D, {
												isSelected: t.smb_encrypt || !1,
												onChange: (e) => r(i, { smb_encrypt: e }),
												children: "Require SMB encryption"
											}),
											/* @__PURE__ */ (0, Q.jsx)(D, {
												isSelected: t.smb_clear || !1,
												onChange: (e) => r(i, { smb_clear: e }),
												children: "Remove saved SMB account"
											}),
											/* @__PURE__ */ (0, Q.jsx)(E, {
												className: "self-start",
												variant: "secondary",
												...K(S.busy === `smb-${i}`),
												onClick: () => void S.run(`smb-${i}`, (e) => G("/api/configuration/smb/test", t, "POST", e), (e) => v((t) => ({
													...t,
													[i]: {
														message: "Shared folder is readable",
														directories: e.directories
													}
												})), (e) => v((t) => ({
													...t,
													[i]: {
														message: q(e),
														directories: []
													}
												}))),
												children: "Test connection"
											}),
											_[i] ? /* @__PURE__ */ (0, Q.jsx)(N, { children: _[i].message }) : null,
											_[i]?.directories.length ? /* @__PURE__ */ (0, Q.jsx)(R, {
												"aria-label": `SMB subfolder ${i + 1}`,
												placeholder: "Open subfolder",
												selectedKey: null,
												onSelectionChange: (e) => {
													e && (r(i, { path: t.path.replace(/\/$/, "") + "/" + encodeURIComponent(String(e)) }), v((e) => ({
														...e,
														[i]: {
															message: "Test this subfolder",
															directories: []
														}
													})));
												},
												children: _[i].directories.map((e) => /* @__PURE__ */ (0, Q.jsx)(z, {
													id: e,
													children: e
												}, e))
											}) : null,
											/* @__PURE__ */ (0, Q.jsx)(N, { children: "Enter the address as smb://server/share/folder. Reads and writes follow the share account's permissions; organizing and deleting happen only through their actions, and metadata and previews are stored in the Peach data folder." })
										]
									}) : null]
								}, i)), /* @__PURE__ */ (0, Q.jsx)("div", {
									className: "flex",
									children: /* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "secondary",
										"aria-label": `Add a folder to ${f}`,
										onClick: () => {
											i(), r(n.length, {
												...Ka(e),
												location: e.location,
												cost: e.cost
											});
										},
										children: "Add folder"
									})
								})]
							})
						]
					}, e.library_id);
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				className: "self-start",
				onClick: i,
				children: "Add media library"
			}),
			/* @__PURE__ */ (0, Q.jsx)(N, { children: dt }),
			ie ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Un, {}), /* @__PURE__ */ (0, Q.jsx)(Sa, {})] }) : null,
			ae.map((e) => /* @__PURE__ */ (0, Q.jsxs)(N, { children: [
				"Not detected ",
				e.name,
				". ",
				/* @__PURE__ */ (0, Q.jsxs)(A, {
					href: e.download_url,
					children: ["Download ", e.name]
				})
			] }, e.name)),
			/* @__PURE__ */ (0, Q.jsx)(D, {
				isSelected: d,
				onChange: f,
				children: "Scan and fill in metadata after saving"
			}),
			h ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "Not saved",
				children: h
			}) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(M, {
			status: "Peach restarts after saving.",
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(S.busy === "save"),
				children: "Save settings"
			})
		})]
	});
}
function $a({ online: e }) {
	return /* @__PURE__ */ (0, Q.jsx)(Jn, { online: e });
}
function eo({ data: e }) {
	let t = e.media_sources, n = Y();
	return t ? /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Mount status",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(ct, { children: t.map((e, t) => /* @__PURE__ */ (0, Q.jsxs)(j, {
				term: /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(zt, { mark: Kn(e.location) }), Ha(e.location)] }),
				children: [e.path || "No mount point configured", /* @__PURE__ */ (0, Q.jsx)($a, { online: e.online })]
			}, t)) }),
			n.error ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: n.error })
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				onClick: () => void n.run("refresh", (e) => nn(e), (e) => vn.setQueryData(Ze, e)),
				...K(n.busy === "refresh"),
				children: "Refresh mount status"
			}) })
		]
	}) : null;
}
// src/react/settings/service-preferences.tsx
var to = [
	["off", "Close"],
	["precise", "One every 10 s"],
	["coarse", "One every 30 s"]
];
function no({ epoch: e = 0, disabled: t = !1 }) {
	let n = X({
		queryKey: Bt,
		queryFn: ({ signal: e }) => ln(e),
		refetchOnMount: "always"
	}), r = In(), i = r.reset;
	(0, Z.useEffect)(() => {
		i();
	}, [e, i]);
	let a = n.data, o = r.error || n.error;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
			label: "Timeline previews",
			description: "Samples frames at the chosen interval; only videos on local disks are processed.",
			children: /* @__PURE__ */ (0, Q.jsx)("div", {
				id: "videoThumbnailSetting",
				children: /* @__PURE__ */ (0, Q.jsx)(R, {
					"aria-label": "Thumbnail sampling interval",
					selectedKey: a?.mode || "off",
					isDisabled: t || !a || n.isFetching || r.isPending,
					onSelectionChange: (e) => {
						e !== null && r.mutate(String(e));
					},
					children: to.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
						id: e,
						children: t
					}, e))
				})
			})
		}) }),
		r.isPending || a?.status === "running" ? /* @__PURE__ */ (0, Q.jsxs)(V, {
			divided: !0,
			children: [/* @__PURE__ */ (0, Q.jsx)(N, {
				role: "status",
				children: r.isPending ? "Saving…" : "Sampling."
			}), r.isPending ? null : /* @__PURE__ */ (0, Q.jsx)(Vt, {})]
		}) : null,
		o ? /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(k, { children: q(o) })
		}) : null
	] });
}
function ro({ receipt: e }) {
	let t = Kt();
	(0, Z.useSyncExternalStore)(t.subscribe, t.version);
	let n = X({
		queryKey: jt,
		queryFn: ({ signal: e }) => cn(e),
		refetchOnMount: "always"
	}), r = Fn(), i = n.data?.followInitialDays ?? t.value.followInitialDays, a = r.error || n.error;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Follow scraping",
		children: [/* @__PURE__ */ (0, Q.jsxs)(I, { children: [
			/* @__PURE__ */ (0, Q.jsx)(io, {}),
			/* @__PURE__ */ (0, Q.jsx)(ao, {}),
			/* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Initial scrape range",
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "followInitialDaysSetting",
					children: /* @__PURE__ */ (0, Q.jsx)(R, {
						"aria-label": "Initial scrape range",
						selectedKey: String(i),
						isDisabled: n.isFetching || r.isPending,
						onSelectionChange: (n) => {
							n !== null && r.mutate({ followInitialDays: Number(n) }, { onSuccess: (n) => {
								typeof n.followInitialDays == "number" && (t.value.followInitialDays = n.followInitialDays), t.save(), e("Initial scrape range saved");
							} });
						},
						children: ot.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
							id: e,
							children: t
						}, e))
					})
				})
			}),
			/* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Avatar refresh",
				children: "Every 3 months"
			}),
			/* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Favicon refresh",
				children: "Yearly"
			})
		] }), a ? /* @__PURE__ */ (0, Q.jsx)(V, {
			divided: !0,
			children: /* @__PURE__ */ (0, Q.jsx)(k, { children: q(a) })
		}) : null]
	});
}
function io() {
	let e = X({
		queryKey: st,
		queryFn: ({ signal: e }) => on(e),
		refetchOnMount: "always",
		refetchInterval: (e) => wn(e.state.data)
	}), t = Pn(), n = e.data, r = (0, Z.useRef)(qt(Number(localStorage.getItem("peach.number.followScheduleSetting")), 15, 10080, 60)), [i, a] = (0, Z.useState)("60"), [o, s] = (0, Z.useState)(!1);
	(0, Z.useEffect)(() => {
		n?.enabled && (r.current = n.interval_minutes, a(String(n.interval_minutes)));
	}, [n]);
	let c = !n?.available || e.isFetching || t.isPending, l = () => {
		let e = Number(i);
		!Number.isInteger(e) || e < 15 || e > 10080 ? s(!0) : (s(!1), n?.enabled && !c && e !== n.interval_minutes && (r.current = e, localStorage.setItem("peach.number.followScheduleSetting", String(e)), t.mutate(e)));
	}, u = t.error || e.error;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(B, {
			label: "Check for updates automatically",
			children: /* @__PURE__ */ (0, Q.jsxs)("div", {
				id: "followScheduleSetting",
				className: "flex min-h-9 min-w-0 flex-wrap items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, Q.jsx)(U, {
					"aria-label": "Check for updates automatically",
					isSelected: n?.enabled === !0,
					isDisabled: c,
					onChange: (e) => {
						localStorage.setItem("peach.number.followScheduleSetting", String(r.current)), t.mutate(e ? r.current : 0);
					}
				}), n?.enabled ? /* @__PURE__ */ (0, Q.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Q.jsx)(P, {
						type: "number",
						inputMode: "numeric",
						name: "follow-interval",
						autoComplete: "off",
						"aria-label": "Auto-check interval",
						className: "w-24",
						value: i,
						onChange: (e) => {
							a(e), s(!1);
						},
						onBlur: l,
						onKeyDown: (e) => {
							e.key === "Enter" && (e.preventDefault(), l());
						},
						isDisabled: c,
						isInvalid: o
					}), /* @__PURE__ */ (0, Q.jsx)("span", {
						className: "text-body-2-regular text-text-secondary",
						children: "min"
					})]
				}) : null]
			})
		}),
		o ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: "Enter a whole number from 15 to 10080 (minutes)." }) }) : null,
		t.isPending || n?.running ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, {
			role: "status",
			children: t.isPending ? "Saving…" : "Checking sources for updates…"
		}) }) : null,
		/* @__PURE__ */ (0, Q.jsx)(oo, {
			kind: "follow",
			status: n,
			title: "Last auto-check failed"
		}),
		u ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(k, { children: q(u) }) }) : null
	] });
}
function ao() {
	let e = X({
		queryKey: it,
		queryFn: ({ signal: e }) => an(e),
		refetchOnMount: "always",
		refetchInterval: (e) => wn(e.state.data)
	}), t = e.data;
	if (!t) return e.isPending ? /* @__PURE__ */ (0, Q.jsx)(B, {
		label: "Feed fetching",
		children: /* @__PURE__ */ (0, Q.jsx)("span", {
			"data-skeleton": !0,
			"aria-busy": "true",
			"aria-label": "Loading feed fetch interval",
			className: "block h-4 w-16 rounded-2lg bg-background-tertiary-default"
		})
	}) : null;
	let n = t.interval_minutes, r = n % 60 ? `Every ${n} min` : `Every ${n / 60} h`;
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
		/* @__PURE__ */ (0, Q.jsx)(B, {
			label: "Feed fetching",
			children: /* @__PURE__ */ (0, Q.jsx)("span", {
				id: "feedScheduleSetting",
				children: t.available ? t.enabled ? r : "Off" : "Only available on the writer"
			})
		}),
		t.running ? /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(N, {
			role: "status",
			children: "Fetching feeds…"
		}) }) : null,
		/* @__PURE__ */ (0, Q.jsx)(oo, {
			kind: "feed",
			status: t,
			title: "Last auto-fetch failed"
		})
	] });
}
function oo({ kind: e, status: t, title: n }) {
	let r = Nn(e);
	if (!t?.enabled || t.running || !t.last_error) return null;
	let i = t.consecutive_failures ?? 0, a = fn(t.next_run_at), o = [i > 1 ? `Failed ${i} times in a row` : "", a ? `Next round ${a}` : ""].filter(Boolean).join(", "), s = [
		t.last_error,
		o,
		r.error ? `Not retrying: ${q(r.error)}` : ""
	].filter(Boolean).join("\n");
	return /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)(F, {
		tone: "error",
		title: n,
		action: /* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			size: "small",
			disabled: !t.available,
			...K(r.isPending),
			onClick: () => r.mutate(),
			children: "Retry now"
		}),
		children: s
	}) });
}
// src/react/settings/media-processing-settings.tsx
function so({ receipt: e }) {
	let t = X({
		queryKey: _t,
		queryFn: ({ signal: e }) => sn(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : ""), i = !t.data || t.isFetching || !!n.busy;
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Video previews",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Generate video previews",
				description: "Generate contact sheets and timeline previews for local videos; when off, duration and resolution are still probed per import rules.",
				children: /* @__PURE__ */ (0, Q.jsx)(U, {
					"aria-label": "Generate video previews",
					isSelected: !!t.data && !t.data.metadata_only,
					isDisabled: i,
					onChange: (t) => void n.run("save", (e) => G(vt, { metadata_only: !t }, "POST", e), (t) => {
						vn.setQueryData(_t, t), vn.invalidateQueries({ queryKey: Bt }), vn.invalidateQueries({ queryKey: ft }), e(t.metadata_only ? "Video preview generation turned off" : "Video preview generation turned on");
					})
				})
			}) }),
			/* @__PURE__ */ (0, Q.jsx)(no, { disabled: !t.data || t.data.metadata_only || !!n.busy }),
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Frame decoding method",
				description: "Used to generate covers, contact sheets and timelines.",
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "previewAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(R, {
						"aria-label": "Frame decoding method",
						selectedKey: t.data?.preview_acceleration || "auto",
						isDisabled: i,
						onSelectionChange: (t) => {
							t !== null && n.run("preview_acceleration", (e) => G(vt, { preview_acceleration: String(t) }, "POST", e), (t) => {
								vn.setQueryData(_t, t), e("Frame decoding method saved");
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(z, {
							id: "auto",
							children: "Auto (hardware first)"
						}), /* @__PURE__ */ (0, Q.jsx)(z, {
							id: "software",
							children: "Software decoding"
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(N, {
					role: "status",
					children: "Saving…"
				})
			}) : null,
			r ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: r })
			}) : null
		]
	});
}
function co({ receipt: e }) {
	let t = X({
		queryKey: _t,
		queryFn: ({ signal: e }) => sn(e)
	}), n = Y(), r = n.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Video playback",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Transcoding method",
				description: "Used to transcode video during playback.",
				children: /* @__PURE__ */ (0, Q.jsx)("div", {
					id: "playbackAccelerationSetting",
					children: /* @__PURE__ */ (0, Q.jsxs)(R, {
						"aria-label": "Transcoding method",
						selectedKey: t.data?.playback_acceleration || "auto",
						isDisabled: !t.data || t.isFetching || !!n.busy,
						onSelectionChange: (t) => {
							t !== null && n.run("playback_acceleration", (e) => G(vt, { playback_acceleration: String(t) }, "POST", e), (t) => {
								vn.setQueryData(_t, t), e("Transcoding method saved");
							});
						},
						children: [/* @__PURE__ */ (0, Q.jsx)(z, {
							id: "auto",
							children: "Auto (hardware first)"
						}), /* @__PURE__ */ (0, Q.jsx)(z, {
							id: "software",
							children: "Software codec"
						})]
					})
				})
			}) }),
			n.busy ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(N, {
					role: "status",
					children: "Saving…"
				})
			}) : null,
			r ? /* @__PURE__ */ (0, Q.jsx)(V, {
				divided: !0,
				children: /* @__PURE__ */ (0, Q.jsx)(k, { children: r })
			}) : null
		]
	});
}
// src/react/boardui/components/base/textarea/textarea.tsx
var lo = Dn({
	field: "relative flex w-full flex-col rounded-2lg bg-background-tertiary-default text-foreground-icon-tertiary ring-2 ring-inset ring-transparent transition-[background-color,box-shadow,color] duration-[var(--input-transition-ms)] ease",
	fieldSize: {
		medium: "p-2",
		small: "px-1.5 py-2"
	},
	textarea: "block w-full min-w-0 bg-transparent border-0 outline-none m-0 p-0 px-1 font-sans text-body-regular text-text-primary placeholder:text-text-tertiary focus:placeholder:text-text-primary disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text disabled:cursor-not-allowed aria-invalid:placeholder:text-text-error-placeholder",
	resize: {
		none: "resize-none",
		vertical: "resize-y"
	},
	footer: "flex w-full items-start justify-between gap-3",
	count: "ms-auto shrink-0 pt-px text-caption-1-medium text-text-tertiary tabular-nums"
}), uo = 20;
function fo({ size: e, rows: t = 3, autoResize: n = !1, maxRows: r, resize: i = "vertical", fieldClassName: a, className: o, ref: s, groupRef: c, onInput: l, ...u }) {
	let d = (0, Z.useContext)(Ut), f = e ?? d.size ?? "medium", p = (0, Z.useRef)(null), m = (e) => {
		p.current = e, typeof s == "function" ? s(e) : s && (s.current = e);
	}, h = () => {
		let e = p.current;
		if (!e) return;
		if (!n) {
			e.style.height = "", e.style.maxHeight = "", e.style.overflowY = "";
			return;
		}
		let i = parseFloat(window.getComputedStyle(e).lineHeight) || uo, a = r ? r * i : Infinity;
		e.style.height = "0px";
		let o = Math.max(e.scrollHeight, t * i);
		e.style.height = `${Math.min(o, a)}px`, e.style.maxHeight = r ? `${a}px` : "", e.style.overflowY = o > a ? "auto" : "hidden";
	};
	return (0, Z.useLayoutEffect)(h), /* @__PURE__ */ (0, Q.jsx)(Re, {
		ref: c,
		className: ({ isFocusWithin: e, isHovered: t, isDisabled: n, isInvalid: r }) => tn(lo.field, lo.fieldSize[f], t && !e && !n && !r && "ring-border-button-hover", e && !n && !r && "ring-border-button-active", n && "bg-input-disabled-background text-input-disabled-foreground", r && "bg-background-tertiary-error text-foreground-icon-error", d.fieldClassName, a),
		children: /* @__PURE__ */ (0, Q.jsx)(Ve, {
			ref: m,
			rows: t,
			...u,
			onInput: (e) => {
				h(), l?.(e);
			},
			className: tn(lo.textarea, lo.resize[n ? "none" : i], d.inputClassName, o)
		})
	});
}
fo.displayName = "TextareaBase";
function po({ label: e, hint: t, tooltip: n, placeholder: r, rows: i, autoResize: a, maxRows: o, resize: s, maxLength: c, showCount: l = !1, fieldClassName: u, ref: d, groupRef: f, className: p, value: m, defaultValue: h, onChange: g, ..._ }) {
	let [v, y] = (0, Z.useState)(() => (h ?? "").length), b = m === void 0 ? v : m.length;
	return /* @__PURE__ */ (0, Q.jsx)(Ht, {
		..._,
		value: m,
		defaultValue: h,
		onChange: (e) => {
			l && m === void 0 && y(e.length), g?.(e);
		},
		className: p,
		"aria-label": _["aria-label"] ?? (!e && typeof r == "string" ? r : void 0),
		children: ({ isRequired: p, isInvalid: m }) => /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
			e && /* @__PURE__ */ (0, Q.jsx)(pt, {
				isRequired: p,
				isInvalid: m,
				tooltip: n,
				children: e
			}),
			/* @__PURE__ */ (0, Q.jsx)(fo, {
				ref: d,
				groupRef: f,
				placeholder: r,
				rows: i,
				autoResize: a,
				maxRows: o,
				resize: s,
				maxLength: c,
				fieldClassName: u
			}),
			(t || l) && /* @__PURE__ */ (0, Q.jsxs)("div", {
				className: lo.footer,
				children: [t && /* @__PURE__ */ (0, Q.jsx)(ut, {
					isInvalid: m,
					children: t
				}), l && /* @__PURE__ */ (0, Q.jsx)("span", {
					className: tn(lo.count, m && "text-text-error-primary"),
					children: c ? `${b}/${c}` : b
				})]
			})
		] })
	});
}
po.displayName = "Textarea";
// src/react/settings/code-pattern-settings.tsx
var mo = "^\\+{3}\\s*(?<code>FC2-PPV-\\d+)\n\\[(?<code>[A-Z]+-\\d+)\\]";
function ho({ receipt: e }) {
	let t = X({
		queryKey: jt,
		queryFn: ({ signal: e }) => cn(e)
	}), [n, r] = (0, Z.useState)(null), i = Y(), a = n ?? (t.data?.codePatterns ?? []).join("\n"), o = i.error || (t.error ? q(t.error) : "");
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Code recognition rules",
		onSubmit: (t) => {
			t.preventDefault();
			let n = a.split("\n").map((e) => e.trim()).filter(Boolean);
			i.run("save", (e) => G(Mt, { codePatterns: n }, "POST", e), (t) => {
				vn.setQueryData(jt, t), r(null), e("Settings saved");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsx)(N, { children: "When the built-in rules can't recognize a code, these rules extract it from the file name. One regular expression per line; put the code in (?<code>…), or without a named group the first parenthesized group is used. Rules apply to videos without a code the next time they're processed." }), /* @__PURE__ */ (0, Q.jsx)(po, {
			id: "codePatternSetting",
			"aria-label": "Code recognition rules",
			rows: 3,
			autoResize: !0,
			maxRows: 12,
			spellCheck: "false",
			autoComplete: "off",
			placeholder: mo,
			value: a,
			isDisabled: !t.data,
			isInvalid: !!o,
			hint: o || void 0,
			onChange: r
		})] }), /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(i.busy === "save"),
			children: "Save settings"
		}) })]
	});
}
// src/react/settings/password-pair.tsx
function go({ label: e, password: t, confirmation: n, onPassword: r, onConfirmation: i, disabled: a = !1, passwordError: o, passwordHint: s, confirmationError: c, confirmationInvalid: l = !1 }) {
	return /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(P, {
		id: "access-password",
		type: "password",
		label: e,
		autoComplete: "new-password",
		maxLength: 256,
		value: t,
		onChange: r,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && !!o,
		hint: a ? s : o || s
	}), /* @__PURE__ */ (0, Q.jsx)(P, {
		id: "access-confirm",
		type: "password",
		label: "Confirm access password",
		autoComplete: "new-password",
		maxLength: 256,
		value: n,
		onChange: i,
		isDisabled: a,
		isRequired: !a,
		validationBehavior: "aria",
		isInvalid: !a && (!!c || l),
		hint: a ? void 0 : c
	})] });
}
// src/react/settings/access-settings.tsx
var _o = {
	legacy: "A system-generated access code is in use. Set your own password, or turn off the sign-in requirement.",
	locked: "Access settings could not be read; check the config file on this computer.",
	password: "A password is set. New devices must sign in; checking “Stay signed in” keeps them signed in for 30 days."
};
function vo({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(""), [o, s] = (0, Z.useState)(""), [c, l] = (0, Z.useState)(""), [u, d] = (0, Z.useState)(!1), [f, p] = (0, Z.useState)({}), m = (0, Z.useRef)(null), h = Y(), g = (e) => {
		e.preventDefault();
		let f = {};
		n.mode === "password" && !i && (f.current_password = "Enter the current access password"), u || ((o.length < 8 || o.length > 256) && (f.password = "Access password must be 8–256 characters"), o !== c && (f.confirmation = "The passwords don't match")), p(f), Object.keys(f).length ? requestAnimationFrame(() => m.current?.querySelector("input[aria-invalid=\"true\"]")?.focus()) : h.run("save", (e) => G("/api/configuration/access", {
			revision: n.revision,
			action: u ? "disable" : "set",
			confirm_disable: u,
			current_password: i,
			password: u ? "" : o,
			confirmation: u ? "" : c
		}, "POST", e), (e) => {
			r(e), a(""), s(""), l(""), d(!1), p({}), t(e.mode === "open" ? "Access password turned off" : "Settings saved");
		}, (e) => {
			let t = e instanceof qe ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? p(n) : h.setError(q(e));
		});
	}, _ = _o[n.mode], v = n.mode !== "locked";
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Access password",
		onSubmit: g,
		children: [/* @__PURE__ */ (0, Q.jsx)("div", {
			ref: m,
			children: /* @__PURE__ */ (0, Q.jsxs)(V, { children: [
				_ ? /* @__PURE__ */ (0, Q.jsx)(N, { children: _ }) : null,
				n.mode === "open" ? /* @__PURE__ */ (0, Q.jsx)(F, {
					tone: "warning",
					title: "No access password set",
					children: "Any device that can reach Peach can open the address and see the library without signing in."
				}) : null,
				n.mode === "password" || n.mode === "legacy" ? /* @__PURE__ */ (0, Q.jsx)(D, {
					isSelected: u,
					onChange: d,
					children: "Turn off access password"
				}) : null,
				n.mode === "password" ? /* @__PURE__ */ (0, Q.jsx)(P, {
					id: "access-current",
					type: "password",
					label: "Current access password",
					autoComplete: "current-password",
					maxLength: 256,
					value: i,
					onChange: a,
					isRequired: !0,
					validationBehavior: "aria",
					isInvalid: !!f.current_password,
					hint: f.current_password
				}) : null,
				v && !u ? /* @__PURE__ */ (0, Q.jsx)(go, {
					label: n.mode === "password" ? "New access password" : "Set access password",
					password: o,
					confirmation: c,
					onPassword: s,
					onConfirmation: l,
					passwordError: f.password,
					confirmationError: f.confirmation,
					passwordHint: "At least 8 characters. Other devices will need to sign in again after saving."
				}) : null,
				u ? /* @__PURE__ */ (0, Q.jsx)(F, {
					tone: "warning",
					title: "Access scope",
					children: "After saving, devices that can reach Peach access the library directly."
				}) : null,
				h.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: h.error }) : null
			] })
		}), v ? /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(h.busy === "save"),
			children: "Save settings"
		}) }) : null]
	});
}
// src/react/components/configuration-fields.tsx
function yo({ id: e, label: t, value: n, onChange: r, options: i, isDisabled: a, isInvalid: o, children: s }) {
	let c = `${e}-label`;
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [
			/* @__PURE__ */ (0, Q.jsx)(pt, {
				id: c,
				elementType: "span",
				children: t
			}),
			/* @__PURE__ */ (0, Q.jsx)(Pt, {
				id: e,
				"aria-labelledby": c,
				orientation: "horizontal",
				className: At,
				value: n,
				onChange: r,
				isDisabled: a,
				isInvalid: o,
				children: i.map((e) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
					value: e.value,
					className: kt,
					children: e.label
				}, e.value))
			}),
			s
		]
	});
}
function bo({ prefix: e, suffix: t, ...n }) {
	let r = () => /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "shrink-0 pr-1 text-body-regular text-text-secondary",
		children: t
	});
	return /* @__PURE__ */ (0, Q.jsx)(P, {
		...n,
		leadingAddon: e ? /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 pl-1 text-body-regular text-text-secondary",
			children: e
		}) : void 0,
		trailingIcon: t ? r : void 0
	});
}
// src/react/settings/port-settings.tsx
var xo = [{
	value: "0.0.0.0",
	label: "Devices on the same LAN"
}, {
	value: "127.0.0.1",
	label: "Only this computer"
}];
function So({ data: e, receipt: t }) {
	let n = e.network, r = n ? n.editable : e.editable && e.port_editable !== !1, [i, a] = (0, Z.useState)(n?.host ?? "127.0.0.1"), [o, s] = (0, Z.useState)(n?.mdns_name ?? "peach"), [c, l] = (0, Z.useState)(String(e.port)), [u, d] = (0, Z.useState)({}), [f, p] = (0, Z.useState)(null), m = Y();
	return (0, Z.useEffect)(() => {
		if (!f) return;
		let e = setTimeout(() => location.assign(f.url), ya);
		return () => clearTimeout(e);
	}, [f]), f ? /* @__PURE__ */ (0, Q.jsx)(L, {
		title: "Access address",
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsxs)(F, {
			tone: "success",
			title: "Settings saved",
			children: ["Peach is restarting.", /* @__PURE__ */ (0, Q.jsx)(mt, {
				href: f.url,
				size: "small",
				children: "Back to Network and access"
			})]
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Access address",
		onSubmit: r ? (r) => {
			r.preventDefault(), d({}), m.run("save", (t) => G(Qe, {
				revision: e.revision,
				media_dirs: e.media_dirs,
				...e.media_sources ? { media_sources: e.media_sources } : {},
				port: c,
				scan_now: !1,
				...n?.editable ? {
					host: i,
					...i === "0.0.0.0" ? { mdns_name: o } : {}
				} : {}
			}, "POST", t), (e) => {
				p({ url: new URL("/settings/network", e.url).href }), t("Settings saved");
			}, (e) => {
				let t = e instanceof qe && e.status === 400 ? e.body?.errors : null;
				t && (t.port || t.host || t.mdns_name) ? d(t) : m.setError(q(e));
			});
		} : void 0,
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
			n ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(Co, {
				label: "Local address",
				value: n.local_url,
				receipt: t
			}), n.lan_url || n.ip_url ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [
				/* @__PURE__ */ (0, Q.jsx)(Co, {
					label: "Phone address",
					value: n.lan_url || n.ip_url,
					receipt: t
				}),
				n.lan_url && n.ip_url ? /* @__PURE__ */ (0, Q.jsx)(Co, {
					label: "Backup IP address",
					value: n.ip_url,
					receipt: t
				}) : null,
				/* @__PURE__ */ (0, Q.jsxs)(N, { children: ["Connect the phone and computer to the same Wi-Fi. ", n.ip_url && n.lan_url ? "If the name address won't open, try the backup IP address." : ""] })
			] }) : /* @__PURE__ */ (0, Q.jsx)(N, { children: n.scope === "local" ? "Only this computer is allowed to connect right now, so phones can't connect." : "LAN address not obtained; check the computer's network connection and service startup settings." })] }) : null,
			r ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [n?.editable ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(yo, {
				id: "configHost",
				label: "Who can access",
				value: i,
				onChange: a,
				options: xo,
				isDisabled: !!m.busy,
				isInvalid: !!u.host,
				children: u.host ? /* @__PURE__ */ (0, Q.jsx)(k, { children: u.host }) : null
			}), i === "0.0.0.0" ? /* @__PURE__ */ (0, Q.jsx)(bo, {
				id: "configMdnsName",
				label: "LAN access address",
				value: o,
				onChange: s,
				prefix: n.local_url.startsWith("https:") ? "https://" : "http://",
				suffix: ".local",
				autoComplete: "off",
				spellCheck: "false",
				maxLength: 63,
				isDisabled: !!m.busy,
				validationBehavior: "aria",
				isInvalid: !!u.mdns_name,
				hint: u.mdns_name || void 0
			}) : null] }) : null, /* @__PURE__ */ (0, Q.jsx)(bo, {
				id: "configPort",
				label: "Port",
				prefix: "localhost:",
				inputMode: "numeric",
				value: c,
				onChange: l,
				isDisabled: !!m.busy,
				validationBehavior: "aria",
				isInvalid: !!u.port,
				hint: u.port
			})] }) : /* @__PURE__ */ (0, Q.jsx)(N, { children: e.notice || "Access scope, name and port are managed by the service startup settings." }),
			n?.editable && i === "0.0.0.0" && n.scope === "local" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: "The phone address appears after you save and restart. You can set an access password below." }) : null,
			m.error ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "Not saved",
				children: m.error
			}) : null
		] }), r ? /* @__PURE__ */ (0, Q.jsx)(M, {
			status: "Peach restarts after saving and redirects to the new address.",
			children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(m.busy === "save"),
				children: "Save settings"
			})
		}) : null]
	});
}
function Co({ label: e, value: t, receipt: n }) {
	let r = Y();
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-wrap items-end gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)(P, {
				className: "min-w-0 flex-1",
				label: e,
				value: t,
				isReadOnly: !0,
				autoComplete: "off"
			}), /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				"aria-label": `Copy ${e}`,
				onClick: () => void r.run("copy", () => navigator.clipboard.writeText(t), () => n("Address copied")),
				children: "Copy address"
			})]
		}), r.error ? /* @__PURE__ */ (0, Q.jsx)(N, {
			role: "status",
			children: "Copy failed; select the address and copy it."
		}) : null]
	});
}
// src/react/settings/peach-proxy-fields.tsx
var wo = [
	["environment", "Follow environment"],
	["direct", "Direct"],
	["proxy", "Custom"]
];
function To({ mode: e, onChange: t, labelledBy: n }) {
	return /* @__PURE__ */ (0, Q.jsx)(R, {
		"aria-label": n ? void 0 : "Connection method",
		"aria-labelledby": n,
		selectedKey: e,
		onSelectionChange: (e) => {
			e !== null && t(String(e));
		},
		children: wo.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(z, {
			id: e,
			children: t
		}, e))
	});
}
function Eo({ id: e, value: t, onChange: n, saved: r = !1, error: i }) {
	return /* @__PURE__ */ (0, Q.jsx)(P, {
		id: e,
		type: "password",
		label: "Proxy address",
		autoComplete: "off",
		spellCheck: "false",
		value: t,
		onChange: n,
		placeholder: r ? "Saved; leave empty to keep" : "http://127.0.0.1:7890",
		validationBehavior: "aria",
		isInvalid: !!i,
		hint: i
	});
}
// src/react/settings/tunnel-settings.tsx
var Do = 2e3, Oo = [["quick", "Temporary link"], ["named", "Named tunnel"]], ko = {
	quick: "For temporary previews; the address is random and changes after a restart. Set an access password before starting.",
	named: "Uses the fixed domain you bound in Cloudflare. Set an access password before starting."
};
function Ao({ revision: e, initial: t, receipt: n }) {
	let [r, i] = (0, Z.useState)(t), [a, o] = (0, Z.useState)(e), [s, c] = (0, Z.useState)(t.mode), [l, u] = (0, Z.useState)(t.hostname), [d, f] = (0, Z.useState)(""), [p, m] = (0, Z.useState)({}), h = Y(), g = r.state === "starting" || r.state === "running", _ = r.named_available && s === "named";
	(0, Z.useEffect)(() => {
		if (r.state !== "starting") return;
		let e = new AbortController(), t = window.setInterval(() => {
			nn(e.signal).then((t) => {
				!e.signal.aborted && t.tunnel && (vn.setQueryData(Ze, t), i(t.tunnel), o(t.revision));
			}).catch(() => void 0);
		}, Do);
		return () => {
			e.abort(), window.clearInterval(t);
		};
	}, [r.state]);
	let v = (e, t, n) => {
		m({}), h.run(e, (e) => G("/api/configuration/tunnel", {
			revision: a,
			enabled: t,
			mode: s,
			hostname: l,
			token: d
		}, "POST", e), (e) => {
			i(e), o(e.revision), c(e.mode), u(e.hostname), f(""), n(e);
		}, (e) => {
			let t = e instanceof qe ? e.body : null, n = t?.errors || t?.detail?.errors;
			n ? m(n) : h.setError(q(e));
		});
	};
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "tunnel",
		title: "Cloudflare public entry",
		onSubmit: (e) => {
			e.preventDefault(), v("save", g, () => n("Settings saved"));
		},
		aside: /* @__PURE__ */ (0, Q.jsx)(H, {
			tone: r.error ? "error" : g ? "progress" : "neutral",
			children: r.error ? "Connection failed" : r.state === "running" ? "Running" : r.state === "starting" ? "Connecting" : "Stopped"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
			r.named_available ? /* @__PURE__ */ (0, Q.jsx)(Pt, {
				"aria-label": "Public entry type (choose one)",
				value: s,
				isDisabled: g,
				onChange: (e) => c(e),
				className: At,
				children: Oo.map(([e, t]) => /* @__PURE__ */ (0, Q.jsx)(Ge, {
					value: e,
					className: kt,
					children: t
				}, e))
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(N, { children: ko[_ ? "named" : "quick"] }),
			_ ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)(P, {
				id: "tunnel-hostname",
				label: "Public hostname",
				autoComplete: "off",
				maxLength: 253,
				value: l,
				onChange: u,
				isDisabled: g,
				validationBehavior: "aria",
				isInvalid: !!p.hostname,
				hint: p.hostname || "The hostname in Cloudflare Zero Trust that points to this computer."
			}), /* @__PURE__ */ (0, Q.jsx)(P, {
				id: "tunnel-token",
				type: "password",
				label: "Tunnel token",
				autoComplete: "off",
				maxLength: 2048,
				value: d,
				onChange: f,
				isDisabled: g,
				validationBehavior: "aria",
				hint: r.token_set ? "Saved; leave empty to keep." : "Copy it from the tunnel details page in Cloudflare Zero Trust."
			})] }) : null,
			r.available ? null : /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "warning",
				title: "cloudflared not found",
				children: "Install the official cloudflared, or set its path with tunnel.binary in the settings file or PEACH_CLOUDFLARED."
			}),
			r.state === "running" && r.url ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "info",
				title: "Public address",
				children: /* @__PURE__ */ (0, Q.jsx)(A, {
					href: r.url,
					children: r.url
				})
			}) : null,
			r.state === "starting" ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "info",
				title: "Connecting",
				children: "Waiting for cloudflared to connect to the Cloudflare edge."
			}) : null,
			r.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: r.error }) : null,
			h.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: h.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsxs)(M, {
			status: r.enabled ? "Restores automatically after Peach restarts." : void 0,
			children: [/* @__PURE__ */ (0, Q.jsx)(E, {
				variant: r.named_available ? "secondary" : "primary",
				onClick: () => v("toggle", !g, (e) => n(e.enabled ? "Public entry started" : "Public entry stopped")),
				...K(h.busy === "toggle"),
				children: g ? "Stop public entry" : "Start public entry"
			}), r.named_available ? /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(h.busy === "save"),
				children: "Save settings"
			}) : null]
		})]
	});
}
// src/react/settings/network-settings.tsx
function jo({ data: e, receipt: t, panel: n, issues: r }) {
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...Zn(n),
		children: [
			r,
			e.network || e.editable && e.port_editable !== !1 && !e.section_errors?.media_sources ? /* @__PURE__ */ (0, Q.jsx)(So, {
				data: e,
				receipt: t
			}) : null,
			e.access ? /* @__PURE__ */ (0, Q.jsx)(vo, {
				initial: e.access,
				receipt: t
			}) : null,
			e.tunnel ? /* @__PURE__ */ (0, Q.jsx)(Ao, {
				revision: e.revision,
				initial: e.tunnel,
				receipt: t
			}) : null,
			e.peach_proxy ? /* @__PURE__ */ (0, Q.jsx)(Mo, {
				initial: e.peach_proxy,
				receipt: t
			}) : null
		]
	});
}
function Mo({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e), [i, a] = (0, Z.useState)(e.mode), [o, s] = (0, Z.useState)(""), c = Y();
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		id: "peachProxy",
		title: "Peach proxy",
		onSubmit: (e) => {
			e.preventDefault(), c.run("save", (e) => G("/api/configuration/peach-proxy", {
				mode: i,
				proxy: o
			}, "POST", e), (e) => {
				r(e), s(""), t("Settings saved");
			});
		},
		children: [
			/* @__PURE__ */ (0, Q.jsx)(I, { children: /* @__PURE__ */ (0, Q.jsx)(B, {
				label: "Connection method",
				children: /* @__PURE__ */ (0, Q.jsx)(To, {
					mode: i,
					onChange: a
				})
			}) }),
			i === "proxy" || n.needs_selection || c.error ? /* @__PURE__ */ (0, Q.jsxs)(V, {
				divided: !0,
				children: [
					i === "proxy" ? /* @__PURE__ */ (0, Q.jsx)(Eo, {
						id: "peachProxyAddress",
						value: o,
						onChange: s,
						saved: n.proxy_saved
					}) : null,
					n.needs_selection ? /* @__PURE__ */ (0, Q.jsx)(F, {
						tone: "warning",
						title: "Choose a connection method",
						children: "Existing sources use different proxy addresses; choose a shared connection method."
					}) : null,
					c.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: c.error }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
				type: "submit",
				...K(c.busy === "save"),
				children: "Save settings"
			}) })
		]
	});
}
// src/react/follow-manage/credentials.tsx
var No = "This will clear this source's sign-in credentials on this computer and in the shared copy.", Po = "Other system users can read this credential file. On the Mac or Linux computer running Peach, set the file permissions so only the current user can read and write it (0600).";
function Fo(e, t) {
	return (e.shared_fields || []).includes(t) ? "From the shared copy; leave empty to keep" : e.fields.includes(t) ? "Saved; leave empty to keep" : "Not filled in";
}
function Io({ row: e }) {
	if ($t(e)) return /* @__PURE__ */ (0, Q.jsx)(et, {
		variant: "caption",
		color: "lime",
		children: "Configured"
	});
	let t = e.requirement === "required" ? "yellow" : e.requirement === "blocked" ? "rose" : "neutral";
	return /* @__PURE__ */ (0, Q.jsx)(et, {
		variant: "caption",
		color: t,
		children: $e[e.requirement] || ""
	});
}
function Lo({ row: e, readOnly: t, toast: n }) {
	let [r, i] = (0, Z.useState)({}), [a, o] = (0, Z.useState)(""), s = $t(e), c = jn({
		mutationFn: (t) => Cn(e.provider, t),
		onSuccess: (e, t) => {
			e.note ? o(e.note) : (o(""), i({}), vn.invalidateQueries({
				queryKey: at,
				exact: !0
			}), n(Object.keys(t).length ? "Source credentials saved" : "Source credentials cleared"));
		},
		onError: (e) => o(q(e))
	}), l = () => {
		let e = Object.fromEntries(Object.entries(r).map(([e, t]) => [e, t.trim()]).filter(([, e]) => e));
		Object.keys(e).length ? c.mutate(e) : o("Nothing entered");
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, Q.jsxs)(N, { children: [e.why, e.where ? /* @__PURE__ */ (0, Q.jsxs)(Q.Fragment, { children: [" ", /* @__PURE__ */ (0, Q.jsx)(A, {
				href: e.where,
				children: "Get credentials"
			})] }) : null] }),
			e.howto ? /* @__PURE__ */ (0, Q.jsx)(N, { children: e.howto }) : null,
			/* @__PURE__ */ (0, Q.jsx)("div", {
				className: "flex w-full flex-col gap-3",
				children: (e.needs || []).map((n) => /* @__PURE__ */ (0, Q.jsx)(P, {
					type: "password",
					label: n,
					placeholder: Fo(e, n),
					autoComplete: "off",
					spellCheck: "false",
					isDisabled: t,
					value: r[n] || "",
					onChange: (e) => i({
						...r,
						[n]: e
					}),
					className: "w-full min-w-0"
				}, n))
			}),
			/* @__PURE__ */ (0, Q.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [s ? /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "danger",
					disabled: t,
					...K(c.isPending),
					onClick: () => void Qt({
						title: "Clear source credentials",
						body: No,
						confirmLabel: "Clear source credentials",
						danger: !0,
						onConfirm: () => c.mutateAsync({})
					}),
					children: "Clear"
				}) : null, /* @__PURE__ */ (0, Q.jsx)(E, {
					variant: "primary",
					disabled: t,
					...K(c.isPending),
					onClick: l,
					children: "Save settings"
				})]
			}),
			a ? /* @__PURE__ */ (0, Q.jsx)(k, { children: a }) : null,
			(e.shared_fields || []).length ? /* @__PURE__ */ (0, Q.jsx)(N, { children: `${e.shared_fields.join(", ")} use sign-in info from the shared copy and aren't saved separately on this computer. Clearing deletes the sign-in info both here and in the shared copy.` }) : null,
			e.path ? /* @__PURE__ */ (0, Q.jsx)(O, {
				summary: "Credential file",
				children: /* @__PURE__ */ (0, Q.jsx)(Et, {
					path: e.path,
					className: "font-mono text-caption-1-regular text-text-tertiary",
					onRevealed: n
				})
			}) : null
		]
	});
}
function Ro({ row: e, readOnly: t, toast: n }) {
	let r = /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 flex-wrap items-center gap-2",
		children: [
			/* @__PURE__ */ (0, Q.jsx)("span", {
				className: "inline-flex size-3.5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ (0, Q.jsx)(Yn, { provider: e.provider })
			}),
			/* @__PURE__ */ (0, Q.jsx)("b", {
				className: "min-w-0 text-body-medium wrap-anywhere text-text-primary",
				children: e.provider_label
			}),
			/* @__PURE__ */ (0, Q.jsx)(Io, { row: e }),
			e.missing.map((e) => /* @__PURE__ */ (0, Q.jsx)(et, {
				variant: "caption",
				color: "rose",
				children: `Missing ${e}`
			}, e))
		]
	});
	return e.requirement === "none" || e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-wrap items-center gap-3 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [r, e.requirement === "blocked" ? /* @__PURE__ */ (0, Q.jsx)(N, { children: e.why }) : null]
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: "flex flex-col gap-2 border-b border-separator-border px-6 py-5 last:border-b-0 max-sm:px-4",
		children: [
			r,
			/* @__PURE__ */ (0, Q.jsx)(O, {
				summary: $t(e) ? "Change credentials" : "Enter credentials",
				defaultOpen: e.requirement === "required" && !$t(e),
				children: /* @__PURE__ */ (0, Q.jsx)(Lo, {
					row: e,
					readOnly: t,
					toast: n
				})
			}),
			e.world_readable ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "Credential file permissions too broad",
				children: Po
			}) : null
		]
	});
}
function zo({ data: e, readOnly: t, toast: n, embedded: r = !1 }) {
	let i = e.providers || [], a = i.filter((e) => e.requirement === "required" && !$t(e));
	if ((0, Z.useEffect)(() => {
		bn("credentials", { done: i.filter($t).map((e) => e.provider) });
	}, [e]), !i.length) return /* @__PURE__ */ (0, Q.jsx)(rt, {
		size: "compact",
		icon: Zt,
		title: "No configurable sources",
		children: "Connected sites and their credential status show up here."
	});
	let o = a.length ? /* @__PURE__ */ (0, Q.jsx)("span", {
		className: "text-body-2-regular text-text-error-primary",
		children: `${a.length} to configure`
	}) : null, s = /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: [
		{
			title: "Credentials available",
			rows: i.filter((e) => e.requirement !== "none" && e.requirement !== "blocked")
		},
		{
			title: "No credentials needed",
			rows: i.filter((e) => e.requirement === "none")
		},
		{
			title: "Not supported yet",
			rows: i.filter((e) => e.requirement === "blocked")
		}
	].filter((e) => e.rows.length).map((e) => /* @__PURE__ */ (0, Q.jsxs)("section", {
		"aria-label": e.title,
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, Q.jsx)("h4", {
			className: "text-body-medium text-text-secondary",
			children: e.title
		}), /* @__PURE__ */ (0, Q.jsx)("div", {
			className: Jt({
				variant: "outlined",
				padding: "none",
				className: "flex flex-col overflow-hidden"
			}),
			children: e.rows.map((e) => /* @__PURE__ */ (0, Q.jsx)(Ro, {
				row: e,
				readOnly: t,
				toast: n
			}, e.provider))
		})]
	}, e.title)) });
	return r ? /* @__PURE__ */ (0, Q.jsx)(L, {
		title: "Source credentials",
		aside: o || void 0,
		children: /* @__PURE__ */ (0, Q.jsx)(V, { children: /* @__PURE__ */ (0, Q.jsx)("div", {
			className: "flex flex-col gap-4",
			children: s
		}) })
	}) : /* @__PURE__ */ (0, Q.jsxs)("div", {
		className: Jt({
			padding: "none",
			className: "flex flex-col gap-4 px-6 py-5 max-sm:px-4"
		}),
		children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, Q.jsx)("h3", {
				className: "mr-auto text-title-2-medium text-text-primary",
				children: "Source credentials"
			}), o]
		}), s]
	});
}
// src/react/settings/entry-links-settings.tsx
function Bo({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.sites), i = Y(), a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		host: t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Catalog sites",
		onSubmit: (e) => {
			e.preventDefault();
			let a = { sites: Object.fromEntries(n.map((e) => [e.key, { host: e.host }])) };
			i.run("save", (e) => G("/api/configuration/entry-links", a, "POST", e), (e) => {
				r(e.sites), t("Settings saved");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [
			/* @__PURE__ */ (0, Q.jsx)(N, { children: tt }),
			n.map((e) => /* @__PURE__ */ (0, Q.jsx)(P, {
				id: `entry-link-${e.key}`,
				label: /* @__PURE__ */ (0, Q.jsx)(Lt, {
					site: e.key,
					label: `${e.label} URL`
				}),
				autoComplete: "off",
				maxLength: 100,
				value: e.host,
				placeholder: e.default_host,
				onChange: (t) => a(e.key, t),
				validationBehavior: "aria",
				hint: nt
			}, e.key)),
			i.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: i.error }) : null
		] }), /* @__PURE__ */ (0, Q.jsx)(M, { children: /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(i.busy === "save"),
			children: "Save settings"
		}) })]
	});
}
// src/react/settings/indexer-settings.tsx
var Vo = "/api/configuration/indexers";
function Ho({ receipt: e }) {
	let t = X({
		queryKey: ["indexers"],
		queryFn: ({ signal: e }) => W(Vo, e),
		refetchOnMount: "always"
	});
	return t.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: q(t.error) }) : t.isFetching ? /* @__PURE__ */ (0, Q.jsx)(Nt, {
		label: "Loading resource search settings",
		html: un
	}) : t.data ? /* @__PURE__ */ (0, Q.jsx)(Go, {
		initial: t.data,
		receipt: e
	}) : null;
}
function Uo(e) {
	try {
		return new globalThis.URL(e).host;
	} catch {
		return e;
	}
}
function Wo({ row: e, index: t }) {
	let n = [
		e.url ? Uo(e.url) : "No URL",
		e.enabled ? "Enabled" : "Disabled",
		e.api_key_set && !e.clear_api_key ? "API key saved" : e.api_key ? "API key not saved yet" : "No API key"
	];
	return /* @__PURE__ */ (0, Q.jsxs)("span", {
		className: "flex min-w-0 items-baseline gap-3",
		children: [/* @__PURE__ */ (0, Q.jsx)("span", {
			className: "shrink-0 text-text-primary",
			children: e.name || `Indexer ${t + 1}`
		}), /* @__PURE__ */ (0, Q.jsx)("span", {
			className: "truncate text-body-2-regular text-text-secondary",
			children: n.join(" · ")
		})]
	});
}
function Go({ initial: e, receipt: t }) {
	let [n, r] = (0, Z.useState)(e.indexers), i = Y();
	(0, Z.useEffect)(() => {
		bn("indexers", { open: e.indexers.map((e) => !e.url) });
	}, [e]);
	let a = (e, t) => r((n) => n.map((n) => n.key === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ (0, Q.jsxs)(L, {
		title: "Resource search",
		onSubmit: (e) => {
			e.preventDefault(), i.run("save", (e) => G(Vo, { indexers: n }, "POST", e), (e) => {
				r(e.indexers), t("Indexers saved");
			});
		},
		children: [/* @__PURE__ */ (0, Q.jsxs)(V, { children: [/* @__PURE__ */ (0, Q.jsxs)("div", {
			className: "flex min-w-0 flex-col gap-4",
			children: [/* @__PURE__ */ (0, Q.jsx)(O, {
				summary: "Indexer connection help",
				children: /* @__PURE__ */ (0, Q.jsxs)(N, { children: [
					"Enter the Torznab URL and API key provided by Prowlarr or Jackett. ",
					" ",
					/* @__PURE__ */ (0, Q.jsx)(A, {
						href: "https://github.com/peach-mitao/peach/blob/master/docs/RESOURCE_SEARCH.md",
						children: "Detailed setup guide"
					})
				] })
			}), n.map((e, t) => /* @__PURE__ */ (0, Q.jsx)("div", {
				className: "min-w-0 border-t border-separator-border pt-2",
				children: /* @__PURE__ */ (0, Q.jsx)(O, {
					defaultOpen: !e.url,
					summary: /* @__PURE__ */ (0, Q.jsx)(Wo, {
						row: e,
						index: t
					}),
					children: /* @__PURE__ */ (0, Q.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, Q.jsx)(P, {
								label: "Name",
								"aria-label": `Indexer ${t + 1} name`,
								value: e.name,
								maxLength: 80,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { name: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(P, {
								label: "Torznab URL",
								"aria-label": `Indexer ${t + 1} Torznab URL`,
								value: e.url,
								type: "url",
								autoComplete: "off",
								placeholder: "API URL provided by the indexer",
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { url: t })
							}),
							/* @__PURE__ */ (0, Q.jsx)(P, {
								label: "API key",
								"aria-label": `Indexer ${t + 1} API key`,
								type: "password",
								autoComplete: "new-password",
								value: e.api_key || "",
								placeholder: e.api_key_set ? "Saved; leave empty to keep" : void 0,
								isDisabled: !!i.busy,
								onChange: (t) => a(e.key, { api_key: t })
							}),
							/* @__PURE__ */ (0, Q.jsxs)("div", {
								className: "flex flex-wrap items-center gap-x-6 gap-y-2",
								children: [
									/* @__PURE__ */ (0, Q.jsx)(D, {
										isSelected: e.enabled,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { enabled: t }),
										children: "Enabled"
									}),
									e.api_key_set ? /* @__PURE__ */ (0, Q.jsx)(D, {
										isSelected: !!e.clear_api_key,
										isDisabled: !!i.busy,
										onChange: (t) => a(e.key, { clear_api_key: t }),
										children: "Clear saved API key"
									}) : null,
									/* @__PURE__ */ (0, Q.jsx)(E, {
										variant: "danger",
										type: "button",
										size: "small",
										disabled: !!i.busy,
										"aria-label": `Remove indexer ${t + 1}`,
										onClick: () => r(n.filter((t) => t.key !== e.key)),
										children: "Remove"
									})
								]
							})
						]
					})
				})
			}, e.key))]
		}), i.error ? /* @__PURE__ */ (0, Q.jsx)(k, { children: i.error }) : null] }), /* @__PURE__ */ (0, Q.jsxs)(M, { children: [/* @__PURE__ */ (0, Q.jsx)(E, {
			variant: "secondary",
			type: "button",
			disabled: !!i.busy || n.length >= e.max_indexers,
			onClick: () => r([...n, {
				key: yn(),
				name: "",
				url: "",
				enabled: !0,
				api_key_set: !1
			}]),
			children: "Add indexer"
		}), /* @__PURE__ */ (0, Q.jsx)(E, {
			type: "submit",
			...K(i.busy === "save"),
			children: "Save settings"
		})] })]
	});
}
// src/react/settings/source-settings.tsx
function Ko({ data: e, receipt: t, panel: n, issues: r }) {
	let i = X({
		queryKey: at,
		queryFn: ({ signal: e }) => rn(e),
		enabled: n?.active !== !1,
		refetchOnMount: "always"
	});
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		...Zn(n),
		children: [
			r,
			/* @__PURE__ */ (0, Q.jsx)("div", { children: /* @__PURE__ */ (0, Q.jsx)(Je, {
				href: "/sources",
				variant: "secondary",
				children: "Scraping sources and sign-in status"
			}) }),
			i.data ? /* @__PURE__ */ (0, Q.jsx)(zo, {
				data: i.data,
				readOnly: !!e.ledger_read_only,
				toast: t,
				embedded: !0
			}) : i.error ? /* @__PURE__ */ (0, Q.jsx)(F, {
				tone: "error",
				title: "Source credentials not obtained",
				children: q(i.error)
			}) : n?.active === !1 ? null : /* @__PURE__ */ (0, Q.jsx)(Nt, {
				label: "Loading source credentials",
				html: en
			}),
			/* @__PURE__ */ (0, Q.jsx)(ro, { receipt: t }),
			/* @__PURE__ */ (0, Q.jsx)(Ho, { receipt: t }),
			e.entry_links ? /* @__PURE__ */ (0, Q.jsx)(Bo, {
				initial: e.entry_links,
				receipt: t
			}) : null
		]
	});
}
// src/react/settings/configuration-shape.ts
function qo(e) {
	let t = e.downloads;
	if (!t) return null;
	let n = t.media_sources ?? [];
	return {
		cloud: n.some((e) => Ye.includes(e)),
		has115: n.includes("115"),
		pikpak: n.includes("pikpak"),
		pikpakRoots: t.pikpak_roots.length > 0,
		pikpakLoggedIn: t.pikpak.logged_in,
		browserLogin: t.pikpak_browser.available
	};
}
function Jo(e) {
	let t = e.tunnel;
	return {
		port: !!(e.editable && e.port_editable !== !1),
		addresses: e.network ? 1 + Number(!!(e.network.lan_url || e.network.ip_url)) + Number(!!(e.network.lan_url && e.network.ip_url)) : 0,
		networkEditable: !!e.network?.editable,
		lan: e.network?.host === "0.0.0.0",
		proxyAddress: e.peach_proxy?.mode === "proxy" || !!e.peach_proxy?.needs_selection,
		access: e.access?.mode ?? "",
		tunnelNamed: !!t?.named_available,
		tunnelNamedMode: !!(t?.named_available && t.mode === "named"),
		tunnelNote: !!(t && (!t.available || t.state === "starting" || t.state === "running" && t.url))
	};
}
function Yo(e) {
	let t = e.updates, n = e.update_job?.state ?? "idle", r = !t || t.state === "unchecked" && !t.checked_at && n === "idle", i = +!!t?.package_kind + (r ? 0 : +!!t?.checked_at + (t?.state === "unchecked" ? 0 : 1) + (n === "idle" ? 0 : 1)), a = e.automatic_updates, o = e.storage;
	return {
		releaseFacts: t?.package_kind ? 5 : 4,
		releaseNotes: i,
		autoUpdateHelp: !(!a || a.available && !a.download_available),
		startupNote: !!e.startup?.message,
		desktopNote: !!e.startup?.desktop_message,
		storageRows: o?.usage?.categories.length ?? 0,
		storageNotes: o && !o.relocation.available ? 1 : 0,
		reporting: !!e.remote_reporting,
		reportingIdle: !(!e.remote_reporting || e.remote_reporting.available),
		sharing: !!e.library_sharing,
		sharingNotice: !!e.library_sharing?.notice,
		sharingIdle: !(!e.library_sharing || e.library_sharing.available),
		facts: e.facts.map((e) => e.term),
		uninstall: !!e.uninstall,
		uninstallHelp: !!e.uninstall?.available
	};
}
// src/react/settings/configuration-page.tsx
function Xo({ receipt: e, reopenTutorial: t, section: n = "", diagnostics: r }) {
	let i = X({
		queryKey: Ze,
		queryFn: ({ signal: e }) => nn(e)
	}), a = i.data;
	return a ? /* @__PURE__ */ (0, Q.jsx)($o, {
		data: a,
		receipt: e,
		reopenTutorial: t,
		section: n,
		diagnostics: r,
		refreshing: i.isFetching,
		reload: () => {
			i.refetch({ cancelRefetch: !1 });
		}
	}) : /* @__PURE__ */ (0, Q.jsx)("div", {
		className: "ui-configpage",
		children: /* @__PURE__ */ (0, Q.jsx)(F, {
			tone: "error",
			title: "Couldn't load settings",
			children: i.error ? q(i.error) : "Settings not obtained; refresh the page and try again."
		})
	});
}
function Zo({ data: e, sections: t, reload: n, refreshing: r }) {
	return /* @__PURE__ */ (0, Q.jsx)(Q.Fragment, { children: t.map((t) => {
		let i = e.section_errors?.[t];
		return i ? /* @__PURE__ */ (0, Q.jsx)(F, {
			tone: "error",
			title: i.title,
			action: /* @__PURE__ */ (0, Q.jsx)(E, {
				variant: "secondary",
				size: "small",
				onClick: n,
				...K(r),
				children: "Reload"
			}),
			children: i.message
		}, t) : null;
	}) });
}
var Qo = 0;
function $o({ data: e, receipt: t, reopenTutorial: n, section: r, diagnostics: i, reload: a, refreshing: o }) {
	let [s] = (0, Z.useState)(() => `board-tabs-${++Qo}`), [c, l] = (0, Z.useState)(r), u = (0, Z.useRef)(null), d = (0, Z.useRef)(c);
	(0, Z.useEffect)(() => {
		l(r);
	}, [r]), (0, Z.useEffect)(() => {
		let t = qo(e);
		t && bn("downloads", t), bn("network", Jo(e)), bn("maintenance", Yo(e));
	}, [e]), (0, Z.useLayoutEffect)(() => {
		if (d.current === c) return;
		d.current = c;
		let e = u.current?.querySelector("[role=\"tablist\"]"), t = u.current?.querySelector(".ui-board-group-active");
		if (!e || !t) return;
		let n = parseFloat(getComputedStyle(e).top);
		if (!Number.isFinite(n) || e.getBoundingClientRect().top > n + 1) return;
		let r = matchMedia("(max-width:900px)").matches ? e.getBoundingClientRect().bottom + 8 : n;
		window.scrollTo(0, Math.max(0, window.scrollY + t.getBoundingClientRect().top - r));
	}, [c]);
	let f = (e) => {
		l(e), En(Tn(e), {
			replace: !0,
			state: hn.navigation.location.state
		});
	}, [p, m] = (0, Z.useState)(() => matchMedia("(max-width:900px)").matches);
	(0, Z.useEffect)(() => {
		let e = matchMedia("(max-width:900px)"), t = () => m(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let h = (0, Z.useRef)([]), g = {
		data: e,
		receipt: t
	}, _ = (t) => /* @__PURE__ */ (0, Q.jsx)(Zo, {
		data: e,
		sections: t,
		reload: a,
		refreshing: o
	}), v = [
		"peach_proxy",
		"access",
		"tunnel",
		"push_discovery",
		...e.editable && e.port_editable !== !1 ? ["media_sources"] : []
	], y = !!(e.peach_proxy || e.access || e.tunnel || e.editable && e.port_editable !== !1 || v.some((t) => e.section_errors?.[t])), b = e.downloads, x = [
		{
			title: "Media libraries and import",
			body: (n) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				...Zn(n),
				children: [
					_([
						"media_sources",
						"library_count",
						"mount_dependencies"
					]),
					!e.section_errors?.media_sources && !e.section_errors?.library_count ? /* @__PURE__ */ (0, Q.jsx)(Za, { ...g }) : null,
					/* @__PURE__ */ (0, Q.jsx)(ho, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(so, { receipt: t })
				]
			})
		},
		{
			title: "Sources and subscriptions",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(Ko, {
				...g,
				panel: e,
				issues: _(["entry_links"])
			})
		},
		...b || e.section_errors?.downloads ? [{
			title: "Download channels",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(fr, {
				initial: b,
				receipt: t,
				panel: e,
				issues: _(["downloads"])
			})
		}] : [],
		...y ? [{
			title: "Network and access",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)(jo, {
				...g,
				panel: e,
				issues: _(v)
			})
		}] : [],
		{
			title: "App and maintenance",
			body: (e) => /* @__PURE__ */ (0, Q.jsxs)("div", {
				...Zn(e),
				children: [
					_([
						"startup",
						"uninstall",
						"storage",
						"remote_reporting",
						"library_sharing",
						"updates",
						"update_job",
						"automatic_updates",
						"facts"
					]),
					/* @__PURE__ */ (0, Q.jsx)(_a, { ...g }),
					/* @__PURE__ */ (0, Q.jsx)(co, { receipt: t }),
					/* @__PURE__ */ (0, Q.jsx)(aa, {
						...g,
						reopenTutorial: n
					})
				]
			})
		},
		{
			title: "System diagnostics",
			body: (e) => /* @__PURE__ */ (0, Q.jsx)("div", {
				...Zn(e),
				children: e.active ? i : null
			})
		}
	], S = Math.max(0, x.findIndex((e) => e.title === c)), C = (e, t) => {
		let n = x.length - 1, r;
		if (e.key === "ArrowRight" || e.key === "ArrowDown") r = t === n ? 0 : t + 1;
		else if (e.key === "ArrowLeft" || e.key === "ArrowUp") r = t === 0 ? n : t - 1;
		else if (e.key === "Home") r = 0;
		else if (e.key === "End") r = n;
		else return;
		e.preventDefault(), f(x[r].title), h.current[r]?.focus();
	};
	return /* @__PURE__ */ (0, Q.jsxs)("div", {
		ref: u,
		className: "ui-configpage",
		children: [/* @__PURE__ */ (0, Q.jsx)(Dt, {
			className: "ui-board-local-nav",
			role: "tablist",
			"aria-label": "Settings sections",
			"data-section-nav": "",
			"data-section-items": "",
			"data-pill-nav": "",
			"aria-orientation": p ? "horizontal" : "vertical",
			children: x.map(({ title: e }, t) => /* @__PURE__ */ (0, Q.jsx)("button", {
				ref: (e) => {
					h.current[t] = e;
				},
				type: "button",
				role: "tab",
				id: `${s}-tab-${t}`,
				"aria-controls": `${s}-panel-${t}-0`,
				"aria-selected": t === S,
				"data-pill-selected": t === S ? "" : void 0,
				"data-pill-variant": "gray",
				tabIndex: t === S ? 0 : -1,
				onClick: () => f(e),
				onKeyDown: (e) => C(e, t),
				children: e
			}, e))
		}), x.map(({ title: e, body: t }, n) => /* @__PURE__ */ (0, Q.jsxs)(Z.Fragment, { children: [/* @__PURE__ */ (0, Q.jsx)("h2", {
			className: "ui-configgroup",
			children: e
		}), t({
			index: n,
			id: `${s}-panel-${n}-0`,
			labelledBy: `${s}-tab-${n}`,
			active: n === S
		})] }, e))]
	});
}
export { Xo as ConfigurationPage };

//# debugId=bcd1a993-c6cf-4acb-a358-8b067b6897a0