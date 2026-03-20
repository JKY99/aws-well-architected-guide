import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus1Page() {
  return (
    <article className="doc-content">
      <h1>SUS 1 — 리전을 어떻게 선택합니까?</h1>

      <p>
        워크로드를 배포할 리전을 선택할 때 비즈니스 요구사항과 지속 가능성 목표를 모두 고려합니다.
        리전 선택은 성능, 비용, 탄소 발자국 등 워크로드의 핵심 성과 지표에 큰 영향을 미칩니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/sustainability/sus1/bp01">SUS01-BP01: 비즈니스 요구사항과 지속 가능성 목표에 따른 리전 선택</Link></strong><br />
          <span>규정 준수, 기능, 비용, 지연 시간, 탄소 발자국을 균형 있게 고려하여 워크로드에 최적의 리전을 선택합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
