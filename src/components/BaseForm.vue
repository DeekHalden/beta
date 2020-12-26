<template lang="pug">
include ./../pug/bem.pug
+b.FORM(@submit.prevent='submit')
  slot(name='loader')
    +b.spinner-border--variant_center.text-primary(role="status" v-if='loading').position-absolute
      .sr-only Loading...
  slot(name='body', v-bind='{data, loading}')
  slot(name='action')
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
@Component
export default class BaseForm extends Vue {
  @Prop()
  public action!: Function;

  private loading = false;

  public data: Record<string, any> = {
    bearer: ''
  };

  @Emit()
  public async submit(): Promise<any> {
    this.loading = true;
    try {
      const res = await this.action(this.data.bearer);
      console.log(res);
      this.$emit('then', res);
    } catch (error) {
      this.$emit('catch', error);
      console.error(error)
      throw error
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="sass">
  :root 
    --spinner-offset: -30px
  .spinner-border
    &--
      &variant_
        &center
          top: 50%
          left: 50%
          margin-top: var(--spinner-offset)
          margin-left: var(--spinner-offset)
</style>