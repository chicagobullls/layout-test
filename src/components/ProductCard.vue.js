import { defineProps } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const __VLS_props = defineProps();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({ ...{ class: ("product-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a)({ ...{ class: ("product-card__link") }, href: ("#"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("product-card__image") }, src: ((`/src/assets/images/${__VLS_ctx.imgSrc}`)), alt: ((__VLS_ctx.title)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-card__info") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("product-card__title") }, });
    (__VLS_ctx.title);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-card__price") }, });
    (__VLS_ctx.price);
    __VLS_styleScopedClasses['product-card'];
    __VLS_styleScopedClasses['product-card__content'];
    __VLS_styleScopedClasses['product-card__link'];
    __VLS_styleScopedClasses['product-card__image'];
    __VLS_styleScopedClasses['product-card__info'];
    __VLS_styleScopedClasses['product-card__title'];
    __VLS_styleScopedClasses['product-card__price'];
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
        return {};
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
;
