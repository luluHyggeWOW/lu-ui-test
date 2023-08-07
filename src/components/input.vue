<template>
  <div class="lu-input  ">
    <input :type="type" :placeholder="placeholder" :disabled="disabled" :name="name" class="lu-input_inner"
      :style="{width:width}" :modelValue="modelValue" @input="handleInput"
      :class="[{'is-disabled':disabled==''||disabled==true?true:false}]">
    <span class="lu-input_suffix">
      <i class="on-input_icon lu-icon-cancel" v-if="clearable && value" @click="clear"></i>
      <i class="on-input_icon lu-icon-visible" v-if="showPassword && type=='password'" @click="handlePassword"></i>
    </span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps, defineEmits } from "vue";
let visible = ref<boolean>(false);
const props = defineProps<{
  placeholder?: {
    type: String;
    default: "";
  };
  type?: {
    type: String;
    default: "text";
  };
  name?: {
    type: String;
    default: "";
  };
  disabled?: {
    type: Boolean;
    default: false;
  };
  modelValue?: {
    type: String;
    default: "";
  };
  width?: {
    type: String;
    default: "100%";
  };
  showPassword?: {
    type: Boolean;
    default: false;
  };
  clearable?: {
    type: Boolean;
    default: false;
  };
}>();
// const prop = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const handleInput = (e: any) => {
  emits("update:modelValue", e.target.value);
};
</script>
<script lang="ts">
export default {
  name: "LuInput",
};
</script>

<style lang="scss" scoped>
.lu-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .lu-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #9999fb;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.lu-input_suffix {
  .lu-input_inner {
    padding-right: 30px;
  }
  .lu-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>

function emits(arg0: string, value: any) {
  throw new Error('Function not implemented.');
}

function emits(arg0: string): any {
  throw new Error('Function not implemented.');
}
