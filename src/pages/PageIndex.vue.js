import ProductList from '@/components/ProductsList.vue';
import HeadBanner from '@/components/HeadBanner/HeadBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
import { productListConfig } from '@/assets/mocks/productList.config';
import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const productListData = computed(() => productListConfig.products);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    // @ts-ignore
    [HeadBanner,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(HeadBanner, new HeadBanner({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    [ProductList, ProductList,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(ProductList, new ProductList({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.productListData))) {
        // @ts-ignore
        [ProductCard,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(ProductCard, new ProductCard({ key: ((product.id)), title: ((product.title)), price: ((product.price)), imgSrc: ((product.imgSrc)), }));
        const __VLS_11 = __VLS_10({ key: ((product.id)), title: ((product.title)), price: ((product.price)), imgSrc: ((product.imgSrc)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    }
    __VLS_nonNullable(__VLS_9.slots).default;
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(ProductList, __VLS_6);
    __VLS_styleScopedClasses['container'];
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
            ProductList: ProductList,
            HeadBanner: HeadBanner,
            ProductCard: ProductCard,
            productListData: productListData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
