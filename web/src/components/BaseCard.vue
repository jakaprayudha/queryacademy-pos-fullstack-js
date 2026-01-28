<template>
   <div class="container">
      <div class="card mt-3">
      <div class="card-header">
         <slot name="header" />
      </div>
      <div class="card-body">
         <slot />
      </div>
   </div>
   </div>
</template>