"use client";

import Link from "next/link";
import "../../app/scss/game.scss";
import FloatingButton from "@/components/FloatingButton";
import { useRouter } from "next/router";

// const ICON_INDICATOR = "icon-indicator"

export default function Game() {
  const router = useRouter();
  const { game, format } = router.query;

  return (
    <div className="page-game">
      <FloatingButton isDarkLightOptionEnabled={false} />
      <header style={{ display: "grid" }}>
        <h1>
          {game === "carroms"
            ? "CARROMS"
            : game === "badminton"
            ? "BADMINTON"
            : ""}
          <br />
        </h1>
        <Link href={`/${game}/mens/fixtures/`}>
          <block className="bg-primary icon-indicator">
            View Men's Fixtures
          </block>
        </Link>
        <br />
        <Link href={`/${game}/womens/fixtures/`}>
          <block className="bg-primary icon-indicator">
            View Women's Fixtures
          </block>
        </Link>
        <br />
        <Link href={`/${game}/mixed/fixtures/`}>
          <block className="bg-primary icon-indicator">
            View Mixed Fixtures
          </block>
        </Link>
        <br />
        <p>© Sports de Mitsogo</p>
      </header>
    </div>
  );
}
