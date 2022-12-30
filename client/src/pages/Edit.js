import EditAnswer from '../components/EditAnswer';
import EditQuestion from '../components/EditQuestion';

export default function Edit({ isKey }) {
  return <>{isKey === 'Question' ? <EditQuestion /> : <EditAnswer />}</>;
}
