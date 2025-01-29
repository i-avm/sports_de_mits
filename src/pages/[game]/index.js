"use client";

import Link from "next/link";
import "../../app/scss/game.scss";
import FloatingButton from "@/components/FloatingButton";

export default function Game() {

  return (
    <div className="page-game">
      <FloatingButton isDarkLightOptionEnabled={false} />
      <header style={{ display: "grid" }}>
        <h1>
          CARROMS
          <br />
        </h1>
        <Link href="/carroms/mens/fixtures/">
          <block className="bg-primary today-indicator">View Men's Fixtures</block>
        </Link>
        <br />
        <Link href="/carroms/womens/fixtures/">
          <block className="bg-primary">
            View Women's Fixtures
          </block>
        </Link>
        <br />
        <Link href="/carroms/mixed/fixtures/">
          <block className="bg-primary">View Mixed Fixtures</block>
        </Link>
        <br />
        <p>© Sports de Mitsogo</p>
      </header>
    </div>
  );
}
