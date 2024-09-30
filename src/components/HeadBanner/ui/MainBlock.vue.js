import { bannerConfig } from '@/assets/mocks/banner.config';
import { computed } from 'vue';
import patisonsMobile from '@/assets/images/patisons-mobile.png';
import patisonsTablet from '@/assets/images/patisons-tablet.png';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const backgroundGradient = computed(() => bannerConfig.mainBlock.backgroundGradient);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-block") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("main-block__overlay") }, ...{ style: (({ background: __VLS_ctx.backgroundGradient })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({ media: ("(max-width: 768px)"), srcset: ((__VLS_ctx.patisonsMobile)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({ media: ("(min-width: 769px)"), srcset: ((__VLS_ctx.patisonsTablet)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.patisonsTablet)), alt: ("banner-image"), ...{ class: ("main-block__image") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-block__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-block__info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("main-block__info-subtitle") }, });
    (__VLS_ctx.bannerConfig.mainBlock.subtitle);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("main-block__info-title") }, });
    (__VLS_ctx.bannerConfig.mainBlock.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.bannerConfig.mainBlock.url)), ...{ class: ("main-block__link") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ width: ("62"), height: ("30"), viewBox: ("0 0 62 30"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ d: ("M61.4142 16.4142C62.1953 15.6332 62.1953 14.3668 61.4142 13.5858L48.6863 0.857864C47.9052 0.0768156 46.6389 0.0768156 45.8579 0.857864C45.0768 1.63891 45.0768 2.90524 45.8579 3.68629L57.1716 15L45.8579 26.3137C45.0768 27.0948 45.0768 28.3611 45.8579 29.1421C46.6389 29.9232 47.9052 29.9232 48.6863 29.1421L61.4142 16.4142ZM0 17H60V13H0V17Z"), fill: ("white"), });
    __VLS_styleScopedClasses['main-block'];
    __VLS_styleScopedClasses['main-block__overlay'];
    __VLS_styleScopedClasses['main-block__image'];
    __VLS_styleScopedClasses['main-block__content'];
    __VLS_styleScopedClasses['main-block__info'];
    __VLS_styleScopedClasses['main-block__info-subtitle'];
    __VLS_styleScopedClasses['main-block__info-title'];
    __VLS_styleScopedClasses['main-block__link'];
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
            patisonsMobile: patisonsMobile,
            patisonsTablet: patisonsTablet,
            backgroundGradient: backgroundGradient,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
