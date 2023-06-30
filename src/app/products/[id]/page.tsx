import { useRouter } from 'next/router';

export default function productos({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>Aquí aparecen los productos</div>
  );
}
