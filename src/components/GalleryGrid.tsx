import { galleryImages } from '../data/gallery';

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
      {galleryImages.map((image, i) => {
        const spans = i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : '';
        return (
          <figure
            key={image.id}
            className={`group relative overflow-hidden rounded-3xl ${spans}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                spans ? 'h-full min-h-64' : 'aspect-square'
              }`}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-green-dark/80 via-green-dark/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <figcaption className="text-sm font-medium text-white">
                {image.alt} · {image.menuCategory}
              </figcaption>
            </div>
          </figure>
        );
      })}
    </div>
  );
}
