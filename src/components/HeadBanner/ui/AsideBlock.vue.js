import { bannerConfig } from '@/assets/mocks/banner.config';
import pumpkinMobile from '@/assets/images/pumpkin-mobile.png';
import pumpkinTablet from '@/assets/images/pumpkin-tablet.png';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside-block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside-block__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("aside-block__title-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("aside-block__title-container-subtitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("aside-block__title-container-title") }, });
    (__VLS_ctx.bannerConfig.asideBlock.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("aside-block__description") }, });
    (__VLS_ctx.bannerConfig.asideBlock.description);
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("aside-block__link") }, href: ((__VLS_ctx.bannerConfig.asideBlock.url)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({ media: ("(max-width: 768px)"), srcset: ((__VLS_ctx.pumpkinMobile)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({ media: ("(min-width: 769px)"), srcset: ((__VLS_ctx.pumpkinTablet)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.pumpkinTablet)), alt: ("banner-image"), ...{ class: ("aside-block__image") }, });
    __VLS_styleScopedClasses['aside-block'];
    __VLS_styleScopedClasses['aside-block__content'];
    __VLS_styleScopedClasses['aside-block__title-container'];
    __VLS_styleScopedClasses['aside-block__title-container-subtitle'];
    __VLS_styleScopedClasses['aside-block__title-container-title'];
    __VLS_styleScopedClasses['aside-block__description'];
    __VLS_styleScopedClasses['aside-block__link'];
    __VLS_styleScopedClasses['aside-block__image'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            bannerConfig: bannerConfig,
            pumpkinMobile: pumpkinMobile,
            pumpkinTablet: pumpkinTablet,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
