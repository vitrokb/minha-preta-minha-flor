import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { Navbar } from '../../components/Navbar';
import { VideoPlayer } from '../../components/VideoPlayer';
import './BehindTheScenes.css';

function BehindTheScenes() {
  return (
    <div className="behind-scenes-wrapper">
      <div>
        <Logo />
        <Navbar />
      </div>

      <VideoPlayer title="BASTIDORES DA THAY B, FILHA DE YEMANJA" videoId="5Uxwc7iS5Dg" />
      <VideoPlayer title="BASTIDORES DA THAIS PIO, FILHA DE OXUM" videoId="bbscm1KTj0k" />
      <VideoPlayer title="BASTIDORES DA JADE ZIMBRA, FILHA DE YANSÃ" videoId="8EoWXcuwyXM" />
      <VideoPlayer title="BASTIDORES DA VIVIAN OLIVEIRA, FILHA DE NANÃ" videoId="4S9asO3vzz0" />
      <VideoPlayer title="BASTIDORES DA LETICIA HERCULANO, FILHA DE OBÁ" videoId="6x7ROiZIFZw" />

      <Footer />
    </div>
  );
}

export default BehindTheScenes;
