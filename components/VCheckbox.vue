<template>
  <label :for="'checkbox' + id" class="checkbox" :class="{small: isSmall, checked: state}">
    <input type="checkbox" name="checkbox" :id="'checkbox' + id" @change="changeState">
    <div>{{ title }}</div>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isSmall?: boolean,
  title: string,
  state: boolean,
  id: number | string
}>();

const emits = defineEmits<{
  change: [id: number | string]
}>();

const changeState = () => {
  emits('change', props.id);
}
</script>

<style lang="scss" scoped>
.checkbox {
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    display: none;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    &::before {
      content: '';
      display: block;
      width: 48px;
      height: 24px;
      margin-right: 8px;
      border-radius: 100px;
      background-color: $lightGrey;
    }

    &::after {
      display: block;
      content: '';
      position: absolute;
      left: 1px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      transition: left .3s ease;
      background-color: $white;
    }
  }

  &.small {
    div {
      &::before {
        width: 32px;
        height: 16px;
      }

      &::after {
        width: 14px;
        height: 14px;
        top: 3px;
      }
    }

    &.checked {
      div::after {
        left: 17px;
      }
    }
  }

  &.checked {
    div {
      &::before {
        background-color: $blue;
      }

      &::after {
        left: 24px;
      }
    }
  }
}
</style>