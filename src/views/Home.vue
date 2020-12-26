<template lang='pug'>
include ./../pug/bem.pug
+b.SECTION.section--variant_gradient.--height_inherit
  +b.container--height_inherit.h-100
    +b.row--height_inherit.justify-content-center.align-items-center.h-100
      +b.col.col-12.col-sm-6
        +b.shadow-lg.p-3.pb-0.bg-white.rounded
          template(v-if='token')
            router-link.text-center(to='page') enter beta site
          template(v-else)
            H1.h4 Site is under development!
            H2.h6 We are working hard to launch it ASAP!
            base-form(:action='action($api.fetchToken)', @then='setToken')
              template(v-slot:body='$props')
                +b.form-group
                  +b.INPUT.form-control(
                    type='password',
                    placeholder='enter code',
                    v-model='$props.data.bearer'
                    :class='{"is-invalid": $props.errors}'
                  )
                  +b.form-text.text-muted Enter valid code to obtain beta-access.
                button.btn.btn-primary.btn-block(
                  :disabled='$props.loading',
                  type='submit'
                ) 
                  span.spinner-grow.spinner-grow-sm(
                    role='status',
                    aria-hidden='true',
                    v-if='$props.loading'
                  )
                  | Enter code
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseForm from '@/components/BaseForm.vue';
import { fetchTokenAndCompare } from '@/utils/fetchTokenAndCompare';
@Component({
  components: {
    BaseForm,
  },
})
export default class Home extends Vue {
  @Prop()
  private readonly setToken!: Function;

  @Prop()
  private readonly token!: string | undefined;

  private action(fetcher: Function) {
    return (data: string) => fetchTokenAndCompare(fetcher, data);
  }
}
</script>

<style lang="sass">
.section
  &--
    &variant_
      &gradient
        background: rgb(2,0,36)
        background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(79,121,9,1) 35%, rgba(0,212,255,1) 100%)

.container, .row, .section
  &--
    &height_
      &inherit
        min-height: inherit
</style>
