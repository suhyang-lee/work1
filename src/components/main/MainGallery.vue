<template>
  <section class="gallery">
    <h3>gallery</h3>
    <ul class="gallery_list">
      <div class="grid">
        <MainGalleryItem
          v-for="image in galleryList.slice(0, 4)"
          :key="image.id"
          v-bind:url="image.url"
        />
      </div>
      <div class="grid">
        <MainGalleryItem
          v-for="image in galleryList.slice(4, 9)"
          :key="image.id"
          v-bind:url="image.url"
        />
      </div>
      <div class="grid">
        <MainGalleryItem
          v-for="image in galleryList.slice(9, 14)"
          :key="image.id"
          v-bind:url="image.url"
        />
      </div>
    </ul>
  </section>
</template>

<script>
import Data from '@/assets/mock/data';
import MainGalleryItem from '@/components/main/MainGalleryItem';

export default {
  name: 'MainGallery',
  components: { MainGalleryItem },
  data: function() {
    return {
      galleryList: Data.gallery,
    };
  },
};
</script>
