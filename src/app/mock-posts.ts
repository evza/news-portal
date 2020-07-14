import { Post } from './post';

export const POSTS: Post[] = [
    {
      id: 1,
      title: 'First Post',
      key: 'first-post',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et porta erat. Mauris non rhoncus magna, vitae sollicitudin arcu. Sed ut ligula mi. Morbi a sapien orci. Sed nec velit eros. Integer at turpis eget metus volutpat vehicula. Fusce ullamcorper dui porta pharetra commodo.' +

      'Pellentesque bibendum faucibus libero, vel varius ex pretium sed. Donec placerat vel lorem ac facilisis. Quisque aliquet, eros at rhoncus sagittis, odio diam tempus enim, ac sagittis arcu ante ac diam. Nullam et hendrerit enim. Cras id auctor augue. Pellentesque tempus laoreet pulvinar. Mauris vitae erat interdum, egestas enim eu, sagittis elit. Aenean a tempus purus. In congue mattis nisl, non euismod arcu elementum sed. Proin ultrices nulla et sodales cursus.' +
      
      'Nunc mollis ultricies condimentum. Etiam eu ante fringilla, gravida leo et, porta sapien. Pellentesque iaculis interdum leo, sit amet interdum libero scelerisque rhoncus. Vivamus in semper enim. Nam quis convallis nulla. Etiam aliquet, lacus vel mollis venenatis, massa dui porta est, vel luctus augue diam vehicula orci. Proin malesuada et dui in vulputate. Integer at dui ac tellus rhoncus feugiat. Curabitur elementum odio ac leo feugiat molestie. Mauris feugiat turpis nec enim tempor cursus. Etiam aliquet in nulla eu vulputate. Mauris bibendum orci at imperdiet cursus. Suspendisse a rhoncus nisl. Duis sed velit euismod purus rutrum rhoncus. Integer in lacus id nibh malesuada cursus. Integer nulla eros, iaculis quis varius in, mattis id risus.' +
      
      'Duis velit nisi, viverra nec tincidunt sed, semper sit amet orci. Nullam euismod, massa ac faucibus dignissim, mi purus condimentum nunc, vel faucibus odio nibh quis lacus. Vestibulum condimentum elit sed nibh egestas tempor. Nam et varius dolor. Nunc dictum non sem ut mollis. Fusce tristique, nulla non iaculis convallis, erat magna dapibus turpis, at placerat justo felis et tellus. Aliquam erat volutpat. Proin nec ligula vitae leo fringilla fermentum. Aenean vulputate vel odio ut placerat. Nullam eu porttitor purus. Etiam quis nulla tempor, feugiat mi in, porta eros. Suspendisse a ligula eget tortor bibendum aliquet fermentum in nunc. Pellentesque elit arcu, dignissim semper viverra nec, tristique et nibh. Integer et placerat orci. Donec a rhoncus sapien. Donec posuere posuere turpis, a gravida turpis accumsan a.' +
      
      'Etiam venenatis egestas leo, convallis laoreet nisl dictum ut. Mauris malesuada velit quis elit suscipit, vulputate efficitur eros mollis. Fusce pharetra, ipsum a tincidunt fermentum, erat urna placerat felis, sed condimentum lectus nulla id turpis. Etiam ultricies at orci non tincidunt. In ut nisl suscipit, sagittis odio ut, egestas lectus. Vestibulum egestas at urna eu fringilla. Nunc metus dolor, consectetur eu congue vitae, tristique vitae libero. Nam urna massa, facilisis vitae odio eu, ornare congue magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas rutrum urna non ligula lobortis, non dictum ligula tempor. Ut nec diam at urna faucibus gravida. Fusce tristique dignissim facilisis.',
      descrition: 'Pellentesque bibendum faucibus libero, vel varius ex pretium sed. Donec placerat vel lorem ac facilisis. Quisque aliquet, eros at rhoncus sagittis, odio diam tempus enim, ac sagittis arcu ante ac diam. Nullam et hendrerit enim. Cras id auctor augue. Pellentesque tempus laoreet pulvinar. Mauris vitae erat interdum, egestas enim eu, sagittis elit.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnvZs9_lEmzhw5xbrUGyZWalWZPACy3I4GXen9IAz7PQ4iowPo&s'

    },
    {
        id: 2,
        title: 'Second Post',
        key: 'second-post',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et porta erat. Mauris non rhoncus magna, vitae sollicitudin arcu. Sed ut ligula mi. Morbi a sapien orci. Sed nec velit eros. Integer at turpis eget metus volutpat vehicula. Fusce ullamcorper dui porta pharetra commodo.' +

        'Pellentesque bibendum faucibus libero, vel varius ex pretium sed. Donec placerat vel lorem ac facilisis. Quisque aliquet, eros at rhoncus sagittis, odio diam tempus enim, ac sagittis arcu ante ac diam. Nullam et hendrerit enim. Cras id auctor augue. Pellentesque tempus laoreet pulvinar. Mauris vitae erat interdum, egestas enim eu, sagittis elit. Aenean a tempus purus. In congue mattis nisl, non euismod arcu elementum sed. Proin ultrices nulla et sodales cursus.' +
        
        'Nunc mollis ultricies condimentum. Etiam eu ante fringilla, gravida leo et, porta sapien. Pellentesque iaculis interdum leo, sit amet interdum libero scelerisque rhoncus. Vivamus in semper enim. Nam quis convallis nulla. Etiam aliquet, lacus vel mollis venenatis, massa dui porta est, vel luctus augue diam vehicula orci. Proin malesuada et dui in vulputate. Integer at dui ac tellus rhoncus feugiat. Curabitur elementum odio ac leo feugiat molestie. Mauris feugiat turpis nec enim tempor cursus. Etiam aliquet in nulla eu vulputate. Mauris bibendum orci at imperdiet cursus. Suspendisse a rhoncus nisl. Duis sed velit euismod purus rutrum rhoncus. Integer in lacus id nibh malesuada cursus. Integer nulla eros, iaculis quis varius in, mattis id risus.' +
        
        'Duis velit nisi, viverra nec tincidunt sed, semper sit amet orci. Nullam euismod, massa ac faucibus dignissim, mi purus condimentum nunc, vel faucibus odio nibh quis lacus. Vestibulum condimentum elit sed nibh egestas tempor. Nam et varius dolor. Nunc dictum non sem ut mollis. Fusce tristique, nulla non iaculis convallis, erat magna dapibus turpis, at placerat justo felis et tellus. Aliquam erat volutpat. Proin nec ligula vitae leo fringilla fermentum. Aenean vulputate vel odio ut placerat. Nullam eu porttitor purus. Etiam quis nulla tempor, feugiat mi in, porta eros. Suspendisse a ligula eget tortor bibendum aliquet fermentum in nunc. Pellentesque elit arcu, dignissim semper viverra nec, tristique et nibh. Integer et placerat orci. Donec a rhoncus sapien. Donec posuere posuere turpis, a gravida turpis accumsan a.' +
        
        'Etiam venenatis egestas leo, convallis laoreet nisl dictum ut. Mauris malesuada velit quis elit suscipit, vulputate efficitur eros mollis. Fusce pharetra, ipsum a tincidunt fermentum, erat urna placerat felis, sed condimentum lectus nulla id turpis. Etiam ultricies at orci non tincidunt. In ut nisl suscipit, sagittis odio ut, egestas lectus. Vestibulum egestas at urna eu fringilla. Nunc metus dolor, consectetur eu congue vitae, tristique vitae libero. Nam urna massa, facilisis vitae odio eu, ornare congue magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas rutrum urna non ligula lobortis, non dictum ligula tempor. Ut nec diam at urna faucibus gravida. Fusce tristique dignissim facilisis.',
        descrition: 'Pellentesque bibendum faucibus libero, vel varius ex pretium sed. Donec placerat vel lorem ac facilisis. Quisque aliquet, eros at rhoncus sagittis, odio diam tempus enim, ac sagittis arcu ante ac diam. Nullam et hendrerit enim. Cras id auctor augue. Pellentesque tempus laoreet pulvinar. Mauris vitae erat interdum, egestas enim eu, sagittis elit.',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbbU-0RiQbGiWkejrjk9hJ1xdidaSs2lIDn3ZLDwgyVAC6mo&s'

    },
    {
        id: 3,
        title: 'Third Post',
        key: 'third-post',
        date: new Date(),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et porta erat. Mauris non rhoncus magna, vitae sollicitudin arcu. Sed ut ligula mi. Morbi a sapien orci. Sed nec velit eros. Integer at turpis eget metus volutpat vehicula. Fusce ullamcorper dui porta pharetra commodo.' +

        'Pellentesque bibendum faucibus libero, vel varius ex pretium sed. Donec placerat vel lorem ac facilisis. Quisque aliquet, eros at rhoncus sagittis, odio diam tempus enim, ac sagittis arcu ante ac diam. Nullam et hendrerit enim. Cras id auctor augue. Pellentesque tempus laoreet pulvinar. Mauris vitae erat interdum, egestas enim eu, sagittis elit. Aenean a tempus purus. In congue mattis nisl, non euismod arcu elementum sed. Proin ultrices nulla et sodales cursus.' +
        
        'Nunc mollis ultricies condimentum. Etiam eu ante fringilla, gravida leo et, porta sapien. Pellentesque iaculis interdum leo, sit amet interdum libero scelerisque rhoncus. Vivamus in semper enim. Nam quis convallis nulla. Etiam aliquet, lacus vel mollis venenatis, massa dui porta est, vel luctus augue diam vehicula orci. Proin malesuada et dui in vulputate. Integer at dui ac tellus rhoncus feugiat. Curabitur elementum odio ac leo feugiat molestie. Mauris feugiat turpis nec enim tempor cursus. Etiam aliquet in nulla eu vulputate. Mauris bibendum orci at imperdiet cursus. Suspendisse a rhoncus nisl. Duis sed velit euismod purus rutrum rhoncus. Integer in lacus id nibh malesuada cursus. Integer nulla eros, iaculis quis varius in, mattis id risus.' +
        
        'Duis velit nisi, viverra nec tincidunt sed, semper sit amet orci. Nullam euismod, massa ac faucibus dignissim, mi purus condimentum nunc, vel faucibus odio nibh quis lacus. Vestibulum condimentum elit sed nibh egestas tempor. Nam et varius dolor. Nunc dictum non sem ut mollis. Fusce tristique, nulla non iaculis convallis, erat magna dapibus turpis, at placerat justo felis et tellus. Aliquam erat volutpat. Proin nec ligula vitae leo fringilla fermentum. Aenean vulputate vel odio ut placerat. Nullam eu porttitor purus. Etiam quis nulla tempor, feugiat mi in, porta eros. Suspendisse a ligula eget tortor bibendum aliquet fermentum in nunc. Pellentesque elit arcu, dignissim semper viverra nec, tristique et nibh. Integer et placerat orci. Donec a rhoncus sapien. Donec posuere posuere turpis, a gravida turpis accumsan a.' +
        
        'Etiam venenatis egestas leo, convallis laoreet nisl dictum ut. Mauris malesuada velit quis elit suscipit, vulputate efficitur eros mollis. Fusce pharetra, ipsum a tincidunt fermentum, erat urna placerat felis, sed condimentum lectus nulla id turpis. Etiam ultricies at orci non tincidunt. In ut nisl suscipit, sagittis odio ut, egestas lectus. Vestibulum egestas at urna eu fringilla. Nunc metus dolor, consectetur eu congue vitae, tristique vitae libero. Nam urna massa, facilisis vitae odio eu, ornare congue magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas rutrum urna non ligula lobortis, non dictum ligula tempor. Ut nec diam at urna faucibus gravida. Fusce tristique dignissim facilisis.',
        descrition: 'Pellentesque bibendum faucibus libero, vel varius ex pretium sed. Donec placerat vel lorem ac facilisis. Quisque aliquet, eros at rhoncus sagittis, odio diam tempus enim, ac sagittis arcu ante ac diam. Nullam et hendrerit enim. Cras id auctor augue. Pellentesque tempus laoreet pulvinar. Mauris vitae erat interdum, egestas enim eu, sagittis elit.',
        imageUrl: 'https://pbs.twimg.com/profile_images/1257330608277250050/BKFF0Bax_400x400.jpg'

    },
];
