<script setup lang="ts">
import type { UseForm } from '@appwise/forms'
import type { conditionalArrayForm } from '../models/form.model'

interface Props {
  index: number
  form: UseForm<typeof conditionalArrayForm>['form']
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    Address {{ index }}
    <FormInputField v-bind="props.form.register(`addresses.${index}.street`)" label="street" />
    <FormInputField v-bind="props.form.register(`addresses.${index}.number`)" label="number" />
    <FormInputField v-bind="props.form.register(`addresses.${index}.postcode`)" label="postcode" />
  </div>
</template>
