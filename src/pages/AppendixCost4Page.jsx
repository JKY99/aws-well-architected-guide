import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixCost4Page() {
  return (
    <article className="doc-content">
      <h1>COST 4 — 최적의 요금 모델을 어떻게 활용합니까?</h1>

      <p>
        워크로드 특성에 맞는 요금 모델을 선택하여 온디맨드 가격 대비
        최대 90%까지 비용을 절감합니다.
      </p>

      <h2>요금 모델 비교</h2>
      <ul>
        <li>
          <strong>온디맨드:</strong> 선불 없음, 약정 없음. 예측 불가능한 워크로드에 적합.
        </li>
        <li>
          <strong>Reserved Instances (RI):</strong> 1~3년 약정. 최대 72% 절감. 예측 가능한 워크로드에 적합.
        </li>
        <li>
          <strong>Savings Plans:</strong> 유연한 컴퓨팅 사용량 약정. 최대 66% 절감. RI보다 유연성 높음.
        </li>
        <li>
          <strong>Spot 인스턴스:</strong> 미사용 EC2 용량 활용. 최대 90% 절감. 중단 가능한 워크로드에 적합.
        </li>
      </ul>

      <h2>모범 사례</h2>
      <ul>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp01">COST04-BP01: 사용량 기반 요금제 선택</Link></strong><br />
          <span>Lambda, Fargate 등 사용한 만큼만 요금을 지불하는 서비스를 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp02">COST04-BP02: 예측 가능한 워크로드에 약정 활용</Link></strong><br />
          <span>안정적인 워크로드에 Savings Plans 또는 RI를 적용하여 비용을 절감합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp03">COST04-BP03: Spot 인스턴스로 비용 최소화</Link></strong><br />
          <span>배치 처리, CI/CD 파이프라인 등 중단 허용 워크로드에 Spot 인스턴스를 활용합니다.</span>
        </li>
        <li>
          <strong><Link to="/appendix/cost-optimization/cost4/bp04">COST04-BP04: 요금 모델 약정 분석 및 실행</Link></strong><br />
          <span>AWS Cost Explorer의 Savings Plans 추천 기능을 활용하여 최적의 약정 유형과 크기를 결정합니다.</span>
        </li>
      </ul>

      <PageNav />
    </article>
  );
}
