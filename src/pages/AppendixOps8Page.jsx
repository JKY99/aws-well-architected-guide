import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps8Page() {
  return (
    <article className="doc-content">
      <h1>OPS 8 — 조직에서 워크로드 관찰 가능성을 어떻게 활용합니까?</h1>

      <p>
        관련 메트릭, 로그, 트레이스를 활용한 관찰 가능성(Observability)을 통해 최적의 워크로드 상태를 보장합니다.
        데이터를 분석하여 인사이트를 도출하고, 실행 가능한 알림과 대시보드를 통해 워크로드 상태를
        이해관계자에게 전달합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops8/bp01">OPS08-BP01: 워크로드 메트릭 분석</Link></strong><br />
          <span>워크로드 성능에 대한 정확한 인사이트를 도출하여 비즈니스 목표와 일치하는 데이터 기반 결정을 내립니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops8/bp02">OPS08-BP02: 워크로드 로그 분석</Link></strong><br />
          <span>로그 분석을 통해 애플리케이션 동작 및 운영에 대한 풍부한 인사이트를 도출하고 문제를 사전에 감지합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops8/bp03">OPS08-BP03: 워크로드 트레이스 분석</Link></strong><br />
          <span>애플리케이션의 분산 작업에 대한 명확한 가시성을 확보하여 더 빠른 문제 해결과 향상된 사용자 경험을 실현합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops8/bp04">OPS08-BP04: 실행 가능한 알림 생성</Link></strong><br />
          <span>KPI 결과가 위험에 처할 때 잠재적인 문제를 신속하게 식별하고 완화할 수 있는 적시에 관련성 있는 알림을 받습니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops8/bp05">OPS08-BP05: 대시보드 생성</Link></strong><br />
          <span>시스템 및 비즈니스 상태에 대한 시각적 표현을 사용하여 명확하고 실행 가능한 인사이트를 제공합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
