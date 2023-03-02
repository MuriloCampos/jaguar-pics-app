export interface Animal {
  src: string;
  latitude?: number;
  longitude?: number;
  date: Date;
}

export const animals: Animal[] = [
  {
    src: "https://images.unsplash.com/photo-1674779146587-c7190e552f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
    latitude: -15.559564700000001,
    longitude: -56.075585100000005,
    date: new Date(),
  },
  {
    src: "https://images.unsplash.com/photo-1674797137244-43759d2870bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    latitude: -15.659564700000001,
    longitude: -56.075585100000005,
    date: new Date(),
  },
  {
    src: "https://images.unsplash.com/photo-1674823502047-31afef7e495e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    latitude: -15.759564700000001,
    longitude: -56.075585100000005,
    date: new Date(),
  },
  {
    src: "https://images.unsplash.com/photo-1674752271238-507b7de054b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    latitude: -15.859564700000001,
    longitude: -56.075585100000005,
    date: new Date(),
  },
  {
    src: "https://images.unsplash.com/photo-1674572854274-2f702a7eaf23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    latitude: -15.959564700000001,
    longitude: -56.075585100000005,
    date: new Date(),
  },
];
