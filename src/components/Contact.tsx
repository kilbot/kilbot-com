import React from 'react';
import { Mail, MapPin, Github } from 'lucide-react';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Message Sent Successfully!</h2>
          <p className="mb-8">Thank you for your message. I'll get back to you soon.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-emerald-500 mr-2" />
                  <a 
                    href="mailto:paul@kilbot.com"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    paul@kilbot.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-emerald-500 mr-2" />
                  <a 
                    href="https://github.com/kilbot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-500 transition-colors"
                  >
                    github.com/kilbot
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-emerald-500 mr-2" />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: new URLSearchParams(formData as any).toString(),
                })
                  .then(() => setIsSubmitted(true))
                  .catch((error) => alert("Error: " + error));
              }}
              netlify-honeypot="bot-field" 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: "none" }}>
                <input name="bot-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
