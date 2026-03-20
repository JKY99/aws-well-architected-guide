import { Link } from "react-router-dom";
import "../components/DocContent.css";

export default function AppendixOps9Page() {
  return (
    <article className="doc-content">
      <h1>OPS 9. 운영의 상태를 어떻게 파악합니까?</h1>

      <p>
        운영 메트릭을 정의, 캡처, 분석하여 운영 이벤트에 대한 가시성을 확보하고
        적절한 조치를 취할 수 있도록 합니다.
        운영 목표와 KPI를 측정하고, 상태와 추세를 전달하며, 개선 우선순위를 결정합니다.
      </p>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops9/bp01">OPS09-BP01: 메트릭으로 운영 목표 및 KPI 측정</Link></strong><br />
          <span>서비스 목표와 팀 효율성을 측정하는 메트릭을 수립하여 비즈니스 성과와 운영팀 성과를 측정합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops9/bp02">OPS09-BP02: 운영 가시성 확보를 위한 상태 및 추세 전달</Link></strong><br />
          <span>이해관계자와 사용자 커뮤니티에 운영 영향이 발생할 때 알림을 전달하고, 운영 통계 보고서를 제공합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/operational-excellence/ops9/bp03">OPS09-BP03: 운영 메트릭 검토 및 개선 우선순위 결정</Link></strong><br />
          <span>운영 리더와 직원이 정기적으로 메트릭을 검토하고, 도전 과제와 성공 사례를 공유하며, 교훈을 논의합니다.</span>
        </li>
      </ul>

    </article>
  );
}
