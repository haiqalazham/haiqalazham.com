import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Haiqal Azham
      </h1>
      <p className="mb-4">
        {`Hi, I’m Haiqal Akmal. I’m a technology enthusiast and an avid photographer. I specialize in street and landscape photography.`}
      </p>
      <p className="mb-4">
        {`I’m currently studying Mechanical Engineering at the University of Michigan. Other hobbies include programming, gaming and finding ways to accelerate the adoption of renewable energy.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
