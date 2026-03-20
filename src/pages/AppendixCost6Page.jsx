import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost6Page() {
  return (
    <article className="doc-content">
      <h1>COST 6 — 올바른 리소스 유형, 크기, 수량을 어떻게 선택합니까?</h1>

      <p>
        워크로드의 비용 모델을 개발하고 데이터에 기반하여 리소스 유형, 크기, 수량을 선택합니다.
        메트릭과 자동화를 활용하여 리소스를 동적으로 조정하고 공유 리소스 모델을 고려합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp01">COST06-BP01: 비용 모델링 수행</Link></strong><br />
          <span>워크로드의 비용 모델을 개발하여 다양한 리소스 구성에 따른 비용을 이해합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp02">COST06-BP02: 데이터 기반 리소스 유형, 크기, 수량 선택</Link></strong><br />
          <span>측정된 데이터와 분석에 기반하여 리소스 유형, 크기, 수량을 선택합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp03">COST06-BP03: 메트릭 기반 리소스 유형, 크기, 수량 자동 선택</Link></strong><br />
          <span>메트릭과 자동화를 사용하여 필요에 따라 리소스를 동적으로 조정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost6/bp04">COST06-BP04: 공유 리소스 사용 고려</Link></strong><br />
          <span>공유 리소스 모델을 고려하여 비용을 분산합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
