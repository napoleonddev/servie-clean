import { notFound } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import blogData from "@/components/data/blogdata";
import BlogDetailsPage from "./BlogDetailsPage";

export default async function BlogDetail({ params }) {
  const { id } = await params;
  console.log("blogData is:", blogData);

  const post = blogData.find((b) => b.id.toString() === id);

  if (!post) return notFound();

  return (
    <>
      <Header />
      <BlogDetailsPage post={post} />
      <Footer />
    </>
  );
}
