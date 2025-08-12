import React from "react";
import { Instagram } from "lucide-react";

function AppFottor() {
  return (
    <div className="border-t w-full bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 pt-20 px-3 pb-36 text-sm md:text-base">
        {/* Column 1: Faculty + HOD */}
        <div className="flex flex-col col-span-1 gap-1 mx-auto">
          <h1 className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
            Head of Department
          </h1>
          <p className="text-muted-foreground">Dr. Vivaksha Jariwala</p>

          <h1 className="mt-6 mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600">
            Faculty Coordinators
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">Prof. Hiren Vavaiya</p>
            <p className="text-muted-foreground">Prof. Ankita Patel</p>
            <p className="text-muted-foreground">Prof. Karishma Desai</p>
            <p className="text-muted-foreground">Prof. Nitya Komalan</p>
          </div>
        </div>

        {/* Column 2: Student Heads + Instagram */}
        <div className="col-span-1 mx-auto">
          <h1 className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600">
            Student Heads
          </h1>
          <div className="flex flex-col gap-1 text-muted-foreground">
            <p>Ayush Polara (+91 9924012804)</p>
            <p>Uttam Moradiya (+91 7016258764)</p>
            <p>Shreya Chopra (+91 758831046)</p>
            <p>Mitarsh Savaliya (+91 7567458688)</p>
            <p>Jenish Sonani (+91 7777949735)</p>
            <p>Harsh Maniya (+91 812879012)</p>
            <p>Jensi Ghadiya (+91 7016954635)</p>
          </div>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/converse_2k25"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start mt-8 gap-2 text-muted-foreground hover:underline"
          >
            <Instagram />
            <span>Follow us</span>
          </a>
        </div>

        {/* Footer Copyright */}
        <p className="col-span-2 mt-8 text-center text-muted-foreground/70">
          © Converse 2025. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default AppFottor;
